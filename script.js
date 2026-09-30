document.addEventListener("DOMContentLoaded", () => {
    // Para cargar el JSON localmente necesitas usar un servidor local (Live Server en VSCode)
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            renderizarPagina(data);
        })
        .catch(error => {
            console.error("Error cargando los datos:", error);
            document.getElementById('app').innerHTML = `<div class="brutal-box"><h2>Error</h2><p>No se pudo cargar el archivo data.json. Recuerda usar Live Server.</p></div>`;
        });
});

function renderizarPagina(data) {
    const app = document.getElementById('app');
    let htmlContent = '';

    // SECCIÓN 1: INICIO
    htmlContent += `
        <section id="inicio" class="brutal-box">
            <div class="sticker">¡V 0.1!</div>
            <h2>${data.juego.nombre}</h2>
            <img src="${data.juego.imagen_provisional}" alt="Imagen Provisional">
            <p><strong>Descripción:</strong> ${data.juego.descripcion}</p>
            <p><strong>Equipo:</strong> ${data.juego.integrantes.join(', ')}</p>
        </section>
    `;

    // SECCIÓN 2: CONCEPTO
    htmlContent += `
        <section id="concepto" class="brutal-box">
            <h2>Concepto del Juego</h2>
            <p><span class="pregunta">Premisa:</span> ${data.concepto.premisa}</p>
            <p><span class="pregunta">Género:</span> ${data.concepto.genero}</p>
            <p><span class="pregunta">Objetivo:</span> ${data.concepto.objetivo}</p>
            <p><span class="pregunta">Core Loop:</span> <br> ${data.concepto.core_loop}</p>
        </section>
    `;

    // SECCIÓN 3: BITÁCORA
    htmlContent += `
        <section id="bitacora" class="brutal-box">
            <h2>Desarrollo / Bitácora</h2>
    `;
    
    data.bitacora.forEach(entrada => {
        let listaCambios = entrada.preguntas.que_cambiaremos.map(cambio => `<li>${cambio}</li>`).join('');
        
        htmlContent += `
            <div class="entrada-bitacora">
                <h3>${entrada.semana}: ${entrada.titulo}</h3>
                
                <p class="pregunta">1. ¿Qué queríamos probar?</p>
                <p>${entrada.preguntas.que_probar}</p>

                <p class="pregunta">2. ¿Qué implementamos?</p>
                <p>${entrada.preguntas.que_implementamos}</p>

                <p class="pregunta">3. Evidencia</p>
                <img src="${entrada.preguntas.evidencia}" alt="Evidencia visual">

                <p class="pregunta">4. ¿Qué observamos o descubrimos?</p>
                <p>${entrada.preguntas.que_descubrimos}</p>

                <p class="pregunta">5. ¿Qué cambiaremos en la siguiente versión?</p>
                <ul class="cambios">
                    ${listaCambios}
                </ul>
            </div>
        `;
    });
    htmlContent += `</section>`; // Cierre sección bitácora

    // SECCIÓN 4: DEMO Y TEASER
    htmlContent += `
        <section id="demo" class="brutal-box" style="border-color: var(--accent-2);">
            <h2 style="background: var(--accent-2);">Demo Jugable</h2>
            <p>${data.demo}</p>
        </section>

        <section id="teaser" class="brutal-box" style="background: #000; color: #fff;">
            <h2 style="background: var(--accent-1); color: #000;">Teaser (Semana 11)</h2>
            <p>${data.teaser}</p>
        </section>
    `;

    app.innerHTML = htmlContent;
}