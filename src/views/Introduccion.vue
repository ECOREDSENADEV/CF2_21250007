<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5
        p.mb-5 La cartografía social representa una de las metodologías más poderosas para comprender el territorio desde las experiencias y saberes de quienes lo habitan. En los contextos agroecológicos, esta herramienta trasciende la función técnica del mapa para convertirse en un instrumento pedagógico y político que articula memoria, identidad y acción colectiva. A través de procesos participativos, las comunidades logran reconstruir la historia del lugar, reconocer sus relaciones con la naturaleza y proyectar escenarios sostenibles que fortalezcan su autonomía y el cuidado de la vida.

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p.mb-0 Su relevancia en la transición agroecológica radica en que permite leer el territorio no solo como un espacio físico, sino como un entramado de vínculos sociales, culturales y ecológicos. La cartografía social ayuda a identificar los usos del suelo, las prácticas tradicionales, las zonas de riesgo, las dinámicas productivas y los conflictos territoriales, integrando dimensiones que los mapas convencionales suelen omitir. De esta manera, se convierte en una vía para reconocer el territorio como sistema vivo y en permanente construcción, donde la acción humana tiene un papel determinante.

        .bg-full-width.bg-color-4.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En el ámbito educativo, la cartografía social adquiere un valor formativo y transformador. Al involucrar a estudiantes, docentes y comunidades en la elaboración de mapas colectivos, se promueve una comprensión crítica del entorno, el diálogo de saberes y el fortalecimiento del pensamiento territorial. Este enfoque fomenta el aprendizaje situado y la responsabilidad ambiental, impulsando a las personas a leer, reinterpretar y cuidar el espacio que habitan. Así, la cartografía social no solo representa el territorio: lo resignifica como escenario de encuentro, resistencia y construcción de futuro.

</template>

<script>
export default {
  name: 'Introduccion',
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
