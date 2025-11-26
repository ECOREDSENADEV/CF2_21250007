<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la cartografía social en contextos agroecológicos
    
  
    .row.align-items-center
      .col-lg-auto
        img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 Este tema introduce la cartografía social como una herramienta clave para la lectura territorial, la construcción colectiva de conocimiento y el diseño agroecológico situado. Se reconoce su valor metodológico, político y cultural en procesos de transición agroecológica, especialmente en contextos rurales y comunitarios.
    
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 ¿Qué es la cartografía social?
    
    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") La cartografía social es una práctica metodológica que permite representar el territorio desde las experiencias, percepciones y significados construidos colectivamente por sus habitantes. A diferencia de los mapas técnicos, que privilegian la exactitud geoespacial y la mirada institucional, esta herramienta se enfoca en el territorio como espacio vivido, sentido y disputado.

        .bg-color-6(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/3.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Su propósito no es únicamente describir el espacio físico, sino visibilizar relaciones sociales, vínculos culturales, memorias históricas, conflictos latentes y aspiraciones comunitarias. El mapa resultante no es una imagen neutra u objetiva, sino una construcción gráfica que expresa cómo se habita, se interpreta y se transforma el territorio desde múltiples voces.
    
    p.mb-5 convierte Además, la cartografía social reconoce que todo acto de representación territorial implica una toma de posición. Quien dibuja, nombra y delimita el espacio, también define qué se considera relevante, qué se oculta y qué se proyecta. Por ello, se convierte en un ejercicio político, en el que las comunidades recuperan el poder de contar su territorio desde sus propios referentes, lenguajes y símbolos. A continuación, se presenta un pódcast que compara la cartografía social y la cartografía técnica, destacando sus enfoques, metodologías y dimensiones representativas en la construcción del territorio.
    

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-7.tarjeta.mb-5
          .p-4.p-md-5
            .row.justify-content-center.align-items-center
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/5.svg", data-aos="zoom-in")
              .col-lg-7
                h2(data-aos="fade-left").mb-4.text-white Pódcast
        
                TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                  texto="Introducción a los fundamentos de la cartografía social en contextos agroecológicos"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-left") El proceso de elaboración de un mapa social incluye dinámicas participativas como talleres, recorridos, entrevistas, dibujos colectivos, uso de materiales locales y narraciones orales. Estas actividades garantizan que el mapa no sea producto de un experto externo, sino el resultado de una construcción horizontal, donde cada participante aporta su mirada y experiencia.
        .bg-color-15.tarjeta.mb-3.p-3 
          p.mb-0 Asimismo, la cartografía social incorpora dimensiones culturales que los mapas convencionales suelen omitir: sitios sagrados, lugares de encuentro, trayectorias cotidianas, zonas de conflicto, espacios de resistencia, prácticas culturales, afectos y memorias. Esta riqueza expresiva convierte al mapa en una herramienta pedagógica, organizativa y transformadora.
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En síntesis, la cartografía social es una forma de leer y escribir el territorio desde adentro. No busca representar lo que “es”, sino lo que significa para quienes lo habitan. Es una invitación a mirar el espacio con otros ojos, a reconocer lo que ha sido invisibilizado y a proyectar colectivamente lo que se desea construir (Piñeiro et al., 2023)
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Enfoques de la cartografía social
    
    p.mb-5 La cartografía social se ha consolidado como una herramienta versátil y poderosa en diversos escenarios de acción colectiva. Su valor no reside únicamente en el producto final el mapa, sino en el proceso participativo que lo antecede, donde se construyen sentidos, se reconocen saberes y se fortalecen vínculos. Sus usos se despliegan en tres grandes ámbitos: comunitario, territorial y educativo, aunque su aplicación se ha diversificado aún más en los últimos años. A continuación, se describen los principales enfoques de la cartografía social, sus objetivos y aportes clave:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-5.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Territorial
              p Funciona como herramienta de diagnóstico y planificación desde abajo. Permite caracterizar el territorio en dimensiones físicas, sociales, culturales y políticas. A través de mapas colectivos se identifican zonas de riesgo, áreas de uso tradicional, espacios de conflicto, corredores ecológicos y sitios sagrados. Refuerza la identidad local, promueve el diálogo intergeneracional y genera insumos para la toma de decisiones comunitarias (Melón & Relli, 2021).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Crítico
              p Analiza las relaciones de poder que configuran el territorio: quién decide, qué intereses se imponen, qué voces son excluidas. Visibiliza el carácter no neutro del territorio y lo comprende como resultado de disputas históricas, políticas y simbólicas. Favorece la lectura situada, la recuperación de memorias colectivas y la construcción de alternativas emancipadoras (Cerutti, 2018).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Ambiental
              p Integra saberes locales, prácticas de cuidado y percepciones sobre los ecosistemas. A través de mapas comunitarios se identifican fuentes de agua, corredores biológicos, áreas tradicionales y zonas en riesgo. Fomenta la participación en la gestión ambiental y fortalece propuestas de conservación que respetan la diversidad cultural y territorial.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Educativo
              p Metodología activa, situada y crítica que involucra a estudiantes, docentes y comunidades. Promueve el aprendizaje desde el territorio, la integración de saberes locales y su articulación con contenidos curriculares. Estimula el pensamiento espacial, la lectura crítica del paisaje y la formación de sujetos comprometidos con su realidad. Integra disciplinas como geografía, historia, arte y ciencias sociales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Feminista
              p Aporta una mirada transformadora al mapear no solo territorios físicos, sino también cuerpos, emociones, cuidados, violencias y resistencias. Propone una cartografía del cuerpo-territorio, que visibiliza desigualdades y experiencias de exclusión. Incorpora metodologías afectivas y corporales como el mapeo emocional, el relato íntimo o el dibujo colectivo. Reconoce el conocimiento territorial como situado, encarnado y relacional (Schenerock et al., 2018).
    
    p.mb-5 En todos estos usos, la cartografía social no solo representa el territorio: lo transforma. Permite que las personas se reconozcan como autoras de su espacio, activando procesos de empoderamiento, dignificación y autonomía. Así, el mapa deja de ser una herramienta técnica para convertirse en un instrumento político, pedagógico y cultural al servicio de las comunidades.
        
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Ejemplos de mapas colectivos y lecturas del paisaje
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-15.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/13.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Los mapas colectivos son representaciones construidas de forma participativa por comunidades, estudiantes y actores territoriales. A través de ellos se pueden visualizar conflictos, memorias, prácticas y aspiraciones vinculadas al entorno. En contextos agroecológicos, estos mapas pueden adoptar diversas formas: recorridos comunitarios, dibujos del paisaje, esquemas de uso del suelo, zonificaciones simbólicas o representaciones de amenazas y potencialidades.
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5
        p.mb-5 Por su parte, la lectura del paisaje implica observar e interpretar tanto elementos visibles como no visibles del territorio: formas de cultivo, fuentes de agua, biodiversidad, infraestructura, relaciones sociales, saberes locales y huellas históricas. Al combinar ambas prácticas mapas colectivos y lectura del paisaje, se generan insumos valiosos para la planificación agroecológica, el fortalecimiento organizativo y la construcción de propuestas de transición. Los tipos de mapas colectivos y sus propósitos son: 

        .bg-full-width.bg-fondo-slider.mb-5
          .p-4.p-md-5
            SlyderA(tipo="b").bg-color-5.p-4.tarjeta
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/14.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Mapa de experiencias agroecológicas
                  p Permite visibilizar prácticas, territorios, saberes y actores vinculados a procesos de transición agroecológica. Ejemplo: Mapa interactivo colaborativo de Colombia, con categorías como producción, comercialización, compostaje, incidencia política y formación (Redes campesinas, académicas y comunitarias).
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/15.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Mapa de conflictos socioambientales 
                  p Representa disputas por uso del suelo, agua, biodiversidad o minería, integrando voces comunitarias y datos académicos. Ejemplo: Observatorio de Conflictos Ambientales (OCA) de la Universidad Nacional de Colombia. Fomenta el análisis político y la justicia ambiental.
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/16.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Mapas ambientales y de ecosistemas
                  p Identifican elementos clave del entorno natural: fuentes de agua, corredores biológicos, zonas de riesgo y espacios de valor simbólico. Son útiles para la conservación, la gestión ambiental participativa y la planificación predial. Integran saberes técnicos y locales.
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/17.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Mapas escuela-territorio
                  p Articulan el contexto escolar con el entorno comunitario. Docentes y estudiantes identifican amenazas, prácticas locales, redes organizativas y sitios significativos. Fortalece el vínculo entre escuela y territorio, y promueve una pedagogía situada.
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/18.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Mapas del cuerpo-territorio
                  p Expresan la relación entre cuerpo, territorio y experiencia vivida. A través de dibujos corporales, se representan emociones, violencias, cuidados y resistencias. Se utiliza en contextos feministas, comunitarios y psicológicos como herramienta de reflexión crítica y empoderamiento.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
            h3.titulo-con-imagen__texto Valor pedagógico, político y organizativo
          
    .row.mb-5.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        .bg-color-4.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Todos estos mapas tienen en común que no solo representan el territorio: lo transforman. Su elaboración promueve procesos de autolectura territorial, empoderamiento, análisis crítico y proyección colectiva. Al integrar múltiples formas de conocimiento (oral, gráfico, emocional, técnico), permiten que las personas se reconozcan como autoras y sujetas activas en la construcción de su entorno.
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/19.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        figure.mb-3
          img(src="@/assets/curso/tema1/20.svg" data-aos="zoom-in", style="max-width: 80px")
        p(data-aos="fade-left") Ya sea para denunciar conflictos, imaginar futuros, recuperar memorias o diseñar estrategias agroecológicas, la cartografía social se consolida como una herramienta política, pedagógica y cultural profundamente ligada a los procesos de transformación territorial.

    




</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
