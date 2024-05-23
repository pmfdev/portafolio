/* eslint-disable */

// Importa Phaser y otras variables necesarias
import Phaser from 'phaser';
import userShip from '../../assets/images/nave.png';
import rayo from '../../assets/images/rayo.png';
import rayoEnemy from '../../assets/images/disparoEnemigo.png';
import tierraImg from '../../assets/images/tierra.png';
import marte from '../../assets/images/marte.png';
import enemyShip from '../../assets/images/enemy.png';
import explosion from '../../assets/images/explosion.png';
import fireSound from '../../assets/audio/fire.wav';
import explosionSound from '../../assets/audio/explosion.wav';
import victory from '../../assets/audio/victory.mp3';
import { createEarth } from './planets/Tierra';
import { createMars } from './planets/Mars';
import { createShip } from './starShips/ship';
import { createGroup } from './utils/createGroup';
import { createEnemieShips } from './starShips/enemieShips';
import { createEnemieScene } from './starShips/enemieScene';
import { colliderEnemie } from './collider/colliderEnemie';
import { createColliderSpaceNaveUser } from './collider/colliderSpace';
import { guardarEnLocalStorage, obtenerDeLocalStorageByProperty } from '@/services/localstorage';


// Resto de tu código de MainGame.js...

export function MainGame(self) {

        self.showGameOver = false;
        let nave;
        //  enemies; // eslint-disable-line no-unused-vars
        //  enemies2; // eslint-disable-line no-unused-vars
        let projectiles; // eslint-disable-line no-unused-vars
        let projectilesEnemy; // eslint-disable-line no-unused-vars
        const config = {
          type: Phaser.AUTO,
          width: 2500,
          height: 2000,
          scene: {
            gameOver() {
             self.gameOver();
            },
            preload() {
              this.load.image('userShip', userShip);
              this.load.image('rayo', rayo);
              this.load.image('rayoEnemigo', rayoEnemy);
              this.load.image('tierra', tierraImg);
              this.load.image('marte', marte);
              this.load.image('enemyShip', enemyShip);
              this.load.image('explosion', explosion);
              this.load.audio('disparoSound', fireSound);
              this.load.audio('explosionSound', explosionSound);
              this.load.audio('victory', victory);
            },

            create() {
              //creacion actores en el juego
              let tierra = createEarth(self, this).setVisible(obtenerDeLocalStorageByProperty('spaceGame', 'tierra'));
              let marte = createMars(self, this).setVisible(obtenerDeLocalStorageByProperty('spaceGame', 'marte'));
              nave = createShip(self, this, {x: 110, y: 100, ship: 'userShip', width: 150, height: 100});
              //creacion de los grupos
              projectiles = createGroup(self, this); // eslint-disable-line no-unused-vars
              projectilesEnemy = createGroup(self, this); // eslint-disable-line no-unused-vars
              
              let enemies = createGroup(self, this);  // eslint-disable-line no-unused-vars
              let enemies2 = createGroup(self, this);  // eslint-disable-line no-unused-vars
              let enemies3 = createGroup(self, this);  // eslint-disable-line no-unused-vars
              let enemies4 = createGroup(self, this); 
      

              //creacion de los enemigos
              let enemiesGroup = createEnemieShips(self, this, {x: 1500, y: 120, ship: 'enemyShip', width: 150, height: 100, num: 15, group: enemies});
              let enemiesGroup2 = createEnemieShips(self, this, {x: 1300, y: 120, ship: 'enemyShip', width: 150, height: 100, num: 15, group: enemies2});
              // let enemiesGroup3 = createEnemieShips(self, this, {x: 1100, y: 120, ship: 'enemyShip', width: 150, height: 100, num: 15, group: enemies3});
              // let enemiesGroup4 = createEnemieShips(self, this, {x: 1700, y: 120, ship: 'enemyShip', width: 150, height: 100, num: 15, group: enemies4});
        const areAllEnemiesDestroyed = (param) => {
                console.log('¿Se destruyeron todos los enemigos?', param);
                // Obtener todos los enemigos de los grupos
                let allEnemies = [].concat(
                  enemiesGroup.getChildren(),
                  enemiesGroup2.getChildren(),
                  // enemiesGroup3.getChildren(),
                  // enemiesGroup4.getChildren()
                );
              
                if (allEnemies.length === 0) {
                  tierra.setVisible(true);
                  tierra.alpha = 0; 
                  self.showFireWorks= true;// Establecer la opacidad inicial en 0

// Tween para animar el desvanecimiento gradual de opacidad

let experienciaText = this.add.text(tierra.x - 300, tierra.y - 300, 'Felicidades!, has llegado a la Tierra',
{
  fontSize: '40px',
  fontWeight: 'bold', // Puedes utilizar 'normal' o un valor numérico también
  color: '#00ff00', 
  fontFamily: 'Arial' // Cambia 'Arial' por la fuente que desees utilizar
});
console.log('victori');
this.sound.play('victory', { volume: 0.5 });
let introPlanet = this.add.text(tierra.x - 210, tierra.y - 250, 'Pulsar enter para ver mi experiencia',
{
  fontSize: '30px',
  fontWeight: 'bold', // Puedes utilizar 'normal' o un valor numérico también
  color: '#00FFFF', 
  fontFamily: 'Arial' // Cambia 'Arial' por la fuente que desees utilizar
});
this.tweens.add({
    targets: tierra,
    alpha: 1, // Opacidad final
    duration: 5000, // Duración en milisegundos
    ease: 'Linear', // Tipo de interpolación
    onComplete: () => {
       guardarEnLocalStorage('spaceGame', {tierra: true, time: new Date().getTime()});
       setTimeout(() => {
        self.showFireWorks= false;
        self.earthDiscovered = true;
        experienciaText.setVisible(false);
        introPlanet.setVisible(false);

    } , 1000)

  }
});
              
                  const tierraX = tierra.x;
                  const tierraY = tierra.y;

                  const scrollX = window.pageXOffset;
                  const scrollY = window.pageYOffset;

                  const widthWindow = window.innerWidth;
                  const heightwindow = window.innerHeight;

                  window.scrollTo({top:   tierraX - widthWindow/2, 
                                   left: tierraY - heightwindow/2, 
                                   behavior: 'smooth'});
                                  
                    

               let  moveShip = setInterval(() => {
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
              
                    // Verificar si la nave ha alcanzado la Tierra
                    if (nave.x === tierraX && nave.y === tierraY) {
                      clearInterval(moveShip);
                    }
                  }, 50);

                }
              };
              
              
              const enemyFire = (enemy) => {
                let projectile = this.physics.add.sprite(enemy.x, enemy.y, 'rayoEnemigo');
                projectile.displayWidth = 40;
                projectile.displayHeight = 15;
                projectilesEnemy.add(projectile);
                projectile.setVelocityX(-1200);
              };
              
              //movimiento de los enemigos
              createEnemieScene(this, enemies,{from: 1, to: 200, duration: 6000, ease: 'Linear', repeat: -1, yoyo: true, delay: 2000}, enemyFire);
              createEnemieScene(this, enemies2,{from: 50, to: 250, duration: 3000, ease: 'Linear', repeat: -1, yoyo: true, delay: 3000}, enemyFire);
              createEnemieScene(this, enemies3,{from: 25, to: 222, duration: 2000, ease: 'Linear', repeat: -1, yoyo: true, delay: 3000}, enemyFire);
              createEnemieScene(this, enemies4,{from: 75, to: 275, duration: 4000, ease: 'Linear', repeat: -1, yoyo: true, delay: 3000}, enemyFire);
              
              //colisiones de los proyectiles enemigos con la nave usuario
              createColliderSpaceNaveUser(self, this, projectilesEnemy, nave);
              //colisiones de los enemigos con los proyectiles
              colliderEnemie(self, this, projectiles, enemies, areAllEnemiesDestroyed, "tierra");
              colliderEnemie(self, this, projectiles, enemies2, areAllEnemiesDestroyed, "tierra");
              colliderEnemie(self, this, projectiles, enemies3, areAllEnemiesDestroyed, "tierra");
              colliderEnemie(self, this, projectiles, enemies4, areAllEnemiesDestroyed, "tierra");
              colliderEnemie(self, this, nave, enemies, areAllEnemiesDestroyed, "tierra");
              colliderEnemie(self, this, nave, enemies2, areAllEnemiesDestroyed, "tierra");
              colliderEnemie(self, this, nave, enemies3, areAllEnemiesDestroyed, "tierra");
              colliderEnemie(self, this, nave, enemies4, areAllEnemiesDestroyed, "tierra");

              // Creación de eventos para la entrada del teclado
              const spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  
              spaceBar.on('down', () => {
                console.log('¡Se pulsó la barra espaciadora!', nave.active);
                // Creación del proyectil en la posición de la nave
                if (nave && nave.active) {
                  let projectile = this.physics.add.sprite(nave.x, nave.y, 'rayo');
                  projectile.displayWidth = 50;
                  projectile.displayHeight = 20;
                  projectiles.add(projectile);
                  projectile.setVelocityX(1200);
                  this.sound.play('disparoSound', { volume: 0.1 });
                }
  
              });
  
              this.physics.add.existing(nave); // Agrega la nave como un objeto físico
  
              this.physics.add.collider(nave, tierra, () => {
                console.log('¡La nave ha colisionado con la Tierra!');
              });

              let experienciaText = this.add.text(marte.x, marte.y - 150, 'Pulsar enter para ver mi experiencia',
                {
                  fontSize: '40px',
                  fontWeight: 'bold', // Puedes utilizar 'normal' o un valor numérico también
                  strokeThickness: 4, // Grosor del contorno
                  color: '#00ff00', // Cambia '#ff0000' por el código hexadecimal del color que desee
                });
              experienciaText.setOrigin(0.5);
              experienciaText.setVisible(false);
  
              // Agregar colisión entre la nave y Marte
              this.physics.add.collider(nave, marte, () => {
                console.log('¡La nave ha colisionado con Marte!');
                // Hacer visible el texto 'Experiencia' cuando ocurra la colisión
                experienciaText.setVisible(true);
  
                // Detectar el evento 'Enter' usando un listener de teclado
                const keyObj = this.input.keyboard.addKey('ENTER');
  
                keyObj.on('down', function (event) {
                  if (experienciaText.visible) {
                    console.log('Se pulsó la tecla Enter', event);
                    self.travelMars();
                  }
                });
  
                // Ocultar el texto después de un tiempo (por ejemplo, 2 segundos)
                this.time.delayedCall(2000, () => {
                  experienciaText.setVisible(false);
                  keyObj.off('down'); // Eliminar el listener de teclado después de ocultar el texto
                });
              });
            },

            update() {
              const canvas = document.querySelector('canvas');
              const canvasWidth = canvas.width;
              const canvasHeight = canvas.height;
              const cursors = this.input.keyboard.createCursorKeys();
              const naveWidth = nave.displayWidth;
              const naveHeight = nave.displayHeight;
  
              if (nave && cursors) {
                // Límites del canvas
                const minX = naveWidth / 2;
                const maxX = canvasWidth - naveWidth / 2;
                const minY = naveHeight / 2;
                const maxY = canvasHeight - naveHeight / 2;
                const halfScreenWidth = window.innerWidth / 2;
                const halfScreenHeight = window.innerHeight / 2;
  
                // Movimiento horizontal dentro de los límites del canvas
              
  
                // Movimiento vertical dentro de los límites del canvas
                if (cursors.up.isDown && nave.y > minY) {
                  nave.y -= 10;
                } else if (cursors.down.isDown && nave.y < maxY) {
                  nave.y += 10;
                }
  
                if (cursors.right.isDown && nave.x > minX && nave.x > halfScreenWidth) {
                  window.scrollBy(10, 0); // Hacer que el scroll avance verticalmente
                }
  
                if (cursors.left.isDown && nave.x < (halfScreenWidth + nave.x) && maxX - halfScreenWidth > nave.x) {
                  window.scrollBy(-10, 0); // Hacer que el scroll avance horizontalmente
                }
  
                if (cursors.down.isDown && nave.y > minY && nave.y > halfScreenHeight) {
                  window.scrollBy(0, 10); // Hacer que el scroll avance verticalmente
                }
  
                if (cursors.up.isDown && nave.y < (halfScreenHeight + nave.y) && maxY - halfScreenHeight > nave.y) {
                  window.scrollBy(0, -10); // Hacer que el scroll avance verticalmente
                }

                if (cursors.left.isDown && nave.x > minX) {
                  nave.x -= 10;
                } else if (cursors.right.isDown && nave.x < maxX) {
                  nave.x += 10;
                }
                
  
              }
            },
  
          },
          physics: {
            default: 'arcade',
            arcade: {
              gravity: { y: 0 },
            },
          },
        };
  
       return new Phaser.Game(config);
   
}