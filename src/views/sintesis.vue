<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El componente “plan de producción y evaluación de resultados” abarca aspectos esenciales para la gestión efectiva de la producción y la evaluación de los resultados obtenidos. En primer lugar, se aborda el presupuesto de producción, que implica características como la asignación de recursos, las órdenes de producción, la capacidad instalada y el trabajo en equipo. 
    p Posteriormente, se exploran los informes de ejecución, que proporcionan una visión clara y detallada del desempeño de la producción. Se analizan las características y la estructura de estos informes, así como las metodologías de análisis utilizadas para evaluar los resultados y tomar decisiones informadas. 
    p Además, se examina la demanda del producto, utilizando la teoría de la oferta y la demanda para comprender los factores que influyen en la demanda y cómo calcularla de manera precisa. Esto permite a la empresa adaptar su producción a las necesidades del mercado y optimizar su rendimiento. 
    p.mb-5 Asi mismo, se introduce el plan de mejora, que se basa en identificar hallazgos a través de la evaluación de resultados y establecer pasos claros para implementar mejoras. Este plan incluye acciones correctivas y de mejora destinadas a optimizar los procesos de producción y garantizar la eficiencia y calidad en los resultados obtenidos. 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
