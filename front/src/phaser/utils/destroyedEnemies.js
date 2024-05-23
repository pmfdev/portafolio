/* eslint-disable */
import { guardarEnLocalStorage, obtenerDeLocalStorage } from "../../services/localstorage";

export function areAllEnemiesDestroyed(self, game, allEnemies, nave, planet) {
       
        // Obtener todos los enemigos de los grupos
        console.log('allEnemies', allEnemies);

        if (allEnemies.length === 0) {
            planet.setVisible(true);
            planet.alpha = 0;
            self.showFireWorks = true;// Establecer la opacidad inicial en 0
            game.sound.play('victory', { volume: 0.5 });
            


            let experienciaText = game.add.text(planet.x - 300, planet.y - 200, 'Felicidades!, has desbloqueado un planeta! \n Pulsar enter para ver el planeta',
                {
                    fontSize: '30px',
                    fontWeight: 'bold', 
                    color: '#00ff00',
                    fontFamily: 'Arial' 
                });


            game.tweens.add({
                targets: planet,
                alpha: 1, // Opacidad final
                duration: 5000, // Duración en milisegundos
                ease: 'Linear', // Tipo de interpolación
                onComplete: () => {
                    let storage = obtenerDeLocalStorage('spaceGame');
                    guardarEnLocalStorage('spaceGame', { ...storage, [game.scene.key]: true, time: new Date().getTime()});                                  
                    setTimeout(() => {
                        self.showFireWorks = false;
                        self.discoveredPlanets();
                        experienciaText.setVisible(false);

                    }, 1000)

                }
            });

            const tierraX = planet.x;
            const tierraY = planet.y;

            const scrollX = window.pageXOffset;
            const scrollY = window.pageYOffset;

            const widthWindow = window.innerWidth;
            const heightwindow = window.innerHeight;

            window.scrollTo({
                top: tierraX - widthWindow / 2,
                left: tierraY - heightwindow / 2,
                behavior: 'smooth'
            });

            let moveShip = setInterval(() => {
                if (nave.x < tierraX && nave.x !== tierraX) {
                    nave.x += 10;
                }
                if (nave.y > tierraY && nave.y !== tierraY) {
                    nave.y -= 10;
                }
                if (nave.x > tierraX && nave.x !== tierraX) {
                    nave.x -= 10;
                }
                if (nave.y < tierraY && nave.y !== tierraY) {
                    nave.y += 10;
                }

                if (nave.x === tierraX && nave.y === tierraY) {
                    clearInterval(moveShip);
                }
            }, 50);

        }
}