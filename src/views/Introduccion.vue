<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .d-flex.flex-wrap
      .col-xl-12.pe-xl-1.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        .cajon.color-primario.p-4.d-flex.flex-wrap(data-aos="fade-right" style="background-color: #FFE8CE")
          .col-md-12.ps-lg-4
            p Ejecutar un plan de producción es parte del día a día de una empresa de cualquier tipo, por ejemplo: una cuyo objetivo es la manufactura de un producto u otras como las de producción avícola que es el caso para este componente; este proceso es el pilar de la operación, pues permite elaborar el producto terminado dispuesto a la venta. Una correcta planeación contribuye a perfeccionar los procesos, reduciendo costos e incrementando la producción.
            p Además, realizar un estudio sobre la demanda del producto, dará lugar a una programación más acertada respecto a las inversiones a realizar en insumos para producción y, a su vez, en el mejoramiento de la capacidad instalada con el objetivo de satisfacer las necesidades identificadas en el mercado.
            p  Finalmente, con la implementación de medidas en aquellos procesos que demanden mayor atención a través de un plan de mejora contribuirá con el crecimiento empresarial y la generación de valor para los propietarios.
     
    figure.mt-5.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/fZXHAK-ADOU" title="Plan de producción y evaluación de resultados de la empresa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
    


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
