# Embolatados — Devblog de 16 semanas

Sitio estático en HTML, CSS y JavaScript. El contenido está en `data.json` y se carga mediante `fetch`.

## Ver la página

Abre esta carpeta en Visual Studio Code y ejecuta `index.html` con Live Server. También puedes servirla con cualquier servidor HTTP estático. Abrir el HTML directamente mediante `file://` no permite cargar correctamente el JSON.

## Actualización preparada

- Se conservan íntegramente las entradas de las semanas 1, 2 y 3.
- Las 16 entradas mantienen el formato desplegable. La semana 16 cierra la bitácora con capturas de partida.
- Las semanas 4 a 14 son una reconstrucción temática del desarrollo, no fechas verificadas.
- La semana 15 reúne los cierres confirmados por el equipo.
- La portada indica que la bitácora está completa. La sección de demo queda oculta mientras no haya contenido de demo en `data.json`.
- Las capturas se pueden ampliar en las galerías del devblog.
- Se ajusta la presentación para pantallas pequeñas y se mantiene el diseño existente.

## Capturas incorporadas

Las capturas originales se guardan en public/iimg/Avances/ y se muestran con ampliación al pulsarlas, manteniendo la presentación de las evidencias del devblog.

| Captura | Archivo | Entrada |
|---|---|---|
| Personajes en perspectiva | personajes-perspectiva.png | Semana 7 |
| Personajes de frente | personajes-frontal.png | Semana 7 |
| Latas de comida | latas-comida.png | Semana 9 |
| Botella de vidrio | botella-vidrio.png | Semana 9 |
| Shampoo | shampoo.png | Semana 10 |
| Vista cenital del supermercado | public/iimg/Semana13/mapa-supermercado-cenital.png | Semana 13 |
| Diez capturas de partida | public/iimg/Semana16/ | Semana 16 |

Las latas caen cuando el jugador pasa muy cerca y atraen al Vigilante. El shampoo reemplaza la gasolina y lo aturde durante unos segundos. Al arrojar la botella, el sonido lo atrae hacia la zona del impacto.

## Agregar semanas después

Añade una entrada al arreglo `bitacora` en `data.json`, siguiendo la estructura existente. Cada entrada utiliza `semana`, `titulo` y `preguntas`. Las áreas de trabajo aceptan `titulo`, `descripcion`, `items`, `subareas`, una `evidencia` individual o una lista `evidencias` con objetos `{ "imagen": "ruta", "alt": "descripción" }`.

El distintivo refleja la cantidad de entradas. Las entradas pueden incluir `preguntas.evidencias` para una galería general y `preguntas.cierre` para el texto de cierre.

## Verificación

La revisión de Unity es estática: lectura de scripts, escenas, prefabs, materiales, animaciones y referencias por GUID. No equivale a compilar ni probar una partida de Unity. Las comprobaciones de navegador de esta actualización se describen en `REVISION_UNITY.md`.
