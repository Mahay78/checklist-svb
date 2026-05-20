// Base de datos de inspección del vehículo tipo B (SVB)
const CHECKLIST_DATA = {
  "title": "FORMULARIO DE INSPECCIÓN VEHÍCULO TIPO B",
  "metadata": {
    "dotacion": "",
    "matricula": "",
    "fecha": "",
    "unidad": "",
    "bastidor": "",
    "marca": "",
    "fecha_matriculacion": "",
    "modelo": ""
  },
  "sections": [
    {
      "name": "CARACTERÍSTICAS GENERALES CLASE DE AMBULANCIA",
      "items": [
        {
          "id": "item_12",
          "excel_row": 12,
          "description": "Imagen corporativa SUC según Anexo V",
          "required_qty": "x"
        },
        {
          "id": "item_13",
          "excel_row": 13,
          "description": "Volumen óptimo para atención paciente y abordaje por ambos lados de la camilla",
          "required_qty": "x"
        },
        {
          "id": "item_15",
          "excel_row": 15,
          "description": "Todos los elementos con pictogramas según normas europeas",
          "required_qty": "x"
        },
        {
          "id": "item_16",
          "excel_row": 16,
          "description": "Todo el material deberá ser de nueva adquisición y estar homologado y con control de mantenimiento por parte del fabricante",
          "required_qty": "x"
        },
        {
          "id": "item_18",
          "excel_row": 18,
          "description": "Nivel de ruidos de acuerdo a normativa vigente",
          "required_qty": "x"
        },
        {
          "id": "item_19",
          "excel_row": 19,
          "description": "Elementos traslúcidos de plástico o cristal de seguridad",
          "required_qty": "x"
        },
        {
          "id": "item_20",
          "excel_row": 20,
          "description": "Método de limpieza, desinsectación y desinfección periódica",
          "required_qty": "x"
        }
      ]
    },
    {
      "name": "DOCUMENTACION VEHICULOS",
      "items": [
        {
          "id": "item_22",
          "excel_row": 22,
          "description": "tarjeta trasporte",
          "required_qty": "x"
        },
        {
          "id": "item_23",
          "excel_row": 23,
          "description": "itv",
          "required_qty": "x"
        },
        {
          "id": "item_24",
          "excel_row": 24,
          "description": "permiso de circulacion",
          "required_qty": "x"
        },
        {
          "id": "item_25",
          "excel_row": 25,
          "description": "certificado de desinfección",
          "required_qty": "x"
        },
        {
          "id": "item_26",
          "excel_row": 26,
          "description": "hoja de reclamaciones",
          "required_qty": "4"
        },
        {
          "id": "item_27",
          "excel_row": 27,
          "description": "registro de revision del material sanitario",
          "required_qty": "x"
        },
        {
          "id": "item_28",
          "excel_row": 28,
          "description": "certificado de trasporte sanitario",
          "required_qty": "x"
        },
        {
          "id": "item_29",
          "excel_row": 29,
          "description": "partes asistenciales",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "VESTUARIO PERSONAL",
      "items": [
        {
          "id": "item_31",
          "excel_row": 31,
          "description": "uniforme",
          "required_qty": "x"
        },
        {
          "id": "item_32",
          "excel_row": 32,
          "description": "tarjeta identificativa",
          "required_qty": "x"
        }
      ]
    },
    {
      "name": "CARACTERÍSTICAS TÉCNICAS COMUNES",
      "items": [
        {
          "id": "item_34",
          "excel_row": 34,
          "description": "Carrocería de alta visibilidad (RAL 1016)",
          "required_qty": "x"
        },
        {
          "id": "item_35",
          "excel_row": 35,
          "description": "Techo sobreelevado según normativa vigente",
          "required_qty": "x"
        },
        {
          "id": "item_36",
          "excel_row": 36,
          "description": "Faros antiniebla delanteros y traseros",
          "required_qty": "x"
        },
        {
          "id": "item_37",
          "excel_row": 37,
          "description": "Inscripción de la palabra AMBULANCIA en frontal legible por reflexión y posterior",
          "required_qty": "x"
        },
        {
          "id": "item_39",
          "excel_row": 39,
          "description": "Señalización en el techo para identificación aérea",
          "required_qty": "x"
        },
        {
          "id": "item_40",
          "excel_row": 40,
          "description": "Cabina de conducción con un mínimo de 2 asientos para conductor, y/o ayudante/acompañante con sus respectivos anclajes homologados",
          "required_qty": "x"
        },
        {
          "id": "item_42",
          "excel_row": 42,
          "description": "Sistema de expulsión de humos según la normativa vigente",
          "required_qty": "x"
        },
        {
          "id": "item_43",
          "excel_row": 43,
          "description": "Puerta posterior doble hoja, apertura 180°º cristales de seguridad opacos y sistema de bloqueo de acuerdo a la Normativa en vigor. Contará con escalón de acceso a cabina asistencial con acabado antideslizantes",
          "required_qty": "x"
        },
        {
          "id": "item_46",
          "excel_row": 46,
          "description": "Puerta lateral de acceso a la cabina sanitaria con sistema de bloqueo de acuerdo a la Normativa en vigor. Contará con escalón escamoteable y con acabado antideslizante de acceso a cabina asistencial.",
          "required_qty": "x"
        },
        {
          "id": "item_49",
          "excel_row": 49,
          "description": "Dimensiones mínimas de acuerdo a la Normativa vigente",
          "required_qty": "x"
        },
        {
          "id": "item_50",
          "excel_row": 50,
          "description": "Conector empotrado externamente para carga de baterías u otros dispositivos",
          "required_qty": "x"
        },
        {
          "id": "item_52",
          "excel_row": 52,
          "description": "En la cabina asistencial deberán existir las ventanas que sean determinadas según normativa vigente",
          "required_qty": "x"
        },
        {
          "id": "item_54",
          "excel_row": 54,
          "description": "Dispondrán de asideros suficientes en el interior del techo de la cabina sanitaria, así como en los accesos de la puerta lateral y trasera",
          "required_qty": "x"
        },
        {
          "id": "item_56",
          "excel_row": 56,
          "description": "Indicadores intermitentes de parada",
          "required_qty": "x"
        }
      ]
    },
    {
      "name": "COMUNICACIONES",
      "items": [
        {
          "id": "item_58",
          "excel_row": 58,
          "description": "Emisora fija Tetra de acuerdo al anexo",
          "required_qty": "1"
        },
        {
          "id": "item_59",
          "excel_row": 59,
          "description": "Emisora portátil Tetra",
          "required_qty": "1"
        },
        {
          "id": "item_60",
          "excel_row": 60,
          "description": "Emisora portátil DMR",
          "required_qty": "1"
        },
        {
          "id": "item_61",
          "excel_row": 61,
          "description": "Telefonía móvil en cada vehículo por cuenta del adjudicatario, tipo SMARTPHONE con sistema de callejero, instalación aplicación FRESS 1-1-2 (registro de alta con datos de la empresa adjudicataria e indicativo del recurso), manos libres, cargador y soporte para el habitáculo de conducción.",
          "required_qty": "1"
        },
        {
          "id": "item_65",
          "excel_row": 65,
          "description": "Sistema de posicionamiento GPS y de gestión de flotas",
          "required_qty": "1"
        },
        {
          "id": "item_66",
          "excel_row": 66,
          "description": "Dispositivo tipo tableta para la gestión de los servicios con conexión 3G/4G",
          "required_qty": "1"
        },
        {
          "id": "item_67",
          "excel_row": 67,
          "description": "Impresora termica tetra",
          "required_qty": "1"
        },
        {
          "id": "item_68",
          "excel_row": 68,
          "description": "impresora termica A4",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "SEÑALIZACIÓN OPTICA Y ACÚSTICA",
      "items": [
        {
          "id": "item_70",
          "excel_row": 70,
          "description": "Puente carenado LED en parte delantera homologado según Normativa en vigor, con grupo de luces según normativa vigente con color de acuerdo a normativa, que pudiera cambiarse a lo largo de la duración del contrato, siendo este por cuenta del adjudicatario.",
          "required_qty": "x"
        },
        {
          "id": "item_74",
          "excel_row": 74,
          "description": "Timbre de seguridad consistente en un tono alternante (tono-no-tono), automático al colocar la marcha atrás con posibilidad de desconexión nocturna",
          "required_qty": "x"
        },
        {
          "id": "item_77",
          "excel_row": 77,
          "description": "Sirena electrónica de 100 w y tres tonos que incluirá el tipo ecológico, con control de volumen para día y noche, con dispositivo que impida su utilización independiente de la señalización óptica. Estará colocada en el frontal del vehículo. En su uso se respetarán los decibelios recomendados por la Dirección General de Tráfico",
          "required_qty": "x"
        },
        {
          "id": "item_82",
          "excel_row": 82,
          "description": "Mando de control de megafonía y de la sirena electrónica que deberán estar situados en el salpicadero del vehículo el alcance y manejo directo del/la conductor/a y altavoz exterior situado en el techo del vehículo",
          "required_qty": "x"
        },
        {
          "id": "item_85",
          "excel_row": 85,
          "description": "Arrowstick en parte trasera homologado",
          "required_qty": "x"
        },
        {
          "id": "item_86",
          "excel_row": 86,
          "description": "Sistema de luz de crucero automático al conectar las luces de posición",
          "required_qty": "x"
        },
        {
          "id": "item_87",
          "excel_row": 87,
          "description": "Focos laterales de trabajo en parte externa de la carrocería",
          "required_qty": "x"
        }
      ]
    },
    {
      "name": "CARACTERÍSTICAS MECÁNICAS",
      "items": [
        {
          "id": "item_89",
          "excel_row": 89,
          "description": "Potencia mínima en CV",
          "required_qty": "160cv"
        },
        {
          "id": "item_90",
          "excel_row": 90,
          "description": "Peso máximo del vehículo 3.500 Kg (*)",
          "required_qty": "x"
        },
        {
          "id": "item_91",
          "excel_row": 91,
          "description": "Vehículo adaptado con todas aquellas características necesarias para el transporte de enfermos",
          "required_qty": "x"
        }
      ]
    },
    {
      "name": "CARACTERÍSTICAS COMPARTIMENTO ASISTENCIAL",
      "items": [
        {
          "id": "item_94",
          "excel_row": 94,
          "description": "Mampara de separación con cabina de conducción con ventanilla practicable y persiana ajustable y con intercomunicador entre ambas cabinas.",
          "required_qty": "x"
        },
        {
          "id": "item_96",
          "excel_row": 96,
          "description": "Revestimientos interiores lisos, antideslizantes, impermeables e ignífugos, lavables y resistentes a desinfectantes habituales",
          "required_qty": "x"
        },
        {
          "id": "item_98",
          "excel_row": 98,
          "description": "Aislamiento acústico eficaz de acuerdo a la normativa en vigor",
          "required_qty": "x"
        },
        {
          "id": "item_99",
          "excel_row": 99,
          "description": "Aire acondicionado y calefacción y sistema de ventilación con termostato ajustable o mediante sistema electrónico para la cabina asistencial y de conducción. Dicho sistema de climatización debe ser independiente para cada uno de los habitáculos",
          "required_qty": "x"
        },
        {
          "id": "item_103",
          "excel_row": 103,
          "description": "Dos asientos y camilla en cabina asistencial y situados de acuerdo a la normativa en vigor y con las medidas mínimas",
          "required_qty": "x"
        },
        {
          "id": "item_105",
          "excel_row": 105,
          "description": "Camilla homologada con dimensiones mínimas de 55 cm. De ancho por 180° de largo, de al menos 2 ruedas giratorias y sistema de patas abatibles integrado en su estructura, con respaldo reclinable de 0º a 90º con sistema de bloqueo y barandillas laterales con posibilidad de abatimiento y 2 cinturones de seguridad trasversales. Con soporte de peso mínimo de 180°Kg. con posibilidad de 3 alturas. Sistema de anclaje 4 puntos",
          "required_qty": "1"
        },
        {
          "id": "item_111",
          "excel_row": 111,
          "description": "Camilla de tijera o de pala ligera y radio-traslúcida con largo ajustable y medidas una vez abierta como mínimo de 200 cm de alto y plegada de 1120 cm, con una capacidad de soporte de peso de cómo mínimo 150-160 Kg., esta deberá estar fijada rígidamente a la estructura del vehículo, de forma que no se produzcan movimientos de importancia durante la conducción.",
          "required_qty": "1"
        },
        {
          "id": "item_116",
          "excel_row": 116,
          "description": "Bancada que permita movimientos de elevación, descenso, laterales y posición de trendelemburg y Fowler de hasta 30º automáticamente",
          "required_qty": "x"
        },
        {
          "id": "item_118",
          "excel_row": 118,
          "description": "Sistema de movilidad lateral de camilla para poder acceder a ambos lados del paciente",
          "required_qty": "x"
        },
        {
          "id": "item_120",
          "excel_row": 120,
          "description": "Armarios suficientes para almacenar material sanitario, anclados de forma rígida con puertas con enclavamiento seguro",
          "required_qty": "x"
        },
        {
          "id": "item_122",
          "excel_row": 122,
          "description": "Iluminación en techo del habitáculo de color blanco tipo LED, con interruptor que no altere los colores naturales, según normativa e iluminación adicional en las de tipo C en el área de tratamiento. La iluminación del habitáculo sanitario debe ser independiente de la cabina de conducción",
          "required_qty": "x"
        },
        {
          "id": "item_126",
          "excel_row": 126,
          "description": "Tomas de corriente de 12 v",
          "required_qty": "4"
        },
        {
          "id": "item_127",
          "excel_row": 127,
          "description": "Tomas de corriente de 220 v (Convertidor de corriente de como mínimo 1000W).",
          "required_qty": "2"
        },
        {
          "id": "item_129",
          "excel_row": 129,
          "description": "Tablero de trabajo para preparar medicación y/o material de curas y soporte en pared para carpeta de aluminio partes asistenciales.",
          "required_qty": "x"
        },
        {
          "id": "item_131",
          "excel_row": 131,
          "description": "Anclajes homologados para el material asistencial.",
          "required_qty": "x"
        },
        {
          "id": "item_132",
          "excel_row": 132,
          "description": "Casilleros para medicación con candado de seguridad",
          "required_qty": "x"
        },
        {
          "id": "item_133",
          "excel_row": 133,
          "description": "Nevera mínimo 15 litros capaz de mantener la temperatura interna entre 4+/-2 grados y nevera portátil plegable de 16 L como mínimo, aluminizada en su interior. Dispondrá de 4 bolsas de frio químico, y con una medida mínima de 39cm de alto por 24cm de ancho",
          "required_qty": "1"
        },
        {
          "id": "item_137",
          "excel_row": 137,
          "description": "Montaje de infusión o dispositivo fijo instalado en el techo con sistema antibalanceo que permita suspender bolsas y/o frascos para perfusión intravenosa",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "HUECO ARRIBA DE LA PAPELERA",
      "items": [
        {
          "id": "item_140",
          "excel_row": 140,
          "description": "Bolsas para vómito",
          "required_qty": "4"
        },
        {
          "id": "item_141",
          "excel_row": 141,
          "description": "bolsa de basura",
          "required_qty": "1 rollo"
        },
        {
          "id": "item_142",
          "excel_row": 142,
          "description": "Bateas tipo riñonera desechables",
          "required_qty": "5"
        },
        {
          "id": "item_143",
          "excel_row": 143,
          "description": "suero de irrigación 250ML",
          "required_qty": "1"
        },
        {
          "id": "item_144",
          "excel_row": 144,
          "description": "suero de irrigación 500ML",
          "required_qty": "1"
        },
        {
          "id": "item_145",
          "excel_row": 145,
          "description": "suero de irrigación 100ML",
          "required_qty": "1"
        },
        {
          "id": "item_146",
          "excel_row": 146,
          "description": "agua oxigenada",
          "required_qty": "1"
        },
        {
          "id": "item_147",
          "excel_row": 147,
          "description": "alcohol",
          "required_qty": "1"
        },
        {
          "id": "item_148",
          "excel_row": 148,
          "description": "Lavabo con grifo, bomba eléctrica y depósito de agua con depósito de aguas residuales, se puede sustituir por solución hidroalcohol",
          "required_qty": "1"
        },
        {
          "id": "item_150",
          "excel_row": 150,
          "description": "Recipiente de objetos cortantes y puntiagudos. Contenedor residuos biocontaminantes en zona segura de la cabina asistencial.",
          "required_qty": "1"
        },
        {
          "id": "item_152",
          "excel_row": 152,
          "description": "Agua destilada 1000ml",
          "required_qty": "1"
        },
        {
          "id": "item_153",
          "excel_row": 153,
          "description": "Clorhexidina 125cc",
          "required_qty": "1"
        },
        {
          "id": "item_154",
          "excel_row": 154,
          "description": "Povidona Yodada 125cc",
          "required_qty": "1"
        },
        {
          "id": "item_155",
          "excel_row": 155,
          "description": "mascarilla quirúrgica",
          "required_qty": "10"
        }
      ]
    },
    {
      "name": "CAJON NUMERO 1 (ROJO)",
      "items": [
        {
          "id": "item_157",
          "excel_row": 157,
          "description": "Esfigmomanómetro manual tamaño adulto",
          "required_qty": "1"
        },
        {
          "id": "item_158",
          "excel_row": 158,
          "description": "Esfigmomanómetro manual tamaño obeso",
          "required_qty": "1"
        },
        {
          "id": "item_159",
          "excel_row": 159,
          "description": "Presoinfusores Manguito de infusión a presión 500-1000cc con campo de presión de 600mmHg, fácil de limpiar.",
          "required_qty": "1"
        },
        {
          "id": "item_161",
          "excel_row": 161,
          "description": "parches DESA adulto",
          "required_qty": "2"
        },
        {
          "id": "item_162",
          "excel_row": 162,
          "description": "Fonendoscopio adultos",
          "required_qty": "1"
        },
        {
          "id": "item_163",
          "excel_row": 163,
          "description": "Termómetro homologados Termómetro timpánico infrarrojo Dispondrá de conos desechables mono-uso",
          "required_qty": "1"
        },
        {
          "id": "item_165",
          "excel_row": 165,
          "description": "Rasuradora",
          "required_qty": "2"
        },
        {
          "id": "item_166",
          "excel_row": 166,
          "description": "electrodo de monitorizacion",
          "required_qty": "20"
        },
        {
          "id": "item_167",
          "excel_row": 167,
          "description": "Linterna de diagnostico",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "CAJON NUMERO 2(AZUL)",
      "items": [
        {
          "id": "item_169",
          "excel_row": 169,
          "description": "Dispositivo de aspiración portátil manual con alta capacidad de succión y fácil guardado, con posibilidad de limpieza y reutilización y sondas de varios tamaños.",
          "required_qty": "1"
        },
        {
          "id": "item_172",
          "excel_row": 172,
          "description": "tubuladura aspirador",
          "required_qty": "2"
        },
        {
          "id": "item_173",
          "excel_row": 173,
          "description": "Filtros con conexión universal virucida, bactericida, fungicida",
          "required_qty": "2"
        },
        {
          "id": "item_174",
          "excel_row": 174,
          "description": "Cánulas orofaríngeas: nº 2",
          "required_qty": "3"
        },
        {
          "id": "item_175",
          "excel_row": 175,
          "description": "Cánulas orofaríngeas: nº 3",
          "required_qty": "3"
        },
        {
          "id": "item_176",
          "excel_row": 176,
          "description": "Cánulas orofaríngeas: nº4",
          "required_qty": "3"
        },
        {
          "id": "item_177",
          "excel_row": 177,
          "description": "Cánulas orofaríngeas: nº5",
          "required_qty": "3"
        },
        {
          "id": "item_178",
          "excel_row": 178,
          "description": "Depresores linguales",
          "required_qty": "1caja"
        },
        {
          "id": "item_179",
          "excel_row": 179,
          "description": "bolsas desechables Dispositivo aspirador portátil eléctrico",
          "required_qty": "1"
        },
        {
          "id": "item_180",
          "excel_row": 180,
          "description": "Pinzas de Magill adulto",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "CAJON NUMERO 3(VERDE)",
      "items": [
        {
          "id": "item_182",
          "excel_row": 182,
          "description": "Mantas aluminizadas",
          "required_qty": "4"
        },
        {
          "id": "item_183",
          "excel_row": 183,
          "description": "Campos estériles desechables fenestrados",
          "required_qty": "1"
        },
        {
          "id": "item_184",
          "excel_row": 184,
          "description": "Campos estériles desechables no fenestrados",
          "required_qty": "1"
        },
        {
          "id": "item_185",
          "excel_row": 185,
          "description": "guantes estériles 6.5",
          "required_qty": "5"
        },
        {
          "id": "item_186",
          "excel_row": 186,
          "description": "guantes estériles 7",
          "required_qty": "5"
        },
        {
          "id": "item_187",
          "excel_row": 187,
          "description": "guantes estériles 7.5",
          "required_qty": "5"
        },
        {
          "id": "item_188",
          "excel_row": 188,
          "description": "Guantes estériles 8",
          "required_qty": "5"
        },
        {
          "id": "item_189",
          "excel_row": 189,
          "description": "Guantes estériles 8,5",
          "required_qty": "5"
        },
        {
          "id": "item_190",
          "excel_row": 190,
          "description": "Vaselina",
          "required_qty": "1"
        },
        {
          "id": "item_191",
          "excel_row": 191,
          "description": "Colector de orina",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "CAJON NUMERO 4(AMARILLO)",
      "items": [
        {
          "id": "item_193",
          "excel_row": 193,
          "description": "Pinzas de Magill pediátrico",
          "required_qty": "1"
        },
        {
          "id": "item_194",
          "excel_row": 194,
          "description": "Esfigmomanómetro manual tamaño pediátrico",
          "required_qty": "1"
        },
        {
          "id": "item_195",
          "excel_row": 195,
          "description": "Cánulas orofaríngeas: nº00",
          "required_qty": "3"
        },
        {
          "id": "item_196",
          "excel_row": 196,
          "description": "Cánulas orofaríngeas: nº0",
          "required_qty": "3"
        },
        {
          "id": "item_197",
          "excel_row": 197,
          "description": "Cánulas orofaríngeas: nº1",
          "required_qty": "3"
        },
        {
          "id": "item_198",
          "excel_row": 198,
          "description": "set de parto completo",
          "required_qty": "1"
        },
        {
          "id": "item_199",
          "excel_row": 199,
          "description": "Fonendoscopio pediátricos",
          "required_qty": "1"
        },
        {
          "id": "item_200",
          "excel_row": 200,
          "description": "Pinzas de cordón umbilical",
          "required_qty": "2"
        },
        {
          "id": "item_201",
          "excel_row": 201,
          "description": "parches DESA pediátrico",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "HUECO ARRIBA DEL CALIENTASUEROS",
      "items": [
        {
          "id": "item_203",
          "excel_row": 203,
          "description": "Resucitador manual de balón con válvula unidireccional adulto y pediátrico, con máscaras de adulto, niño con bolsa reservorio y conexiones con entrada de oxígeno.",
          "required_qty": "1 de cada"
        },
        {
          "id": "item_206",
          "excel_row": 206,
          "description": "nevera portátil plegable de 16 L como mínimo, aluminizada en su interior y con una medida mínima de 39cm de alto por 24cm de ancho",
          "required_qty": "1"
        },
        {
          "id": "item_209",
          "excel_row": 209,
          "description": "bolsas de frio químico",
          "required_qty": "2"
        },
        {
          "id": "item_210",
          "excel_row": 210,
          "description": "bolsas de frio químico (DENTRO NEVERA PORTARTIL)",
          "required_qty": "4"
        }
      ]
    },
    {
      "name": "NEVERA",
      "items": [
        {
          "id": "item_212",
          "excel_row": 212,
          "description": "Glucagón vial de 1mg",
          "required_qty": "2"
        },
        {
          "id": "item_213",
          "excel_row": 213,
          "description": "Atracurio ampollas 50mg/5ml",
          "required_qty": "1"
        },
        {
          "id": "item_214",
          "excel_row": 214,
          "description": "Succinilcolina ampollas 100mg/2ml",
          "required_qty": "2"
        },
        {
          "id": "item_215",
          "excel_row": 215,
          "description": "Insulina rápida (actrapid)",
          "required_qty": "4"
        },
        {
          "id": "item_216",
          "excel_row": 216,
          "description": "Paracetamol Supositorios infantil",
          "required_qty": "2"
        },
        {
          "id": "item_217",
          "excel_row": 217,
          "description": "Paracetamol Supositorios lactante",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "ARMARIO IZQUIERDO CON PUERTA ARRIBA DE LOS MANOREDUCTORES",
      "items": [
        {
          "id": "item_219",
          "excel_row": 219,
          "description": "Mascarilla reservorio pediátrico",
          "required_qty": "2"
        },
        {
          "id": "item_220",
          "excel_row": 220,
          "description": "Mascarillas tipo Venturi pediátricas",
          "required_qty": "2"
        },
        {
          "id": "item_221",
          "excel_row": 221,
          "description": "Gafas nasales pediátricas",
          "required_qty": "2"
        },
        {
          "id": "item_222",
          "excel_row": 222,
          "description": "Mascarilla para aerosoles pediátrico (nebulizacion)",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "ARMARIO DERECHO CON PUERTA ARRIBA DE LOS MANOREDUCTORES",
      "items": [
        {
          "id": "item_224",
          "excel_row": 224,
          "description": "Mascarilla Traqueotomía",
          "required_qty": "2"
        },
        {
          "id": "item_225",
          "excel_row": 225,
          "description": "Mascarillas tipo Venturi adulto",
          "required_qty": "4"
        },
        {
          "id": "item_226",
          "excel_row": 226,
          "description": "Mascarilla para aerosoles adulto (nebulizacion)",
          "required_qty": "2"
        },
        {
          "id": "item_227",
          "excel_row": 227,
          "description": "Alargadera",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "ARMARIO IZQUIERDO SIN PUERTA ARRIBA DE LOS MANOREDUCTORES",
      "items": [
        {
          "id": "item_229",
          "excel_row": 229,
          "description": "sondas de aspiración nº8",
          "required_qty": "2"
        },
        {
          "id": "item_230",
          "excel_row": 230,
          "description": "sondas de aspiración nº10",
          "required_qty": "2"
        },
        {
          "id": "item_231",
          "excel_row": 231,
          "description": "sondas de aspiración nº12",
          "required_qty": "2"
        },
        {
          "id": "item_232",
          "excel_row": 232,
          "description": "sondas de aspiración nº14",
          "required_qty": "2"
        },
        {
          "id": "item_233",
          "excel_row": 233,
          "description": "sondas de aspiración nº16",
          "required_qty": "2"
        },
        {
          "id": "item_234",
          "excel_row": 234,
          "description": "Conexiones en T Catéter de respiración (Pieza en T con Mascarilla o collarín de Traqueotomía, siendo esta utilizada en pacientes con traqueotomía ya instaurada y que precisen aporte de oxigenoterapia)",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "ARMARIO DERECHO SIN PUERTA ARRIBA DE LOS MANOREDUCTORES",
      "items": [
        {
          "id": "item_238",
          "excel_row": 238,
          "description": "mascarilla reservorio adulto",
          "required_qty": "4"
        },
        {
          "id": "item_239",
          "excel_row": 239,
          "description": "gafas nasales adulto",
          "required_qty": "4"
        }
      ]
    },
    {
      "name": "CAJON 1 BAJO FARMABOX",
      "items": [
        {
          "id": "item_241",
          "excel_row": 241,
          "description": "empapadores",
          "required_qty": "5"
        },
        {
          "id": "item_242",
          "excel_row": 242,
          "description": "sabanas de papel",
          "required_qty": "10"
        }
      ]
    },
    {
      "name": "CAJON 2 BAJO FARMABOX",
      "items": [
        {
          "id": "item_244",
          "excel_row": 244,
          "description": "Bata desechable para evitar contacto con paciente",
          "required_qty": "4"
        },
        {
          "id": "item_245",
          "excel_row": 245,
          "description": "Mascarillas con protección ocular",
          "required_qty": "4"
        },
        {
          "id": "item_246",
          "excel_row": 246,
          "description": "pantalla facial",
          "required_qty": "2"
        },
        {
          "id": "item_247",
          "excel_row": 247,
          "description": "mascarilla ffp2",
          "required_qty": "10"
        },
        {
          "id": "item_248",
          "excel_row": 248,
          "description": "Gafas de protección homologadas",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "CAJON 3 BAJO FARMABOX",
      "items": [
        {
          "id": "item_250",
          "excel_row": 250,
          "description": "Correas de sujeción específicas para contención física de pacientes agitados con llave imantada o sistema Salvafast Transfer",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "CAJON 4 BAJO FARMABOX",
      "items": [
        {
          "id": "item_253",
          "excel_row": 253,
          "description": "Trajes EPI tipo buzo con capucha, homologados por CEE de nivel 3 y tipos 4, 5 y 6 según normativa EN465-EN 1073-2 EN 14126. Calzas cubre botas de las mismas características anteriores",
          "required_qty": "2 de cada"
        }
      ]
    },
    {
      "name": "MUEBLE DE INMOVILIZACION",
      "items": []
    },
    {
      "name": "ZONA 1 DE INMOVILIZACION",
      "items": [
        {
          "id": "item_258",
          "excel_row": 258,
          "description": "Férulas de vacío de miembro superior e inferior pediátricas. Con su dispositivo de vacío respectivo.",
          "required_qty": "1 kit"
        },
        {
          "id": "item_260",
          "excel_row": 260,
          "description": "sistema anclaje pediátrico",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "ZONA 2 DE INMOVILIZACION",
      "items": [
        {
          "id": "item_262",
          "excel_row": 262,
          "description": "Juego de elementos de inmovilización cervical con cuatro puntos de apoyo mentoniano, esternal, occipital e interescapular, regulables en altura adulto (4puntos)",
          "required_qty": "3"
        },
        {
          "id": "item_265",
          "excel_row": 265,
          "description": "Juego de elementos de inmovilización cervical con cuatro puntos de apoyo, mentoniano, esternal, occipital e interescapular, regulables en altura pediátrico (3 puntos).",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "ZONA 3 DE INMOVILIZACION",
      "items": [
        {
          "id": "item_269",
          "excel_row": 269,
          "description": "Férulas de vacío de miembro superior e inferior adultas. Con su dispositivo de vacío respectivo.",
          "required_qty": "1 kit"
        },
        {
          "id": "item_271",
          "excel_row": 271,
          "description": "Juego de férulas de miembro anatómicas neumáticas tetracamerales radiotransparentes, pediátricas y de adultos, tanto de miembro superior como inferior.",
          "required_qty": "1 kit"
        }
      ]
    },
    {
      "name": "ZONA 4 DE INMOVILIZACION",
      "items": [
        {
          "id": "item_275",
          "excel_row": 275,
          "description": "Un colchón de vacío de lona impermeable y antidesgarro de alta resistencia, con asas a cada lado y cámaras independientes para su perfecta inmovilización. Con unas medidas en uso como mínimo de 205 x 90 x 5.5 cm y con unas medidas en plegado/guardado de cómo máximo de 78 x 16 x 8 cm, funda y bomba de vacío.",
          "required_qty": "1"
        },
        {
          "id": "item_280",
          "excel_row": 280,
          "description": "Soporte integrado en camilla o extraíble para transporte de la botella de oxígeno portátil o funda de transporte para la botella.",
          "required_qty": "x"
        },
        {
          "id": "item_282",
          "excel_row": 282,
          "description": "sabana y manta",
          "required_qty": "1 de cada"
        }
      ]
    },
    {
      "name": "CAJON DERECHO BAJO EL FARMABOX",
      "items": [
        {
          "id": "item_284",
          "excel_row": 284,
          "description": "Guantes de nitrilo largos Talla S, en paquete individuales",
          "required_qty": "8"
        },
        {
          "id": "item_285",
          "excel_row": 285,
          "description": "Guantes de nitrilo largos Talla M, en paquete individuales",
          "required_qty": "8"
        },
        {
          "id": "item_286",
          "excel_row": 286,
          "description": "Guantes de nitrilo largos Talla L, en paquete individuales",
          "required_qty": "8"
        },
        {
          "id": "item_287",
          "excel_row": 287,
          "description": "Mascaras EPI homologadas por CEE y que cumplan normativa EN 136 con filtros desechables para gases y productos químicos, así como para bacterias, virus y hongos, con pantalla transparente.",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "CAJON FINO BAJO EL FARMABOX",
      "items": [
        {
          "id": "item_291",
          "excel_row": 291,
          "description": "Cuña plástico",
          "required_qty": "1"
        },
        {
          "id": "item_292",
          "excel_row": 292,
          "description": "botella de plastico",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "CAJON DE SUEROTERAPIA",
      "items": []
    },
    {
      "name": "REPISA 1",
      "items": [
        {
          "id": "item_295",
          "excel_row": 295,
          "description": "Fisiológico o salino al 0´9% envase 100ml",
          "required_qty": "2"
        },
        {
          "id": "item_296",
          "excel_row": 296,
          "description": "Fisiológico o salino al 0´9% envase 250ml",
          "required_qty": "2"
        },
        {
          "id": "item_297",
          "excel_row": 297,
          "description": "Fisiologico o salino al 0.9% envase de 10ml",
          "required_qty": "8"
        }
      ]
    },
    {
      "name": "REPISA 2",
      "items": [
        {
          "id": "item_299",
          "excel_row": 299,
          "description": "Fisiológico o salino al 0´9% envase 500ml",
          "required_qty": "4"
        }
      ]
    },
    {
      "name": "REPISA 3",
      "items": [
        {
          "id": "item_301",
          "excel_row": 301,
          "description": "Ringer lactato envase 500 ml",
          "required_qty": "2"
        },
        {
          "id": "item_302",
          "excel_row": 302,
          "description": "Glucosado al 10% envase 500ml",
          "required_qty": "2"
        },
        {
          "id": "item_303",
          "excel_row": 303,
          "description": "Sistemas de goteo normal para la aplicación de sueros",
          "required_qty": "4"
        }
      ]
    },
    {
      "name": "REPISA 4",
      "items": [
        {
          "id": "item_305",
          "excel_row": 305,
          "description": "Mascarillas FFP3 con válvula",
          "required_qty": "4"
        },
        {
          "id": "item_306",
          "excel_row": 306,
          "description": "Gafas de protección FPP3",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "CAJON BAJO LOS MALETINES",
      "items": [
        {
          "id": "item_308",
          "excel_row": 308,
          "description": "Compresas de tela de gasas estériles",
          "required_qty": "10"
        },
        {
          "id": "item_309",
          "excel_row": 309,
          "description": "gasas estériles",
          "required_qty": "25"
        },
        {
          "id": "item_310",
          "excel_row": 310,
          "description": "tijeras de corta ropa",
          "required_qty": "1"
        },
        {
          "id": "item_311",
          "excel_row": 311,
          "description": "Espadrapo transparente hipoalérgico omnifilm 2.5 x 5 cm",
          "required_qty": "1"
        },
        {
          "id": "item_312",
          "excel_row": 312,
          "description": "Espadrapo recortable omnifix 5 x 5 cm",
          "required_qty": "1"
        },
        {
          "id": "item_313",
          "excel_row": 313,
          "description": "Esparadrapo de tela 2.5 x 5 cm",
          "required_qty": "1"
        },
        {
          "id": "item_314",
          "excel_row": 314,
          "description": "Vendas elásticas de crepé 5x4 cm",
          "required_qty": "3"
        },
        {
          "id": "item_315",
          "excel_row": 315,
          "description": "Vendas elásticas de crepé 10 x4 cm",
          "required_qty": "3"
        },
        {
          "id": "item_316",
          "excel_row": 316,
          "description": "Vendas de gasa orillada de 5x5cm",
          "required_qty": "5"
        },
        {
          "id": "item_317",
          "excel_row": 317,
          "description": "Vendas de gasa orillada de 20x 5cm",
          "required_qty": "5"
        }
      ]
    },
    {
      "name": "ARMARIO SOBRE EL SILLON LATERAL, CON PUERTA",
      "items": [
        {
          "id": "item_319",
          "excel_row": 319,
          "description": "venda elasticas de crepe 10x15 cm",
          "required_qty": "3"
        },
        {
          "id": "item_320",
          "excel_row": 320,
          "description": "Resucitador manual de balón con válvula unidireccional neonatal, con máscaras de adulto, niño y neonato con bolsa reservorio y conexiones con entrada de oxígeno.",
          "required_qty": "1"
        },
        {
          "id": "item_323",
          "excel_row": 323,
          "description": "gasas no estériles",
          "required_qty": "50"
        }
      ]
    },
    {
      "name": "ARMARIO SOBRE EL SILLON LATERAL, SIN PUERTA",
      "items": [
        {
          "id": "item_325",
          "excel_row": 325,
          "description": "guantes de nitrilo 1 caja de la talla S, M,L,XL",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "PUERTA LATERAL CON BALAS DE OXIGENO FIJAS",
      "items": [
        {
          "id": "item_327",
          "excel_row": 327,
          "description": "Material estándar para liberación de accidentados(Pata de Cabra y cizalla)",
          "required_qty": "X"
        },
        {
          "id": "item_328",
          "excel_row": 328,
          "description": "Cuerda estática de al menos 20 metros con resistencia a la tracción de 2.000 kilos o mas",
          "required_qty": "X"
        },
        {
          "id": "item_330",
          "excel_row": 330,
          "description": "Pares de guantes de protección homologados para recogida manipulación de escombros.",
          "required_qty": "2"
        },
        {
          "id": "item_332",
          "excel_row": 332,
          "description": "Luces/triángulos de advertencia",
          "required_qty": "X"
        },
        {
          "id": "item_333",
          "excel_row": 333,
          "description": "Equipo de oxigenoterapia con capacidad total equivalente como mínimo a 2.000 litros. Tendrá manorreductor o válvula reguladora, caudalímetro con caudal máximo no inferior a 15 l/min, conexión/toma directa caudalímetro-mascarilla y vaso humidificador. El manorreductor deberá estar homologado según normativa vigente al respecto. Dispondrá de conexiones de toma rápida para oxígeno en estacionamiento dentro de la cabina asistencial. Corresponderá a la empresa adjudicataria la recarga de oxígeno de las botellas, así como disponer de un número suficiente de botellas de reserva en cada una de las bases de los recursos.",
          "required_qty": "X"
        }
      ]
    },
    {
      "name": "CABINA DE CONDUCCION",
      "items": [
        {
          "id": "item_342",
          "excel_row": 342,
          "description": "Cuchillas corta cinturones",
          "required_qty": "1"
        },
        {
          "id": "item_343",
          "excel_row": 343,
          "description": "parte de asistencias en papel",
          "required_qty": "2"
        },
        {
          "id": "item_344",
          "excel_row": 344,
          "description": "Carpeta de transporte de partes asistenciales en aluminio con autocierre. Esta dispondrá de luz y zona de guardado de documentos",
          "required_qty": "1"
        },
        {
          "id": "item_346",
          "excel_row": 346,
          "description": "1 Juego de herramientas básicas",
          "required_qty": "1"
        },
        {
          "id": "item_347",
          "excel_row": 347,
          "description": "Cascos homologados según normativa vigente con logotipo frontal del SUC",
          "required_qty": "2"
        },
        {
          "id": "item_348",
          "excel_row": 348,
          "description": "Protector de luz o linterna autorrecargable con cono difusor amarillo",
          "required_qty": "1"
        },
        {
          "id": "item_349",
          "excel_row": 349,
          "description": "Sistema de iluminación flexible con lámpara/led, para lector de documentos.",
          "required_qty": "1"
        },
        {
          "id": "item_350",
          "excel_row": 350,
          "description": "intercomunicador cabina asistencial y conduccion",
          "required_qty": "x"
        }
      ]
    },
    {
      "name": "PUERTA TRASERA",
      "items": [
        {
          "id": "item_352",
          "excel_row": 352,
          "description": "Foco de iluminación direccionable en parte posterior del vehículo",
          "required_qty": "1"
        },
        {
          "id": "item_353",
          "excel_row": 353,
          "description": "Colchón de transferencia (Roll-Board) con soporte carga de cómo mínimo 180°Kg. De peso ligero, tela deslizante de teflón, recubierto con caja de plata, con asas integradas. {Este sistema sustituye a la sabana de traslados}",
          "required_qty": "1"
        },
        {
          "id": "item_356",
          "excel_row": 356,
          "description": "Extintor de 6 kilos de acuerdo a normativa en vigor",
          "required_qty": "1"
        },
        {
          "id": "item_357",
          "excel_row": 357,
          "description": "Dispositivo para traslado de pacientes sentados o silla de traslado. Con capacidad de traslado de paciente de cómo mínimo 150-160kg. Con sistema de ple gado, así como empuñaduras plegables y telescópicas en zona de miembros inferiores y zona dorsal. Juego de cinturones, 4 ruedas, 2 giratorias y dos de ellas con sistema de frenado, reposa pies y sistema de salva-escaleras o de oruga. Este sistema de oruga no debe ser voluminoso, para que no impida el giro de la misma por las escaleras de la vivienda)",
          "required_qty": "1"
        },
        {
          "id": "item_364",
          "excel_row": 364,
          "description": "material para el tratamiento de quemaduras(kit de quemado)",
          "required_qty": "1"
        },
        {
          "id": "item_365",
          "excel_row": 365,
          "description": "Dispositivo de liberación del accidentado o dispositivo inmovilizador de columna o corsé de extricación.",
          "required_qty": "1"
        },
        {
          "id": "item_367",
          "excel_row": 367,
          "description": "juego de cinchas(3 unidades)",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "PARED TOMA OXIGENO",
      "items": [
        {
          "id": "item_369",
          "excel_row": 369,
          "description": "Desfibrilador externo semiautomático con registro de EKG y datos de paciente con las últimas recomendaciones de las sociedades científicas actualizadas y con capacidad para el traspaso de datos hacia una fuente externa, para luego ser transferida al SUC, siguiendo normativa vigente. Deberá tener al menos dos juegos de parches de repuesto, adulto y pediátrico y rasuradoras. Dispondrá de funda de transporte.",
          "required_qty": "1"
        },
        {
          "id": "item_375",
          "excel_row": 375,
          "description": "Monitor de constantes vitales portátil y autónomo que permita la lectura automática de la tensión arterial no invasiva, la frecuencia cardiaca y la saturación de oxígeno u oxímetro. Con funcionalidades y accesorios adulto (manguito de la PSNI como mínimo 10-66 cm) y pediátrico. Así como funda de transporte y sistema de anclaje a la camilla de transporte.",
          "required_qty": "1"
        },
        {
          "id": "item_380",
          "excel_row": 380,
          "description": "Glucómetro con tiras reactivas Glucosa y cetonemia(en el monitor)",
          "required_qty": "1"
        },
        {
          "id": "item_381",
          "excel_row": 381,
          "description": "Dispositivo aspirador portátil eléctrico de alta potencia y vaso con capacidad mínima de 1L reutilizable, con posibilidad de usar bolsas desechables y dispondrá de batería autónoma, con presión mínima de -65kPa",
          "required_qty": "1"
        },
        {
          "id": "item_384",
          "excel_row": 384,
          "description": "Sistema de toma de oxígeno en pared de la cabina sanitaria, conectado por circuito interior a las botellas de oxígeno de 2000 litros descritas anteriormente. Dichas tomas dispondrán de los caudalímetros de 0 a 15 litros/min, precisos para la administración de oxigeno con mascarillas a los pacientes. Ubicados dos en la pared sin puerta corredera, cercanos a camilla y/o asientos y la otra toma en la pared que dispone de puerta corredera, cercano a la ubicación de los asientos/espacios paras sillas de ruedas traseros",
          "required_qty": "3"
        }
      ]
    },
    {
      "name": "MUEBLES DE LOS MALETINES",
      "items": [
        {
          "id": "item_393",
          "excel_row": 393,
          "description": "Inmovilizador lateral de cabeza tipo Dama de elche para uso con el tablero espinal asignado al recurso, dispondrá de sistema de sujeción frontal y en barquejo. Será ligero y de fácil limpieza. Deberá tener la posibilidad de ser usado en adultos y niños.",
          "required_qty": "1"
        },
        {
          "id": "item_397",
          "excel_row": 397,
          "description": "Tablero espinal largo con capacidad de soporte de peso de cómo mínimo 150- 160Kg, radio- traslucidas y fabricada con material de fácil limpieza y ligeras. Con sistema de sujeción de pacientes tipo araña adulto y pediátrico. Tablero será con posibilidad de poseer al mismo tiempo tablero espinal de uso pediátrico, siendo este mixto. Esta deberá estar fijada rígidamente a la estructura del vehículo, de forma que no se produzcan movimientos de importancia durante la conducción.",
          "required_qty": "1"
        },
        {
          "id": "item_404",
          "excel_row": 404,
          "description": "Equipo de oxigenoterapia portátil con capacidad total equivalente como mínimo a 400 litros. Tendrá manorreductor o válvula reguladora, caudalímetro con caudal máximo no inferior a 15 l/min, conexión/toma directa caudalímetro-mascarilla y vaso humidificador. El manorreductor deberá estar homologado según normativa vigente al respecto. Dispondrá de conexión de toma rápida para oxígeno. Corresponderá a la empresa adjudicataria la recarga de oxígeno de las botellas, así como disponer de un número suficiente de botellas de reserva en cada una de las bases de los recursos. Dispondrá de sistema de traslado y transporte, así como de sistema de enganche para la camilla de transporte.",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "FARMABOX",
      "items": []
    },
    {
      "name": "MEDICACIÓN ORAL",
      "items": [
        {
          "id": "item_416",
          "excel_row": 416,
          "description": "AAS comprimidos 300(adiro)",
          "required_qty": "5"
        },
        {
          "id": "item_417",
          "excel_row": 417,
          "description": "Metamizol Magnésico capsulas",
          "required_qty": "2"
        },
        {
          "id": "item_418",
          "excel_row": 418,
          "description": "Glucosa Gel oral 15g",
          "required_qty": "4"
        },
        {
          "id": "item_419",
          "excel_row": 419,
          "description": "Diazepam microenemas 10 mg(stesolid)",
          "required_qty": "2"
        },
        {
          "id": "item_420",
          "excel_row": 420,
          "description": "Diazepam microenemas 5 mg(stesolid)",
          "required_qty": "2"
        },
        {
          "id": "item_421",
          "excel_row": 421,
          "description": "Captopril de 25mg",
          "required_qty": "4"
        },
        {
          "id": "item_422",
          "excel_row": 422,
          "description": "Nifedipino cápsulas de 10 mg(adalat)",
          "required_qty": "4"
        },
        {
          "id": "item_423",
          "excel_row": 423,
          "description": "Nitroglicerina en spray",
          "required_qty": "2"
        },
        {
          "id": "item_424",
          "excel_row": 424,
          "description": "Paracetamol comprimidos 500 mg",
          "required_qty": "5"
        },
        {
          "id": "item_425",
          "excel_row": 425,
          "description": "Alprazolam comp. 1mg",
          "required_qty": "2"
        },
        {
          "id": "item_426",
          "excel_row": 426,
          "description": "Salbutamol (Ventolin) solución para inhalador ampollas de 2.5mg",
          "required_qty": "2"
        },
        {
          "id": "item_427",
          "excel_row": 427,
          "description": "Bromuro de Ipratropio solución para inhalación monodosis 500 microgramos(atrovent)",
          "required_qty": "2"
        },
        {
          "id": "item_429",
          "excel_row": 429,
          "description": "Bromuro de Ipratropio solución para inhalación monodosis 250 microgramos(atrovent)",
          "required_qty": "2"
        },
        {
          "id": "item_431",
          "excel_row": 431,
          "description": "Budesonida solución para nebulización monodosis",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "MEDICACIÓN PARENTAL",
      "items": [
        {
          "id": "item_433",
          "excel_row": 433,
          "description": "Metroclopramida vial 10mg/2ml",
          "required_qty": "2"
        },
        {
          "id": "item_434",
          "excel_row": 434,
          "description": "Dexclorfeniramina, Maleato. (Polaramine) 5mg/1ml",
          "required_qty": "2"
        },
        {
          "id": "item_435",
          "excel_row": 435,
          "description": "Tramadol ampollas de 100 mg",
          "required_qty": "2"
        },
        {
          "id": "item_436",
          "excel_row": 436,
          "description": "Metamizol magnésico ampollas de 2gr",
          "required_qty": "2"
        },
        {
          "id": "item_437",
          "excel_row": 437,
          "description": "Diacepam ampollas 10 mg",
          "required_qty": "2"
        },
        {
          "id": "item_438",
          "excel_row": 438,
          "description": "Midazolam ampollas 15mg/3ml",
          "required_qty": "2"
        },
        {
          "id": "item_439",
          "excel_row": 439,
          "description": "Naloxona ampollas 0´4 mg",
          "required_qty": "2"
        },
        {
          "id": "item_440",
          "excel_row": 440,
          "description": "Flumazenilo ampollas 1mg/10ml(anexate)",
          "required_qty": "1"
        },
        {
          "id": "item_441",
          "excel_row": 441,
          "description": "Adrenalina ampollas 1mg/1ml",
          "required_qty": "6"
        },
        {
          "id": "item_442",
          "excel_row": 442,
          "description": "Adrenalina precargada 1mg/1ml",
          "required_qty": "2"
        },
        {
          "id": "item_443",
          "excel_row": 443,
          "description": "Furosemida ampollas de 20mg",
          "required_qty": "3"
        },
        {
          "id": "item_444",
          "excel_row": 444,
          "description": "Atropina ampollas 1 mg (50 unidades)",
          "required_qty": "3"
        },
        {
          "id": "item_445",
          "excel_row": 445,
          "description": "Lidocaína al 1% ampollas 10ml (5 unidades)",
          "required_qty": "1"
        },
        {
          "id": "item_446",
          "excel_row": 446,
          "description": "Amiodarona ampollas 150mg/3ml",
          "required_qty": "2"
        },
        {
          "id": "item_447",
          "excel_row": 447,
          "description": "Metilprednisolona ampollas 40mg",
          "required_qty": "4"
        },
        {
          "id": "item_448",
          "excel_row": 448,
          "description": "Hidrocortisona vial 100mg",
          "required_qty": "2"
        },
        {
          "id": "item_449",
          "excel_row": 449,
          "description": "Mepivacaina al 2 % ampollas de 10ml",
          "required_qty": "1"
        },
        {
          "id": "item_450",
          "excel_row": 450,
          "description": "Mepivacaina al 1% ampollas de 10ml",
          "required_qty": "1"
        },
        {
          "id": "item_451",
          "excel_row": 451,
          "description": "Dextrosa R 50 ampollas (Glucocemin) 10gr/20ml",
          "required_qty": "2"
        },
        {
          "id": "item_452",
          "excel_row": 452,
          "description": "Agua destilada 10ml",
          "required_qty": "4"
        },
        {
          "id": "item_453",
          "excel_row": 453,
          "description": "Cánulas IV con catéter externo a la aguja (vías ):14 G(abbocath)",
          "required_qty": "2"
        },
        {
          "id": "item_454",
          "excel_row": 454,
          "description": "Cánulas IV con catéter externo a la aguja (vías ):16G (abbocath)",
          "required_qty": "2"
        },
        {
          "id": "item_455",
          "excel_row": 455,
          "description": "Cánulas IV con catéter externo a la aguja (vías ):18G (abbocath)",
          "required_qty": "2"
        },
        {
          "id": "item_456",
          "excel_row": 456,
          "description": "Cánulas IV con catéter externo a la aguja (vías ):20 G (abbocath)",
          "required_qty": "2"
        },
        {
          "id": "item_457",
          "excel_row": 457,
          "description": "Cánulas IV con catéter externo a la aguja (vías ):22G (abbocath)",
          "required_qty": "2"
        },
        {
          "id": "item_458",
          "excel_row": 458,
          "description": "Cánulas IV con catéter externo a la aguja (vías ):24G (abbocath)",
          "required_qty": "2"
        },
        {
          "id": "item_459",
          "excel_row": 459,
          "description": "Cánulas IV con catéter externo a la aguja (vías ):26 (abbocath)",
          "required_qty": "2"
        },
        {
          "id": "item_460",
          "excel_row": 460,
          "description": "Agujas desechables: 18G ( DE CARGA)",
          "required_qty": "2"
        },
        {
          "id": "item_461",
          "excel_row": 461,
          "description": "Agujas desechables: IV 20 G",
          "required_qty": "2"
        },
        {
          "id": "item_462",
          "excel_row": 462,
          "description": "Agujas desechables: IM 21G",
          "required_qty": "2"
        },
        {
          "id": "item_463",
          "excel_row": 463,
          "description": "Agujas desechables: SC 25 G",
          "required_qty": "2"
        },
        {
          "id": "item_464",
          "excel_row": 464,
          "description": "Jeringas desechables: De 1 ml (100UI)",
          "required_qty": "2"
        },
        {
          "id": "item_465",
          "excel_row": 465,
          "description": "Jeringas desechables: De 2 ML",
          "required_qty": "2"
        },
        {
          "id": "item_466",
          "excel_row": 466,
          "description": "Jeringas desechables: De 5 ML",
          "required_qty": "2"
        },
        {
          "id": "item_467",
          "excel_row": 467,
          "description": "Jeringas desechables: De 10 ML",
          "required_qty": "2"
        },
        {
          "id": "item_468",
          "excel_row": 468,
          "description": "Jeringas desechables: De 20 ML",
          "required_qty": "2"
        },
        {
          "id": "item_469",
          "excel_row": 469,
          "description": "Llaves de tres pasos con alargadera",
          "required_qty": "2"
        },
        {
          "id": "item_470",
          "excel_row": 470,
          "description": "Llaves de tres pasos sin alargadera",
          "required_qty": "2"
        },
        {
          "id": "item_471",
          "excel_row": 471,
          "description": "Tapones Luer Lock",
          "required_qty": "2"
        },
        {
          "id": "item_472",
          "excel_row": 472,
          "description": "Compresores venosos de elastómero",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "MALETÍN CIRCULATORIO",
      "items": [
        {
          "id": "item_474",
          "excel_row": 474,
          "description": "Mochila sanitaria de rescate con las siguientes características mínimas:",
          "required_qty": "X"
        },
        {
          "id": "item_475",
          "excel_row": 475,
          "description": "Medidas: 30x56.5x23.5cm (Medidas máximas)",
          "required_qty": "X"
        },
        {
          "id": "item_476",
          "excel_row": 476,
          "description": "Capacidad: 32.96L",
          "required_qty": "X"
        },
        {
          "id": "item_477",
          "excel_row": 477,
          "description": "Material de poliéster plastificado lavable y resistente al agua",
          "required_qty": "X"
        },
        {
          "id": "item_478",
          "excel_row": 478,
          "description": "Material resistente al uso en rescate e intervenciones sanitarias",
          "required_qty": "X"
        },
        {
          "id": "item_479",
          "excel_row": 479,
          "description": "Asas ergonómicas",
          "required_qty": "X"
        },
        {
          "id": "item_480",
          "excel_row": 480,
          "description": "Tiradores anchos con bandas reflectantes",
          "required_qty": "X"
        },
        {
          "id": "item_481",
          "excel_row": 481,
          "description": "Compartimentos diversos",
          "required_qty": "X"
        },
        {
          "id": "item_482",
          "excel_row": 482,
          "description": "Divisiones internas con gomas elásticas y rejillas",
          "required_qty": "X"
        },
        {
          "id": "item_483",
          "excel_row": 483,
          "description": "Panel trasero acolchado y ergonómico",
          "required_qty": "X"
        },
        {
          "id": "item_484",
          "excel_row": 484,
          "description": "Bolsillos frontales",
          "required_qty": "X"
        },
        {
          "id": "item_485",
          "excel_row": 485,
          "description": "Bandas reflectantes",
          "required_qty": "X"
        },
        {
          "id": "item_486",
          "excel_row": 486,
          "description": "Banda de trolley, la cual se pueda ocultar",
          "required_qty": "X"
        },
        {
          "id": "item_487",
          "excel_row": 487,
          "description": "Sistema de Trolley ruedas con posibilidad de extracción",
          "required_qty": "X"
        },
        {
          "id": "item_488",
          "excel_row": 488,
          "description": "Bandas de goma en el exterior para proteger la bolsa de forma horizontal o vertical",
          "required_qty": "X"
        }
      ]
    },
    {
      "name": "ESTUCHE 1",
      "items": [
        {
          "id": "item_490",
          "excel_row": 490,
          "description": "aguja desechable de carga nº18",
          "required_qty": "6"
        },
        {
          "id": "item_491",
          "excel_row": 491,
          "description": "aguja desechable iv nº 20",
          "required_qty": "6"
        },
        {
          "id": "item_492",
          "excel_row": 492,
          "description": "aguja desechable IM N 21",
          "required_qty": "6"
        },
        {
          "id": "item_493",
          "excel_row": 493,
          "description": "aguja desechable SC N 25",
          "required_qty": "6"
        },
        {
          "id": "item_494",
          "excel_row": 494,
          "description": "canula IV con cateter externo a la aguja nº 14G (ABBOCATH)",
          "required_qty": "2"
        },
        {
          "id": "item_495",
          "excel_row": 495,
          "description": "canula IV con cateter externo a la aguja nº 16G (ABBOCATH)",
          "required_qty": "2"
        },
        {
          "id": "item_496",
          "excel_row": 496,
          "description": "canula IV con cateter externo a la aguja nº 18G (ABBOCATH)",
          "required_qty": "2"
        },
        {
          "id": "item_497",
          "excel_row": 497,
          "description": "canula IV con cateter externo a la aguja nº 20G (ABBOCATH)",
          "required_qty": "2"
        },
        {
          "id": "item_498",
          "excel_row": 498,
          "description": "canula IV con cateter externo a la aguja nº 22G (ABBOCATH)",
          "required_qty": "2"
        },
        {
          "id": "item_499",
          "excel_row": 499,
          "description": "canula IV con cateter externo a la aguja nº 24G (ABBOCATH)",
          "required_qty": "2"
        },
        {
          "id": "item_500",
          "excel_row": 500,
          "description": "canula IV con cateter externo a la aguja nº 26G (ABBOCATH)",
          "required_qty": "2"
        },
        {
          "id": "item_501",
          "excel_row": 501,
          "description": "Llave de tres pasos con alargadera",
          "required_qty": "2"
        },
        {
          "id": "item_502",
          "excel_row": 502,
          "description": "Llave de tres pasos sin alargadera",
          "required_qty": "2"
        },
        {
          "id": "item_503",
          "excel_row": 503,
          "description": "Tapon Luer Lock",
          "required_qty": "2"
        },
        {
          "id": "item_504",
          "excel_row": 504,
          "description": "Compresor venoso de elastómero",
          "required_qty": "2"
        },
        {
          "id": "item_505",
          "excel_row": 505,
          "description": "Apósito transparente de fijación vías venosa",
          "required_qty": "3"
        }
      ]
    },
    {
      "name": "ESTUCHE 2",
      "items": [
        {
          "id": "item_507",
          "excel_row": 507,
          "description": "Jeringa desechable: 1ml",
          "required_qty": "4"
        },
        {
          "id": "item_508",
          "excel_row": 508,
          "description": "Jeringa desechable: 2 ml",
          "required_qty": "4"
        },
        {
          "id": "item_509",
          "excel_row": 509,
          "description": "Jeringa desechable:5 ml",
          "required_qty": "4"
        },
        {
          "id": "item_510",
          "excel_row": 510,
          "description": "Jeringa desechable:10 ml",
          "required_qty": "4"
        },
        {
          "id": "item_511",
          "excel_row": 511,
          "description": "Jeringa desechable:20 ml",
          "required_qty": "4"
        },
        {
          "id": "item_512",
          "excel_row": 512,
          "description": "Jeringa desechable: 50 ml cono ancho",
          "required_qty": "4"
        }
      ]
    },
    {
      "name": "ESTUCHE 3",
      "items": [
        {
          "id": "item_514",
          "excel_row": 514,
          "description": "Pinza de disección sin dientes de punta fina ( Estéril)",
          "required_qty": "1"
        },
        {
          "id": "item_515",
          "excel_row": 515,
          "description": "Tijeras rectas de punta fina de 10cm( Estéril)",
          "required_qty": "1"
        },
        {
          "id": "item_516",
          "excel_row": 516,
          "description": "Mosquitos rectos.( Estéril)",
          "required_qty": "1"
        },
        {
          "id": "item_517",
          "excel_row": 517,
          "description": "Bisturí desechable, o mango de bisturí con hojas desechables nº 11",
          "required_qty": "1"
        },
        {
          "id": "item_518",
          "excel_row": 518,
          "description": "Bisturí desechable, o mango de bisturí con hojas desechables nº15",
          "required_qty": "1"
        },
        {
          "id": "item_519",
          "excel_row": 519,
          "description": "Bisturí desechable, o mango de bisturí con hojas desechables nº 21",
          "required_qty": "1"
        },
        {
          "id": "item_520",
          "excel_row": 520,
          "description": "Sutura aguja curva:1/0",
          "required_qty": "1"
        },
        {
          "id": "item_521",
          "excel_row": 521,
          "description": "Sutura aguja curva:2/0",
          "required_qty": "1"
        },
        {
          "id": "item_522",
          "excel_row": 522,
          "description": "Sutura aguja curva:3/0",
          "required_qty": "1"
        },
        {
          "id": "item_523",
          "excel_row": 523,
          "description": "Sutura aguja curva:4/0",
          "required_qty": "1"
        },
        {
          "id": "item_524",
          "excel_row": 524,
          "description": "Sutura aguja curva:5/0",
          "required_qty": "1"
        },
        {
          "id": "item_525",
          "excel_row": 525,
          "description": "Sutura aguja curva:6/0",
          "required_qty": "1"
        },
        {
          "id": "item_526",
          "excel_row": 526,
          "description": "Manta termoaislante aluminizada",
          "required_qty": "2"
        },
        {
          "id": "item_527",
          "excel_row": 527,
          "description": "Depresores linguales",
          "required_qty": "2"
        },
        {
          "id": "item_528",
          "excel_row": 528,
          "description": "Rasuradora",
          "required_qty": "2"
        },
        {
          "id": "item_529",
          "excel_row": 529,
          "description": "Bolsa de frío químico",
          "required_qty": "1"
        },
        {
          "id": "item_530",
          "excel_row": 530,
          "description": "Torniquete de alta calidad y resistencia. El molinete de una pieza sólida resistente a altas temperaturas y condiciones más extremas. El gancho debe mantener el molinete firmemente sujetado durante las evacuaciones. Apto para aplicar a las extremidades atrapadas. Ligero y resistente se debe poder aplicar fácilmente con una sola mano Deberá de disponer de sistema de anotación de hora de colocación del torniquete.",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "ESTUCHE 4",
      "items": [
        {
          "id": "item_537",
          "excel_row": 537,
          "description": "Sistemas de goteo normal para la aplicación de sueros",
          "required_qty": "4"
        },
        {
          "id": "item_538",
          "excel_row": 538,
          "description": "Fisiológico o salino al 0´9% envase 500ml",
          "required_qty": "1"
        },
        {
          "id": "item_539",
          "excel_row": 539,
          "description": "Fisiológico o salino al 0´9% envase 100ml",
          "required_qty": "2"
        },
        {
          "id": "item_540",
          "excel_row": 540,
          "description": "Fisiologico o salino al 0.9% envase de 10ml",
          "required_qty": "4"
        }
      ]
    },
    {
      "name": "ESTUCHE 5 (AMPULARIO)",
      "items": [
        {
          "id": "item_542",
          "excel_row": 542,
          "description": "Adrenalina precargada 1mg/1ml",
          "required_qty": "2"
        },
        {
          "id": "item_543",
          "excel_row": 543,
          "description": "Glucosa Gel oral 15g",
          "required_qty": "2"
        },
        {
          "id": "item_544",
          "excel_row": 544,
          "description": "Agua destilada 10ml",
          "required_qty": "2"
        },
        {
          "id": "item_545",
          "excel_row": 545,
          "description": "Lubricante anestésico hidrosoluble",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "ESTUCHE 6",
      "items": [
        {
          "id": "item_547",
          "excel_row": 547,
          "description": "Esparadrapo de tela 2.5 x 5 cm",
          "required_qty": "1"
        },
        {
          "id": "item_548",
          "excel_row": 548,
          "description": "Espadrapo transparente hipoalérgico omnifilm 2.5 x 5 cm",
          "required_qty": "1"
        },
        {
          "id": "item_549",
          "excel_row": 549,
          "description": "Venda elástica de crepé 5x4 cm",
          "required_qty": "2"
        },
        {
          "id": "item_550",
          "excel_row": 550,
          "description": "Venda elástica de crepé10x4cm",
          "required_qty": "2"
        },
        {
          "id": "item_551",
          "excel_row": 551,
          "description": "Vendas elásticas de crepé 15x 10cm",
          "required_qty": "2"
        },
        {
          "id": "item_552",
          "excel_row": 552,
          "description": "Venda de gasa orillada de 5x5cm",
          "required_qty": "2"
        },
        {
          "id": "item_553",
          "excel_row": 553,
          "description": "Venda de gasa orillada de 20x5cm",
          "required_qty": "2"
        },
        {
          "id": "item_554",
          "excel_row": 554,
          "description": "Clorhexidina 125cc",
          "required_qty": "1"
        },
        {
          "id": "item_555",
          "excel_row": 555,
          "description": "Povidona Yodada 125cc",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "ESTUCHE 7",
      "items": [
        {
          "id": "item_557",
          "excel_row": 557,
          "description": "gasas estériles",
          "required_qty": "10"
        },
        {
          "id": "item_558",
          "excel_row": 558,
          "description": "Compresas de tela de gasas estériles",
          "required_qty": "5"
        },
        {
          "id": "item_559",
          "excel_row": 559,
          "description": "Tijera Corta Ropa",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "ESTUCHE 8",
      "items": [
        {
          "id": "item_561",
          "excel_row": 561,
          "description": "Sistema de microgoteo pediátrico para la aplicación de sueros",
          "required_qty": "1"
        },
        {
          "id": "item_562",
          "excel_row": 562,
          "description": "Gorro para lactante",
          "required_qty": "2"
        },
        {
          "id": "item_563",
          "excel_row": 563,
          "description": "Pinzas de cordón umbilical",
          "required_qty": "2"
        },
        {
          "id": "item_564",
          "excel_row": 564,
          "description": "Bolsas de diuresis: pediátrico",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "BOLSILLO INTERIOR CON CREMALLERA",
      "items": [
        {
          "id": "item_566",
          "excel_row": 566,
          "description": "Guantes estériles 6`5",
          "required_qty": "2"
        },
        {
          "id": "item_567",
          "excel_row": 567,
          "description": "Guantes estériles 7",
          "required_qty": "2"
        },
        {
          "id": "item_568",
          "excel_row": 568,
          "description": "Guantes estériles 7`5",
          "required_qty": "2"
        },
        {
          "id": "item_569",
          "excel_row": 569,
          "description": "Guantes estériles 8",
          "required_qty": "2"
        },
        {
          "id": "item_570",
          "excel_row": 570,
          "description": "Guantes estériles 8`5",
          "required_qty": "2"
        },
        {
          "id": "item_571",
          "excel_row": 571,
          "description": "Campos estériles desechables no fenestrados",
          "required_qty": "1"
        },
        {
          "id": "item_572",
          "excel_row": 572,
          "description": "Sonda nasogástrica: nº6",
          "required_qty": "1"
        },
        {
          "id": "item_573",
          "excel_row": 573,
          "description": "Sonda nasogástrica: nº8",
          "required_qty": "1"
        },
        {
          "id": "item_574",
          "excel_row": 574,
          "description": "Sonda nasogástrica: nº10",
          "required_qty": "1"
        },
        {
          "id": "item_575",
          "excel_row": 575,
          "description": "Sonda nasogástrica: nº12",
          "required_qty": "1"
        },
        {
          "id": "item_576",
          "excel_row": 576,
          "description": "Sonda nasogástrica: nº14",
          "required_qty": "1"
        },
        {
          "id": "item_577",
          "excel_row": 577,
          "description": "Sonda nasogástrica: nº16",
          "required_qty": "1"
        },
        {
          "id": "item_578",
          "excel_row": 578,
          "description": "Sonda nasogástrica: nº18",
          "required_qty": "1"
        },
        {
          "id": "item_579",
          "excel_row": 579,
          "description": "Tapones de sondas nasogástricas y vesicales",
          "required_qty": "2"
        },
        {
          "id": "item_580",
          "excel_row": 580,
          "description": "Colector de orina",
          "required_qty": "2"
        },
        {
          "id": "item_581",
          "excel_row": 581,
          "description": "Vaselina",
          "required_qty": "1"
        },
        {
          "id": "item_582",
          "excel_row": 582,
          "description": "Bolsa de diuresis Adulto",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "SOLAPA INTERIOR",
      "items": [
        {
          "id": "item_584",
          "excel_row": 584,
          "description": "Linterna de exploración pupilar",
          "required_qty": "1"
        },
        {
          "id": "item_585",
          "excel_row": 585,
          "description": "Sonda de Foley de silicona nº8",
          "required_qty": "1"
        },
        {
          "id": "item_586",
          "excel_row": 586,
          "description": "Sonda de Foley de silicona nº10",
          "required_qty": "1"
        },
        {
          "id": "item_587",
          "excel_row": 587,
          "description": "Sonda de Foley de silicona nº12",
          "required_qty": "1"
        },
        {
          "id": "item_588",
          "excel_row": 588,
          "description": "Sonda de Foley de silicona nº14",
          "required_qty": "1"
        },
        {
          "id": "item_589",
          "excel_row": 589,
          "description": "Sonda de Foley de silicona nº16",
          "required_qty": "1"
        },
        {
          "id": "item_590",
          "excel_row": 590,
          "description": "Sonda de Foley de silicona nº18",
          "required_qty": "1"
        },
        {
          "id": "item_591",
          "excel_row": 591,
          "description": "Sonda de Foley de silicona nº20",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "BOLSILLO DE FUERA GRANDE",
      "items": [
        {
          "id": "item_593",
          "excel_row": 593,
          "description": "Recipiente de objetos cortantes y puntiagudos. Contenedor residuos PEQUEÑO.",
          "required_qty": "1"
        },
        {
          "id": "item_595",
          "excel_row": 595,
          "description": "Guantes de nitrilo no estériles tamaño S, M, L, XL",
          "required_qty": "varios"
        },
        {
          "id": "item_596",
          "excel_row": 596,
          "description": "Glucómetro con tiras reactivas Glucosa y cetonemia",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "BOLSILLO DE FUERA PEQUEÑO",
      "items": [
        {
          "id": "item_598",
          "excel_row": 598,
          "description": "bolsa de basura",
          "required_qty": "varias"
        }
      ]
    },
    {
      "name": "JUNTO A LOS ESTUCHES",
      "items": [
        {
          "id": "item_600",
          "excel_row": 600,
          "description": "bolsa de vomitos",
          "required_qty": "2"
        },
        {
          "id": "item_601",
          "excel_row": 601,
          "description": "Mascarillas FFP3 con válvula",
          "required_qty": "3"
        }
      ]
    },
    {
      "name": "MALETÍN RESPIRATORIO",
      "items": []
    },
    {
      "name": "Mochila sanitaria de rescate con las siguientes características mínimas:",
      "items": [
        {
          "id": "item_604",
          "excel_row": 604,
          "description": "Medidas: 30x56.5x23.5cm (Medidas máximas)",
          "required_qty": "X"
        },
        {
          "id": "item_605",
          "excel_row": 605,
          "description": "Capacidad: 32.96L",
          "required_qty": "X"
        },
        {
          "id": "item_606",
          "excel_row": 606,
          "description": "Material de poliéster plastificado lavable y resistente al agua",
          "required_qty": "X"
        },
        {
          "id": "item_607",
          "excel_row": 607,
          "description": "Material resistente al uso en rescate e intervenciones sanitarias",
          "required_qty": "X"
        },
        {
          "id": "item_608",
          "excel_row": 608,
          "description": "Asas ergonómicas",
          "required_qty": "X"
        },
        {
          "id": "item_609",
          "excel_row": 609,
          "description": "Tiradores anchos con bandas reflectantes",
          "required_qty": "X"
        },
        {
          "id": "item_610",
          "excel_row": 610,
          "description": "Compartimentos diversos",
          "required_qty": "X"
        },
        {
          "id": "item_611",
          "excel_row": 611,
          "description": "Divisiones internas con gomas elásticas y rejillas",
          "required_qty": "X"
        },
        {
          "id": "item_612",
          "excel_row": 612,
          "description": "Panel trasero acolchado y ergonómico",
          "required_qty": "X"
        },
        {
          "id": "item_613",
          "excel_row": 613,
          "description": "Bolsillos frontales",
          "required_qty": "X"
        },
        {
          "id": "item_614",
          "excel_row": 614,
          "description": "Bandas reflectantes",
          "required_qty": "X"
        },
        {
          "id": "item_615",
          "excel_row": 615,
          "description": "Sistema de Trolley ruedas con posibilidad de extracción",
          "required_qty": "X"
        },
        {
          "id": "item_616",
          "excel_row": 616,
          "description": "Banda de trolley, la cual se pueda ocultar",
          "required_qty": "X"
        },
        {
          "id": "item_617",
          "excel_row": 617,
          "description": "Bandas de goma en el exterior para proteger la bolsa de forma horizontal o vertical",
          "required_qty": "X"
        },
        {
          "id": "item_619",
          "excel_row": 619,
          "description": "Bolsillo transparente delantero para identificar la mochila y tipo con indicativo del recurso y logotipo de la empresa adjudicataria y del SUC",
          "required_qty": "X"
        },
        {
          "id": "item_621",
          "excel_row": 621,
          "description": "Arandela de extracción del tubo de oxigeno",
          "required_qty": "X"
        },
        {
          "id": "item_622",
          "excel_row": 622,
          "description": "Cinta de sujeción para botella de oxigeno",
          "required_qty": "X"
        },
        {
          "id": "item_623",
          "excel_row": 623,
          "description": "Espacio para balones resucitadores y mascarillas",
          "required_qty": "X"
        }
      ]
    },
    {
      "name": "COMPARTIMENTO DE OXIGENO",
      "items": [
        {
          "id": "item_625",
          "excel_row": 625,
          "description": "Botella de oxígeno portátil adaptada para la mochila. Tendrá manorreductor o válvula reguladora, caudalímetro con caudal máximo no inferior a 15 l/min, conexión/toma directa caudalímetro-mascarilla. El manorreductor deberá estar homologado según normativa vigente al respecto. Dispondrá de conexión de toma rápida para oxígeno. Corresponderá a la empresa adjudicataria la recarga de oxígeno de las botellas, así como disponer de un número suficiente de botellas de reserva en cada una de las bases de los recursos.",
          "required_qty": "1"
        },
        {
          "id": "item_630",
          "excel_row": 630,
          "description": "Resucitador manual de balón con válvula unidireccional adulto con máscaras de adulto con bolsa reservorio y conexiones con entrada de oxígeno.",
          "required_qty": "1"
        },
        {
          "id": "item_633",
          "excel_row": 633,
          "description": "Resucitador manual de balón con válvula unidireccional pediátrico con máscaras de pediátrica con bolsa reservorio y conexiones con entrada de oxígeno.",
          "required_qty": "1"
        },
        {
          "id": "item_636",
          "excel_row": 636,
          "description": "Resucitador manual de balón con válvula unidireccional neonatal con máscaras de neonato con bolsa reservorio y conexiones con entrada de oxígeno.",
          "required_qty": "1"
        },
        {
          "id": "item_639",
          "excel_row": 639,
          "description": "Filtros con conexión universal virucida, bactericida, fungicida",
          "required_qty": "1 en cada ambu"
        },
        {
          "id": "item_641",
          "excel_row": 641,
          "description": "Dispositivo de aspiración portátil manual con alta capacidad de succión y fácil guardado, con posibilidad de limpieza y reutilización y sondas de varios tamaños adultos y pediátricas",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "ESTUCHE 1",
      "items": [
        {
          "id": "item_645",
          "excel_row": 645,
          "description": "Mascarillas tipo Venturi adulto",
          "required_qty": "2"
        },
        {
          "id": "item_646",
          "excel_row": 646,
          "description": "Mascarilla para aerosoles adulto (nebulizacion)",
          "required_qty": "2"
        },
        {
          "id": "item_647",
          "excel_row": 647,
          "description": "Mascarilla reservorio adulto",
          "required_qty": "2"
        },
        {
          "id": "item_648",
          "excel_row": 648,
          "description": "Mascarilla Traqueotomía",
          "required_qty": "1"
        },
        {
          "id": "item_649",
          "excel_row": 649,
          "description": "Gafas nasales adultos",
          "required_qty": "4"
        }
      ]
    },
    {
      "name": "ESTUCHE 2",
      "items": [
        {
          "id": "item_651",
          "excel_row": 651,
          "description": "Mascarillas tipo Venturi pediátricas",
          "required_qty": "1"
        },
        {
          "id": "item_652",
          "excel_row": 652,
          "description": "Mascarilla para aerosoles pediátrico (nebulizacion)",
          "required_qty": "1"
        },
        {
          "id": "item_653",
          "excel_row": 653,
          "description": "Mascarilla reservorio pediátrico",
          "required_qty": "1"
        },
        {
          "id": "item_654",
          "excel_row": 654,
          "description": "Gafas nasales pediátricas",
          "required_qty": "2"
        }
      ]
    },
    {
      "name": "ESTUCHE 3",
      "items": [
        {
          "id": "item_656",
          "excel_row": 656,
          "description": "Laringoscopio de fibra óptica metálico con juego completo de palas rectas y curvas de adulto y pediátricas. Deberá de tener pilas y bombillas de repuesto.",
          "required_qty": "1"
        },
        {
          "id": "item_659",
          "excel_row": 659,
          "description": "Materiales de fijación adhesivos. Dispositivo de cinta de velcro o sistema similar para fijación de tubos endotraqueales.",
          "required_qty": "1"
        },
        {
          "id": "item_661",
          "excel_row": 661,
          "description": "Lubricante anestésico hidrosoluble",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "ESTUCHE 4",
      "items": [
        {
          "id": "item_663",
          "excel_row": 663,
          "description": "Pinzas de Magill pediátrico",
          "required_qty": "1"
        },
        {
          "id": "item_664",
          "excel_row": 664,
          "description": "Pinzas de Magill adulto",
          "required_qty": "1"
        },
        {
          "id": "item_665",
          "excel_row": 665,
          "description": "Pinzas de Kocher",
          "required_qty": "1"
        },
        {
          "id": "item_666",
          "excel_row": 666,
          "description": "Jeringas de 5ml",
          "required_qty": "3"
        },
        {
          "id": "item_667",
          "excel_row": 667,
          "description": "Jeringas de 10ml",
          "required_qty": "3"
        },
        {
          "id": "item_668",
          "excel_row": 668,
          "description": "Jeringas de 20ml",
          "required_qty": "3"
        },
        {
          "id": "item_669",
          "excel_row": 669,
          "description": "agujas nº 18",
          "required_qty": "4"
        }
      ]
    },
    {
      "name": "SOLAPA INTERIOR",
      "items": [
        {
          "id": "item_671",
          "excel_row": 671,
          "description": "Cánulas orofaríngeas: nº00",
          "required_qty": "3"
        },
        {
          "id": "item_672",
          "excel_row": 672,
          "description": "Cánulas orofaríngeas: nº0",
          "required_qty": "3"
        },
        {
          "id": "item_673",
          "excel_row": 673,
          "description": "Cánulas orofaríngeas: nº1",
          "required_qty": "3"
        },
        {
          "id": "item_674",
          "excel_row": 674,
          "description": "Cánulas orofaríngeas: nº2",
          "required_qty": "3"
        },
        {
          "id": "item_675",
          "excel_row": 675,
          "description": "Cánulas orofaríngeas: nº3",
          "required_qty": "3"
        },
        {
          "id": "item_676",
          "excel_row": 676,
          "description": "Cánulas orofaríngeas: nº4",
          "required_qty": "3"
        },
        {
          "id": "item_677",
          "excel_row": 677,
          "description": "Cánulas orofaríngeas: nº5",
          "required_qty": "3"
        }
      ]
    },
    {
      "name": "BOLSILLO INTERIOR CON CREMALLERA",
      "items": [
        {
          "id": "item_679",
          "excel_row": 679,
          "description": "Tubos endotraqueales sin balón:2,5",
          "required_qty": "1"
        },
        {
          "id": "item_680",
          "excel_row": 680,
          "description": "Tubos endotraqueales sin balón:3",
          "required_qty": "1"
        },
        {
          "id": "item_681",
          "excel_row": 681,
          "description": "Tubos endotraqueales sin balón:3,5",
          "required_qty": "1"
        },
        {
          "id": "item_682",
          "excel_row": 682,
          "description": "Tubos endotraqueales sin balón:4",
          "required_qty": "1"
        },
        {
          "id": "item_683",
          "excel_row": 683,
          "description": "Tubos endotraqueales sin balón:4,5",
          "required_qty": "1"
        },
        {
          "id": "item_684",
          "excel_row": 684,
          "description": "Tubos endotraqueales sin balón:5",
          "required_qty": "1"
        },
        {
          "id": "item_685",
          "excel_row": 685,
          "description": "Tubos endotraqueales sin balón:5,5",
          "required_qty": "1"
        },
        {
          "id": "item_686",
          "excel_row": 686,
          "description": "Tubos endotraqueales sin balón:6",
          "required_qty": "1"
        },
        {
          "id": "item_687",
          "excel_row": 687,
          "description": "Tubos endotraqueales con balón:5",
          "required_qty": "1"
        },
        {
          "id": "item_688",
          "excel_row": 688,
          "description": "Tubos endotraqueales con balón:5,5",
          "required_qty": "1"
        },
        {
          "id": "item_689",
          "excel_row": 689,
          "description": "Tubos endotraqueales con balón:6",
          "required_qty": "1"
        },
        {
          "id": "item_690",
          "excel_row": 690,
          "description": "Tubos endotraqueales con balón:6,5",
          "required_qty": "1"
        },
        {
          "id": "item_691",
          "excel_row": 691,
          "description": "Tubos endotraqueales con balón:7",
          "required_qty": "1"
        },
        {
          "id": "item_692",
          "excel_row": 692,
          "description": "Tubos endotraqueales con balón:7,5",
          "required_qty": "1"
        },
        {
          "id": "item_693",
          "excel_row": 693,
          "description": "Tubos endotraqueales con balón:8",
          "required_qty": "1"
        },
        {
          "id": "item_694",
          "excel_row": 694,
          "description": "Tubos endotraqueales con balón:8,5",
          "required_qty": "1"
        },
        {
          "id": "item_695",
          "excel_row": 695,
          "description": "Tubos endotraqueales con balón:9",
          "required_qty": "1"
        },
        {
          "id": "item_696",
          "excel_row": 696,
          "description": "Tubos endotraqueales con balón:9,5",
          "required_qty": "1"
        },
        {
          "id": "item_697",
          "excel_row": 697,
          "description": "Fiadores para tubos endotraqueales Adultos",
          "required_qty": "1"
        },
        {
          "id": "item_698",
          "excel_row": 698,
          "description": "Fiadores para tubos endotraqueales pediátricos",
          "required_qty": "1"
        },
        {
          "id": "item_699",
          "excel_row": 699,
          "description": "mascarilla laringea nº3",
          "required_qty": "1"
        },
        {
          "id": "item_700",
          "excel_row": 700,
          "description": "mascarilla laringea nº4",
          "required_qty": "1"
        },
        {
          "id": "item_701",
          "excel_row": 701,
          "description": "mascarilla laringea nº5",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "BOLSILLO GRANDE DE FUERA",
      "items": [
        {
          "id": "item_703",
          "excel_row": 703,
          "description": "Ventilador con acoplamiento boca a máscara, con entrada de oxígeno. Dispositivo de barrera.",
          "required_qty": "1"
        },
        {
          "id": "item_704",
          "excel_row": 704,
          "description": "Bolsas de vómito",
          "required_qty": "1"
        },
        {
          "id": "item_705",
          "excel_row": 705,
          "description": "Recipiente de objetos cortantes y putiagudos. Contenedor residuos PEQUEÑO",
          "required_qty": "1"
        }
      ]
    },
    {
      "name": "BOLSILLO PEQUEÑO DE FUERA",
      "items": [
        {
          "id": "item_708",
          "excel_row": 708,
          "description": "bolsa de basuras",
          "required_qty": "varias"
        }
      ]
    },
    {
      "name": "MEJORAS EN 1 UNIDAD(1311)",
      "items": [
        {
          "id": "item_710",
          "excel_row": 710,
          "description": "monitor desfibrilador modo DESA",
          "required_qty": "1"
        },
        {
          "id": "item_711",
          "excel_row": 711,
          "description": "respirador artifical IPPV",
          "required_qty": "1"
        }
      ]
    }
  ]
};
