<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Plan de mejora

    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        .cajon.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right")
          .col-md-11.ps-lg-4
            p El plan de mejora aplica una vez se han efectuado los procesos de evaluación a los diferentes procesos de la empresa. Su objetivo es eliminar las ineficiencias y problemáticas para perfeccionar sus sistemas hasta donde sea posible; para ello, se diseña un conjunto de medidas enfocadas a solucionar, eliminar o reducir sus causas.
            p En este sentido, la mecánica operacional se desarrolla a partir de una planeación, seguida por una ejecución, luego una evaluación y, finalmente, la aplicación de medidas enfocadas a mejorar el proceso para retomar el ciclo nuevamente.
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema4/img-52.svg" data-aos="fade-left" style="max-width: 400px")

    p.mb-5(data-aos="fade-right") El alcance del plan de mejora abarca todas las áreas de la empresa, esto se debe a que cualquier proceso dentro del sistema es susceptible de mejora. Debido a ello, estos son responsabilidad de las directivas o la gerencia general, este grupo de personas está acompañado de los directores de cada área, sin embargo, durante el proceso de diseño resulta de vital importancia contar con la retroalimentación del personal operativo, quienes pueden aportar hallazgos que pasen desapercibidos en los niveles más altos de la organización.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Hallazgos

    p.mb-5(data-aos="fade-right") Los hallazgos son el resultado de la evaluación de la evidencia recopilada, frente a los criterios que se estiman para dicha evaluación. Existen dos tipos de hallazgos: 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img.px-4
            img(src='@/assets/curso/temas/tema4/decorador-3.svg' alt='')
          .tarjeta.tarjeta--custom
            .p-4
              h5 Conformidad
              p.mb-0 Es cuando en la evaluación, se encuentra que el proceso está de acuerdo con la exigencia establecida. 
      
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img.px-4
            img(src='@/assets/curso/temas/tema4/decorador-4.svg' alt='')
          .tarjeta.tarjeta--custom
            .p-4
              h5 No conformidad
              p.mb-3 Es cuando en la evaluación, se encuentra que el proceso no está de acuerdo con la exigencia establecida. Podemos encontrar diferentes tipos de no conformidades, entre los más comunes están:
              ul.lista-ul.mb-2
                li.mb-0
                  i.fas.fa-play(style="color:#B20D0D")
                  | <strong>No conformidad mayor:</strong> cuando hay una ausencia de la exigencia establecida y puede poner en riesgo las actividades de la empresa.
                li.mb-0
                  i.fas.fa-play(style="color:#B20D0D")
                  | <strong>No conformidad menor:</strong> cuando se encuentra una deficiencia o debilidad, que puede ser corregida y no afecta significativamente los intereses de la empresa.

    p.mb-5(data-aos="fade-right") Es a partir de estos hallazgos que la empresa puede implementar una planeación enfocada a corregir y prevenir las no conformidades y a ver los hallazgos como una oportunidad de mejora. 

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Paso para implementarlo 

    .row.mb-4
      .col-12.col-md-5.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema4/img-56.png', alt='Texto que describa la imagen')
      .col-12.col-md-7
        p Para ejecutar un plan de mejora que cumpla con su objetivo de perfeccionar los procesos evaluados, se recomienda realizar los siguientes pasos.
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-circle(style="color:#B20D0D")
            | <strong>Análisis de las causas:</strong> consiste en identificar los procesos susceptibles de mejora y priorizados en relación con su relevancia para dar cumplimiento al objetivo misional de la compañía. Seguido de ello, se deben identificar las causas de la problemática y sus efectos negativos en la operación.
          br
          li.mb-0
            i.fas.fa-circle(style="color:#B20D0D")
            | <strong>Propuesta de planificación:</strong> se debe diseñar un plan que sea viable y lo suficientemente flexible para implementar acciones adicionales a futuro. A la hora de estructurarlo se incorporan los hallazgos del paso anterior y se analizan las posibles soluciones haciendo uso de herramientas de planeación como, por ejemplo: la lluvia de ideas o el diagrama de Gantt, explicados previamente en el componente.

    p.mb-5 Una vez sean definidas las soluciones más efectivas, es necesario proponer las acciones y las tareas a realizar especificando los beneficios que se esperan obtener. Finalmente, se documenta todo el proceso en el plan de mejora. 

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 11.
        span <em>Hoja de trabajo por área de mejora</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema4/img-57.svg" data-aos="fade-left")
      figcaption Nota. Tomada de Aneca (s.f.)

    ul.lista-ul.mb-4
      li.mb-0
        i.fas.fa-circle(style="color:#B20D0D")
        | <strong>Implementación y seguimiento:</strong> en esta fase deben integrarse los trabajadores propuestos para ejecutar las acciones de mejora. Es su tarea llevar a cabo las acciones y dar seguimiento con base en los indicadores de impacto y desempeño. Debido a que se encuentran directamente involucrados en la ejecución del plan de mejora, ellos son quienes pueden retroalimentar su diseño de forma más oportuna.

    .col-12.d-flex.flex-wrap.align-items-center.p-2.mb-4
      .col-12.col-md-3.col-lg-1
        img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema4/decorador-2.svg" data-aos="fade-right" style="max-width: 100px")
      p.col.mb-0.col-md-9.col-lg-11.ps-lg-4(data-aos="fade-left") La evaluación constante de las medidas propuestas permitirá implementar acciones alternativas durante la ejecución del plan. Se recomienda que tanto la planificación como la ejecución sean acompañadas con un cronograma para delimitar el tiempo disponible y realizar cada tarea planeada, situación que no debe limitar la aplicación de medidas de forma permanente cuando la problemática lo amerite. 
        br
        br
        | Por otro lado, es imperativo definir indicadores de seguimiento lo cual permitirá cuantificar el cumplimiento de metas y brindar las herramientas necesarias para emitir un juicio de valor más objetivo.

    p.mb-5(data-aos="fade-right") La siguiente tabla aporta un modelo de seguimiento numerado por área y problemática, bajo esta estructura es posible segmentar el análisis y compartir únicamente los resultados que le competan a los trabajadores involucrados:

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 12.
        span <em>Matriz de seguimiento de plan de mejora</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema4/img-58.svg" data-aos="fade-left")
      figcaption Nota. Tomada de Aneca (s.f.)

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Acciones correctivas y de mejora

    .row.justify-content-center.align-items-center.mb-5
      .col-md-7.mb-4.mb-md-0
        p.text-small Las acciones de un plan de mejora son aquellas actividades destinadas a eliminar una problemática o incrementar la eficiencia del proceso en evaluación. Su ciclo consiste en la formulación, aplicación y posterior evaluación. Por un lado, las acciones correctivas buscan solucionar una no conformidad ya existente, es decir, una problemática que ya está presente; mientras que las acciones preventivas se enfocan en prevenir potenciales no conformidades, o en aprovechar las oportunidades de mejora; a continuación, se expondrán las fuentes en donde se pueden aplicar las acciones y planes de mejora: 
        .anexo.anexo-custom.mb-2
          .anexo__icono
            img(src="@/assets/curso/temas/tema4/icono-check.svg")
          .anexo__texto
            p.text-small <strong>Actividades internas y externas de la empresa</strong>
        .anexo.anexo-custom.mb-2
          .anexo__icono
            img(src="@/assets/curso/temas/tema4/icono-check.svg")
          .anexo__texto
            p.text-small <strong>Personal perteneciente a la empresa</strong>
        .anexo.anexo-custom.mb-2
          .anexo__icono
            img(src="@/assets/curso/temas/tema4/icono-check.svg")
          .anexo__texto
            p.text-small <strong>Partes interesadas</strong> (clientes, proveedores, vecinos o cualquier ente gubernamental que tenga contacto con la empresa).       
      .col-md-5.mb-4.mb-md-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema4/img-60.png', alt='')

    ul.lista-ul.mb-5
      li.mb-0
        i.fas.fa-play(style="color:#06D1D1")
        | Para desarrollar una acción correctiva, es importante definir la causa raíz del problema, como se muestra en la siguiente figura: 

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-xl-10.mx-auto
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Figura 6. 
          span <em>Determinar la causa raíz del problema </em>
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img(src="@/assets/curso//temas/tema4/img-61-1.svg" data-aos="zoom-in-up" alt="En la figura 6 se muestra como determinar la causa raíz del problema.")
        figure.movil.mt-0  
          .row.justify-content-center.d-lg-none.d-md-none  
            img(src="@/assets/curso/temas/tema4/img-61-2.svg" data-aos="zoom-in-up" alt="En la figura 6 se muestra como determinar la causa raíz del problema.")

    ul.lista-ul.mb-5
      li.mb-0
        i.fas.fa-play(style="color:#06D1D1")
        | Después de encontrar la causa raíz del problema, se procede a realizar la acción de la siguiente manera:

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 7. 
        span <em>Tratamiento de acciones correctivas.</em>
      img.d-md-block(src="@/assets/curso/temas/tema4/img-62.svg" data-aos="fade-left" alt="En la figura 7 se muestra el tratamiento de acciones correctivas.")

    ul.lista-ul.mb-5
      li.mb-0
        i.fas.fa-play(style="color:#06D1D1")
        | Por último, todas las actividades que lleven bienestar y crecimiento a la empresa, son consideradas como acciones de mejora y estas se pueden desarrollar en 7 pasos fundamentales:
  
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-xl-10.mx-auto
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Figura 8. 
          span <em>Pasos para generar acciones de mejora</em>
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img(src="@/assets/curso//temas/tema4/img-63-1.svg" data-aos="zoom-in-up" alt="En la figura 8 se muestran los pasos para generar acciones de mejora.")
        figure.movil.mt-0  
          .row.justify-content-center.d-lg-none.d-md-none  
            img(src="@/assets/curso/temas/tema4/img-63-2.svg" data-aos="zoom-in-up" alt="En la figura 8 se muestran los pasos para generar acciones de mejora.")

    p Recuerda que, para alcanzar el éxito empresarial, es importante el compromiso y disciplina de todo el personal involucrado y así se llevara a la organización a niveles de confianza y aceptación, no solo para sus empleados, sino para todas las partes interesadas.





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
