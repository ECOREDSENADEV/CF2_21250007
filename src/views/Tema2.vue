<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Cartografía predial agroecológica
    
    p.mb-5 La cartografía predial agroecológica es una herramienta técnica y pedagógica que permite representar, analizar y proyectar el sistema predial desde una perspectiva integral, situada y sostenible. A diferencia de los mapas convencionales, este tipo de cartografía incorpora dimensiones ecológicas, sociales, culturales y productivas, reconociendo el agroecosistema como una unidad viva, compleja y en constante transformación.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Su aplicación facilita una lectura crítica del predio, la identificación de amenazas y potencialidades, y la planificación participativa de procesos de transición agroecológica. En el marco del curso IPPTA, este componente articula saberes locales, criterios técnicos y enfoques agroecológicos para fortalecer la autonomía territorial y la gestión sostenible del espacio predial.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Definición y propósitos de la cartografía predial
    
    p.mb-5 La cartografía predial agroecológica se entiende como un conjunto de representaciones gráficas, simbólicas y técnicas que permiten visualizar la estructura, dinámica y proyección de un sistema predial desde una perspectiva agroecológica. No se limita a ubicar elementos físicos del terreno, sino que integra prácticas productivas, relaciones ecológicas, flujos de energía, saberes locales y aspiraciones familiares. Los propósitos fundamentales de la cartografía predial agroecológica

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.p-4.align-items-center
          .col-lg-9.mb-3.mb-lg-0.order-lg-2.p-4
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Análisis integral del agroecosistema
                p.text-center Reconocer el predio como una unidad compleja que integra elementos ecológicos, productivos, sociales y simbólicos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Identificación del paisaje predial
                p.text-center Localizar elementos clave como fuentes de agua, tipos de suelo, biodiversidad, infraestructura, cultivos y animales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Visibilización de relaciones
                p.text-center Reconocer relaciones ecológicas, sociales y culturales que configuran el sistema predial.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Planificación participativa
                p.text-center Facilitar el diseño colectivo de estrategias para la transición agroecológica desde las propias realidades.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Fortalecimiento de la autonomía
                p.text-center Promover procesos de toma de decisiones informadas y organizadas dentro del predio.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Articulación técnica y vivencial
                p.text-center Integrar saberes técnicos con conocimientos locales, lo productivo con lo simbólico, lo cotidiano con lo estratégico.
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema2/2.png', alt='')

        .bg-color-15.tarjeta
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Este enfoque promueve una comprensión profunda del predio como espacio habitado, cultivado y significado, en el que las decisiones productivas están conectadas con la cultura, la historia y las aspiraciones de quienes lo trabajan. Así, la cartografía predial agroecológica se convierte en un instrumento transformador, que orienta el manejo sostenible del territorio desde una perspectiva de soberanía, identidad y resiliencia.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 El agroecosistema como unidad de análisis predial
    
    p.mb-5 El agroecosistema es una forma de entender el sistema predial desde una mirada integral y relacional. Mientras el sistema predial puede describirse como el conjunto de elementos físicos, productivos y organizativos que conforman una finca (cultivos, animales, infraestructura, prácticas de manejo y decisiones familiares), el agroecosistema permite analizar ese mismo espacio como un sistema vivo, dinámico y en constante interacción.

    .bg-color-16.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/10.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") No se trata solo de un terreno cultivado, sino de un entramado de relaciones entre suelo, clima, plantas (cultivadas y espontáneas), animales, insectos y personas que habitan y gestionan ese entorno. Estas relaciones se dan en un lugar específico, delimitado territorialmente, y se expresan en la circulación de energía, agua, nutrientes, saberes e información (León, 2021). Todo ello está atravesado por dimensiones culturales, históricas, económicas y organizativas.
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") Desde esta perspectiva, el agroecosistema no es un objeto estático, sino un sistema dinámico, que refleja prácticas de manejo, vínculos ecológicos, formas de vida y memorias territoriales. En el marco del curso IPPTA, esta mirada permite una lectura más profunda del predio, reconociendo sus potencialidades, problemáticas y capacidades de transformación agroecológica.
    
        .bg-color-15.tarjeta.p-4(data-aos="fade-left")
          p.mb-0 En otras palabras, el agroecosistema es el sistema predial visto con lentes agroecológicos: no como una suma de partes aisladas, sino como una red de relaciones donde lo ecológico, lo social y lo simbólico se entrelazan. Esta mirada integral permite planificar mejor, cuidar los recursos, fortalecer la autonomía y avanzar hacia modelos sostenibles.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Tipos de agroecosistemas: diversidad, prácticas y saberes
    
    p.mb-5 A continuación, se presentan ejemplos de agroecosistemas que reflejan distintas formas de habitar y transformar el territorio, articulando conocimientos técnicos, saberes ancestrales y prácticas culturales:
    
    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Huerto de traspatio")
        .row
          .col-xl-5.mb-4.order-2
            figure
              img(src='@/assets/curso/tema2/12.png', alt='Texto que describa la imagen')
          .col-xl-7.order-1.mb-3.mb-lg-0
            h4 Huerto de traspatio
            p Espacio familiar pequeño, ubicado junto a la vivienda rural o urbana. Alberga hortalizas, plantas medicinales, frutales y animales domésticos. Favorece la seguridad alimentaria, el reciclaje de nutrientes y el aprendizaje cotidiano.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Sistema agroforestal")
        .row
          .col-xl-5.mb-4.order-2
            figure
              img(src='@/assets/curso/tema2/13.png', alt='Texto que describa la imagen')
          .col-xl-7.order-1.mb-3.mb-lg-0
            h4 Sistema agroforestal
            p Asociación de cultivos con árboles y arbustos útiles. Mejora la fertilidad del suelo, regula el microclima y ofrece múltiples productos. Puede surgir de prácticas tradicionales o de procesos de transición agroecológica.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Sistema de monocultivo")
        .row
          .col-xl-5.mb-4.order-2
            figure
              img(src='@/assets/curso/tema2/14.png', alt='Texto que describa la imagen')
          .col-xl-7.order-1.mb-3.mb-lg-0
            h4 Sistema de monocultivo
            p Aunque común en la agricultura convencional, también es un agroecosistema. Permite analizar sus impactos y límites, y proyectar estrategias de diversificación y reconversión. Refleja relaciones ecológicas y decisiones humanas.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Chagra amazónica")
        .row
          .col-xl-5.mb-4.order-2
            figure
              img(src='@/assets/curso/tema2/15.png', alt='Texto que describa la imagen')
          .col-xl-7.order-1.mb-3.mb-lg-0
            h4 Chagra amazónica
            p Sistema indígena de cultivo rotativo en la selva húmeda. Combina especies alimenticias, medicinales y rituales. Integra saberes ancestrales, manejo de sucesiones ecológicas y vínculos espirituales con el territorio.
      .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Tul nasa</em>")
        .row
          .col-xl-5.mb-4.order-2
            figure
              img(src='@/assets/curso/tema2/16.png', alt='Texto que describa la imagen')
          .col-xl-7.order-1.mb-3.mb-lg-0
            h4 <em>Tul nasa</em>
            p Sistema tradicional del pueblo Nasa. Asocia maíz, frijol, calabaza y otras especies. Se basa en el cuidado del suelo, la biodiversidad y la memoria cultural, con una lógica de reciprocidad y equilibrio con la naturaleza.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Conuco")
        .row
          .col-xl-5.mb-4.order-2
            figure
              img(src='@/assets/curso/tema2/17.png', alt='Texto que describa la imagen')
          .col-xl-7.order-1.mb-3.mb-lg-0
            h4 Conuco
            p Agroecosistema caribeño y andino, gestionado por familias campesinas e indígenas. Combina cultivos alimenticios, plantas medicinales y zonas de descanso del suelo. Responde a ritmos culturales, ecológicos y comunitarios.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Chinampa")
        .row
          .col-xl-5.mb-4.order-2
            figure
              img(src='@/assets/curso/tema2/18.png', alt='Texto que describa la imagen')
          .col-xl-7.order-1.mb-3.mb-lg-0
            h4 Chinampa
            p Sistema agrícola ancestral mesoamericano, desarrollado sobre cuerpos de agua. Utiliza plataformas flotantes o semisólidas, permite alta productividad con bajo impacto ambiental y recicla nutrientes de manera eficiente.

    p.mb-5 Estos agroecosistemas son expresiones vivas de la relación entre las comunidades y sus territorios. Cada huerto, chagra, tul, conuco o chinampa encarna formas particulares de habitar, cuidar y transformar el espacio, integrando dimensiones ecológicas, culturales, simbólicas y políticas. Reconocer esta diversidad no solo permite valorar su funcionalidad ecológica, sino también sus sentidos sociales y organizativos. En el camino hacia la agroecología, comprender los agroecosistemas como unidades dinámicas y relacionales es clave para fortalecer la autonomía predial, la planificación territorial y la defensa de la vida.

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Estructura y composición de los agroecosistemas

    p.mb-5 La comprensión del agroecosistema requiere diferenciar dos dimensiones clave: estructura y composición. Ambas determinan el funcionamiento, la eficiencia y la sostenibilidad del sistema predial. Las diferencias entre estructura y composición del agroecosistema son: 

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .p-3.p-md-4(titulo="Estructura")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0.order-2
            h4 Estructura
            p Organización espacial de los componentes del predio. Se refiere a cómo están distribuidos y conectados los elementos. 
            p <b>Ejemplo</b>. Distribución de cultivos, cercas vivas, caminos, gallineros, zonas de conservación, fuentes de agua.

          .col-lg-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/19.png', alt='Texto que describa la imagen')
      .p-3.p-md-4(titulo="Composición")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0.order-2
            h4 Composición
            p Conjunto de elementos vivos y no vivos presentes en el agroecosistema. Se refiere a qué contiene el sistema.
            p <b>Ejemplo</b>. Tipos de suelo, especies vegetales, fauna, microorganismos, infraestructura, herramientas, relaciones sociales.

          .col-lg-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/20.png', alt='Texto que describa la imagen')
      

    p.mb-5 La estructura refleja decisiones humanas, prácticas culturales y condiciones ecológicas que configuran el paisaje productivo. La composición depende del contexto natural, histórico y cultural del predio, y varía entre territorios y familias.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Ejemplo comparativo: misma composición, estructuras distintas
      
    p.mb-5 Dos predios pueden tener una composición similar (por ejemplo, cultivos de maíz, frijol y plátano; árboles dispersos; gallinas; una quebrada; y una vivienda familiar), pero presentar estructuras radicalmente diferentes, lo que influye en su eficiencia ecológica y funcional.

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .p-3.p-md-4(titulo="Predio A: Estructura fragmentada")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0.order-2
            h4 Predio A: Estructura fragmentada
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 Cultivos separados por cercas rígidas. 
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 Quebrada sin protección vegetal. 
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 Árboles dispersos sin formar corredores. 
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 Gallinero alejado del compostaje. 
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 Sin caminos internos ni zonas diferenciadas.
            p <b>Limitaciones</b>: Baja conectividad ecológica, reciclaje ineficiente de nutrientes, manejo complejo

          .col-lg-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/21.png', alt='Texto que describa la imagen')
      .p-3.p-md-4(titulo="Predio B: Estructura integrada")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0.order-2
            h4 Predio B: Estructura integrada
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 Policultivos y rotaciones organizadas.  
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 Quebrada con vegetación ribereña conectada a zonas de conservación.  
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 Árboles formando cercas vivas y corredores.  
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 Gallinero junto al área de compostaje.  
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 Caminos internos que conectan áreas productivas, educativas y de descanso.
            p <b>Ventajas</b>: Mayor integración funcional, eficiencia ecológica, resiliencia del sistema, facilidad de manejo.

          .col-lg-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/22.png', alt='Texto que describa la imagen')

    p.mb-5 Este contraste muestra cómo una misma composición biológica y productiva puede dar lugar a resultados muy diferentes dependiendo de la estructura del agroecosistema. Por eso, en la planificación predial con enfoque agroecológico, no basta con "qué" se tiene, sino con "cómo" está organizado e interconectado.

    .row.justify-content-center
      .col-lg-8
        .bg-color-16.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/23.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Pensar la estructura desde criterios agroecológicos permite optimizar funciones, favorecer la biodiversidad, mejorar el reciclaje de nutrientes y facilitar la toma de decisiones informadas. La articulación entre estructura y composición es clave para transitar hacia sistemas más resilientes, sostenibles y autónomos.

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        separador
        
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.4 Propiedades emergentes de los agroecosistemas
    
        .row.justify-content-center
          .col-lg-10
            .bg-color-2.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/24.png', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") Las propiedades emergentes son características del agroecosistema que no pueden explicarse por la simple suma de sus partes. No provienen directamente de los cultivos, animales o herramientas aisladas, sino que surgen de las relaciones, interacciones y dinámicas entre todos los componentes cuando el sistema funciona como un todo integrado.
    
    p.mb-5 Estas propiedades reflejan el grado de integración ecológica, cultural y organizativa del predio, y son indicadores clave de su sostenibilidad, resiliencia y capacidad de transformación. No se imponen desde afuera: se cultivan con el tiempo a través del manejo cotidiano (Barchuk, 2020). Las propiedades emergentes en agroecosistemas son: 

    .row.justify-content-center.p-4.align-items-center
      .col-lg-9.mb-3.mb-lg-0.order-lg-2.p-4
        SlyderF(columnas="col-12 col-lg-6")
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/26.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Ciclo cerrado de nutrientes
            p.text-center Reincorporación de residuos orgánicos al suelo, reduciendo la dependencia de insumos externos.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/27.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Diversidad funcional
            p.text-center Presencia de especies con distintos roles ecológicos: alimentación, sombra, control biológico, medicina, etc.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/28.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Estabilidad y resiliencia
            p.text-center Capacidad del sistema para adaptarse a cambios climáticos, plagas o crisis sin colapsar.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/29.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Autonomía productiva
            p.text-center Producción interna de alimentos, semillas, abonos y conocimientos; refuerza la soberanía del predio.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/30.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Conectividad ecológica
            p.text-center Vínculos entre sectores del predio y con el entorno; facilita el flujo de biodiversidad y energía.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Memoria biocultural
            p.text-center Integración de saberes ancestrales, prácticas locales y vínculos simbólicos con el territorio.
      .col-lg-3.order-lg-1
        figure
          img(src='@/assets/curso/tema2/25.png', alt='')

    p.mb-5 Estas propiedades permiten valorar el agroecosistema más allá de lo técnico, como una expresión viva de la relación entre las comunidades y sus territorios. Reconocerlas en los ejercicios de lectura del paisaje, análisis predial y planificación participativa fortalece la práctica agroecológica como una herramienta para producir no solo alimentos, sino también cultura, cuidado y futuro.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Relación entre propiedades emergentes y servicios ecosistémicos
    
    p.mb-5 Las propiedades emergentes están estrechamente vinculadas con los servicios ecosistémicos, es decir, los beneficios que los ecosistemas brindan a las comunidades humanas. Cuando un agroecosistema desarrolla estas propiedades, incrementa su capacidad para ofrecer servicios ecológicos esenciales.

    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ciclo cerrado de nutrientes")
        .row
          .col-xl-5.mb-4.order-2
            figure
              img(src='@/assets/curso/tema2/32.png', alt='Texto que describa la imagen')
          .col-xl-7.order-1.mb-3.mb-lg-0
            h4 Ciclo cerrado de nutrientes
            p Regulación del suelo: mantiene la fertilidad sin insumos externos.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Diversidad funcional")
        .row
          .col-xl-5.mb-4.order-2
            figure
              img(src='@/assets/curso/tema2/33.png', alt='Texto que describa la imagen')
          .col-xl-7.order-1.mb-3.mb-lg-0
            h4 Diversidad funcional
            p Control biológico natural: disminuye plagas sin uso de agroquímicos.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Conectividad ecológica")
        .row
          .col-xl-5.mb-4.order-2
            figure
              img(src='@/assets/curso/tema2/34.png', alt='Texto que describa la imagen')
          .col-xl-7.order-1.mb-3.mb-lg-0
            h4 Conectividad ecológica
            p Conservación de biodiversidad y recursos hídricos: protege hábitats, fuentes de agua y corredores biológicos.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Autonomía productiva")
        .row
          .col-xl-5.mb-4.order-2
            figure
              img(src='@/assets/curso/tema2/35.png', alt='Texto que describa la imagen')
          .col-xl-7.order-1.mb-3.mb-lg-0
            h4 Autonomía productiva
            p Provisión de alimentos y materiales: reduce dependencia externa, fortalece la soberanía alimentaria.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Resiliencia")
        .row
          .col-xl-5.mb-4.order-2
            figure
              img(src='@/assets/curso/tema2/36.png', alt='Texto que describa la imagen')
          .col-xl-7.order-1.mb-3.mb-lg-0
            h4 Resiliencia
            p Estabilidad ecosistémica: garantiza continuidad de funciones en contextos adversos.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Memoria biocultural")
        .row
          .col-xl-5.mb-4.order-2
            figure
              img(src='@/assets/curso/tema2/37.png', alt='Texto que describa la imagen')
          .col-xl-7.order-1.mb-3.mb-lg-0
            h4 Memoria biocultural
            p Servicio cultural: preserva saberes, identidades y vínculos territoriales.
    
    .bg-color-17.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/38.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Las propiedades emergentes son señales de que un agroecosistema funciona integralmente, y de que tiene la capacidad no solo de sostenerse, sino de cuidar el entorno y generar bienestar colectivo. Su desarrollo es clave para una agroecología viva y transformadora, enraizada en el territorio, sostenida por la cultura y proyectada hacia el futuro.
      


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
