<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Presupuesto de producción
    
    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        .cajon.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right")
          .col-md-11.ps-lg-4
            p Las empresas que llevan a cabo actividades de transformación previa a la venta de sus productos, cuentan con una estructura y con un área de producción. En ella, se ejecutan todos los procesos que modifican las materias primas hasta convertirlas en producto terminado; por lo que una misma entidad puede contar con diversas líneas de producción independientes según su actividad económica y su nicho de mercado. 
            p Cuando se trata de estimar el valor de un producto que ha pasado por un proceso de transformación, deben tenerse presente todos los costos necesarios de forma directa o indirecta en su producción. La medición de estas inversiones permitirá determinar el costo unitario de producción, el cual es uno de los factores más relevantes para definir el precio de venta de un producto.
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-1.png" data-aos="fade-left" style="max-width: 400px")
    
    .col-12.d-flex.flex-wrap.align-items-center.p-2.mb-4
      .col-12.col-md-3.col-lg-1
        img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 100px")
      p.col.mb-0.col-md-9.col-lg-11.ps-lg-4(data-aos="fade-left") El plan de producción se convierte, entonces, en una herramienta administrativa que contempla todos los aspectos relevantes a la hora de definir el proceso productivo de cualquier empresa manufacturera. A partir de un estimativo de ventas y unas políticas de inventario, el presupuesto de producción proyectará la cantidad de unidades a realizar y la estimación de su costo unitario y total; con ello, las directivas podrán asignar los recursos necesarios en periodos de tiempo determinados, para garantizar que la empresa ejecute sus actividades de manera continua, a continuación, se presentan las características que se deben tener en cuenta.
    
    Separador
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.1 Características

    p(data-aos="fade-right") La elaboración de un presupuesto de producción es vital y suele contar con los siguientes factores.

    img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right")
    
    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.2 Distribución de recursos

    p.mb-5(data-aos="fade-right") Para llevar a cabo la producción es importante tener en cuenta la totalidad de los recursos necesarios y su equivalente en dinero, de tal forma que no se presenten interrupciones en el proceso. Un plan de producción debe ser lo suficientemente preciso para indicar la cantidad necesaria de cada recurso y el momento en el que será utilizado. En este sentido, es conveniente considerar los tres factores que se integran a través del plan de producción.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 1.2.1 Costos de producción

    p(data-aos="fade-right") Cualquier bien o mercancía producida requiere de tres elementos: materia prima, mano de obra y otros costos indirectos de fabricación; la suma de todos ellos constituye el costo de producción. Por lo que se presenta la descripción para comprender los conceptos mencionados:

    img.mb-3.p-4.mx-auto(src="@/assets/curso/temas/tema1/img-3.svg")

    p.mb-3(data-aos="fade-right") Para el caso de una empresa dedicada a la producción de huevos, algunos de los costos involucrados podrían clasificarse así:

    img.mb-4.p-4.mx-auto(src="@/assets/curso/temas/tema1/img-4.svg")

    p(data-aos="fade-right") Una vez se identifican los insumos necesarios para llevar a cabo la producción, es necesario determinar las cantidades y su valor en dinero. La metodología utilizada puede variar dependiendo de la naturaleza del costo; en el caso de la materia prima, usualmente proviene de la oferta de un proveedor, por lo que su valor es equivalente al precio de compra (más todos los otros costos asociados que son necesarios para poner en disposición el producto, como, por ejemplo: el gasto de transporte, entre otros) multiplicado por el número de unidades. 
    p.mb-5(data-aos="fade-right") Para poner en práctica sus conocimientos revise el siguiente ejemplo que permite determinar el costo mensual de la materia prima de una granja compuesta por 40 gallinas. 

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 1.
        span <em>Valoración de materia prima</em>
      img.d-md-block(src="@/assets/curso/temas/tema1/img-5.svg" data-aos="fade-left")

    p.mb-5(data-aos="fade-right") En el caso de la mano de obra, deben considerarse todos los gastos asociados al empleado, continuando con el ejemplo de la granja se pueden relacionar así:

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 2.
        span <em>Valoración mano de obra</em>
      img.d-md-block(src="@/assets/curso/temas/tema1/img-6.svg" data-aos="fade-left")

    p.mb-5(data-aos="fade-right") Finalmente, los costos indirectos de fabricación son aquellos que no obedecen a un sistema de cálculo estándar debido a su diversidad por lo que su valor se estima a partir de datos históricos o tarifas unitarias cuando es posible. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-7.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Por ejemplo, si para garantizar la salud de las aves es recomendable una vacunación periódica en un intervalo de cada 2 semanas, es posible calcular su costo a partir del costo de la vacuna y el número de vacunas necesarias al mes; mientras que, en el caso de los servicios públicos, su cálculo dependerá del consumo, adicionado a las tarifas básicas de aseo o alumbrado público. Ahora, se presentan otros elementos importantes a tener en cuenta.

    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 1.2.2 Calendario presupuestal

    .row.mb-5
      .col-12.col-md-5.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-8.svg', alt='Texto que describa la imagen')
      .col-12.col-md-7(data-aos="fade-left")
        p Una vez se tiene claridad sobre los insumos a utilizar en la producción y su costo, se debe establecer en qué fases del proceso productivo se hará uso de ellos. Por lo que se hace necesario realizar un calendario presupuestal, el cual busca programar las tareas a desarrollar en la producción y debe diseñarse teniendo en cuenta la secuencia en concordancia con los periodos de tiempo necesarios para ejecutarlas, minimizando jornadas improductivas o retrasos en las fechas estimadas de entrega.
        p La responsabilidad de coordinar el calendario presupuestal recae sobre el jefe del área de producción, dado que debe contar con la autoridad suficiente para disponer del talento humano con miras al diseño del mismo según sus indicaciones. Además, es de vital importancia que tenga el conocimiento técnico necesario para comprender todos los pormenores del proceso de producción, puesto que será el encargado de optimizar el sistema.

    p.mb-5(data-aos="fade-right") Para elaborar el calendario presupuestal es recomendable seguir una serie de pasos que garanticen que todos los aspectos relevantes en la producción han sido tenidos en cuenta. Se sugiere que cualquier proceso de gestión de tiempos considere los siguientes aspectos.

    AcordionA.mb-5.bgr_7(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Proceso de gestión de tiempos").p-4
        .col-md-6.mb-4.mb-md-0
          p La gestión de tiempos es muy importante en la organización y gestión de una empresa avícola, ya que, al no hacerse planeación y seguimiento se puede incurrir en sobregastos por pérdidas.
        .col-md-6
          figure
            img.mx-auto(src='@/assets/curso/temas/tema1/decorador-2.svg', style="max-width: 120px", alt='Texto que describa la imagen')
      .row(titulo="Definir las actividades").p-4
        .col-md-6.mb-4.mb-md-0
          p En primer lugar, se debe tener claridad sobre todas las actividades necesarias para la producción. El desglose de los trabajos en actividades aportará una base para llevar a cabo la programación, ejecución y supervisión de las tareas. 
        .col-md-6
          figure
            img.mx-auto(src='@/assets/curso/temas/tema1/decorador-3.svg', style="max-width: 120px", alt='Texto que describa la imagen')
      .row(titulo="Diseñar la secuencia de actividades").p-4
        .col-md-6.mb-4.mb-md-0
          p En esta fase se deben establecer las relaciones entre las actividades productivas, para crear así un orden lógico, de tal forma que, salvo por la primera y la última, cada labor esté precedida y sucedida por otra.
        .col-md-6
          figure
            img.mx-auto(src='@/assets/curso/temas/tema1/decorador-4.svg', style="max-width: 120px", alt='Texto que describa la imagen')
      .row(titulo="Estimar recursos").p-4
        .col-md-6.mb-4.mb-md-0
          p Cada actividad requerirá de diversos recursos para ser ejecutada. En este aspecto deben contemplarse factores como la materia prima o maquinaria, los insumos o consumibles y el talento humano.
        .col-md-6
          figure
            img.mx-auto(src='@/assets/curso/temas/tema1/decorador-5.svg', style="max-width: 120px", alt='Texto que describa la imagen')
      .row(titulo="Calcular el tiempo de ejecución").p-4
        .col-md-6.mb-4.mb-md-0
          p En esta etapa del proceso deberá estimarse el tiempo necesario para ejecutar cada una de las actividades.
        .col-md-6
          figure
            img.mx-auto(src='@/assets/curso/temas/tema1/decorador-6.svg', style="max-width: 120px", alt='Texto que describa la imagen')
      .row(titulo="Diseñar cronograma").p-4
        .col-md-6.mb-4.mb-md-0
          p Una vez se tienen definidos los recursos, el tiempo y la secuencia de cada actividad, se procede a integrarlo en un cronograma. En él se detallarán las fechas de inicio y fin de cada actividad, de tal forma que se garantice la continuidad del proceso productivo.
        .col-md-6
          figure
            img.mx-auto(src='@/assets/curso/temas/tema1/decorador-7.svg', style="max-width: 120px", alt='Texto que describa la imagen')
      .row(titulo="Monitorear").p-4
        .col-md-6.mb-4.mb-md-0
          p En el transcurso de la ejecución del cronograma es importante llevar a cabo un control del cumplimiento de las tareas programadas, ya que, debido a su naturaleza secuencial, el retraso en alguna actividad puede significar la modificación de los tiempos y plazos para las actividades posteriores.
        .col-md-6
          figure
            img.mx-auto(src='@/assets/curso/temas/tema1/decorador-8.svg', style="max-width: 120px", alt='Texto que describa la imagen')

    p.mb-5(data-aos="fade-right") La coordinación de cada una de las actividades a ejecutar posibilitará el uso eficiente de todos los recursos, por lo que se recomienda el uso de herramientas que permitan visualizar los horizontes de tiempo de una manera clara y efectiva, de tal forma que todos los participantes de la producción comprendan el cronograma. Para llevar a cabo esta labor se sugiere el uso de una de las herramientas más populares en la gestión de proyectos.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 1.2.3 Diagrama de Gantt

    p.mb-5(data-aos="fade-right") Consiste en un gráfico de barras horizontales utilizado para representar un cronograma de manera visual. Cada barra del diagrama representa una actividad o tarea, y su longitud, el tiempo necesario para ejecutarla. Su diseño permite coordinar varias tareas de manera simultánea o secuencial, involucrando tantas como el proyecto requiera. Según el portal Asana.com (2020), las ventajas más significativas de los diagramas de Gantt son:

    .row.justify-content-center.mb-5
      .col-lg-8.col-12
        ImagenInfografica.color-primario

          template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img-9.svg', alt='')

          .tarjeta.color-acento-contenido2.p-3(x="39.5%" y="21%" numero="+")
            p Trazar visualmente el plan y el cronograma de un proyecto:  se muestra cuál es el trabajo, cuándo y en qué orden se hará.

          .tarjeta.color-acento-botones.p-3(x="56.5%" y="48%" numero="+")
            p Para organizar proyectos complejos: su sistema permite la compilación de una gran cantidad de tareas a la vez.

          .tarjeta.color-primario.p-3(x="65.9%" y="60%" numero="+")
            p Con el fin de coordinar múltiples involucrados: permiten designar las tareas a muchas personas a la vez. Cada cual puede tener uno o varios responsables.

          .tarjeta.color-secundario.p-3(x="77.9%" y="85.9%" numero="+")
            p Se pueden estimar los cronogramas y cargas de trabajo: desde su concepción otorgan la facultad de saber con anticipación cuánto tiempo y cuánta mano de obra requerirá cada actividad en específico.

    p.mb-5(data-aos="fade-right") Para diseñar un diagrama de Gantt se requiere como insumo principal el cronograma elaborado en el plan de producción. Como recomendación se describe la siguiente metodología a seguir.

    .row.justify-content-center.mb-5
      .col-lg-8.col-12
        ImagenInfografica.color-primario

          template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img-10.svg', alt='')

          .tarjeta.color-acento-contenido2.p-3(x="12%" y="42%" numero="+")
            p Debe ser tan extenso como el ciclo productivo de la empresa, esto abarca todas las actividades relacionadas con la producción del bien a vender, es decir, desde la orden de compra de materia prima, hasta la puesta en inventario del producto terminado.

          .tarjeta.color-acento-botones.p-3(x="90%" y="42%" numero="+")
            p Deben agregarse las tareas en sentido vertical con sus fechas de inicio y final. El horizonte de tiempo se extiende de manera horizontal, por lo que aquellas que necesiten de un periodo más largo, tendrán una mayor longitud.

          .tarjeta.color-primario.p-3(x="90%" y="59%" numero="+")
            p Toda actividad productiva está sujeta a imprevistos que modifiquen los periodos de finalización de las tareas. La supervisión permanente del diagrama permitirá hacer modificaciones cuando así lo requiera la situación, otorgando más elementos de juicio para la entrega de los bienes terminados. Con esto, se evita que se programen entregas de productos en fechas en las que aún no se encuentran terminados.

          .tarjeta.color-secundario.p-3(x="12%" y="59%" numero="+")
            p En la ejecución de los procesos de producción, existen tareas que son dependientes de otras, hacer claridad sobre estas permite anticiparse a retrasos que afecten varias actividades del cronograma inicial.

    p.mb-5(data-aos="fade-right") Si bien existen herramientas especializadas en el diseño de este diagrama, es posible elaborar una versión simplificada del mismo haciendo uso de una hoja de cálculo. Retomando el ejemplo de la granja de producción avícola, se elabora la siguiente tabla y su diagrama correspondiente. 

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 3.
        span <em>Valoración mano de obra</em>
      img.d-md-block(src="@/assets/curso/temas/tema1/img-11.svg" data-aos="fade-left")

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 1.
        span <em>Diagrama de Gantt</em>
      img.d-md-block(src="@/assets/curso/temas/tema1/img-12.svg" data-aos="fade-left")

    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.3 Órdenes de producción

    p.mb-5(data-aos="fade-right") El sistema de costeo por órdenes de producción permite determinar el costo de un lote de producto terminado en concreto. Con esta metodología se busca determinar el costo de la materia prima, mano de obra y los costos directos de fabricación para un número de unidades; un sistema que resulta de especial utilidad cuando se trabaja por encargos y se busca estimar la utilidad para cada pedido.

    p.mb-5(data-aos="fade-right") En la siguiente figura se presenta, a modo de ejemplo, un esquema a utilizar a la hora de realizar órdenes de producción. El diligenciamiento de este suele estar precedido por una solicitud comercial, es decir, se planea y determina el costo de la producción del lote una vez se ha vendido una cantidad determinada de productos.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 2.
        span <em>Formato de orden de producción</em>
      img.d-md-block(src="@/assets/curso/temas/tema1/img-13.svg" data-aos="fade-left")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 1.3.1 Características

    p.mb-4(data-aos="fade-right") La utilización de las órdenes de producción implica que el proceso productivo dará inicio una vez se emitan, pues en ellas se consigna el tipo y número de unidades a producir; de otra parte, las órdenes de producción suelen contar con las siguientes características.
    
    ol.lista-ol.mb-5
      li 
        .lista-ol
        p ● Se busca determinar un costo de producción independiente para cada pedido, por lo que suele darse en empresas productivas que no tienen una línea de producción estandarizada o permanente.
      li 
        .lista-ol
        p ● Requiere de una planificación previa al inicio de la producción, dado que el alistamiento de material y la elaboración de la orden de producción varía en función de la cantidad de unidades a producir.
      li 
        .lista-ol
        p ● La producción usualmente requiere de un pedido previo, es decir, se trabaja por encargo que, a su vez, suele obedecer a ventas efectuadas a los clientes.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 1.3.2 Diligenciamiento

    .d-flex.flex-wrap
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        .cajon.color-primario.p-4.d-flex.flex-wrap(data-aos="fade-right")
          .col-md-11.ps-lg-4
            p Al hacer una orden de producción, se espera que la elaboración de productos solicitados se alcance con los insumos presupuestados. El objetivo de esta es alistarlos para que estén disponibles en el momento correspondiente para llevar a cabo el proceso productivo con la menor cantidad de excedentes, evitando costos de almacenaje, así como la caducidad u obsolescencia. 
            p Una vez se definen los insumos, se les debe asignar el valor correspondiente para determinar el costo total de la orden de producción y, finalmente, dividir por el número de unidades elaboradas para obtener el costo unitario.
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-14.png" data-aos="fade-left" style="max-width: 400px")

    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.p-4.pt-5
      .col-lg-8.col-12(data-aos="fade-down")
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-15.svg', alt='')

          .tarjeta.color-secundario.p-3(x="28%" y="42%" numero="3")
            .h5.mb-2 <i>Costos Indirectos</i>
            p Se efectúa la misma proporción que con el empleado, por lo que los costos indirectos de fabricación mensuales son los siguientes: por concepto de aseo y desinfección de la granja: $600.000, el pago de servicios públicos (agua y luz) es en promedio de $100.000 y el costo de la cascarilla de arroz asciende a $40.000. 

          .tarjeta.color-secundario.p-3(x="60%" y="50%" numero="2")
            .h5.mb-2 <i>Mano de Obra</i>
            p La granja cuenta con un solo operario cuyo salario básico es de $1.000.000, adicionalmente cuenta con las prestaciones de ley equivalentes a 30 % del ingreso básico, también se debe cancelar la seguridad social a las entidades correspondientes por un valor equivalente al 20 % del salario. Dado que la orden de producción se lleva a cabo en una semana, el costo del empleado debe tomarse de manera proporcional (una cuarta parte del salario).

          .tarjeta.color-secundario.p-3(x="30%" y="73%" numero="1")
            .h5.mb-2 <i>Materia Prima</i>  
            p Se estima que las aves consumen 84 kilogramos de concentrado semanalmente, la compra se efectúa mensualmente a un proveedor que la ofrece a razón de $2.000/kg incluida su entrega en la granja.
            p Los huevos deben entregarse en canastas de cartón con capacidad para almacenar 30 unidades. Cada canasta cuesta $200, por lo que se requerirán 67 para los 2.000 huevos solicitados.

    .col-12.d-flex.flex-wrap.align-items-center.p-2.mb-5
      .col-12.col-md-3.col-lg-1
        img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema1/decorador-9.svg" data-aos="fade-right" style="max-width: 100px")
      p.col.mb-0.col-md-9.col-lg-11.ps-lg-4(data-aos="fade-left") En el siguiente ejemplo se solicita, por medio de la orden de producción número 47, 2.000 huevos a una granja avícola con el fin de cumplir con los pedidos semanales de este producto en la gestión comercial del área de ventas. Para efectos prácticos, las órdenes de producción tienen periodicidad semanal y se cuenta con un solo operario encargado para realizar este trabajo. A continuación, se presenta la siguiente discriminación de costos.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 4.
        span <em>Ejemplo de orden de producción</em>
      img.d-md-block(src="@/assets/curso/temas/tema1/img-16.svg" data-aos="fade-left")

    p.mb-4(data-aos="fade-right") Como se aprecia, el objetivo de la orden de producción es estimar las cantidades y costo de los insumos necesarios; así, se puede tener un estimado del valor unitario de producción y determinar de manera precisa el margen de rentabilidad por huevo vendido.

    p.mb-4(data-aos="fade-right") Otro factor importante que se debe tener en cuenta en la gestión de una granja avícola es identificar la cantidad de productos que puede producir, para lo cual requiere conocer los siguientes aspectos.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.4 Capacidad instalada

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-18.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La capacidad instalada es equivalente al potencial máximo de producción de una sección o área de la empresa, bajo el supuesto de que se cuenta con la totalidad de los equipos, insumos y requerimientos necesarios para operar.
        
        br
        br
        p.mb-0 Usualmente, las empresas producen según las unidades que se venden o esperan vender, por lo que, en condiciones normales, la capacidad instalada es superior a la producción efectiva. 

    p.mb-4(data-aos="fade-right") En aquellos casos donde la demanda de los bienes supera las posibilidades de producción de una empresa, la forma de proceder suele apuntar a la inversión en actualizaciones tecnológicas, compra de nueva maquinaria y ampliación de las áreas de producción o contratación de personal.

    p.mb-4(data-aos="fade-right") Cuando la demanda es inferior a la capacidad instalada, se considera que la planta se encuentra subutilizada, esto incrementa los costos fijos designados a cada producto elaborado. Por ejemplo, si el recibo de la energía eléctrica es de $100 y se producen 100 unidades, el costo asignado a cada unidad es de $1. Mientras que, si se producen solo 50 unidades, el costo unitario asignado será de $2. 

    p.mb-4(data-aos="fade-right") También se hace necesario realizar algunas mediciones para tener claro el proceso de gestión de una granja avícola.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 1.4.1 Medición

    .row.mb-5
      .col-12.col-md-5.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-19.png', alt='Texto que describa la imagen')
      .col-12.col-md-7(data-aos="fade-left")
        p Cuando se habla de la capacidad máxima de producción, no se pueden desestimar los periodos improductivos por requerimientos propios de la maquinaria, o por cuestiones fisiológicas de los operarios. Por ello, es importante calcular la capacidad instalada partiendo de la capacidad teórica, que es aquella que se alcanzaría trabajando las 24 horas del día, los 7 días de la semana.
        p Por ejemplo, una empresa que elabora envases plásticos hace uso de dos máquinas industriales que pueden producir cada una hasta 50 unidades por hora. 
        p Para determinar la capacidad teórica se debe multiplicar el número de unidades por hora por las horas del día, de esta forma se puede definir una capacidad teórica en los intervalos de tiempo que sean más beneficiosos para el análisis, así:

    p.mb-4(data-aos="fade-right") Para elaborar el calendario presupuestal es recomendable seguir una serie de pasos que garanticen que todos los aspectos relevantes en la producción han sido tenidos en cuenta. Se sugiere que cualquier proceso de gestión de tiempos considere los siguientes aspectos.

    img.d-md-block.mb-5(src="@/assets/curso/temas/tema1/img-20.svg" data-aos="fade-left")

    p.mb-4(data-aos="fade-right") A partir de esta capacidad teórica, se pueden deducir los periodos de tiempo improductivos que surgen por regulaciones normativas o por las limitaciones propias de la maquinaria. Suponiendo que el fabricante de esta recomienda el uso diario no mayor a 16 horas, por lo que la empresa ha de habituarse a esta condición contratando el personal operativo suficiente para prestar dos turnos de 8 horas por día. De lo anterior se deduce que 8 de cada 24 horas, la maquinaria estará en reposo o en mantenimiento para garantizar su vida útil, por lo que la capacidad instalada se calculará a partir de la proporción, de la siguiente forma:

    img.mb-4.p-4.mx-auto(src="@/assets/curso/temas/tema1/img-21.svg")

    p.mb-4(data-aos="fade-right") Por otro lado, se hace necesario revisar otros factores que alteran el proceso de gestión de una granja avícola al funcionar como empresa, lo que se verá en el siguiente ítem.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 1.4.2 Factores limitantes

    p.mb-4(data-aos="fade-right") Existe multiplicidad de factores que pueden limitar la capacidad instalada de producción, la mayoría de ellos corresponden a factores ajenos a la administración, por lo que deben ser tenidos en cuenta a la hora de establecer políticas para incrementar la productividad. Las situaciones más recurrentes y a tener en cuenta a la hora de efectuar el cálculo de capacidad instalada son las que se mencionan en el siguiente objeto de aprendizaje.

    img.mb-4.p-4.mx-auto(src="@/assets/curso/temas/tema1/img-22.1.svg")

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-5
          .col-12
            img.img-slider(src='@/assets/curso/temas/tema1/imagen-1.png' alt='')
        h2.text-center.texto-negro Jornada Laboral
        p.px-3.text-center.texto-negro En Colombia la jornada laboral es de 48 horas a la semana, o su equivalente diario de 8 horas. Según el tipo de empresa, es posible que la jornada productiva sea de 12 o 16 horas haciendo uso de más personal, el cual deberá laborar por turnos.

      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-5
          .col-12
            img.img-slider(src='@/assets/curso/temas/tema1/imagen-2.png' alt='')
        h2.text-center.texto-negro Condiciones ambientales
        p.px-3.text-center.texto-negro Existen actividades que solo pueden ejecutarse con luz ambiental o en ciertas condiciones climáticas que se dan únicamente en un número determinado de meses al año. Esta situación suele observarse en empresas del sector primario de la economía (extracción de minerales, actividades agrícolas, entre otras).

      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-5  
          .col-12
            img.img-slider(src='@/assets/curso/temas/tema1/imagen-3.png' alt='')
        h2.text-center.texto-negro Condiciones normativas
        p.px-3.text-center.texto-negro La legislación aplicada al mercado en el que se lleva a cabo la producción puede interferir con las políticas de la empresa. Por ejemplo, las políticas ambientales o la estratificación pueden restringir los horarios de operación o su intensidad. 

      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-5
          .col-12
            img.img-slider(src='@/assets/curso/temas/tema1/imagen-4.png' alt='')
        h2.text-center.texto-negro Limitaciones técnicas
        p.px-3.text-center.texto-negro La maquinaria utilizada en producción no suele estar diseñada para funcionar las 24 horas del día. En la mayoría de los casos es obligatorio suspender su uso cada cierto tiempo para prolongar su vida útil.

      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-5
          .col-12
            img.img-slider(src='@/assets/curso/temas/tema1/imagen-5.png' alt='')
        h2.text-center.texto-negro Limitaciones de capital
        p.px-3.text-center.texto-negro Mantener los niveles de producción al máximo implica contar con todos los insumos necesarios en cada etapa del proceso productivo. Esto se traduce en un volumen de compras significativos que no es sostenible en el mediano plazo si el recaudo por ventas no es por lo menos equivalente. 

    p.mb-4(data-aos="fade-right") A continuación, se tienen en cuenta otros elementos que se deben tener en cuenta en la gestión de una empresa avícola.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.5 Trabajo en equipo

    .row.mb-5
      .col-12.col-md-5.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-27.png', alt='Texto que describa la imagen')
      .col-12.col-md-7(data-aos="fade-left")
        p Se concibe como la participación de dos o más personas para el cumplimiento de objetivos en común. Estos grupos pueden ser formales si surgen de la organización misma de la empresa y, por lo tanto, su colaboración proviene de una disposición administrativa; o informales, si no se encuentran respaldados por una decisión organizacional.
        p Para que se dé el trabajo en equipo debe existir una voluntad para trabajar de manera conjunta con terceros, siendo conscientes que el conocimiento de cada integrante del equipo podrá aportar a la ejecución de las tareas desde una perspectiva distinta, a continuación, se presentan algunos elementos importantes.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 1.5.1 Características

    p.mb-4(data-aos="fade-right") El trabajo en equipo requiere contar con una serie de cualidades o características para que aporte más que el trabajo individual, por lo que se describen aquellas que representan una mayor ventaja.

    .tarjeta.tarjeta--azul2.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Trabajo en equipo
            h4 Objetivos en común: 
            p Se deben identificar aquellas metas que comparten los integrantes del equipo, de esta forma será más sencillo dirigir los esfuerzos a un propósito claro.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-28.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Trabajo en equipo
            h4 Funciones por trabajador:
            p Definir las labores que ejecutará cada integrante de acuerdo con su conocimiento y fortalezas hará que se incremente la efectividad, puesto que cada trabajador aportará desde una posición diferente.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-29.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Trabajo en equipo
            h4 Interdependencia:
            p La secuencia de tareas a desarrollar debe crear una red en la que cada integrante se apoye en los demás, de forma que se complementen entre sí.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-30.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Trabajo en equipo
            h4 Reglas claras:
            p Definidas por el mismo equipo o por su líder, enmarcar el trabajo dentro de una serie de reglas evita malentendidos y promueve la ejecución del trabajo de una forma organizada.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-31.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Trabajo en equipo
            h4 Comunicación acertada: 
            p Debe existir un flujo constante de comunicación entre los miembros del equipo, La retroalimentación es importante para atacar aquellas debilidades que pasarían desapercibidas al realizar las tareas de forma individual.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-32.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Trabajo en equipo
            h4 Responsabilidad: 
            p así como se sugiere una designación de tareas, también se deben delimitar las responsabilidades. Aunque los objetivos se alcancen de manera conjunta, cada integrante debe responder por su porción del trabajo a realizar.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-33.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Trabajo en equipo
            h4 Liderazgo:
            p todo trabajo que implique la coordinación de dos o más personas requerirá de un buen líder. Su función será la de encaminar las tareas para alcanzar los objetivos y dirimir las discusiones que puedan surgir por posiciones contrarias. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-34.png', alt='Texto que describa la imagen')

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 1.5.2 Técnicas 

    p.mb-4(data-aos="fade-right") El desempeño de los equipos de trabajo puede verse afectado por técnicas enfocadas a potenciar las habilidades de sus integrantes. El portal Coworkingfy (s.f.) presenta cuatro (4) métodos basados en procedimientos y procesos lógicos para lograr este objetivo, a saber:

    TabsA.color-acento-botones.mt-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Dinámica de grupos")
        .row
          img.p-1.mx-auto(src="@/assets/curso/temas/tema1/img-35.svg")
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Solución de problemas")
        .row
          p Es una técnica que requiere de mayor planeación, pues se busca aislar el problema para luego plantear una solución más estructurada. El diagrama de Gantt, visto previamente en este componente, es una de las metodologías aplicables bajo esta técnica, pues permite registrar las actividades enfocadas a resolver el problema, designar responsables y proponer horizontes de tiempo. Esta técnica se complementa con la elaboración de un plan de acción, que incluye los objetivos a cumplir a futuro.
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Técnicas de experimentación")
        .row
          p Este sistema incentiva la resolución de problemas a través de la experimentación, sometiendo a prueba diferentes alternativas para resolver problemáticas. Con ello se busca que el personal se mantenga en una mentalidad de mejoramiento continuo, aportando nuevos conocimientos con cada nueva estrategia aplicada a un mismo problema.
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Informarse y aprender")
        .row
          p Es una técnica de amplia aplicación en las organizaciones. Con ella se busca que el personal se mantenga en constante capacitación para refinar sus tareas con el paso del tiempo. Es responsabilidad de las directivas otorgar las herramientas necesarias para que se logre este objetivo; para ello se puede disponer de sistemas como las capacitaciones, rotaciones de cargos, talleres prácticos, entre otros.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
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
