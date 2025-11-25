export default {
  global: {
    Name: 'Cartografía predial y aplicación de los principios agroecológicos',
    Description:
      'Este componente consolida las bases conceptuales, metodológicas y territoriales para aplicar el IPPTA en la caracterización predial. Integra la cartografía agroecológica, el agroecosistema como unidad de análisis y la proyección del territorio mediante mapas del presente y futuro. Promueve la planificación participativa, articulando saberes locales, criterios técnicos y aspiraciones familiares hacia la autonomía predial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo:
          'Fundamentos de la cartografía social en contextos agroecológicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué es la cartografía social?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Enfoques de la cartografía social',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ejemplos de mapas colectivos y lecturas del paisaje',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cartografía predial agroecológica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Definición y propósitos de la cartografía predial',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'El agroecosistema como unidad de análisis predial',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estructura y composición de los agroecosistemas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Propiedades emergentes de los agroecosistemas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diseño de agroecosistemas sostenibles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Principios agroecológicos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Ejemplos de prácticas para fomentar los principios agroecológicos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Otros enfoques de diseño',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Mapas del sistema predial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Mapa del presente: identificación de elementos actuales, amenazas y potencialidades',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Mapa del futuro: proyección de escenarios de transición agroecológica',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Relación entre mapas, indicadores, estado de transición y plan de acción agroecológico',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'Ejemplos de mapas colectivos y lecturas del paisaje',
      referencia:
        'Agroecología em rede. (2025). <em>Iniciativas agroecológicas en Colombia</em>.',
      tipo: 'Simulador',
      link:
        'https://agroecologiaemrede.org.br/busca/?modo=mapa&mapeamento%5B%5D=iniciativas-agroecologicas-de-colombia',
    },
    {
      tema: 'Diseño de agroecosistemas sostenibles',
      referencia:
        'Cortés Torres, H. G., & Ramírez Luna, J. J. (2013). <em>Diseño hidrológico del terreno (sistema Keyline) en parcelas agrícolas con precipitación limitada</em>. Instituto Mexicano de Tecnología del Agua.',
      tipo: 'Libro',
      link:
        'https://www.imta.gob.mx/biblioteca/libros_html/diseno-hidrologico-del-terreno/files/assets/common/downloads/publication.pdf',
    },
    {
      tema: 'Diseño de agroecosistemas sostenibles',
      referencia:
        'Altieri, M. A., & Nicholls, C. I. (2010). <em>Diseños agroecológicos para incrementar la biodiversidad de entomofauna benéfica en agroecosistemas</em>. Sociedad Científica Latinoamericana de Agroecología (SOCLA).',
      tipo: 'Libro',
      link:
        'https://agroecored.ecologistasenaccion.org/2017/08/disenos-agroecologicos-para-incrementar.html',
    },
    {
      tema: 'Diseño de agroecosistemas sostenibles',
      referencia:
        'Barchuk, A. H., Locati, L., & Suez, L. S. (2020). <em>Manual de buenas prácticas para diseños agroecológicos</em> (A. H. Barchuk, Ed.; 1ª ed.). Editorial Brujas.',
      tipo: 'Libro',
      link:
        'https://www.uv.mx/hab/files/2021/12/Manual-de-buenas-practicas-para-disenos-agroecologicos_compressed.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agroecosistema',
      significado:
        'Conjunto de elementos físicos, productivos, sociales y culturales que conforman una finca o sistema predial.',
    },
    {
      termino: 'Cartografía social',
      significado:
        'Herramienta participativa que permite representar el territorio desde los saberes, vivencias y aspiraciones de las comunidades.',
    },
    {
      termino: 'Conectividad ecológica',
      significado:
        'Integración funcional entre zonas de conservación, producción y uso comunitario que favorece la biodiversidad y el equilibrio territorial.',
    },
    {
      termino: 'Estado de transición',
      significado:
        'Nivel de avance del sistema predial en la adopción de principios y prácticas agroecológicas.',
    },
    {
      termino: 'Indicadores agroecológicos',
      significado:
        'Criterios técnicos, sociales y culturales que permiten evaluar el avance hacia sistemas sostenibles y autónomos.',
    },
    {
      termino: 'Mapa del futuro',
      significado:
        'Proyección colectiva de escenarios deseables para la transición agroecológica, basada en aspiraciones familiares y comunitarias.',
    },
    {
      termino: 'Mapa del presente',
      significado:
        'Representación del estado actual del sistema predial, incluyendo amenazas, potencialidades y prácticas vigentes.',
    },
    {
      termino: 'Memoria biocultural',
      significado:
        'Conjunto de saberes, prácticas y vínculos simbólicos que las comunidades han construido con su territorio a lo largo del tiempo.',
    },
    {
      termino: 'Plan de acción agroecológico',
      significado:
        'Conjunto de actividades organizadas para transformar el sistema predial según los principios agroecológicos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alakendu, A., et al. (2024). <em>Diseño permacultural</em>. [Datos editoriales no disponibles].',
      link: '',
    },
    {
      referencia:
        'Altieri, M. A., & Nicholls, C. I. (2010). <em>Agroecología: teoría y práctica para una agricultura sustentable</em>. [Editorial no especificada].',
      link: '',
    },
    {
      referencia:
        'Barchuk, A., Guzmán, M. L., Locati, L., & Suez, L. S. (2020). <em>Manual de buenas prácticas para diseños agroecológicos</em>. Universidad Nacional de Córdoba, Facultad de Ciencias Agropecuarias.',
      link:
        'https://repositoriosdigitales.mincyt.gob.ar/vufind/Record/RDUUNC_95f9eba6bb41893498f0bc3040a8d8b1',
    },
    {
      referencia:
        'Cerutti Guldberg, H. (Coord.). (2018). <em>Cartografías de nuestras realidades</em>. Universidad Nacional Autónoma de México, Centro de Investigaciones sobre América Latina y el Caribe.',
      link: '',
    },
    {
      referencia:
        'Cortés Torres, H. G., & Ramírez Luna, J. J. (2013). <em>Diseño hidrológico del terreno (sistema Keyline) en parcelas agrícolas con precipitación limitada</em>. Instituto Mexicano de Tecnología del Agua.',
      link:
        'https://www.imta.gob.mx/biblioteca/libros_html/diseno-hidrologico-del-terreno/files/assets/common/downloads/publication.pdf',
    },
    {
      referencia:
        'FAO, Ministerio de Agricultura y Desarrollo Rural (MADR), Agencia de Desarrollo Rural (ADR), & Unión Europea (UE). (2021). <em>Cartilla transiciones agroecológicas: prácticas y experiencias en Colombia</em>. Sembrando Capacidades – Cooperación Brasil-Colombia-FAO.',
      link:
        'https://sembrandocapacidades.fao.org.co/wp-content/uploads/2021/11/V-FINAL-CARTILLA-TRANSICIÍN-ESPAÑOL-V-DIGITAL.pdf',
    },
    {
      referencia:
        'FAO. (2024). <em>Guía de transición a la agroecología para extensionistas y promotores rurales en Colombia</em>. Agroecology Knowledge Hub.',
      link: 'https://www.fao.org/agroecology/database/detail/en/c/1711004/',
    },
    {
      referencia:
        'Instituto de Estudios Ambientales – IDEA. (s. f.). <em>OCA: Observatorio de Conflictos Ambientales</em>. Universidad Nacional de Colombia.',
      link: 'https://oca.unal.edu.co/',
    },
    {
      referencia:
        'León Sicard, T. E. (2021). <em>La Estructura Agroecológica Principal de los agroecosistemas: perspectivas teórico-prácticas</em>. Universidad Nacional de Colombia – IDEA.',
      link:
        'https://research.unipd.it/retrieve/e14fb26f-0f39-3de1-e053-1705fe0ac030/LIbroEAP_Final_Publicado.pdf',
    },
    {
      referencia:
        'Melón, D., & Relli Ugartamendía, M. (Comps.). (2021). <em>Geografías del conflicto: crisis civilizatoria, resistencias y construcciones populares en la periferia capitalista</em>. Muchos Mundos Ediciones; Fundación Rosa Luxemburgo; Centro de Investigaciones Geográficas - UNLP.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2024). <em>Resolución 331 de 2024 – Política pública de agroecología</em>.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=169881&dt=S',
    },
    {
      referencia:
        'Piñeiro Alonso, E., Mora Mora, D., & Hechavarría Aguilera, Y. (2023). <em>Cartografía social, una herramienta de análisis para el estudio comunitario</em>. ROCA. Revista Científico-Educacional de la provincia Granma, 19(1).',
      link: 'https://portal.amelica.org/ameli/journal/440/4403729009/html/',
    },
    {
      referencia:
        'Rodríguez, M. A., & Castillo, J. A. (2013). <em>Cartografía social como metodología participativa y colaborativa de investigación en el territorio afrodescendiente de la cuenca alta del río Cauca</em>. Cuadernos de Geografía: Revista Colombiana de Geografía, 22(2), 67–83.',
      link:
        'https://revistas.unal.edu.co/index.php/rcg/article/view/25774/36770',
    },
    {
      referencia:
        'Schenerock, A., Aguilar, K., Cacho, N., & Torrente. (2018). <em>Cartografías ecofeministas para la defensa del Territorio Cuerpo-Tierra en contra del extractivismo</em>. Agua y Vida: Mujeres, Derechos y Ambiente A. C.',
      link: '',
    },
    {
      referencia:
        'Toledo, V. M., & Barrera-Bassols, N. (2023). <em>La memoria biocultural</em>. Editorial Universidad del Cauca.',
      link:
        'https://vri.unicauca.edu.co/editorial/libro/la-memoria-biocultural/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
}
