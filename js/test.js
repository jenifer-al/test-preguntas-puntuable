
let indiceActual = 0;

let opcionSeleccionada = "";



// =========================
// Cargar preguntas
// =========================


let preguntas = JSON.parse(

    sessionStorage.getItem("test_data")

) || JSON.parse(JSON.stringify(listaPreguntas));





// =========================
// Variables DOM
// =========================


let contenedor;


let dialogConfirmar;
let btnConfirmar;
let btnCancelar;



let dialogCorreo;
let formCorreo;
let inputCorreo;
let btnCerrarCorreo;



let btnAnterior;
let btnSiguiente;
let btnReiniciar;
let btnFinalizar;





// =========================
// Renderizar pregunta
// =========================


const renderizarPregunta = () => {


    const preguntaActual =
    preguntas[indiceActual];



    const {

        texto,
        imagen,
        opciones,
        correcta,
        justificacion,
        confirmada,
        acierto

    } = preguntaActual;




    const botones = Object.values(opciones)

    .map(opcion => {


        return `


        <button


        type="button"


        class="btn-opcion border-2 border-teal-600 rounded-xl w-full mb-2 md:w-[200px] 
        
        bg-gradient-to-r from-teal-400 via-indigo-500 to-blue-500 text-white font-bold "


        data-opcion="${opcion}"


        ${confirmada ? "disabled" : ""}>


        ${opcion}



        ${
        confirmada && opcion === correcta
        ? " 👈 "
        : ""
        }



        </button>


        `;


    })

    .join("");





    let explicacion = "";



    if(confirmada){


        explicacion = `


        <div class="mt-5 p-4 bg-green-100 rounded-xl">


        <p class="font-bold">

        ${
        acierto
        ? "✅ Has acertado"
        : "❌ Has fallado"
        }

        </p>



        <p>

        Respuesta correcta:

        ${correcta}

        </p>



        <p>

        ${justificacion}

        </p>



        </div>


        `;


    }


    contenedor.innerHTML = `

  
    <article class="border-4 border-green-400 rounded-xl p-6  bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 
      w-full mx-auto md:max-w-[600px] lg:max-w-[850px] xl:max-w-[1000px]">


    <h2 class="text-xl font-bold">

    Pregunta ${indiceActual + 1}

    </h2>



    <p class="my-4 text-green-950 font-bold">

    ${texto}

    </p>



  

    <div class="flex flex-col gap-3 md:flex-row ">


      <img

    src="${imagen}"

    alt="${texto}"

    class="w-[600px]  mx-auto mb-5 md:w-[300px] lg:w-[600px] ">

    <div class="flex flex-col items-center">


    ${botones}


    </div>

    </div>

    ${explicacion}



    </article>


    `;





    document

    .querySelectorAll(".btn-opcion")

    .forEach(boton => {


        boton.addEventListener(

            "click",

            seleccionarRespuesta

        );


    });



};

// =========================
// Seleccionar respuesta
// =========================


const seleccionarRespuesta = (evento) => {


    const preguntaActual =
    preguntas[indiceActual];


    if(preguntaActual.confirmada){

        return;

    }



    opcionSeleccionada =
    evento.target.dataset.opcion;



    dialogConfirmar.showModal();


};





// =========================
// Confirmar respuesta
// =========================


const confirmarRespuesta = () => {


    const preguntaActual =
    preguntas[indiceActual];



    preguntaActual.respuesta =
    opcionSeleccionada;



    preguntaActual.acierto =
    opcionSeleccionada === preguntaActual.correcta;



    preguntaActual.confirmada = true;




    sessionStorage.setItem(

        "test_data",

        JSON.stringify(preguntas)

    );



    dialogConfirmar.close();



    renderizarPregunta();


};





// =========================
// Cancelar respuesta
// =========================


const cancelarRespuesta = () => {


    dialogConfirmar.close();


};





// =========================
// Siguiente pregunta
// =========================


const siguientePregunta = () => {


    if(indiceActual < preguntas.length - 1){


        indiceActual++;


        renderizarPregunta();


    }


};





// =========================
// Pregunta anterior
// =========================


const preguntaAnterior = () => {


    if(indiceActual > 0){


        indiceActual--;


        renderizarPregunta();


    }


};



// =========================
// Reiniciar test
// =========================

const reiniciarTest = () => {


    preguntas =
    JSON.parse(JSON.stringify(listaPreguntas));


    sessionStorage.setItem(
        "test_data",
        JSON.stringify(preguntas)
    );


    indiceActual = 0;


    renderizarPregunta();


};





// =========================
// Calcular puntuación
// =========================

const calcularNota = () => {

    return preguntas.reduce(

        (total, pregunta) => {

            return total +
            (
                pregunta.acierto
                ? 1
                : 0
            );

        },

        0

    );

};






// =========================
// Finalizar test
// =========================


const finalizarTest = () => {


    dialogCorreo.showModal();


};





// =========================
// Enviar resultados
// =========================


const enviarResultados = (evento) => {


    evento.preventDefault();



    const nota =
    calcularNota();



    dialogCorreo.close();



    alert(

        `Sus respuestas y la calificación ha sido enviada a ${inputCorreo.value}`

    );



    mostrarResultados(nota);



    bloquearAplicacion();


};





// =========================
// Mostrar resultados
// =========================


const mostrarResultados = (nota) => {


    contenedor.innerHTML = `


    <section class="border rounded-xl p-6 bg-white">


    <h2 class="text-2xl font-bold">

    Resultado del test

    </h2>



    <p class="font-bold mt-4">

    Nota:
    ${nota}/${preguntas.length}

    </p>



    ${
        preguntas.map((pregunta,index)=>{


            return `


            <article class="mt-5 border-b pb-3">


            <p class="font-bold">

            ${index + 1}.

            ${pregunta.texto}

            </p>



            <p>

            Tu respuesta:

            ${pregunta.respuesta || "Sin responder"}

            </p>



            <p>

            Correcta:

            ${pregunta.correcta}

            </p>



            </article>


            `;


        }).join("")
    }



    </section>


    `;


};





// =========================
// Cancelar correo
// =========================


const cancelarCorreo = () => {


    dialogCorreo.close();


};


// =========================
// Bloquear aplicación
// =========================


const bloquearAplicacion = () => {


    btnConfirmar.removeEventListener(
        "click",
        confirmarRespuesta
    );


    btnCancelar.removeEventListener(
        "click",
        cancelarRespuesta
    );


    btnAnterior.removeEventListener(
        "click",
        preguntaAnterior
    );


    btnSiguiente.removeEventListener(
        "click",
        siguientePregunta
    );


    btnReiniciar.removeEventListener(
        "click",
        reiniciarTest
    );


    btnFinalizar.removeEventListener(
        "click",
        finalizarTest
    );


    formCorreo.removeEventListener(
        "submit",
        enviarResultados
    );


    btnCerrarCorreo.removeEventListener(
        "click",
        cancelarCorreo
    );


document
.querySelectorAll(".btn-opcion")
.forEach(boton=>{

    boton.disabled = true;
   

    });


};





// =========================
// Inicio aplicación
// =========================


document.addEventListener(

"DOMContentLoaded",

()=>{


    contenedor =
    document.getElementById(
        "contenedor-pregunta"
    );



    dialogConfirmar =
    document.getElementById(
        "dialogConfirmar"
    );



    btnConfirmar =
    document.getElementById(
        "btnConfirmar"
    );



    btnCancelar =
    document.getElementById(
        "btnCancelar"
    );



    dialogCorreo =
    document.getElementById(
        "dialogCorreo"
    );



    formCorreo =
    document.getElementById(
        "formCorreo"
    );



    inputCorreo =
    document.getElementById(
        "correo"
    );



    btnCerrarCorreo =
    document.getElementById(
        "cerrarCorreo"
    );



    btnAnterior =
    document.getElementById(
        "btnAnterior"
    );



    btnSiguiente =
    document.getElementById(
        "btnSiguiente"
    );



    btnReiniciar =
    document.getElementById(
        "btnReiniciar"
    );



    btnFinalizar =
    document.getElementById(
        "btnFinalizar"
    );





    // Dialog respuesta


    btnConfirmar.addEventListener(
        "click",
        confirmarRespuesta
    );


    btnCancelar.addEventListener(
        "click",
        cancelarRespuesta
    );





    // Navegación


    btnAnterior.addEventListener(
        "click",
        preguntaAnterior
    );


    btnSiguiente.addEventListener(
        "click",
        siguientePregunta
    );


    btnReiniciar.addEventListener(
        "click",
        reiniciarTest
    );


    btnFinalizar.addEventListener(
        "click",
        finalizarTest
    );





    // Formulario correo


    formCorreo.addEventListener(
        "submit",
        enviarResultados
    );



    btnCerrarCorreo.addEventListener(
        "click",
        cancelarCorreo
    );





    renderizarPregunta();



});