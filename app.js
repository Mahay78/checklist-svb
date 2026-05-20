/**
 * app.js - Lógica de control y negocios para el Checklist SVB
 * Desarrollado en Vanilla JavaScript para un rendimiento y funcionamiento 100% offline (PWA)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- VARIABLES DE ESTADO ---
  let currentState = {
    metadata: {
      dotacion: '',
      matricula: '',
      fecha: '',
      unidad: '',
      bastidor: '',
      marca: '',
      fecha_matriculacion: '',
      modelo: ''
    },
    answers: {}, // Guardará { itemId: { status: 'SI'|'NO'|'', real_qty: '', expiry: '', obs: '' } }
    activeSectionIndex: 0,
    pastInspections: [] // Historial de inspecciones archivadas
  };

  // Filtro activo de visualización en la tabla ('all', 'pending', 'nocumply', 'expiry', 'obs')
  let activeFilter = 'all';
  // Búsqueda global activa (si es no vacía, anula la sección activa en pantalla)
  let globalSearchQuery = '';
  // Timestamp del último cambio para autoguardado
  let lastChangeTime = Date.now();
  // Flag para beforeunload
  let hasUnsavedChanges = false;

  // --- REGISTRO DEL SERVICE WORKER ---
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('Service Worker registrado con éxito:', reg.scope))
        .catch(err => console.error('Error al registrar el Service Worker:', err));
    });
  }

  // --- DETECCIÓN DE CONECTIVIDAD (ESTADO OFFLINE) ---
  const offlineBadge = document.getElementById('offlineBadge');
  function updateOnlineStatus() {
    if (navigator.onLine) {
      offlineBadge.classList.remove('offline');
      offlineBadge.querySelector('.badge-text').textContent = 'Conectado';
    } else {
      offlineBadge.classList.add('offline');
      offlineBadge.querySelector('.badge-text').textContent = 'Modo Offline';
    }
  }
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus(); // Ejecución inicial

  // --- ELEMENTOS DOM PRINCIPALES ---
  const sidebarSearch = document.getElementById('sidebarSearch');
  const sidebarNav = document.getElementById('sidebarNav');
  const sidebarProgressPct = document.getElementById('sidebarProgressPct');
  const sidebarProgressBarFill = document.getElementById('sidebarProgressBarFill');
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
  const appSidebar = document.getElementById('appSidebar');

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeToggleBtnMobile = document.getElementById('themeToggleBtnMobile');

  const btnStats = document.getElementById('btnStats');
  const statsModal = document.getElementById('statsModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalOkBtn = document.getElementById('modalOkBtn');

  // Inputs de Metadatos
  const metaDotacion = document.getElementById('metaDotacion');
  const metaMatricula = document.getElementById('metaMatricula');
  const metaFecha = document.getElementById('metaFecha');
  const metaUnidad = document.getElementById('metaUnidad');
  const metaBastidor = document.getElementById('metaBastidor');
  const metaMarca = document.getElementById('metaMarca');
  const metaFechaMatriculacion = document.getElementById('metaFechaMatriculacion');
  const metaModelo = document.getElementById('metaModelo');
  const toggleMetadataBtn = document.getElementById('toggleMetadataBtn');
  const metadataGrid = document.getElementById('metadataGrid');

  // Estadísticas Cabecera
  const statTotalItems = document.getElementById('statTotalItems');
  const statComplies = document.getElementById('statComplies');
  const statNonComplies = document.getElementById('statNonComplies');
  const statPending = document.getElementById('statPending');

  // Filtros e Ítems
  const globalSearch = document.getElementById('globalSearch');
  const filterButtons = document.querySelectorAll('.filter-group .filter-btn');
  const activeSectionTitle = document.getElementById('activeSectionTitle');
  const activeSectionProgress = document.getElementById('activeSectionProgress');
  const checklistTableBody = document.getElementById('checklistTableBody');

  // Navegación Secciones
  const btnPrevSection = document.getElementById('btnPrevSection');
  const btnNextSection = document.getElementById('btnNextSection');

  // Acciones de Documento
  const btnExportPDF = document.getElementById('btnExportPDF');
  const btnExportPedido = document.getElementById('btnExportPedido');
  const btnExportExcel = document.getElementById('btnExportExcel');
  const btnSaveJSON = document.getElementById('btnSaveJSON');
  const btnLoadJSONTrigger = document.getElementById('btnLoadJSONTrigger');
  const jsonFileInput = document.getElementById('jsonFileInput');
  const btnResetAll = document.getElementById('btnResetAll');
  const pastInspectionsList = document.getElementById('pastInspectionsList');
  const btnMarkSectionNo = document.getElementById('btnMarkSectionNo');
  const autosaveTimestamp = document.getElementById('autosaveTimestamp');

  // --- CONTROL DEL MENÚ MÓVIL LATERAL ---
  menuToggleBtn.addEventListener('click', () => appSidebar.classList.add('open'));
  sidebarCloseBtn.addEventListener('click', () => appSidebar.classList.remove('open'));
  // Cerrar sidebar al hacer clic en un enlace de sección en pantallas móviles
  function closeSidebarOnMobile() {
    if (window.innerWidth <= 1024) {
      appSidebar.classList.remove('open');
    }
  }

  // --- CONTROL DE TEMA (CLARO / OSCURO) ---
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeToggleIcons(currentTheme);

  function toggleTheme() {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleIcons(newTheme);
  }

  function updateThemeToggleIcons(theme) {
    const sunIcons = document.querySelectorAll('.sun-icon');
    const moonIcons = document.querySelectorAll('.moon-icon');
    if (theme === 'light') {
      sunIcons.forEach(icon => icon.style.display = 'none');
      moonIcons.forEach(icon => icon.style.display = 'block');
    } else {
      sunIcons.forEach(icon => icon.style.display = 'block');
      moonIcons.forEach(icon => icon.style.display = 'none');
    }
  }

  themeToggleBtn.addEventListener('click', toggleTheme);
  themeToggleBtnMobile.addEventListener('click', toggleTheme);

  // --- COLAPSAR/EXPANDIR FORMULARIO DE CONTROL ---
  toggleMetadataBtn.addEventListener('click', () => {
    const isExpanded = toggleMetadataBtn.getAttribute('aria-expanded') === 'true';
    toggleMetadataBtn.setAttribute('aria-expanded', !isExpanded);
    toggleMetadataBtn.classList.toggle('collapsed');
    metadataGrid.classList.toggle('collapsed');
  });

  // --- PERSISTENCIA Y INICIALIZACIÓN DE ESTADO ---
  function saveStateToLocalStorage() {
    currentState.lastSaved = Date.now();
    localStorage.setItem('svb_checklist_state', JSON.stringify(currentState));
    hasUnsavedChanges = false;
    updateAutosaveTimestamp();
  }

  function updateAutosaveTimestamp() {
    const ts = currentState.lastSaved || Date.now();
    const diff = Math.floor((Date.now() - ts) / 1000);
    let text;
    if (diff < 5) text = 'Guardado ahora';
    else if (diff < 60) text = `Guardado hace ${diff}s`;
    else if (diff < 3600) text = `Guardado hace ${Math.floor(diff / 60)}min`;
    else text = `Guardado hace ${Math.floor(diff / 3600)}h`;
    autosaveTimestamp.textContent = `\u{1F4BE} ${text}`;
  }

  function loadStateFromLocalStorage() {
    const saved = localStorage.getItem('svb_checklist_state');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Mezclar con el estado inicial para evitar problemas con actualizaciones de estructura
        currentState = { ...currentState, ...parsed };
        // Cargar metadatos en pantalla
        metaDotacion.value = currentState.metadata.dotacion || '';
        metaMatricula.value = currentState.metadata.matricula || '';
        metaFecha.value = currentState.metadata.fecha || '';
        metaUnidad.value = currentState.metadata.unidad || '';
        metaBastidor.value = currentState.metadata.bastidor || '';
        metaMarca.value = currentState.metadata.marca || '';
        metaFechaMatriculacion.value = currentState.metadata.fecha_matriculacion || '';
        metaModelo.value = currentState.metadata.modelo || '';
      } catch (e) {
        console.error('Error al parsear el estado local de localStorage:', e);
      }
    } else {
      // Iniciar metadatos con fecha de hoy por defecto
      const hoy = new Date().toISOString().split('T')[0];
      currentState.metadata.fecha = hoy;
      metaFecha.value = hoy;
      saveStateToLocalStorage();
    }

    // Cargar historial
    const savedPast = localStorage.getItem('svb_past_inspections');
    if (savedPast) {
      try {
        currentState.pastInspections = JSON.parse(savedPast);
      } catch (e) {
        console.error('Error al cargar historial de localStorage:', e);
      }
    }
  }

  // Enlazar inputs de metadatos para autoguardado
  const bindMetadataInput = (inputEl, key) => {
    inputEl.addEventListener('input', () => {
      currentState.metadata[key] = inputEl.value;
      saveStateToLocalStorage();
    });
  };

  bindMetadataInput(metaDotacion, 'dotacion');
  bindMetadataInput(metaMatricula, 'matricula');
  bindMetadataInput(metaFecha, 'fecha');
  bindMetadataInput(metaUnidad, 'unidad');
  bindMetadataInput(metaBastidor, 'bastidor');
  bindMetadataInput(metaMarca, 'marca');
  bindMetadataInput(metaFechaMatriculacion, 'fecha_matriculacion');
  bindMetadataInput(metaModelo, 'modelo');

  // --- OPERACIONES MATEMÁTICAS Y CÁLCULO DE PROGRESO ---
  function getInventoryStats() {
    let total = 0;
    let complies = 0;
    let nonComplies = 0;
    let pending = 0;
    let expiryAlerts = 0;
    let hasObs = 0;

    const today = new Date();
    const limitDate = new Date();
    limitDate.setDate(today.getDate() + 30); // 30 días vista para alertas

    CHECKLIST_DATA.sections.forEach(section => {
      section.items.forEach(item => {
        total++;
        const ans = currentState.answers[item.id];
        if (!ans || ans.status === '') {
          pending++;
        } else if (ans.status === 'SI') {
          complies++;
        } else if (ans.status === 'NO') {
          nonComplies++;
        }

        // Evaluar caducidades activas
        if (ans && ans.expiry) {
          const expDate = new Date(ans.expiry);
          if (expDate <= today || expDate <= limitDate) {
            expiryAlerts++;
          }
        }

        // Evaluar observaciones
        if (ans && ans.obs && ans.obs.trim() !== '') {
          hasObs++;
        }
      });
    });

    return { total, complies, nonComplies, pending, expiryAlerts, hasObs };
  }

  function getSectionProgress(section) {
    let total = 0;
    let answered = 0;
    section.items.forEach(item => {
      total++;
      const ans = currentState.answers[item.id];
      if (ans && ans.status !== '') {
        answered++;
      }
    });
    return { total, answered };
  }

  function updateDashboardStats() {
    const stats = getInventoryStats();
    // Contadores de cabecera
    statTotalItems.textContent = stats.total;
    statComplies.textContent = stats.complies;
    statNonComplies.textContent = stats.nonComplies;
    statPending.textContent = stats.pending;

    // Calcular porcentaje de progreso
    const pct = stats.total > 0 ? ((stats.total - stats.pending) / stats.total * 100).toFixed(0) : 0;
    sidebarProgressPct.textContent = `${pct}%`;
    sidebarProgressBarFill.style.width = `${pct}%`;

    // Actualizar anillo estadístico del modal
    const modalProgressRing = document.getElementById('modalProgressRing');
    const modalProgressPctText = document.getElementById('modalProgressPctText');
    const modalStatOk = document.getElementById('modalStatOk');
    const modalStatNok = document.getElementById('modalStatNok');
    const modalStatPending = document.getElementById('modalStatPending');
    const modalStatNearExpiry = document.getElementById('modalStatNearExpiry');

    if (modalProgressRing) {
      modalProgressRing.setAttribute('stroke-dasharray', `${pct}, 100`);
      modalProgressPctText.textContent = `${pct}%`;
      modalStatOk.textContent = stats.complies;
      modalStatNok.textContent = stats.nonComplies;
      modalStatPending.textContent = stats.pending;
      modalStatNearExpiry.textContent = stats.expiryAlerts;
    }
  }

  // --- RENDERIZADO DEL MENÚ LATERAL DE CATEGORÍAS ---
  function renderSidebarNav() {
    sidebarNav.innerHTML = '';
    const query = sidebarSearch.value.toLowerCase().trim();

    CHECKLIST_DATA.sections.forEach((section, index) => {
      if (query !== '' && !section.name.toLowerCase().includes(query)) {
        return; // Ocultar si no coincide con buscador
      }

      const { total, answered } = getSectionProgress(section);
      const isCompleted = total === answered && total > 0;
      const navItem = document.createElement('button');
      navItem.className = `nav-section-item ${index === currentState.activeSectionIndex && globalSearchQuery === '' ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
      navItem.setAttribute('aria-label', `Categoría: ${section.name}. Progreso: ${answered} de ${total}`);

      const nameSpan = document.createElement('span');
      nameSpan.className = 'section-nav-name';
      nameSpan.textContent = section.name;

      const progSpan = document.createElement('span');
      progSpan.className = 'section-nav-progress';
      progSpan.textContent = `${answered}/${total}`;

      navItem.appendChild(nameSpan);
      navItem.appendChild(progSpan);

      navItem.addEventListener('click', () => {
        // Desactivar buscador global si estaba activo
        globalSearchQuery = '';
        globalSearch.value = '';
        currentState.activeSectionIndex = index;
        saveStateToLocalStorage();
        // Actualizar visualización
        renderSidebarNav();
        renderActiveSection();
        closeSidebarOnMobile();

        // Scroll suave al inicio de la tabla
        document.querySelector('.active-category-banner').scrollIntoView({ behavior: 'smooth' });
      });

      sidebarNav.appendChild(navItem);
    });

    if (sidebarNav.children.length === 0) {
      const emptyMsg = document.createElement('p');
      emptyMsg.className = 'empty-list-text';
      emptyMsg.textContent = 'No hay categorías coincidentes.';
      sidebarNav.appendChild(emptyMsg);
    }
  }

  // Escuchar entrada en buscador de categorías lateral
  sidebarSearch.addEventListener('input', renderSidebarNav);

  // --- AUXILIAR: DETERMINAR CLASE DE FECHA DE CADUCIDAD ---
  function getExpiryClass(dateStr) {
    if (!dateStr) return '';
    const today = new Date();
    const expiry = new Date(dateStr);
    // Poner a cero horas para comparar sólo días
    today.setHours(0, 0, 0, 0);
    expiry.setHours(0, 0, 0, 0);

    if (expiry <= today) {
      return 'expired'; // Caducado
    }

    const limit = new Date(today);
    limit.setDate(today.getDate() + 30);
    if (expiry <= limit) {
      return 'expiring'; // Próximo a caducar (30 días)
    }

    return '';
  }

  // --- RENDERIZADO DE LA TABLA DE CHECKLIST INTERACTIVA ---
  function renderActiveSection() {
    checklistTableBody.innerHTML = '';
    let itemsToRender = [];
    let isGlobalSearchActive = globalSearchQuery !== '';

    if (isGlobalSearchActive) {
      // Buscar en todo el inventario
      activeSectionTitle.textContent = `Resultados de Búsqueda: "${globalSearchQuery}"`;
      CHECKLIST_DATA.sections.forEach((section, sIdx) => {
        section.items.forEach(item => {
          if (item.description.toLowerCase().includes(globalSearchQuery.toLowerCase())) {
            itemsToRender.push({
              ...item,
              sectionName: section.name,
              sectionIndex: sIdx
            });
          }
        });
      });
      activeSectionProgress.textContent = `${itemsToRender.length} coincidencias`;
    } else {
      // Mostrar la sección activa actual
      const section = CHECKLIST_DATA.sections[currentState.activeSectionIndex];
      activeSectionTitle.textContent = section.name;
      const { total, answered } = getSectionProgress(section);
      activeSectionProgress.textContent = `${answered}/${total} ítems`;

      section.items.forEach(item => {
        itemsToRender.push({
          ...item,
          sectionName: section.name,
          sectionIndex: currentState.activeSectionIndex
        });
      });
    }

    // Filtrar los ítems según el filtro rápido activo
    if (activeFilter !== 'all') {
      const today = new Date();
      const limitDate = new Date();
      limitDate.setDate(today.getDate() + 30);

      itemsToRender = itemsToRender.filter(item => {
        const ans = currentState.answers[item.id] || { status: '', real_qty: '', expiry: '', obs: '' };
        switch (activeFilter) {
          case 'pending':
            return ans.status === '';
          case 'nocumply':
            return ans.status === 'NO';
          case 'expiry':
            if (!ans.expiry) return false;
            const expDate = new Date(ans.expiry);
            return expDate <= today || expDate <= limitDate;
          case 'obs':
            return ans.obs && ans.obs.trim() !== '';
          default:
            return true;
        }
      });
    }

    if (itemsToRender.length === 0) {
      const emptyRow = document.createElement('tr');
      emptyRow.innerHTML = `
        <td colspan="6" class="empty-list-text" style="text-align: center; padding: 40px 16px;">
          No hay elementos que coincidan con los criterios o filtros seleccionados.
        </td>
      `;
      checklistTableBody.appendChild(emptyRow);
      return;
    }

    // Inyectar filas en el tbody
    itemsToRender.forEach(item => {
      const ans = currentState.answers[item.id] || { status: '', real_qty: '', expiry: '', obs: '' };
      const row = document.createElement('tr');
      row.className = `table-row ${ans.status === 'SI' ? 'row-ok' : ''} ${ans.status === 'NO' ? 'row-nok' : ''}`;
      row.id = `row_${item.id}`;

      // 1. Columna Descripción
      const cellDesc = document.createElement('td');
      cellDesc.className = 'col-desc';
      const descText = document.createElement('span');
      descText.className = 'item-desc-text';
      descText.textContent = item.description;
      const refText = document.createElement('span');
      refText.className = 'excel-ref';
      refText.textContent = `${isGlobalSearchActive ? item.sectionName + ' | ' : ''}Fila Excel: ${item.excel_row}`;
      cellDesc.appendChild(descText);
      cellDesc.appendChild(refText);

      // 2. Columna Cantidad Requerida
      const cellReq = document.createElement('td');
      cellReq.className = 'col-qty-req';
      cellReq.style.textAlign = 'center';
      const badgeReq = document.createElement('span');
      badgeReq.className = 'badge-qty';
      badgeReq.textContent = item.required_qty;
      cellReq.appendChild(badgeReq);

      // 3. Columna ¿Cumple? Selector SI/NO Premium
      const cellCumple = document.createElement('td');
      cellCumple.className = 'col-cumple';
      const selectorWrapper = document.createElement('div');
      selectorWrapper.className = 'compliance-selector';
      const btnSi = document.createElement('button');
      btnSi.className = `comp-btn comp-btn-si ${ans.status === 'SI' ? 'active' : ''}`;
      btnSi.textContent = 'SÍ';
      btnSi.setAttribute('aria-label', `Marcar ${item.description} como Sí Cumple`);
      const btnNo = document.createElement('button');
      btnNo.className = `comp-btn comp-btn-no ${ans.status === 'NO' ? 'active' : ''}`;
      btnNo.textContent = 'NO';
      btnNo.setAttribute('aria-label', `Marcar ${item.description} como No Cumple`);
      selectorWrapper.appendChild(btnSi);
      selectorWrapper.appendChild(btnNo);
      cellCumple.appendChild(selectorWrapper);

      // 4. Columna Cantidad Real
      const cellReal = document.createElement('td');
      cellReal.className = 'col-qty-real';
      const qtyGroup = document.createElement('div');
      qtyGroup.className = 'qty-input-group';
      const qtyInput = document.createElement('input');
      qtyInput.type = 'text';
      qtyInput.className = 'qty-input';
      qtyInput.value = ans.real_qty;
      qtyInput.placeholder = '-';
      qtyInput.setAttribute('aria-label', `Cantidad real para ${item.description}`);
      const copyBtn = document.createElement('button');
      copyBtn.className = 'qty-copy-btn';
      copyBtn.title = 'Copiar cantidad requerida';
      copyBtn.innerHTML = `
        <svg viewBox="0 0 24 24" class="copy-svg" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M3 12c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M3 12l-3 3m3-3l3 3" />
        </svg>
      `;
      copyBtn.setAttribute('aria-label', `Copiar requerido para ${item.description}`);
      qtyGroup.appendChild(qtyInput);
      qtyGroup.appendChild(copyBtn);
      cellReal.appendChild(qtyGroup);

      // 5. Columna Caducidad
      const cellCaducidad = document.createElement('td');
      cellCaducidad.className = 'col-caducidad';
      const expiryWrapper = document.createElement('div');
      expiryWrapper.className = 'expiry-input-wrapper';
      const expiryInput = document.createElement('input');
      expiryInput.type = 'date';
      expiryInput.className = `expiry-input ${getExpiryClass(ans.expiry)}`;
      expiryInput.value = ans.expiry;
      expiryInput.setAttribute('aria-label', `Fecha de caducidad para ${item.description}`);
      expiryWrapper.appendChild(expiryInput);
      cellCaducidad.appendChild(expiryWrapper);

      // 6. Columna Observaciones / Incidencias
      const cellObs = document.createElement('td');
      cellObs.className = 'col-obs';
      const obsInput = document.createElement('input');
      obsInput.type = 'text';
      obsInput.className = 'obs-input';
      obsInput.value = ans.obs;
      obsInput.placeholder = 'Detalles de la anomalía...';
      obsInput.setAttribute('aria-label', `Observaciones para ${item.description}`);
      cellObs.appendChild(obsInput);

      // Agregar celdas a la fila
      row.appendChild(cellDesc);
      row.appendChild(cellReq);
      row.appendChild(cellCumple);
      row.appendChild(cellReal);
      row.appendChild(cellCaducidad);
      row.appendChild(cellObs);

      checklistTableBody.appendChild(row);

      // --- LOGICA DE CAMBIOS EN CELDAS ---

      const updateItemState = (updates) => {
        if (!currentState.answers[item.id]) {
          currentState.answers[item.id] = { status: '', real_qty: '', expiry: '', obs: '' };
        }
        currentState.answers[item.id] = { ...currentState.answers[item.id], ...updates };
        saveStateToLocalStorage();
        updateDashboardStats();
      };

      // Pulsación en botón SÍ
      btnSi.addEventListener('click', () => {
        const isCurrentlyActive = btnSi.classList.contains('active');
        const newStatus = isCurrentlyActive ? '' : 'SI';

        btnSi.classList.toggle('active', !isCurrentlyActive);
        btnNo.classList.remove('active');
        row.className = `table-row ${newStatus === 'SI' ? 'row-ok' : ''}`;

        // Al pulsar SÍ, autocompletar cantidad real con la requerida si está vacía
        let newRealQty = qtyInput.value;
        if (newStatus === 'SI' && (!qtyInput.value || qtyInput.value.trim() === '')) {
          newRealQty = item.required_qty === 'x' ? '1' : item.required_qty;
          qtyInput.value = newRealQty;
        }

        updateItemState({ status: newStatus, real_qty: newRealQty });
        renderSidebarNav();
      });

      // Pulsación en botón NO
      btnNo.addEventListener('click', () => {
        const isCurrentlyActive = btnNo.classList.contains('active');
        const newStatus = isCurrentlyActive ? '' : 'NO';

        btnNo.classList.toggle('active', !isCurrentlyActive);
        btnSi.classList.remove('active');
        row.className = `table-row ${newStatus === 'NO' ? 'row-nok' : ''}`;

        updateItemState({ status: newStatus });
        renderSidebarNav();
      });

      // Cambio en cantidad real
      qtyInput.addEventListener('input', () => {
        updateItemState({ real_qty: qtyInput.value });
      });

      // Botón rápido de copiar cantidad
      copyBtn.addEventListener('click', () => {
        const valToCopy = item.required_qty === 'x' ? '1' : item.required_qty;
        qtyInput.value = valToCopy;
        updateItemState({ real_qty: valToCopy });
      });

      // Cambio en fecha de caducidad
      expiryInput.addEventListener('change', () => {
        // Remover clases previas
        expiryInput.classList.remove('expired', 'expiring');
        const expClass = getExpiryClass(expiryInput.value);
        if (expClass) {
          expiryInput.classList.add(expClass);
        }
        updateItemState({ expiry: expiryInput.value });
      });

      // Cambio en observaciones
      obsInput.addEventListener('input', () => {
        updateItemState({ obs: obsInput.value });
      });
    });
  }

  // --- BOTONES DE PAGINACIÓN / NAVEGACIÓN ENTRE SECCIONES ---
  btnPrevSection.addEventListener('click', () => {
    // Si la búsqueda global está activa, la desactivamos
    globalSearchQuery = '';
    globalSearch.value = '';

    const count = CHECKLIST_DATA.sections.length;
    currentState.activeSectionIndex = (currentState.activeSectionIndex - 1 + count) % count;
    saveStateToLocalStorage();
    renderSidebarNav();
    renderActiveSection();
    document.querySelector('.active-category-banner').scrollIntoView({ behavior: 'smooth' });
  });

  btnNextSection.addEventListener('click', () => {
    globalSearchQuery = '';
    globalSearch.value = '';

    const count = CHECKLIST_DATA.sections.length;
    currentState.activeSectionIndex = (currentState.activeSectionIndex + 1) % count;
    saveStateToLocalStorage();
    renderSidebarNav();
    renderActiveSection();
    document.querySelector('.active-category-banner').scrollIntoView({ behavior: 'smooth' });
  });

  // --- BUSCADOR GLOBAL DE ÍTEMS ---
  globalSearch.addEventListener('input', () => {
    globalSearchQuery = globalSearch.value.trim().toLowerCase();
    // Refrescar vistas
    renderActiveSection();
    renderSidebarNav(); // Deseleccionará la sección en el menú lateral si hay búsqueda
  });

  // --- FILTROS RÁPIDOS (DE LA BARRA DE HERRAMIENTAS) ---
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Cambiar botón activo
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeFilter = btn.dataset.filter;
      renderActiveSection();
    });
  });

  // --- MARCAR TODA LA SECCIÓN COMO NO ---
  btnMarkSectionNo.addEventListener('click', () => {
    if (!confirm('¿Marcar TODOS los ítems de esta sección como NO CUMPLE?')) return;

    const section = CHECKLIST_DATA.sections[currentState.activeSectionIndex];
    section.items.forEach(item => {
      if (!currentState.answers[item.id]) {
        currentState.answers[item.id] = { status: '', real_qty: '', expiry: '', obs: '' };
      }
      currentState.answers[item.id].status = 'NO';
    });
    saveStateToLocalStorage();
    updateDashboardStats();
    renderSidebarNav();
    renderActiveSection();
  });

  // --- ATAJOS DE TECLADO: FLECHAS ← → PARA NAVEGAR SECCIONES ---
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
    if (globalSearchQuery !== '') return;

    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const count = CHECKLIST_DATA.sections.length;
      if (e.key === 'ArrowLeft') {
        currentState.activeSectionIndex = (currentState.activeSectionIndex - 1 + count) % count;
      } else {
        currentState.activeSectionIndex = (currentState.activeSectionIndex + 1) % count;
      }
      saveStateToLocalStorage();
      renderSidebarNav();
      renderActiveSection();
      document.querySelector('.active-category-banner').scrollIntoView({ behavior: 'smooth' });
    }
  });

  // --- CONFIRMACIÓN BEFOREUNLOAD ---
  window.addEventListener('beforeunload', (e) => {
    const stats = getInventoryStats();
    if (stats.pending < stats.total) {
      e.preventDefault();
      e.returnValue = '';
    }
  });

  // --- HISTORIAL DE INSPECCIONES EN ESTE DISPOSITIVO ---
  function renderPastInspectionsList() {
    pastInspectionsList.innerHTML = '';
    if (currentState.pastInspections.length === 0) {
      pastInspectionsList.innerHTML = '<p class="empty-list-text">No hay inspecciones previas guardadas en este navegador.</p>';
      return;
    }

    // Ordenar de más reciente a más antigua
    const sorted = [...currentState.pastInspections].sort((a, b) => b.timestamp - a.timestamp);

    sorted.forEach(ins => {
      const card = document.createElement('div');
      card.className = 'past-inspection-card glass-panel';
      card.style.padding = '14px 18px';
      card.style.marginBottom = '12px';
      card.style.display = 'flex';
      card.style.flexWrap = 'wrap';
      card.style.justifyContent = 'space-between';
      card.style.alignItems = 'center';
      card.style.gap = '14px';

      const details = document.createElement('div');
      details.className = 'past-inspection-details';
      const title = document.createElement('h5');
      title.style.margin = '0 0 4px 0';
      title.style.fontSize = '0.95rem';
      title.style.fontWeight = '700';
      title.textContent = `Fecha: ${ins.date} | Matrícula: ${ins.matricula}`;
      const metaText = document.createElement('span');
      metaText.style.fontSize = '0.8rem';
      metaText.style.color = 'var(--text-muted)';
      metaText.textContent = `Dotación: ${ins.dotacion || 'N/D'} | Unidad: ${ins.unidad || 'N/D'}`;
      const statsBadge = document.createElement('div');
      statsBadge.style.marginTop = '6px';
      statsBadge.style.fontSize = '0.78rem';
      statsBadge.style.fontWeight = '600';
      const compl = ins.stats.complies;
      const ncompl = ins.stats.nonComplies;
      const pend = ins.stats.pending;
      const total = ins.stats.total;
      const pct = total > 0 ? ((total - pend) / total * 100).toFixed(0) : 0;

      statsBadge.innerHTML = `
        <span style="color:var(--success)">SÍ: ${compl}</span> | 
        <span style="color:var(--danger)">NO: ${ncompl}</span> | 
        <span style="color:var(--warning)">Pend: ${pend}</span> | 
        <span style="color:var(--primary); font-weight:700;">Progreso: ${pct}%</span>
      `;

      details.appendChild(title);
      details.appendChild(metaText);
      details.appendChild(statsBadge);

      const actions = document.createElement('div');
      actions.className = 'past-inspection-actions';
      actions.style.display = 'flex';
      actions.style.gap = '10px';

      const btnPrint = document.createElement('button');
      btnPrint.className = 'action-btn primary-btn';
      btnPrint.style.padding = '6px 12px';
      btnPrint.style.fontSize = '0.8rem';
      btnPrint.textContent = 'Imprimir Acta';
      btnPrint.addEventListener('click', () => {
        triggerArchivedPrintReport(ins);
      });

      const btnDelete = document.createElement('button');
      btnDelete.className = 'action-btn danger-btn';
      btnDelete.style.padding = '6px 12px';
      btnDelete.style.fontSize = '0.8rem';
      btnDelete.textContent = 'Eliminar';
      btnDelete.addEventListener('click', () => {
        if (confirm(`¿Estás seguro de que deseas eliminar la inspección de la matrícula "${ins.matricula}" del historial local?`)) {
          currentState.pastInspections = currentState.pastInspections.filter(item => item.id !== ins.id);
          localStorage.setItem('svb_past_inspections', JSON.stringify(currentState.pastInspections));
          renderPastInspectionsList();
        }
      });

      actions.appendChild(btnPrint);
      actions.appendChild(btnDelete);

      card.appendChild(details);
      card.appendChild(actions);

      pastInspectionsList.appendChild(card);
    });
  }

  // --- DIALOGO DE CONTROL DE ESTADÍSTICAS (MODAL) ---
  btnStats.addEventListener('click', () => {
    // Rellenar registro de discrepancias / incidencias en el modal
    const modalIssuesList = document.getElementById('modalIssuesList');
    modalIssuesList.innerHTML = '';

    let issuesCount = 0;

    CHECKLIST_DATA.sections.forEach(section => {
      section.items.forEach(item => {
        const ans = currentState.answers[item.id];
        // Incluimos en incidencias si no cumple o si tiene observaciones
        const hasNo = ans && ans.status === 'NO';
        const hasTextObs = ans && ans.obs && ans.obs.trim() !== '';

        if (hasNo || hasTextObs) {
          issuesCount++;
          const card = document.createElement('div');
          card.className = 'issue-item-card';

          const descWrapper = document.createElement('div');
          descWrapper.className = 'issue-item-details';
          const strong = document.createElement('strong');
          strong.textContent = item.description;
          const detailsSpan = document.createElement('span');
          detailsSpan.textContent = `Categoría: ${section.name} | Fila Excel: ${item.excel_row}`;
          const obsParagraph = document.createElement('p');
          obsParagraph.style.margin = '4px 0 0 0';
          obsParagraph.style.fontSize = '0.82rem';
          obsParagraph.style.color = 'var(--text-main)';
          if (hasTextObs) {
            obsParagraph.innerHTML = `<strong>Observación:</strong> ${ans.obs}`;
          } else {
            obsParagraph.innerHTML = `<span style="color:var(--danger)">Marcado como NO CUMPLE sin observaciones.</span>`;
          }

          descWrapper.appendChild(strong);
          descWrapper.appendChild(detailsSpan);
          descWrapper.appendChild(obsParagraph);

          const badge = document.createElement('span');
          badge.className = 'issue-badge-tag';
          badge.textContent = ans.status === 'NO' ? 'NO CUMPLE' : 'OBS';
          if (ans.status !== 'NO') {
            badge.style.backgroundColor = 'var(--primary-glow)';
            badge.style.color = 'var(--primary)';
          }

          card.appendChild(descWrapper);
          card.appendChild(badge);
          modalIssuesList.appendChild(card);
        }
      });
    });

    if (issuesCount === 0) {
      modalIssuesList.innerHTML = `
        <p class="no-issues-text">
          ¡Enhorabuena! No hay discrepancias, incidencias o anomalías reportadas en la ambulancia.
        </p>
      `;
    }

    updateDashboardStats();
    statsModal.classList.add('open');
  });

  const closeModal = () => statsModal.classList.remove('open');
  modalCloseBtn.addEventListener('click', closeModal);
  modalOkBtn.addEventListener('click', closeModal);
  // Cerrar modal al hacer clic en el fondo oscuro
  statsModal.addEventListener('click', (e) => {
    if (e.target === statsModal) closeModal();
  });

  // --- EXPORTAR HOJA EXCEL EN FORMATO CSV CON BOM ---
  btnExportExcel.addEventListener('click', () => {
    // 1. Cabecera del archivo CSV
    let csvContent = '\uFEFF'; // BOM UTF-8 para que Excel lo abra con las eñes y tildes perfectas
    csvContent += 'Sección;Fila Excel;Elemento de Inspección;Cantidad Requerida;¿Cumple (SI/NO)?;Cantidad Real;Caducidad;Observaciones e Incidencias\n';

    // 2. Insertar filas de datos
    CHECKLIST_DATA.sections.forEach(section => {
      section.items.forEach(item => {
        const ans = currentState.answers[item.id] || { status: '', real_qty: '', expiry: '', obs: '' };
        // Saneamiento de textos para evitar romper el formato CSV
        const escapeCsv = (str) => {
          if (!str) return '';
          return str.toString().replace(/;/g, ',').replace(/\n/g, ' ').replace(/"/g, '""');
        };

        const secName = escapeCsv(section.name);
        const itemDesc = escapeCsv(item.description);
        const reqQty = escapeCsv(item.required_qty);
        const status = ans.status || 'PENDIENTE';
        const realQty = escapeCsv(ans.real_qty);
        const expiry = ans.expiry || '';
        const obs = escapeCsv(ans.obs);

        csvContent += `"${secName}";${item.excel_row};"${itemDesc}";"${reqQty}";"${status}";"${realQty}";"${expiry}";"${obs}"\n`;
      });
    });

    // 3. Crear Blob e iniciar la descarga
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const matricula = currentState.metadata.matricula || 'SinMatricula';
    const fechaStr = currentState.metadata.fecha || new Date().toISOString().split('T')[0];
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `Checklist_SVB_${matricula}_${fechaStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // --- GUARDAR BACKUP COMPLETO EN JSON ---
  btnSaveJSON.addEventListener('click', () => {
    const dataStr = JSON.stringify(currentState, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const link = document.createElement('a');
    const matricula = currentState.metadata.matricula || 'SinMatricula';
    const fechaStr = currentState.metadata.fecha || new Date().toISOString().split('T')[0];

    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `Backup_Checklist_SVB_${matricula}_${fechaStr}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // --- RESTAURAR COPIA DE SEGURIDAD DESDE ARCHIVO JSON ---
  btnLoadJSONTrigger.addEventListener('click', () => {
    jsonFileInput.click();
  });

  jsonFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        // Validación mínima
        if (parsed && typeof parsed === 'object' && parsed.answers && parsed.metadata) {
          if (confirm('Se ha detectado una copia de seguridad válida. ¿Deseas restaurarla y sobrescribir las respuestas actuales en este dispositivo?')) {
            currentState = {
              metadata: parsed.metadata,
              answers: parsed.answers,
              activeSectionIndex: parsed.activeSectionIndex || 0,
              pastInspections: parsed.pastInspections || currentState.pastInspections
            };
            // Persistir
            saveStateToLocalStorage();
            if (currentState.pastInspections.length > 0) {
              localStorage.setItem('svb_past_inspections', JSON.stringify(currentState.pastInspections));
            }
            // Recargar interfaz
            alert('¡Inspección restaurada con éxito!');
            location.reload();
          }
        } else {
          alert('El archivo JSON seleccionado no tiene un formato compatible con este checklist.');
        }
      } catch (err) {
        alert('Error al leer el archivo JSON. Asegúrate de que el archivo esté en buen estado.');
      }
    };
    reader.readAsText(file);
  });

  // --- ACCIÓN DE ARCHIVAR E IMPRIMIR ACTA (REPORTE DE IMPRESIÓN DINÁMICO) ---

  // Botón para iniciar la impresión desde la pantalla principal
  btnExportPDF.addEventListener('click', () => {
    // Preguntar al usuario si desea archivar esta inspección antes de imprimir
    const stats = getInventoryStats();
    let confirmMsg = '¿Deseas archivar este acta en el historial del dispositivo antes de imprimir?';
    if (stats.pending > 0) {
      confirmMsg += `\n\nATENCIÓN: Tienes ${stats.pending} artículos pendientes de revisión.`;
    }

    if (confirm(confirmMsg)) {
      // Archivar en el historial
      const archiveItem = {
        id: 'inspeccion_' + Date.now(),
        timestamp: Date.now(),
        date: currentState.metadata.fecha || new Date().toLocaleDateString('es-ES'),
        matricula: currentState.metadata.matricula || 'Sin Matrícula',
        dotacion: currentState.metadata.dotacion || 'Sin Personal',
        unidad: currentState.metadata.unidad || 'Sin Unidad',
        stats: {
          total: stats.total,
          complies: stats.complies,
          nonComplies: stats.nonComplies,
          pending: stats.pending
        },
        answers: JSON.parse(JSON.stringify(currentState.answers)),
        metadata: JSON.parse(JSON.stringify(currentState.metadata))
      };

      currentState.pastInspections.push(archiveItem);
      localStorage.setItem('svb_past_inspections', JSON.stringify(currentState.pastInspections));
      saveStateToLocalStorage();
      renderPastInspectionsList();
      // Lanzar impresión de esta inspección que acabamos de archivar
      triggerArchivedPrintReport(archiveItem);
    }
  });

  // Inyectar un reporte de impresión completo y estructurado en papel
  function triggerArchivedPrintReport(insData) {
    // 1. Eliminar cualquier contenedor de impresión previo
    const existing = document.getElementById('printReportContainer');
    if (existing) existing.remove();

    // 2. Crear el contenedor formal del reporte
    const reportContainer = document.createElement('div');
    reportContainer.id = 'printReportContainer';
    // Aplicar estilos en línea especiales para impresión que aseguren legibilidad en blanco y negro
    reportContainer.style.position = 'absolute';
    reportContainer.style.left = '0';
    reportContainer.style.top = '0';
    reportContainer.style.width = '100%';
    reportContainer.style.zIndex = '9999999';
    reportContainer.style.backgroundColor = '#ffffff';
    reportContainer.style.color = '#000000';
    reportContainer.style.fontFamily = '"Outfit", "Helvetica Neue", sans-serif';
    reportContainer.style.padding = '0';

    // 3. Crear cabecera formal del reporte impreso
    let htmlContent = `
      <div style="border: 2px solid #000000; padding: 15px; margin-bottom: 20px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="width: 12%; text-align: center; vertical-align: middle; border-right: 2px solid #000000; padding-right: 12px;">
              <!-- Cruz médica de emergencias nítida en SVG -->
              <svg viewBox="0 0 100 100" style="width: 50px; height: 50px; fill: #000000;">
                <path d="M35 15h30v20h20v30h-20v20H35V65H15V35h20V15z" />
              </svg>
            </td>
            <td style="width: 58%; padding-left: 15px; vertical-align: middle;">
              <h2 style="margin: 0; font-size: 1.3rem; font-weight: 800; text-transform: uppercase; letter-spacing: -0.5px;">ACTA OFICIAL DE INSPECCIÓN VEHICULAR (TIPO B)</h2>
              <span style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: #334155;">AUDITORÍA DE INVENTARIO Y DOTACIÓN - SERVICIO DE URGENCIAS CANARIO</span>
            </td>
            <td style="width: 30%; text-align: right; vertical-align: middle; font-size: 0.78rem; line-height: 1.35;">
              <strong>Código Acta:</strong> SVB-CLB-${insData.timestamp.toString().substring(5, 13)}<br>
              <strong>Fecha Emisión:</strong> ${new Date(insData.timestamp).toLocaleString('es-ES')}<br>
              <strong>Inspector PWA:</strong> Offline Native WebApp
            </td>
          </tr>
        </table>
      </div>

      <!-- Cuadrante de Metadatos de Control -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 0.82rem;">
        <tr>
          <td style="border: 1px solid #000000; padding: 6px; width: 20%; background-color: #f8fafc;"><strong>Matrícula:</strong></td>
          <td style="border: 1px solid #000000; padding: 6px; width: 30%; font-weight: bold;">${insData.metadata.matricula || 'N/D'}</td>
          <td style="border: 1px solid #000000; padding: 6px; width: 20%; background-color: #f8fafc;"><strong>Fecha Checklist:</strong></td>
          <td style="border: 1px solid #000000; padding: 6px; width: 30%; font-weight: bold;">${insData.metadata.fecha || insData.date}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 6px; background-color: #f8fafc;"><strong>Dotación Técnica:</strong></td>
          <td style="border: 1px solid #000000; padding: 6px; font-weight: bold;" colspan="3">${insData.metadata.dotacion || 'No especificada'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 6px; background-color: #f8fafc;"><strong>Unidad Operativa:</strong></td>
          <td style="border: 1px solid #000000; padding: 6px; font-weight: bold;">${insData.metadata.unidad || 'N/D'}</td>
          <td style="border: 1px solid #000000; padding: 6px; background-color: #f8fafc;"><strong>Nº Bastidor:</strong></td>
          <td style="border: 1px solid #000000; padding: 6px; font-weight: bold;">${insData.metadata.bastidor || 'N/D'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 6px; background-color: #f8fafc;"><strong>Marca Ambulancia:</strong></td>
          <td style="border: 1px solid #000000; padding: 6px; font-weight: bold;">${insData.metadata.marca || 'N/D'}</td>
          <td style="border: 1px solid #000000; padding: 6px; background-color: #f8fafc;"><strong>Modelo:</strong></td>
          <td style="border: 1px solid #000000; padding: 6px; font-weight: bold;">${insData.metadata.modelo || 'N/D'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 6px; background-color: #f8fafc;"><strong>Fecha Matriculación:</strong></td>
          <td style="border: 1px solid #000000; padding: 6px; font-weight: bold;">${insData.metadata.fecha_matriculacion || 'N/D'}</td>
          <td style="border: 1px solid #000000; padding: 6px; background-color: #f8fafc;"><strong>Balance General:</strong></td>
          <td style="border: 1px solid #000000; padding: 6px; font-weight: bold;">
            SÍ: ${insData.stats.complies} | NO: ${insData.stats.nonComplies} | Pendientes: ${insData.stats.pending}
          </td>
        </tr>
      </table>
    `;

    // 4. Filtrar y listar anomalías (Marcados como "NO" o con observaciones)
    let noComplianceList = [];
    CHECKLIST_DATA.sections.forEach(section => {
      section.items.forEach(item => {
        const ans = insData.answers[item.id];
        const isNo = ans && ans.status === 'NO';
        const hasObs = ans && ans.obs && ans.obs.trim() !== '';
        if (isNo || hasObs) {
          noComplianceList.push({
            ...item,
            sectionName: section.name,
            status: ans.status || 'PENDIENTE',
            realQty: ans.real_qty || '-',
            expiry: ans.expiry || '-',
            obs: ans.obs || 'Sin observaciones detalladas'
          });
        }
      });
    });

    if (noComplianceList.length > 0) {
      htmlContent += `
        <div style="page-break-inside: avoid; margin-bottom: 20px;">
          <h3 style="font-size: 0.95rem; text-transform: uppercase; border-bottom: 2px solid #ef4444; margin: 0 0 10px 0; padding-bottom: 3px; color: #b91c1c;">Registro de Incidencias e Anomalías Detectadas (${noComplianceList.length})</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 0.72rem; margin-bottom: 10px;">
            <thead>
              <tr style="background-color: #fee2e2; text-align: left; border-bottom: 2px solid #ef4444;">
                <th style="border: 1px solid #cbd5e1; padding: 5px; width: 22%;">Sección</th>
                <th style="border: 1px solid #cbd5e1; padding: 5px; width: 40%;">Material de Inspección</th>
                <th style="border: 1px solid #cbd5e1; padding: 5px; width: 8%; text-align: center;">Req.</th>
                <th style="border: 1px solid #cbd5e1; padding: 5px; width: 8%; text-align: center;">Real</th>
                <th style="border: 1px solid #cbd5e1; padding: 5px; width: 22%;">Motivo de Incidencia / Observación</th>
              </tr>
            </thead>
            <tbody>
      `;

      noComplianceList.forEach(inc => {
        htmlContent += `
          <tr style="background-color: #fff5f5;">
            <td style="border: 1px solid #cbd5e1; padding: 5px;"><strong>${inc.sectionName}</strong></td>
            <td style="border: 1px solid #cbd5e1; padding: 5px;">${inc.description} <span style="font-size: 0.62rem; color: #64748b;">(Fila ${inc.excel_row})</span></td>
            <td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center; font-weight: bold;">${inc.required_qty}</td>
            <td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center; font-weight: bold; color: red;">${inc.realQty}</td>
            <td style="border: 1px solid #cbd5e1; padding: 5px; font-weight: bold; color: #b91c1c;">
              ${inc.status === 'NO' ? 'NO CUMPLE ' : ''}
              ${inc.obs} 
              ${inc.expiry !== '-' ? '(Caducidad: ' + inc.expiry + ')' : ''}
            </td>
          </tr>
        `;
      });

      htmlContent += `
            </tbody>
          </table>
        </div>
      `;
    } else {
      htmlContent += `
        <div style="border: 1px solid #16a34a; padding: 10px; margin-bottom: 20px; border-radius: 4px; font-size: 0.82rem; text-align: center; font-weight: bold; color: #16a34a; background-color: #f0fdf4; page-break-inside: avoid;">
          EL VEHÍCULO CUMPLE SATISFACTORIAMENTE CON EL 100% DE LA DOTACIÓN REQUERIDA. NO SE DETECTARON INCIDENCIAS.
        </div>
      `;
    }

    // 5. RENDERIZADO DEL CHECKLIST COMPLETO LLENO EXACTAMENTE COMO EL EXCEL
    htmlContent += `
      <h3 style="font-size: 1rem; text-transform: uppercase; border-bottom: 2px solid #000000; margin: 20px 0 10px 0; padding-bottom: 4px; text-align: center;">INVENTARIO COMPLETO Y CONTROL DE DOTACIÓN (CHECKLIST MENSUAL)</h3>
      <table style="width: 100%; border-collapse: collapse; font-size: 7.2pt; line-height: 1.2;">
        <thead>
          <tr style="background-color: #f1f5f9; text-align: left; font-weight: bold; border-bottom: 2px solid #000000;">
            <th style="border: 1px solid #94a3b8; padding: 4px; width: 45%;">Descripción del Material o Requisito Vehicular</th>
            <th style="border: 1px solid #94a3b8; padding: 4px; width: 8%; text-align: center;">Fila Excel</th>
            <th style="border: 1px solid #94a3b8; padding: 4px; width: 8%; text-align: center;">Cant. Req.</th>
            <th style="border: 1px solid #94a3b8; padding: 4px; width: 10%; text-align: center;">¿Cumple?</th>
            <th style="border: 1px solid #94a3b8; padding: 4px; width: 8%; text-align: center;">Cant. Real</th>
            <th style="border: 1px solid #94a3b8; padding: 4px; width: 9%; text-align: center;">Caducidad</th>
            <th style="border: 1px solid #94a3b8; padding: 4px; width: 12%;">Incidencias / Notas</th>
          </tr>
        </thead>
        <tbody>
    `;

    // Iterar por cada una de las 72 secciones
    CHECKLIST_DATA.sections.forEach((section, sIdx) => {
      // Inyectar fila cabecera de la Sección
      htmlContent += `
        <tr style="background-color: #cbd5e1; font-weight: bold; border: 1px solid #475569;">
          <td colspan="7" style="padding: 5px; font-size: 8.2pt; text-transform: uppercase; letter-spacing: 0.2px;">
            ${sIdx + 1}. ${section.name}
          </td>
        </tr>
      `;

      // Iterar por cada ítem de esta sección
      section.items.forEach(item => {
        const ans = insData.answers[item.id] || { status: '', real_qty: '', expiry: '', obs: '' };
        let cumpleTexto = 'PENDIENTE';
        let cumpleEstilo = 'color: #64748b; font-weight: 500;';
        let filaEstilo = '';

        if (ans.status === 'SI') {
          cumpleTexto = 'SÍ';
          cumpleEstilo = 'color: #16a34a; font-weight: bold;';
        } else if (ans.status === 'NO') {
          cumpleTexto = 'NO';
          cumpleEstilo = 'color: #ef4444; font-weight: bold;';
          filaEstilo = 'background-color: #fef2f2;'; // Destacar filas no conformes en el checklist completo
        }

        const realQty = ans.real_qty || '-';
        const expiry = ans.expiry || '-';
        const obs = ans.obs || '-';

        htmlContent += `
          <tr style="page-break-inside: avoid; ${filaEstilo}">
            <td style="border: 1px solid #cbd5e1; padding: 4px; font-weight: 500;">${item.description}</td>
            <td style="border: 1px solid #cbd5e1; padding: 4px; text-align: center; color: #64748b; font-size: 6.5pt;">${item.excel_row}</td>
            <td style="border: 1px solid #cbd5e1; padding: 4px; text-align: center; font-weight: 600;">${item.required_qty}</td>
            <td style="border: 1px solid #cbd5e1; padding: 4px; text-align: center; ${cumpleEstilo}">${cumpleTexto}</td>
            <td style="border: 1px solid #cbd5e1; padding: 4px; text-align: center; font-weight: 600;">${realQty}</td>
            <td style="border: 1px solid #cbd5e1; padding: 4px; text-align: center; font-size: 6.8pt;">${expiry}</td>
            <td style="border: 1px solid #cbd5e1; padding: 4px; font-size: 6.8pt; color: ${ans.status === 'NO' ? '#b91c1c' : '#000000'};">${obs}</td>
          </tr>
        `;
      });
    });

    htmlContent += `
        </tbody>
      </table>
    `;

    // 6. Espacio de firma formal
    htmlContent += `
      <div style="margin-top: 35px; page-break-inside: avoid; border-top: 2px solid #000000; padding-top: 15px;">
        <table style="width: 100%; border-collapse: collapse;">
           <tr>
            <td style="width: 50%; vertical-align: top; font-size: 0.8rem; line-height: 1.5; padding-right: 20px;">
              <strong>DECLARACIÓN DE RESPONSABILIDAD:</strong><br>
              El personal técnico de la ambulancia abajo firmante certifica que ha procedido a la inspección visual, física y de caducidades de todo el material médico y mecánico detallado en esta acta digital, conforme al pliego técnico del Servicio de Urgenias Canario (SUC) para recursos de Soporte Vital Básico Clase B, registrando fielmente el inventario real disponible en la fecha señalada.
            </td>
            <td style="width: 25%; text-align: center; vertical-align: top; padding: 0 8px;">
              <span style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: #1e293b;">Inspector Técnico</span>
              <div style="border: 1px solid #000000; border-radius: 4px; width: 100%; height: 100px; margin-top: 6px; display: flex; align-items: center; justify-content: center; background-color: #ffffff;">
                <span style="color: #64748b; font-size: 0.7rem; font-style: italic;">Fdo: Inspector</span>
              </div>
            </td>
            <td style="width: 25%; text-align: center; vertical-align: top; padding: 0 8px;">
              <span style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: #1e293b;">Jefe de Unidad</span>
              <div style="border: 1px solid #000000; border-radius: 4px; width: 100%; height: 100px; margin-top: 6px; display: flex; align-items: center; justify-content: center; background-color: #ffffff;">
                <span style="color: #64748b; font-size: 0.7rem; font-style: italic;">Fdo: Jefe Unidad</span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    `;

    reportContainer.innerHTML = htmlContent;

    // 7. Inyectar contenedor al final del body
    document.body.appendChild(reportContainer);

    // 8. Ocultar el contenedor de la aplicación web principal mediante CSS dinámico en la impresión
    const printStyle = document.createElement('style');
    printStyle.id = 'dynamicPrintStyles';
    printStyle.innerHTML = `
      @media print {
        @page {
          size: A4;
          margin: 10mm 10mm 15mm 10mm;
          @bottom-center {
            content: "Página " counter(page) " de " counter(pages);
            font-family: "Outfit", sans-serif;
            font-size: 7pt;
            color: #64748b;
          }
        }
        #printReportContainer {
          display: block !important;
          counter-reset: page 1;
        }
        .app-container, .modal-overlay {
          display: none !important;
        }
        table {
          page-break-inside: auto;
        }
        tr {
          page-break-inside: avoid;
          page-break-after: auto;
        }
        thead {
          display: table-header-group;
        }
        tbody {
          display: table-row-group;
        }
      }
    `;
    document.head.appendChild(printStyle);

    // 9. Ejecutar la llamada nativa de impresión con retraso para que cargue la firma
    setTimeout(() => {
      window.print();
      // 10. Limpiar después de imprimir para no corromper la pantalla
      setTimeout(() => {
        reportContainer.remove();
        printStyle.remove();
      }, 500);
    }, 350);
  }

  // --- LISTA DE MATERIAL A PEDIR (SOLO ÍTEMS NO CUMPLE O CADUCADOS) ---
  btnExportPedido.addEventListener('click', () => {
    const existing = document.getElementById('printReportContainer');
    if (existing) existing.remove();

    const reportContainer = document.createElement('div');
    reportContainer.id = 'printReportContainer';
    reportContainer.style.cssText = 'position:absolute;left:0;top:0;width:100%;z-index:9999999;background:#fff;color:#000;font-family:"Outfit","Helvetica Neue",sans-serif;padding:0;';

    const matricula = currentState.metadata.matricula || 'Sin Matrícula';
    const fecha = currentState.metadata.fecha || new Date().toLocaleDateString('es-ES');
    const unidad = currentState.metadata.unidad || 'No especificada';
    const dotacion = currentState.metadata.dotacion || 'No especificada';

    let itemsToOrder = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const limitDate = new Date(today);
    limitDate.setDate(today.getDate() + 30);

    CHECKLIST_DATA.sections.forEach(section => {
      section.items.forEach(item => {
        const ans = currentState.answers[item.id];
        if (!ans) return;

        let motivo = '';
        let type = '';

        if (ans.status === 'NO') {
          motivo = ans.obs || 'Sin stock / No disponible';
          type = 'NO';
        }

        if (ans.expiry) {
          const expDate = new Date(ans.expiry);
          expDate.setHours(0, 0, 0, 0);
          if (expDate <= limitDate) {
            type = type || 'CAD';
            motivo = motivo ? motivo + ' | ' : '';
            motivo += (expDate <= today) ? 'CADUCADO' : 'Próximo a caducar: ' + ans.expiry;
          }
        }

        if (type) {
          itemsToOrder.push({
            ...item,
            sectionName: section.name,
            motivo: motivo,
            type: type,
            obs: ans.obs || '',
            expiry: ans.expiry || ''
          });
        }
      });
    });

    // Ordenar por sección y luego por fila Excel
    itemsToOrder.sort((a, b) => {
      if (a.sectionName !== b.sectionName) {
        return CHECKLIST_DATA.sections.findIndex(s => s.name === a.sectionName) -
               CHECKLIST_DATA.sections.findIndex(s => s.name === b.sectionName);
      }
      return a.excel_row - b.excel_row;
    });

    let html = `
      <div style="border:2px solid #f59e0b; padding:15px; margin-bottom:16px;">
        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="width:12%; text-align:center; vertical-align:middle; border-right:2px solid #f59e0b; padding-right:12px;">
              <svg viewBox="0 0 100 100" style="width:48px;height:48px;fill:#f59e0b;"><path d="M35 15h30v20h20v30h-20v20H35V65H15V35h20V15z"/></svg>
            </td>
            <td style="width:58%; padding-left:15px; vertical-align:middle;">
              <h2 style="margin:0;font-size:1.2rem;font-weight:800;text-transform:uppercase;">LISTA DE MATERIAL A REPONER</h2>
              <span style="font-size:0.8rem;font-weight:600;color:#92400e;">PEDIDO DE REAPROVISIONAMIENTO - SVB TIPO B</span>
            </td>
            <td style="width:30%; text-align:right; vertical-align:middle;font-size:0.75rem;line-height:1.4;">
              <strong>Fecha:</strong> ${fecha}<br>
              <strong>Matrícula:</strong> ${matricula}<br>
              <strong>Unidad:</strong> ${unidad}
            </td>
          </tr>
        </table>
      </div>
      <table style="width:100%; border-collapse:collapse; margin-bottom:14px; font-size:0.8rem;">
        <tr>
          <td style="border:1px solid #ddd;padding:5px;width:20%;background:#fef9c3;"><strong>Dotación:</strong></td>
          <td style="border:1px solid #ddd;padding:5px;width:80%;font-weight:bold;">${dotacion}</td>
        </tr>
      </table>
    `;

    if (itemsToOrder.length === 0) {
      html += `<p style="text-align:center;font-size:1rem;color:#16a34a;font-weight:700;padding:40px;border:2px dashed #16a34a;border-radius:8px;">NO HAY MATERIAL PENDIENTE DE REPOSICIÓN. TODO EL INVENTARIO CUMPLE.</p>`;
    } else {
      html += `
        <p style="font-size:0.8rem;color:#92400e;margin-bottom:8px;"><strong>${itemsToOrder.length} artículos</strong> a reponer (NO CUMPLE + CADUCADOS) para solicitar al proveedor:</p>
        <table style="width:100%; border-collapse:collapse; font-size:0.73rem;">
          <thead>
            <tr style="background:#fef3c7;text-align:left;border-bottom:2px solid #f59e0b;">
              <th style="border:1px solid #ddd;padding:6px;width:10%;">Fila Excel</th>
              <th style="border:1px solid #ddd;padding:6px;width:48%;">Material / Equipo a Reponer</th>
              <th style="border:1px solid #ddd;padding:6px;width:10%;text-align:center;">Cant. Req.</th>
              <th style="border:1px solid #ddd;padding:6px;width:32%;">Motivo</th>
            </tr>
          </thead>
          <tbody>
      `;

      itemsToOrder.forEach((item, idx) => {
        const badgeColor = item.type === 'CAD' ? '#fff' : '#fef2f2';
        const motColor = item.expiry ? '#b91c1c' : '#b91c1c';
        html += `
          <tr style="background:${idx % 2 === 0 ? badgeColor : '#fffbeb'}; page-break-inside:avoid;">
            <td style="border:1px solid #ddd;padding:5px;text-align:center;color:#64748b;">${item.excel_row}</td>
            <td style="border:1px solid #ddd;padding:5px;font-weight:500;">${item.description}</td>
            <td style="border:1px solid #ddd;padding:5px;text-align:center;font-weight:700;color:#d97706;">${item.required_qty}</td>
            <td style="border:1px solid #ddd;padding:5px;font-size:0.7rem;color:${motColor};">${item.motivo}</td>
          </tr>
        `;
      });

      html += `
          </tbody>
        </table>
        <div style="margin-top:30px;border-top:2px solid #f59e0b;padding-top:12px;font-size:0.72rem;color:#64748b;text-align:center;">
          Documento generado automáticamente por Checklist SVB - ${new Date().toLocaleString('es-ES')}
        </div>
      `;
    }

    reportContainer.innerHTML = html;
    document.body.appendChild(reportContainer);

    const printStyle = document.createElement('style');
    printStyle.id = 'dynamicPrintStylesOrder';
    printStyle.innerHTML = `
      @media print {
        @page {
          size: A4;
          margin: 10mm 10mm 15mm 10mm;
          @bottom-center {
            content: "Página " counter(page) " de " counter(pages);
            font-family: "Outfit", sans-serif;
            font-size: 7pt;
            color: #64748b;
          }
        }
        #printReportContainer { display: block !important; counter-reset: page 1; }
        .app-container, .modal-overlay { display: none !important; }
        tr { page-break-inside: avoid; }
      }
    `;
    document.head.appendChild(printStyle);

    setTimeout(() => {
      window.print();
      setTimeout(() => { reportContainer.remove(); printStyle.remove(); }, 500);
    }, 250);
  });

  // --- REINICIAR FORMULARIO (LIMPIAR TODO CON CONFIRMACIÓN) ---
  btnResetAll.addEventListener('click', () => {
    if (confirm('ATENCIÓN: ¿Estás completamente seguro de que deseas reiniciar todo el checklist? Perderás todas las respuestas guardadas del acta actual.\n\n(Las inspecciones guardadas en el historial del dispositivo no se verán afectadas)')) {
      currentState.answers = {};
      // Reiniciar metadatos excepto fijos si es útil, pero para reiniciar completamente vaciamos todo excepto la matrícula
      const mat = currentState.metadata.matricula;
      currentState.metadata = {
        dotacion: '',
        matricula: mat, // Conservamos la matrícula como ayuda al operador
        fecha: new Date().toISOString().split('T')[0],
        unidad: '',
        bastidor: '',
        marca: '',
        fecha_matriculacion: '',
        modelo: ''
      };
      currentState.activeSectionIndex = 0;
      saveStateToLocalStorage();

      // Limpiar canvas

      // Recargar interfaz
      alert('Checklist reiniciado con éxito.');
      location.reload();
    }
  });

  // --- ARRANQUE E INICIALIZACIÓN DE LA APLICACIÓN ---
  loadStateFromLocalStorage();
  updateDashboardStats();
  renderSidebarNav();
  renderActiveSection();
  renderPastInspectionsList();
});
