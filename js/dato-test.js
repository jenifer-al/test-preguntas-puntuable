
// Array de objetos con las preguntas del test

const listaPreguntas = [

    {
        id: "p1",
        texto: "¿Qué tipo de pez es Dory?",
        imagen: "imagenes/dori.jpg",
        opciones: {
            a: "Pez payaso",
            b: "Pez cirujano azul",
            c: "Pez globo",
            d: "Caballito de mar"
        },
        correcta: "Pez cirujano azul",
        justificacion: "Dory es un pez cirujano azul, conocido por su color azul intenso y su cola amarilla. Esta especie pertenece a la familia de los peces cirujanos.",
        puntos: 1,
        respuesta: "",
        confirmada: false,
        acierto: false
    },


    {
        id: "p2",
        texto: "¿Qué estudio japonés es famoso por El viaje de Chihiro?",
        imagen: "imagenes/chi.jpg",
        opciones: {
            a: "Toei Animation",
            b: "Madhouse",
            c: "Studio Ghibli",
            d: "MAPPA"
        },
        correcta: "Studio Ghibli",
        justificacion: "Studio Ghibli es un famoso estudio japonés de animación creado por Hayao Miyazaki y conocido por películas como El viaje de Chihiro.",
        puntos: 1,
        respuesta: "",
        confirmada: false,
        acierto: false
    },


    {
        id: "p3",
        texto: "¿Primer largometraje realizado completamente en CGI?",
        imagen: "imagenes/tois.jpg",
        opciones: {
            a: "Antz",
            b: "Toy Story",
            c: "Shrek",
            d: "Dinosaurio"
        },
        correcta: "Toy Story",
        justificacion: "Toy Story (1995) fue la primera película de animación creada completamente mediante imágenes generadas por ordenador (CGI).",
        puntos: 1,
        respuesta: "",
        confirmada: false,
        acierto: false
    },


    {
        id: "p4",
        texto: "¿Cómo se llama el dueño de los juguetes en Toy Story?",
        imagen: "imagenes/andi.jpg",
        opciones: {
            a: "Andy",
            b: "Sid",
            c: "Bonnie",
            d: "Woody"
        },
        correcta: "Andy",
        justificacion: "Andy Davis es el niño propietario de Woody, Buzz Lightyear y el resto de juguetes durante las primeras películas de Toy Story.",
        puntos: 1,
        respuesta: "",
        confirmada: false,
        acierto: false
    },


    {
        id: "p5",
        texto: "¿Qué técnica utiliza figuras físicas fotografiadas cuadro a cuadro?",
        imagen: "imagenes/pinocho.jpg",
        opciones: {
            a: "Stop Motion",
            b: "Rotoscopia",
            c: "Animación 2D",
            d: "Motion Capture"
        },
        correcta: "Stop Motion",
        justificacion: "El Stop Motion es una técnica de animación que consiste en fotografiar objetos físicos realizando pequeños movimientos entre cada imagen.",
        puntos: 1,
        respuesta: "",
        confirmada: false,
        acierto: false
    },


    {
        id: "p6",
        texto: "¿En qué película aparece la canción Bajo el mar?",
        imagen: "imagenes/sirenita.jpg",
        opciones: {
            a: "La Sirenita",
            b: "Moana",
            c: "Buscando a Nemo",
            d: "Frozen"
        },
        correcta: "La Sirenita",
        justificacion: "Bajo el mar es una canción famosa de La Sirenita interpretada por Sebastián, el cangrejo amigo de Ariel.",
        puntos: 1,
        respuesta: "",
        confirmada: false,
        acierto: false
    },


    {
        id: "p7",
        texto: "¿Qué animal es Asno en Shrek?",
        imagen: "imagenes/asno.jpg",
        opciones: {
            a: "Caballo",
            b: "Mula",
            c: "Burro",
            d: "Poni"
        },
        correcta: "Burro",
        justificacion: "Asno es un burro parlante que acompaña a Shrek durante sus aventuras y se convierte en uno de sus mejores amigos.",
        puntos: 1,
        respuesta: "",
        confirmada: false,
        acierto: false
    },


    {
        id: "p8",
        texto: "¿Cómo se llama el reino de Frozen?",
        imagen: "imagenes/aran.jpg",
        opciones: {
            a: "Arendelle",
            b: "Corona",
            c: "Atlantis",
            d: "DunBroch"
        },
        correcta: "Arendelle",
        justificacion: "Arendelle es el reino ficticio donde viven Elsa y Anna y donde ocurre la historia principal de Frozen.",
        puntos: 1,
        respuesta: "",
        confirmada: false,
        acierto: false
    },


    {
        id: "p9",
        texto: "¿Qué tipo de pez es Nemo?",
        imagen: "imagenes/nemo.jpg",
        opciones: {
            a: "Pez cirujano",
            b: "Pez payaso",
            c: "Pez globo",
            d: "Caballito de mar"
        },
        correcta: "Pez payaso",
        justificacion: "Nemo es un pez payaso, una especie conocida por sus colores naranja y blanco y por vivir entre anémonas marinas.",
        puntos: 1,
        respuesta: "",
        confirmada: false,
        acierto: false
    },


    {
        id: "p10",
        texto: "¿Cómo se llama el ratón chef de Ratatouille?",
        imagen: "imagenes/remi.jpg",
        opciones: {
            a: "Linguini",
            b: "Emile",
            c: "Remy",
            d: "Anton Ego"
        },
        correcta: "Remy",
        justificacion: "Remy es un ratón con un gran talento para cocinar que sueña con convertirse en chef en París.",
        puntos: 1,
        respuesta: "",
        confirmada: false,
        acierto: false
    }

];


// Comprobación en consola
console.log("Preguntas cargadas:", listaPreguntas.length);