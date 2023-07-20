<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Informes de ejecución
    
    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        .cajon.color-primario.p-4.d-flex.flex-wrap(data-aos="fade-right" style="background-color: #FFE8CE")
          .col-md-11.ps-lg-4
            p Toda herramienta de planeación requiere de una fase de control y supervisión que permita tener claridad sobre si las estrategias implementadas alcanzaron los resultados esperados. Esta retroalimentación permite que se modifique la planeación para refinar los procesos y maximizar la generación de valor en la empresa. Los informes de ejecución cumplen con este propósito, puesto que miden el nivel de cumplimiento del plan de producción y todos los elementos que lo conforman.
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema2/img-36.png" data-aos="fade-left" style="max-width: 400px")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.1 Características

    p.mb-5(data-aos="fade-right") Según Burbano (2006), para que un informe de ejecución cumpla su papel, debe contar con lineamientos claros como los que se presentan a continuación.

    AcordionA.mb-5.bgr_7(tipo="b" clase-tarjeta="tarjeta tarjeta--azul2")
      .row(titulo="Dirigido a:").p-4
        .col-md-12.mb-4.mb-md-0
          p Está dirigido a las directivas pertinentes, es decir, a aquellos funcionarios que tengan la capacidad de interpretar la información y cuenten con las facultades para la toma de decisiones a partir de ello.
      .row(titulo="Elementos Necesarios").p-4
        .col-md-12.mb-4.mb-md-0
          p Debe contar con todos los elementos necesarios para resaltar aquellos aspectos que representen las mayores problemáticas y, por lo tanto, requieran de más atención.
      .row(titulo="Periodicidad").p-4
        .col-md-12.mb-4.mb-md-0
          p Debe emitirse de manera periódica y constante para que las medidas y estrategias a implementar sean oportunas.
      .row(titulo="Contenido").p-4
        .col-md-12.mb-4.mb-md-0
          p Contendrá toda la información que sea relevante para el analista. Con esto se espera facilitar el proceso de identificar las ineficiencias y sus causas.
      .row(titulo="Claridad y sencillez").p-4
        .col-md-12.mb-4.mb-md-0
          p Será lo suficientemente claro y sencillo para que la información sea accesible a los distintos usuarios de la información.
      .row(titulo="Aporte").p-4
        .col-md-12.mb-4.mb-md-0
          p Aportará la información suficiente para apoyar la implementación de nuevas medidas, se espera que brinde material constructivo y generador de valor.
      .row(titulo="Interconexión").p-4
        .col-md-12.mb-4.mb-md-0
          p La generación de informes para diferentes áreas debe proveer una interconexión que facilite la validación de la información por usuarios de diferentes niveles. Así, las directivas del nivel estratégico podrán apoyarse en los informes de áreas específicas.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.2 Estructura

    p.mb-5(data-aos="fade-right") El principal objetivo del informe de ejecución es dejar en evidencia el nivel de cumplimiento de metas de la empresa. Para ello, la comparación más evidente consiste en poner en paralelo las expectativas y la realidad; así, un cuadro con tres columnas: ejecutado, presupuestado y su diferencia, podría aportar la información cuantitativa más relevante. No obstante, este tipo de informes puede complementarse con diagramas o gráficos de barras comparativas. 

    .col-12.d-flex.flex-wrap.align-items-center.p-2.mb-4
      .col-12.col-md-3.col-lg-1
        img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema2/decorador-1.svg" data-aos="fade-right" style="max-width: 100px")
      p.col.mb-0.col-md-9.col-lg-11.ps-lg-4(data-aos="fade-left") Por otro lado, el informe debe estar contextualizado en cuanto espacio y tiempo. Es importante mencionar el periodo en evaluación, así como el área de la empresa a la cual le competen los datos. Si se busca enriquecerlo más, se pueden presentar datos de periodos anteriores, para medir la evolución histórica. <br><br>En este sentido, un informe de ejecución general podría presentarse de la siguiente forma: 

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 5.
        span <em>Modelo de informe de ejecución general</em>
      img.d-md-block(src="@/assets/curso/temas/tema2/img-37.svg" data-aos="fade-left")

    p.mb-5(data-aos="fade-right") El principal objetivo del informe de ejecución es dejar en evidencia el nivel de cumplimiento de metas de la empresa. Para ello, la comparación más evidente consiste en poner en paralelo las expectativas y la realidad; así, un cuadro con tres columnas: ejecutado, presupuestado y su diferencia, podría aportar la información cuantitativa más relevante. No obstante, este tipo de informes puede complementarse con diagramas o gráficos de barras comparativas.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 6.
        span <em>Modelo de informe de ejecución del área de producción</em>
      img.d-md-block(src="@/assets/curso/temas/tema2/img-38.svg" data-aos="fade-left")

    p(data-aos="fade-right") Como se puede observar, aunque poseen la misma estructura, el nivel de evaluación difiere entre los dos modelos presentados. Existen diversas formas de evaluar la actividad empresarial:

    ol.lista-ol
      li 
        .lista-ol
        p ● Por áreas (comercial, producción o recaudo, etc.).
      li 
        .lista-ol
        p ● Por periodos de tiempo (semanal, mensual o anual).
      li 
        .lista-ol
        p ● Por niveles (global, por tarea o por producto).

    p.mb-5(data-aos="fade-right") Por lo anterior, serán las necesidades de la dirección las que encaminan el perfil de los informes a unos u otros modelos; a continuación, se explicará brevemente el análisis de datos y su importancia en la gestión de empresas avícolas.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.3 Análisis 

    .row.mb-5
      .col-12.col-md-5.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img-39.svg', alt='Texto que describa la imagen')
      .cajon.color-primario.p-5.d-flex.flex-wrap.col-12.col-md-7(data-aos="fade-left" style="background-color: #FFE8CE")
        p Contar con las variaciones entre lo presupuestado y lo ejecutado permite tener un primer acercamiento a la gestión y manejo de los procesos de la empresa, sin embargo, un análisis requiere tener presentes variables de tipo cualitativo que no se pueden plasmar en este tipo de tablas. Las cifras sin contexto pueden inducir a errores, por lo que se sugiere que cada rubro se interprete como un fragmento de un organismo, donde cada elemento puede variar en función de los demás.

    p.mb-4(data-aos="fade-right") Siguiendo con la idea anterior, es altamente recomendable elaborar más de un presupuesto, afectado por el comportamiento de diferentes áreas, creando una sucesión de escenarios que sirvan como comparativa con la ejecución posterior. Para llevar a cabo esta labor, surge una herramienta conocida como el presupuesto flexible, el cual busca establecer metas diferentes cuando los escenarios originales no se cumplen.

    p.mb-4(data-aos="fade-right") Por ejemplo, si las ventas anuales solo alcanzaron 60 % de las presupuestadas, no se puede asumir que la reducción de los gastos por comisiones de ventas en 10 % del presupuesto original sea algo positivo. Es cierto que se está gastando menos de lo presupuestado en las comisiones a vendedores, pero esto no obedece a una correcta gestión del área comercial, sino todo lo contrario, la reducción comercial es solo una consecuencia lógica de los bajos niveles de venta.

    p.mb-4(data-aos="fade-right") Este tipo de presupuesto requiere un conocimiento profundo de todos los procesos, puesto que la diversidad de escenarios requiere que se tengan claras las estructuras de costos fijos y variables. Es evidente que a menores ventas, menores niveles de producción, por lo que los costos directos, como la materia prima, también se van a ver disminuidos.

    p.mb-4(data-aos="fade-right") De nuevo, y como en el ejemplo anterior, esto no es gracias a mejores precios o a políticas implementadas para un manejo más eficiente de la producción; sino que para producir menos unidades se requieren menos materiales. Los costos fijos, por otra parte, probablemente se mantengan constantes dado que no se ven afectados por los niveles de producción.

    p.mb-5(data-aos="fade-right") Para lograr identificar las causas que llevan a modificar las variables presupuestadas, es recomendable descomponerlas en factores más pequeños, de tal forma que el análisis sea más detallado. Así, el volumen de ventas podría descomponerse en dos factores:

    .col-xl-10.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema2/img-40.svg" data-aos="fade-left")

    p.mb-5(data-aos="fade-right") El estudio de las ventas alcanzadas podría interpretarse desde dos perspectivas: ¿se están vendiendo más unidades o las mayores ventas se deben a un incremento en el precio? Sea cual sea la respuesta se derivarán nuevos análisis, por ejemplo, ¿el nuevo precio se debe a la inflación o al incremento del costo de las materias primas?

    p.mb-4(data-aos="fade-right") Para ilustrar el caso anterior, se presenta un presupuesto de producción estático y uno flexible.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 7.
        span <em>Informe presupuesto de producción estático</em>
      img.d-md-block(src="@/assets/curso/temas/tema2/img-41.svg" data-aos="fade-left")

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 8.
        span <em>Informe presupuesto de producción flexible</em>
      img.d-md-block(src="@/assets/curso/temas/tema2/img-42.svg" data-aos="fade-left")

    p.mb-4 La interpretación derivada de los dos presupuestos es diferente debido a las expectativas de ventas. En el primer caso, la disminución significativa de las ventas hace parecer como adecuada la gestión en las demás áreas, situación contraria a la presenciada en el presupuesto flexible, donde el volumen de ventas tiene implicaciones en los demás sistemas de la compañía.

    p.mb-4 La valoración de estas desviaciones a la hora de evaluar la gestión es importante para determinar los procesos que requieren atención; complementar el análisis con la simulación de escenarios y teniendo presentes todas las situaciones, reducirá el factor subjetivo y ofrecerá un resultado mucho más preciso.

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
