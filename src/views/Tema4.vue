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

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-53.svg' alt='')
        h2.text-center 1. No conformidad
        p.text-center Se identifica una situación que incumple con las exigencias de terceros o una disposición normativa o técnica. Por ejemplo, una empresa que no está cumpliendo con el plan de pagos acordado con una entidad financiera. La organización debe plantear una acción correctiva para solucionar.

        .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-54.svg' alt='')
        h2.text-center 2. No conformidad potencial
        p.text-center Se evidencia una situación que podría desencadenar en un hallazgo de no conformidad. Por ejemplo, el daño de una máquina que afecta la producción sería una no conformidad, pero considerar el daño de otras máquinas de características similares es una no conformidad potencial.

        .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-55.svg' alt='')
        h2.text-center 3. Oportunidad de mejora
        p.text-center Una situación que puede pulirse o perfeccionarse para hacerla más eficiente. Por ejemplo, una empresa que elabora productos a base de madera podría aprovechar y vender los sobrantes de producción a una fábrica de aglomerados, reduciendo así los costos a base de aprovechamientos. Por ejemplo: en las empresas avícolas, se puede recolectar la gallinaza y venderla a viveros o campesinos de la zona para el cultivo de plantas.
        
    p.mb-5(data-aos="fade-right") Es a partir de estos hallazgos que la empresa puede implementar una planeación enfocada a corregir las no conformidades, prevenir las no conformidades potenciales y aprovechar las oportunidades de mejora. Finalmente, es indispensable que conozca qué se puede hacer de manera permanente para alcanzar el objetivo de producción y el porcentaje de venta al final del proceso productivo.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 4.2 Paso para implementarlo

    .row.mb-5
      .col-12.col-md-5.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema4/img-56.png', alt='Texto que describa la imagen')
      .col-12.col-md-7
        p Para ejecutar un plan de mejora que cumpla con su objetivo de perfeccionar los procesos evaluados, se recomienda realizar los siguientes pasos.
        ol.lista-ol
          li 
            .lista-ol
            p ● <strong>Análisis de las causas:</strong> Consiste en identificar los procesos susceptibles de mejora y priorizados en relación con su relevancia para dar cumplimiento al objetivo misional de la compañía. Seguido de ello, se deben identificar las causas de la problemática y sus efectos negativos en la operación.
          li 
            .lista-ol
            p ● <strong>Propuesta de planificación:</strong> Se debe diseñar un plan que sea viable y lo suficientemente flexible para implementar acciones adicionales a futuro. A la hora de estructurarlo se incorporan los hallazgos del paso anterior y se analizan las posibles soluciones haciendo uso de herramientas de planeación como por ejemplo: la lluvia de ideas o el diagrama de Gantt, explicados previamente en el componente.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 9.
        span <em>Hoja de trabajo por área de mejora</em>
      img.d-md-block(src="@/assets/curso/temas/tema4/img-57.svg" data-aos="fade-left")

    ol.lista-ol
      li 
        .lista-ol
        p ● <strong>Implementación y seguimiento:</strong> En esta fase deben integrarse los trabajadores propuestos para ejecutar las acciones de mejora. Es su tarea llevar a cabo las acciones y dar seguimiento con base en los indicadores de impacto y desempeño. Debido a que se encuentran directamente involucrados en la ejecución del plan de mejora, ellos son quienes pueden retroalimentar su diseño de forma más oportuna.

    .col-12.d-flex.flex-wrap.align-items-center.p-2.mb-4
      .col-12.col-md-3.col-lg-1
        img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema4/decorador-2.svg" data-aos="fade-right" style="max-width: 100px")
      p.col.mb-0.col-md-9.col-lg-11.ps-lg-4(data-aos="fade-left") La evaluación constante de las medidas propuestas permitirá implementar acciones alternativas durante la ejecución del plan. Se recomienda que tanto la planificación como la ejecución sean acompañadas con un cronograma para delimitar el tiempo disponible y realizar cada tarea planeada, situación que no debe limitar la aplicación de medidas de forma permanente cuando la problemática lo amerite. Por otro lado, es imperativo definir indicadores de seguimiento lo cual permitirá cuantificar el cumplimiento de metas y brindar las herramientas necesarias para emitir un juicio de valor más objetivo.

    p.mb-5(data-aos="fade-right") La siguiente tabla aporta un modelo de seguimiento numerado por área y problemática, bajo esta estructura es posible segmentar el análisis y compartir únicamente los resultados que le competan a los trabajadores involucrados:

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 10.
        span <em>Matriz de seguimiento de plan de mejora</em>
      img.d-md-block(src="@/assets/curso/temas/tema4/img-58.svg" data-aos="fade-left")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 4.3 Acciones correctivas y de mejora

    p(data-aos="fade-right") Las acciones de un plan de mejora son aquellas actividades destinadas a eliminar una problemática o incrementar la eficiencia del proceso en evaluación. Su ciclo consiste en la su formulación, aplicación y posterior evaluación. Por un lado, las acciones correctivas buscan solucionar una no conformidad ya existente, es decir, una problemática que ya está presente; mientras que las acciones preventivas se enfocan en prevenir potenciales no conformidades, o en aprovechar las oportunidades de mejora; a continuación, se expondrán las fuentes y etapas.

    figure
      img(src='@/assets/curso/temas/tema4/img-59.svg', alt='Texto que describa la imagen')

    .row
      .col-auto
        a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
          span Abrir modal
          .indicador--click(v-if="mostrarIndicador")
    
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Modal 1
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.







</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
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
