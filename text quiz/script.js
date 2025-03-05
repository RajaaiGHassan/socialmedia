let pantalla = document.getElementById("pantalla");
let paso = 0;
let puntuacion = 0;

function mostrarLeccion() {
    paso = 0;
    pantalla.innerHTML = `
        <h3>Lección: El Sistema Respiratorio</h3>
        <p>
            El sistema respiratorio es el encargado de suministrar oxígeno al cuerpo y eliminar el dióxido de carbono. 
            Está compuesto por diversos órganos como la nariz, la faringe, la laringe, la tráquea, los bronquios y los pulmones.
        </p>
        <p>
            El proceso de respiración se divide en dos fases: inspiración y espiración. En la inspiración, el oxígeno entra a los pulmones 
            y se transporta por la sangre hacia las células. En la espiración, el dióxido de carbono se expulsa del cuerpo. 
        </p> 
        <button onclick="siguiente()">Siguiente</button>
    `;
}

function siguiente() {
    paso++;
    if (paso === 1) {
        pantalla.innerHTML = `
            <h3>Ejercicio 1: Completa los espacios</h3>
            <p>1. El sistema respiratorio transporta <input type="text" id="respuesta1"> al cuerpo.</p>
            <p>2. El <input type="text" id="respuesta2"> es expulsado durante la espiración.</p>
            <p>3. La <input type="text" id="respuesta3"> ayuda a controlar la respiración.</p>
            <p>4. Los glóbulos <input type="text" id="respuesta4"> transportan oxígeno en la sangre.</p>
            <button class="btn-leccion" onclick="mostrarLeccion()">Volver a la Lección</button>
            <button onclick="verificar1()">Verificar</button>
            
        `;
    } else if (paso === 2) {
        pantalla.innerHTML = `
            <h3>Ejercicio 2: Opción múltiple</h3>
            <p>1. ¿Cuál es el órgano principal del sistema respiratorio?</p>
            <select id="respuesta5">
                <option value="">Seleccione una opción</option>
                <option value="corazon">Corazón</option>
                <option value="pulmon">Pulmón</option>
            </select>

            <p>2. ¿Qué gas necesitamos para vivir?</p>
            <select id="respuesta6">
                <option value="">Seleccione una opción</option>
                <option value="oxígeno">Oxígeno</option>
                <option value="hidrógeno">Hidrógeno</option>
            </select>

            <p>3. ¿Dónde ocurre el intercambio de gases?</p>
            <select id="respuesta7">
                <option value="">Seleccione una opción</option>
                <option value="pulmones">Pulmones</option>
                <option value="riñón">Riñón</option>
            </select>

            <p>4. ¿Qué estructura conecta la boca con los pulmones?</p>
            <select id="respuesta8">
                <option value="">Seleccione una opción</option>
                <option value="tráquea">Tráquea</option>
                <option value="esófago">Esófago</option>
            </select>
            <button class="btn-leccion" onclick="mostrarLeccion()">Volver a la Lección</button>
            <button onclick="verificar2()">Verificar</button>
           

        `;
    } else if (paso === 3) {
        pantalla.innerHTML = `
             <h3>Ejercicio 3: Verdadero o Falso</h3>
            <p>1. La respiración ocurre solo en los pulmones.</p>
            <select id="respuesta9">
                <option value="">Seleccione una opción</option>
                <option value="falso">Falso</option>
                <option value="verdadero">Verdadero</option>
            </select>

            <p>2. Los bronquios transportan aire a los pulmones.</p>
            <select id="respuesta10">
                <option value="">Seleccione una opción</option>
                <option value="verdadero">Verdadero</option>
                <option value="falso">Falso</option>
            </select>

            <p>3. La tráquea filtra el aire que respiramos.</p>
            <select id="respuesta11">
                <option value="">Seleccione una opción</option>
                <option value="verdadero">Verdadero</option>
                <option value="falso">Falso</option>
            </select>

            <p>4. El diafragma es un órgano del sistema respiratorio.</p>
            <select id="respuesta12">
                <option value="">Seleccione una opción</option>
                <option value="falso">Falso</option>
                <option value="verdadero">Verdadero</option>
            </select>

            <button class="btn-leccion" onclick="mostrarLeccion()">Volver a la Lección</button>
            <button onclick="verificar3()">Verificar</button>
            

        `;
    }
    else if (paso === 4) {
        pantalla.innerHTML = `
            <h3>¡Examen finalizado!</h3>
            <p>Tu puntuación final es: <strong>${puntuacion} / 12</strong></p>
            <button onclick="reiniciar()">Reiniciar</button>
        `;
    }
}

// ✅ Fixed: Now each function properly checks the four questions
function verificar1() {
    let correctas = ["oxígeno", "dióxido de carbono", "diafragma", "rojos"];
    let respuestas = [
        document.getElementById("respuesta1").value.toLowerCase(),
        document.getElementById("respuesta2").value.toLowerCase(),
        document.getElementById("respuesta3").value.toLowerCase(),
        document.getElementById("respuesta4").value.toLowerCase()
    ];

    respuestas.forEach((respuesta, i) => {
        if (respuesta === correctas[i]) {
            puntuacion++;
        }
    });

    siguiente();
}

function verificar2() {
    let correctas = ["pulmon", "oxígeno", "pulmones", "tráquea"];
    let respuestas = [
        document.getElementById("respuesta5").value,
        document.getElementById("respuesta6").value,
        document.getElementById("respuesta7").value,
        document.getElementById("respuesta8").value
    ];

    respuestas.forEach((respuesta, i) => {
        if (respuesta === correctas[i]) {
            puntuacion++;
        }
    });

    siguiente();
}

function verificar3() {
    let correctas = ["falso", "verdadero", "verdadero", "falso"];
    let respuestas = [
        document.getElementById("respuesta9").value,
        document.getElementById("respuesta10").value,
        document.getElementById("respuesta11").value,
        document.getElementById("respuesta12").value
    ];

    respuestas.forEach((respuesta, i) => {
        if (respuesta === correctas[i]) {
            puntuacion++;
        }
    });

    siguiente();
}

function reiniciar() {
    puntuacion = 0;
    mostrarLeccion();
}

// Start by showing the lesson
mostrarLeccion();
