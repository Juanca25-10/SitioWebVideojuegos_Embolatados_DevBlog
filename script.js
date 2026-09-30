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
    
    data.bitacora.forEach((entrada, index) => {
        let listaCambios = entrada.preguntas.que_cambiaremos.map(cambio => `<li>${cambio}</li>`).join('');
        
        htmlContent += `
            <div class="entrada-bitacora">
                <h3>${entrada.semana}: ${entrada.titulo}</h3>
                
                <p class="pregunta">1. ¿Qué queríamos probar?</p>
                <p>${entrada.preguntas.que_probar}</p>

                <p class="pregunta">2. ¿Qué implementamos?</p>
                <p>${entrada.preguntas.que_implementamos}</p>

                ${entrada.preguntas.detalle_trampa ? `<p>${entrada.preguntas.detalle_trampa}</p>` : ''}

                <p class="pregunta">3. Evidencia</p>
                <div class="evidence-row">
                    <button class="evidence-image-button" type="button" data-full-image="${entrada.preguntas.evidencia}" data-image-alt="${entrada.preguntas.alt_evidencia || 'Evidencia visual de ' + entrada.semana}" aria-label="Ampliar imagen de evidencia">
                        <img src="${entrada.preguntas.evidencia}" alt="${entrada.preguntas.alt_evidencia || 'Evidencia visual de ' + entrada.semana}" loading="lazy">
                    </button>
                    ${index === 0 ? '<p class="evidence-hint">Presiona la imagen para agrandarla <span aria-hidden="true">↗</span></p>' : ''}
                </div>
                ${entrada.preguntas.evidencia_pasillo || entrada.preguntas.video_vigilante ? `
                    <p class="pregunta">Vigilante y trampa en acción</p>
                    <p>La captura muestra el pasillo modular con las trampas listas. En el video se ve al Vigilante con su IA simple y cómo queda aturdido al pisar una trampa.</p>
                    <div class="evidence-row evidence-row--pair">
                        ${entrada.preguntas.evidencia_pasillo ? `<button class="evidence-image-button" type="button" data-full-image="${entrada.preguntas.evidencia_pasillo}" data-image-alt="${entrada.preguntas.alt_evidencia_pasillo || 'Pasillo del supermercado, ' + entrada.semana}" aria-label="Ampliar imagen del pasillo"><img src="${entrada.preguntas.evidencia_pasillo}" alt="${entrada.preguntas.alt_evidencia_pasillo || 'Pasillo del supermercado, ' + entrada.semana}" loading="lazy"></button>` : ''}
                        ${entrada.preguntas.video_vigilante ? `<video class="evidence-video" src="${entrada.preguntas.video_vigilante}" autoplay loop muted playsinline controls preload="metadata" aria-label="Vigilante patrullando y quedando aturdido al pisar una trampa"></video>` : ''}
                    </div>
                ` : ''}

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

    const imageDialog = document.createElement('dialog');
    imageDialog.className = 'evidence-dialog';
    imageDialog.innerHTML = `
        <button class="evidence-dialog-close" type="button" aria-label="Cerrar imagen ampliada">×</button>
        <img alt="">
    `;
    app.append(imageDialog);

    imageDialog.querySelector('.evidence-dialog-close').addEventListener('click', () => imageDialog.close());
    imageDialog.addEventListener('click', event => {
        if (event.target === imageDialog) imageDialog.close();
    });

    app.querySelectorAll('.evidence-image-button').forEach(button => {
        button.addEventListener('click', () => {
            const dialogImage = imageDialog.querySelector('img');
            dialogImage.src = button.dataset.fullImage;
            dialogImage.alt = button.dataset.imageAlt;
            imageDialog.showModal();
        });
    });

    const secciones = app.querySelectorAll('.brutal-box');

    if (!('IntersectionObserver' in window)) {
        secciones.forEach(seccion => seccion.classList.add('is-visible'));
        return;
    }

    const observador = new IntersectionObserver((entradas, observer) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('is-visible');
                observer.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.12 });

    secciones.forEach((seccion, index) => {
        seccion.classList.add('reveal-on-scroll');
        seccion.style.setProperty('--reveal-delay', `${Math.min(index * 85, 340)}ms`);
        observador.observe(seccion);
    });
}
