<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Plan de mejora

    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        .cajon.color-acento-botones.p-4.d-flex.flex-wrap(data-aos="fade-right")
          .col-md-11.ps-lg-4
            p El plan de mejora aplica una vez se han efectuado los procesos de evaluación a los diferentes procesos de la empresa. Su objetivo es eliminar las ineficiencias y problemáticas para perfeccionar sus sistemas hasta donde sea posible; para ello, se diseña un conjunto de medidas enfocadas a solucionar, eliminar o reducir sus causas.
            p En este sentido, la mecánica operacional se desarrolla a partir de una planeación, seguida por una ejecución, luego una evaluación y, finalmente, la aplicación de medidas enfocadas a mejorar el proceso para retomar el ciclo nuevamente.
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema4/img-52.svg" data-aos="fade-left" style="max-width: 400px")

    p.mb-5(data-aos="fade-right") El alcance del plan de mejora abarca todas las áreas de la empresa, esto se debe a que cualquier proceso dentro del sistema es susceptible de mejora. Debido a ello, estos son responsabilidad de las directivas o la gerencia general, este grupo de personas está acompañado de los directores de cada área, sin embargo, durante el proceso de diseño resulta de vital importancia contar con la retroalimentación del personal operativo, quienes pueden aportar hallazgos que pasen desapercibidos en los niveles más altos de la organización.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 4.1 Hallazgos

    p.mb-5(data-aos="fade-right") El proceso de supervisión y evaluación finaliza con la recopilación de hallazgos, entendidos como la identificación de una problemática; para lo cual el Departamento Administrativo del Servicio Civil Distrital los clasifica según el proceso así:

    .tarjeta.color-acento-botones.p-3.mt-5.caja_flotante_azul.col-md-9.m-auto(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/temas/tema4/decorador-1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h4.mb-0 Departamento Administrativo del Servicio Civil Distrital
              p.mt-3 Esta entidad en su sitio web menciona cómo recopila los hallazgos que sirven de base para identificar las problemáticas en la empresa.
            .col-sm-auto
              a.boton.boton--b.color-acento-contenido(href="https://www.serviciocivil.gov.co/planes-de-mejoramiento" target="_blank")
                span(style="color: #12263F !important;") Ir al sitio web
                i.fas.fa-link(style="color: #12263F !important;")

    Separador 

    .row.mb-5
      .col-12.col-md-3.mb-3.mb-md-0
        .bgr_12.p-4.h-100
          figure.mb-3.d-flex.justify-content-center
            img.img120(src='@/assets/curso/temas/tema4/img-53.svg', alt='Texto que describa la imagen')
          h4.text-center 1. No conformidad 
            p.mb-0.text-center Se identifica una situación que incumple con las exigencias de terceros o una disposición normativa o técnica. Por ejemplo, una empresa que no está cumpliendo con el plan de pagos acordado con una entidad financiera. La organización debe plantear una acción correctiva para solucionar.
        .col-10.col-md-3.mb-3.mb-md-0
          .bgr_12.p-4.h-100
            figure.mb-3.d-flex.justify-content-center
              img.img120(src='@/assets/curso/temas/tema4/img-54.svg', alt='Texto que describa la imagen')
            h4.text-center 2. No conformidad potencial 
            p.mb-0.text-center Se evidencia una situación que podría desencadenar en un hallazgo de no conformidad. Por ejemplo, el daño de una máquina que afecta la producción sería una no conformidad, pero considerar el daño de otras máquinas de características similares es una no conformidad potencial.
        .col-12.col-md-3.mb-3.mb-md-0
          .bgr_12.p-4.h-100
            figure.mb-3.d-flex.justify-content-center
              img.img120(src='@/assets/curso/temas/tema4/img-55.svg', alt='Texto que describa la imagen')
            h4.text-center 3. Oportunidad de mejora
            p.mb-0.text-center Una situación que puede pulirse o perfeccionarse para hacerla más eficiente. Por ejemplo, una empresa que elabora productos a base de madera podría aprovechar y vender los sobrantes de producción a una fábrica de aglomerados, reduciendo así los costos a base de aprovechamientos.
            | Por ejemplo: en las empresas avícolas, se puede recolectar la gallinaza y venderla a viveros o campesinos de la zona para el cultivo de plantas.
        


</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass">
.image_floating
   filter: drop-shadow(10px 5px 4px rgba(0,0,0,.1))

.imagen_flotante_animada
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
  transform: translatey(0px)
  animation: float 6s ease-in-out infinite

.caja_flotante
  -webkit-box-shadow: -11px 10px 0px -1px #f3f3f3
  -moz-box-shadow: -11px 10px 0px -1px #f3f3f3
  box-shadow: -11px 10px 0px -1px #f3f3f3

.caja_flotante_azul
  box-shadow: -11px 10px 0px -1px #f1fcfd
</style>
