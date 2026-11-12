# Revisión que respalda la bitácora

Proyecto revisado: `C:/Users/anali/Documents/GitHub/embolatados/Embolatados`.

Versión indicada por `ProjectSettings/ProjectVersion.txt`: Unity `6000.3.9f1`. El manifiesto incluye URP, AI Navigation, Input System, Animation Rigging, Cinemachine y la integración Voice para Fusion. El código utiliza Photon Fusion en Shared Mode.

Se leyeron los sistemas propios y se contrastaron sus GUID con archivos de escenas, prefabs y definiciones. Las referencias serializadas indican presencia/configuración, no garantizan que todos los campos estén correctamente asignados ni que el comportamiento pase una prueba en ejecución.

## Cronología reconstruida

Las semanas 1–3 se preservaron. Las semanas 4–14 agrupan lógicamente sistemas presentes en la copia actual; no se infirieron fechas de realización a partir de fechas de archivos. La semana 15 se basa además en el reporte explícito del equipo. Las propuestas de «siguiente versión» de las semanas reconstruidas organizan la transición entre etapas; no son acuerdos históricos verificables.

| Semana | Tema | Evidencia principal, relativa a Assets/ |
|---|---|---|
| 4 | Supermercado, módulos y recorridos | Prefabs de escenario completo, Zona 1 estática y módulo de frutas/verduras; `Scripts/Osaka/AI/LevelPointManager.cs`; escenas de juego y pruebas |
| 5 | Movimiento, stamina y cámara | `Scripts/Smol/Player/PlayerController.cs`, `PlayerStamina.cs`, `PlayerStaminaUI.cs`; `Scripts/Smol/CameraController.cs`; `Scripts/Osaka/ViewBobbing.cs`; prefabs de los cuatro personajes |
| 6 | Lobby, regiones y preparación | `Scripts/Smol/Network/GameRegions.cs`, `Lobby.cs`, `LobbyPlayerList.cs`, `LobbyReadyPanel.cs`, `PlayerData.cs`, `NetworkManager.cs`; `LocalPlayerSettings.cs`; `Scenes/Menu.unity` |
| 7 | Personajes y apariencia | `Prefabs/Smol/Character/Character_Luna.asset`, `Character_Pepo.asset`, `Character_Rayo.asset`, `Character_Tina.asset`; prefabs de jugador; `Scripts/Smol/Character/`; `PlayerAppearance.cs`; `PlayerSpawner.cs` |
| 8 | Interacción y objetos | `PlayerInteractor.cs`; `Scripts/Osaka/nuevoSistemaInteraccion/NetworkInteractable.cs`, `NetworkItem.cs`, `ItemBehaviour.cs`; prefabs de jugadores, shampoo y llaves |
| 9 | Ruido, latas y botella | `Scripts/Santiago_Scripts/CannedWallTrap.cs`; `Prefabs/Santiago_Prefabs/LATAS/`; `BotellaVidrio.prefab`; `PuzzleCore.cs`, `EnemyNoiseListener.cs`; investigación de ruido en `EnemyAI.cs` |
| 10 | Shampoo y charco | `Scripts/Osaka/nuevoSistemaInteraccion/ShampooSpill.cs`, `ShampooPuddle.cs`; `Prefabs/Santiago_Prefabs/Shampoo.prefab`, `Trampas_TR/CharcoShampoo.prefab` |
| 11 | Enemigos, captura y ragdoll | `Scripts/Osaka/AI/EnemyAI.cs`, `EnemyFactory.cs`, `EnemySpawnerManager.cs`; `Scripts/Osaka/ragdollSystem/`; `Prefabs/Milo_Prefabs/Enemigo_ViejaNancy.prefab`; modelos, rig y animaciones de Nancy |
| 12 | Objetivos, meta y salida | `Scripts/Waen_Scripts/GameFlow/`; `Scripts/Milo_Scripts/MatchState.cs`, `GoalTrigger.cs`; `Scenes/Escenario_GrayBox.unity` |
| 13 | Puzzles y señales | `RegisterPuzzle.cs`, `CashierKey.cs`, `KeySlot.cs`, `PuzzleLever.cs`, `GateView.cs`, `EmissiveBlinker.cs`, `PuzzleStageLink.cs`; prefabs de cajas y llave; código de `HotZonesPuzzle`, `HotZone`, `ZoneButton`, `CameraFeed` |
| 14 | Arte, menú y carga | `Shaders/`, `Scenes/PruebaShaders.unity`, `MenuModels/`; `MenuCinemachineManager.cs`, `TextFloatAnimation.cs`; `SceneTransitionOptimizer.cs`, `ZoneStreamer.cs`; `PeerLightingKeeper.cs` |
| 15 | Integración y cierres del equipo | `PlayerInventory.cs` (tres espacios); `Scripts/Osaka/inventaryHUD.cs`; `PlayerAnimationManager.cs`, `EnemyAnimationManager.cs`; controlador de IA; puzzle en escena; menú, shaders y reporte del equipo |

## Distinciones importantes

1. **Botella de vidrio:** el prefab contiene `Assembly-CSharp::Embolatados.Player.GlassBottlePickup`, pero no se encontró el script correspondiente entre los archivos de Assets. El comportamiento de atraer al Vigilante es el confirmado por el equipo, no una prueba ejecutada ni una implementación completa verificada en esta copia. No se modificó Unity para intentar corregirlo.
2. **Puzzle 1:** `RegisterPuzzle`, las llaves, ranuras, portón, palanca y vínculo de avance aparecen referenciados en `Escenario_GrayBox`. Su cierre en la semana 15 procede del reporte del equipo.
3. **Puzzle de vigilancia:** se encontraron `HotZonesPuzzle`, `HotZone`, `ZoneButton` y `CameraFeed`, pero no referencias a sus GUID en las escenas, prefabs y assets revisados. Se documentó como base pendiente de integración, no como segundo puzzle terminado.
4. **Sonido y persecución:** `EnemyAI.Rpc_InvestigatePosition` no interrumpe una persecución ni el transporte de un jugador. La descripción de las distracciones no promete que siempre desvíen al enemigo.
5. **Gasolina/aceite:** los registros de las semanas 1–3 se conservaron como históricos. La sustitución por shampoo se explica en la semana 10.
6. **Generación del mapa:** existen módulos, escenas y recursos de escenario. No se ha verificado generación aleatoria del supermercado en cada partida; se distingue de la premisa inicial.
7. **Shaders y rendimiento:** hay variantes y herramientas de pruebas; su presencia no significa que todas se utilicen a la vez. No se inventaron métricas de rendimiento.
8. **Animaciones y cierres:** los recursos y componentes revisados respaldan el trabajo; la palabra «finalizado» se reserva para los sistemas que el equipo confirmó en la semana 15. No se declara terminado el juego completo.
9. **Evidencias visuales:** las cinco capturas proporcionadas corresponden al estado actual y no prueban fechas históricas. Su descarga fue bloqueada en esta sesión, por lo que se dejaron rutas preparadas y avisos de captura pendiente.

## Comprobaciones de la página

Se valida la sintaxis de JavaScript, el JSON y la presencia de 15 semanas consecutivas, además de la igualdad exacta de las primeras tres entradas con el archivo original.

La prueba de navegador recorre las entradas a 1440, 390 y 320 píxeles de ancho, comprueba apertura y cierre, desbordamiento horizontal, errores JavaScript, el modal de una evidencia original y el cierre con Escape. También comprueba el mensaje ante un error de carga del JSON y la alternativa visible para las cinco imágenes pendientes.

No se ejecutó el proyecto de Unity ni se realizaron sesiones multijugador, builds o mediciones de rendimiento. No se modificó el repositorio original, no se publicaron cambios y no se incluyeron recursos de Unity en esta copia del sitio.
