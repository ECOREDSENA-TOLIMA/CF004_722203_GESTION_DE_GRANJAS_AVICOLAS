export default {
  global: {
    componenteFormativo:
      'Plan de producción y evaluación de resultados de la empresa',
    descripcionCurso:
      'El proceso productivo en una empresa toma vital importancia en su actividad misional; comprender las exigencias del mercado en contraste con la capacidad instalada para atenderlas aportará elementos de juicio para ejecutar la producción en función de una estimación del volumen de ventas esperado. Finalmente, refinar los procesos a través de un plan de mejora maximizará la generación de valor.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Presupuesto de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Distribución de recursos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Órdenes de producción',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Capacidad instalada',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Trabajo en equipo',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Informes de ejecución',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estructura',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Análisis',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Demanda del producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Teoría de la oferta y la demanda',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Cálculo de la demanda',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Plan de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Hallazgos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Pasos para implementarlo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Acciones correctivas y de mejora',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_04_772203.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Diagrama de Gantt 1.2.2',
      referencia:
        'Saber Programas. (2017). <em>¿Cómo crear un diagrama de Gantt en Excel? [ Cronograma usando los gráficos]</em> [Video]. YouTube. https://www.youtube.com/watch?v=chR6kx4btDQ ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=chR6kx4btDQ ',
    },
    {
      tema: 'Órdenes de producción 1.3',
      referencia:
        'Padilla F. (2016). <em>Costos por órdenes de producción.</em> [Video]. YouTube. https://www.youtube.com/watch?v=xQG946KNQv',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xQG946KNQvg ',
    },
    {
      tema: 'Técnicas de trabajo en equipo 1-5-2',
      referencia:
        'Coworkingfy. (2019). <em>Técnicas de trabajo en equipo | 4 métodos para lograr la unión.</em> [Video]. YouTube. https://coworkingfy.com/tecnicas-trabajo-en-equipo/',
      tipo: 'Artículo web',
      link: 'https://coworkingfy.com/tecnicas-trabajo-en-equipo/  ',
    },
    {
      tema: 'Ley de la oferta y la demanda 3.1',
      referencia:
        'Sevilla A. (2015). <em>Ley de oferta y demanda.</em> Economipedia.com. https://economipedia.com/definiciones/ley-de-oferta-y-demanda.html',
      tipo: 'Artículo web',
      link:
        'https://economipedia.com/definiciones/ley-de-oferta-y-demanda.html',
    },
  ],
  glosario: [
    {
      termino: 'Producción',
      significado: 'Elaboración o transformación de un producto.',
    },
    {
      termino: 'Línea de producción',
      significado:
        'Secuencia de operaciones asociadas a la elaboración de un producto.',
    },
    {
      termino: 'Diagrama',
      significado: 'Representación gráfica de una idea o proceso.',
    },
    {
      termino: 'Cronograma',
      significado:
        'Representación gráfica de actividades dispuestas en un periodo de tiempo.',
    },
    {
      termino: 'Demanda',
      significado:
        'Cantidad exigida de un bien o servicio por sus consumidores.',
    },
    {
      termino: 'Informe',
      significado: 'Documento elaborado con el fin de compartir información.',
    },
    {
      termino: 'Oferta',
      significado: 'Ofrecimiento de productos para la venta.',
    },
  ],
  referencias: [
    {
      referencia: 'Aneca. (s.f.). Plan de mejoras. Herramienta de trabajo.',
      link:
        'https://www.academia.edu/28134046/PLAN_DE_MEJORAS_Herramienta_de_trabajo_Agencia_Nacional_de_Evaluaci%C3%B3n_de_la_Calidad_y_Acreditaci%C3%B3n',
    },
    {
      referencia:
        'Asana. (2020). ¿No conocías los diagramas de Gantt? Comienza aquí',
      link: 'https://asana.com/es/resources/gantt-chart-basics ',
    },
    {
      referencia:
        'Burbano A. (2006). Costos y presupuestos. Ediciones Uniandes',
      link: 'https://es.scribd.com/document/501990720/costos-y-presupuestos#',
    },
    {
      referencia:
        'Coworkingfy. (s.f.). Técnicas de trabajo en equipo | 4 métodos para lograr la unión. Coworkingfy.',
      link: 'https://coworkingfy.com/tecnicas-trabajo-en-equipo/',
    },
    {
      referencia:
        'Guarnizo, C. F., y Cárdenas, S. M. (2015). Costos por órdenes de producción y por procesos. La Salle.',
      link:
        'https://ciencia.lasalle.edu.co/cgi/viewcontent.cgi?article=1007&context=edunisalle_administracion-economia',
    },
    {
      referencia: '(S/f). Edu.co. Recuperado el 6 de julio de 2023, de',
      link:
        'https://repositorio.sena.edu.co/bitstream/11404/4177/1/unidad_07_sistema_costos_ordenes_produccion.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Mercedes Orduz Gómez',
          cargo: 'Experta Temática',
          centro:
            'Regional Santander - Centro de Atención al Sector Agropecuario',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios (CIES)',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
