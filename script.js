// Seleccionar todas las secciones
const secciones = document.querySelectorAll("section");

// Ocultar todas las secciones
function ocultarSecciones() {
    secciones.forEach(seccion => {
        seccion.style.display = "none";
    });
}

// Mostrar una sección
function mostrarSeccion(id) {
    ocultarSecciones();
    document.getElementById(id).style.display = "block";
}

// Mostrar Inicio al cargar la página
mostrarSeccion("inicio");

// Botones del menú
const botones = document.querySelectorAll(".menu button");

botones[0].addEventListener("click", () => {
    mostrarSeccion("inicio");
});

botones[1].addEventListener("click", () => {
    mostrarSeccion("conceptos");
});

botones[2].addEventListener("click", () => {
    mostrarSeccion("caracteristicas");
});

botones[3].addEventListener("click", () => {
    mostrarSeccion("funciones");
});

botones[4].addEventListener("click", () => {
    mostrarSeccion("tabla");
});

botones[5].addEventListener("click", () => {
    mostrarSeccion("examen");
});

// BOTÓN INICIAR PRUEBA
const btnIniciar = document.getElementById("btnIniciar");

// Preguntas
const preguntas = [
{
pregunta: "¿Qué permite almacenar información en JavaScript?",
opciones: ["Eventos", "Funciones", "Variables", "Alertas"],
correcta: 2
},
{
pregunta: "¿Qué es una función en JavaScript?",
opciones: ["Un navegador", "Un bloque de código que realiza una tarea específica", "Una imagen", "Un archivo HTML"],
correcta: 1
},
{
pregunta: "¿Cuál es la función de los eventos en JavaScript?",
opciones: ["Cambiar colores", "Detectar acciones del usuario", "Crear tablas", "Guardar imágenes"],
correcta: 1
},
{
pregunta: "¿Para qué sirven los condicionales?",
opciones: ["Mostrar imágenes", "Crear botones", "Tomar decisiones según una condición", "Cerrar la página"],
correcta: 2
},
{
pregunta: "¿Qué hace la función alert()?",
opciones: ["Reproduce videos", "Muestra mensajes emergentes", "Guarda datos", "Cambia el fondo"],
correcta: 1
},
{
pregunta: "¿Qué es JavaScript?",
opciones: ["Un sistema operativo", "Un lenguaje de programación", "Un navegador web", "Una base de datos"],
correcta: 1
},
{
pregunta: "¿Dónde se ejecuta JavaScript principalmente?",
opciones: ["En el navegador del usuario", "En una impresora", "En una calculadora", "En un PDF"],
correcta: 0
},
{
pregunta: "¿Con qué tecnologías trabaja JavaScript?",
opciones: ["Word y Excel", "HTML y CSS", "Paint y Photoshop", "Windows y Linux"],
correcta: 1
},
{
pregunta: "¿Cuál es una característica importante de JavaScript?",
opciones: ["Crear páginas dinámicas e interactivas", "Imprimir documentos", "Diseñar edificios", "Crear videojuegos 3D"],
correcta: 0
},
{
pregunta: "¿Qué permite hacer JavaScript en una página web?",
opciones: ["Solo mostrar texto", "Crear páginas dinámicas e interactivas", "Instalar programas", "Formatear discos"],
correcta: 1
}
];

let preguntaActual = 0;

// Iniciar examen
btnIniciar.addEventListener("click", () => {
    mostrarPregunta();
});

// Mostrar pregunta
function mostrarPregunta() {

    const area = document.getElementById("areaExamen");

    const p = preguntas[preguntaActual];

    area.innerHTML = `
        <h3>Pregunta ${preguntaActual + 1} de 10</h3>

        <p>${p.pregunta}</p>

        <label>
            <input type="radio" name="respuesta">
            ${p.opciones[0]}
        </label>
        <br><br>

        <label>
            <input type="radio" name="respuesta">
            ${p.opciones[1]}
        </label>
        <br><br>

        <label>
            <input type="radio" name="respuesta">
            ${p.opciones[2]}
        </label>
        <br><br>

        <label>
            <input type="radio" name="respuesta">
            ${p.opciones[3]}
        </label>
    `;
}
