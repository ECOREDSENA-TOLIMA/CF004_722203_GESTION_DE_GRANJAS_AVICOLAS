<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El componente formativo Plan de producción y evaluación de resultados de la empresa, abarca aspectos esenciales para la gestión efectiva de la producción y la evaluación de los resultados obtenidos. En primer lugar, se aborda el presupuesto de producción, que implica características como la asignación de recursos, las órdenes de producción, la capacidad instalada y el trabajo en equipo. Posteriormente, se exploran los informes de ejecución, que proporcionan una visión clara y detallada del desempeño de la producción. Por último, se introduce el plan de mejora, que se basa en identificar hallazgos a través de la evaluación de resultados y establecer pasos claros para implementar planes destinados a optimizar los procesos de producción y garantizar la eficiencia y eficacia en sus actividades. 

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
