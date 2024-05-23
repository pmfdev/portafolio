
/* eslint-disable */

import Phaser from 'phaser';
import userShip from '../../assets/images/nave.png';
import rayo from '../../assets/images/rayo.png';
import rayoEnemy from '../../assets/images/disparoEnemigo.png';
import tierraImg from '../../assets/images/tierra.png';
import marte from '../../assets/images/marte.png';
import enemyShip from '../../assets/images/enemy2.png';
import enemyShip2 from '../../assets/images/enemy3.png';
import superEnemyShip from '../../assets/images/superEnemy.png';
import explosion from '../../assets/images/explosion.png';
import asteroid from '../../assets/images/asteroid.png';
import fireSound from '../../assets/audio/fire.wav';
import explosionSound from '../../assets/audio/explosion.wav';
import victory from '../../assets/audio/victory.mp3';
import { createEarth } from '../spaceGame/planets/Tierra';  
import { createMars } from '../spaceGame/planets/Mars';
import { createShip } from '../spaceGame/starShips/ship';
import { createGroup } from '../spaceGame/utils/createGroup';
import { createEnemieShips } from '../spaceGame/starShips/enemieShips';
import { createEnemieScene } from '../spaceGame/starShips/enemieScene';
import { colliderEnemie } from '../spaceGame/collider/colliderEnemie';
import { colliderEnemieMars } from '../spaceGame/collider/colliderEnemieMars';
import { createColliderSpaceNaveUser } from '../spaceGame/collider/colliderSpace';
import {  obtenerDeLocalStorageByProperty } from '@/services/localstorage';
import { moveShip } from '../cursors/moveShip';
import { createText } from '../utils/createText';

import {createEnemieSceneRandom} from '../spaceGame/starShips/enemieSceneRandom';

import {createEnemieSceneEnemy} from '../spaceGame/starShips/enemieSceneEnemy';
import {colliderEnemieSuper} from '../spaceGame/collider/colliderEnemieSuper';
import { areAllEnemiesDestroyed } from '../utils/destroyedEnemies';

import  explosionSprite1 from '../../assets/sprite/explosion.json';
import explosion1 from '@/assets/images/explosion_sprite.png';
import { animExplosion } from '@/phaser/utils/configSprite';

export function marsScene(self) {
  let nave;
  let projectiles; // eslint-disable-line no-unused-vars
  let projectilesEnemy; // eslint-disable-line no-unused-vars
  let enemieSuper;
  let intervalId;


  let marsScene =  {
        key: 'marte',
      
        preload() {
          this.load.image('userShip', userShip);
          this.load.image('rayo', rayo);
          this.load.image('rayoEnemigo', rayoEnemy);
          this.load.image('tierra', tierraImg);
          this.load.image('marte', marte);
          this.load.image('enemyShip', enemyShip);
          this.load.image('enemyShip2', enemyShip2);
          this.load.image('superEnemyShip', superEnemyShip);
          this.load.image('explosion', explosion);
          this.load.audio('disparoSound', fireSound);
          this.load.audio('explosionSound', explosionSound);
          this.load.audio('victory', victory);
          this.load.image('asteroid', asteroid);
          this.load.atlas('explosion1', explosion1, explosionSprite1);
          self.setCountShips(31);
        },

        create() {
          //creacion actores en el juego
          let tierra = createEarth(self, this).setVisible(obtenerDeLocalStorageByProperty('spaceGame', 'tierra'));
          let marte = createMars(self, this).setVisible(obtenerDeLocalStorageByProperty('spaceGame', 'marte'));
          nave = createShip(self, this, {x: 110, y: 100, ship: 'userShip', width: 150, height: 100});
          enemieSuper = createShip(self, this, {x: 1100, y: 100, ship: 'superEnemyShip', width: 300, height: 250});
          intervalId = setInterval(() => {
            launchAsteroid();
          }, 3000);

          this.anims.create(animExplosion);


          const launchAsteroid = () => {
            console.log('launchAsteroid');
            if (this.physics.scene) {
              const asteroid = this.physics.add.sprite(3500, Phaser.Math.Between(0, 2000), 'asteroid');
              const velocidad = 1200; // Ajusta la velocidad según tus necesidades
              // Calcular la dirección hacia la nave
              const angleToPlayer = Phaser.Math.Angle.Between(asteroid.x, asteroid.y, nave.x, nave.y);
              // Calcular las componentes X e Y de la velocidad
              const velocidadX = Math.cos(angleToPlayer) * velocidad;
              const velocidadY = Math.sin(angleToPlayer) * velocidad;
              // Asignar las velocidades calculadas al asteroide
              asteroid.setVelocity(velocidadX, velocidadY);
              asteroid.setScale(0.5);
              let allEnemies = [].concat(enemiesGroup.getChildren(), enemiesGroup2.getChildren());
                if(enemieSuper.active == true) allEnemies.push({enemySuper: enemieSuper.active});
                console.log('COLLISION', allEnemies.length);
             if(allEnemies.length > 0){
              this.physics.add.collider(asteroid, nave, () => {
                
               
                  nave.destroy();
                  asteroid.destroy();
                  let explosion = this.add.sprite(nave.x, nave.y, 'explosion1').play('explode1')  
                  this.sound.play('explosionSound', { volume: 0.5 });
                  this.time.delayedCall(1000, () => {
                    explosion.destroy();
                  });
                  self.gameOver();
                
              });
              } else {
                   clearInterval(intervalId);
                  asteroid.destroy();
                 }
              

              this.physics.add.collider(asteroid, projectiles, (asteroid, projectile) => {
                projectile.destroy();
                asteroid.destroy();
                let explosion = this.add.sprite(asteroid.x, asteroid.y, 'explosion1').play('explode1')  
                this.sound.play('explosionSound', { volume: 0.5 });
                this.time.delayedCall(1000, () => {
                  explosion.destroy();
                });
              }
              );
            } else {

              clearInterval(intervalId);
            }
          }


          //creacion de los grupos
          projectiles = createGroup(self, this); 
          projectilesEnemy = createGroup(self, this);
          
          //creacion grupos de enemigos
          let enemies = createGroup(self, this);  
          let enemies2 = createGroup(self, this);  
          // let enemies3 = createGroup(self, this);  
         
          //creacion de los enemigos
          let enemiesGroup = createEnemieShips(self, this, {x: 1500, y: 120, ship: 'enemyShip', width: 150, height: 100, num: 15, group: enemies});
          let enemiesGroup2 = createEnemieShips(self, this, {x: 1300, y: 120, ship: 'enemyShip2', width: 150, height: 100, num: 15, group: enemies2});
          // let enemiesGroup3 = createEnemieShips(self, this, {x: 1300, y: 120, ship: 'superEnemyShip', width: 300, height: 250, num: 2, group: enemies3});
          
          //Meteorito
          this.physics.add.existing(asteroid);
          
          
          this.physics.add.existing(enemieSuper); // Agrega la nave como un objeto físico

          let numColisiones = 0;
          const numeroMaximoColisiones = 5;
          this.physics.add.collider(enemieSuper, projectiles, (enemy, projectile) => {
           projectile.destroy();
           enemy.body.moves = false;

           console.log('COLLISION');
           numColisiones++;
           if (numColisiones > numeroMaximoColisiones) {
            let explosion = this.add.sprite(enemy.x - 70, enemy.y -70, 'explosion1').play('explode1')  
            let explosion2 = this.add.sprite(enemy.x + 70, enemy.y +70, 'explosion1').play('explode1')  


            //  let explosion = this.add.image(enemy.x - 70, enemy.y -70, 'explosion').setAlpha(0.7).setDepth(1);
            //  let explosion2 = this.add.image(enemy.x + 70, enemy.y +70, 'explosion').setAlpha(0.7).setDepth(1);
             this.sound.play('explosionSound', { volume: 0.5 });
             projectile.destroy(); // Destruir el proyectil al impactar
              enemy.destroy(); // Destruir la nave enemiga al impactar
              this.time.delayedCall(1000, () => {
                explosion.destroy();
                explosion2.destroy();
                let allEnemies = [].concat(enemiesGroup.getChildren(), enemiesGroup2.getChildren());
                if(enemieSuper.active == true) allEnemies.push({enemySuper: enemieSuper.active});

                areAllEnemiesDestroyed(self, this, allEnemies, nave, marte);
              });
            } else {
              // let explosion = this.add.image(enemy.x, enemy.y, 'explosion').setAlpha(0.7).setDepth(1);
              let explosion = this.add.sprite(enemy.x, enemy.y, 'explosion1').play('explode1')  

              this.sound.play('explosionSound', { volume: 0.5 });
              this.time.delayedCall(1000, () => { explosion.destroy(); });
            }
           
            
        });


          const enemyFire = (enemy) => {
            let projectile = this.physics.add.sprite(enemy.x, enemy.y, 'rayoEnemigo');
            projectile.displayWidth = 40;
            projectile.displayHeight = 15;
            projectilesEnemy.add(projectile);
            projectile.setVelocityX(-1200);
          };

          const enemySuperFire = (enemy) => {
            let projectile = this.physics.add.sprite(enemy.x, enemy.y, 'rayoEnemigo');
            projectile.displayWidth = 100;
            projectile.displayHeight = 35;
            projectilesEnemy.add(projectile);
            projectile.setVelocityX(-1200);
          };
          
          //movimiento de los enemigos
          createEnemieSceneRandom(this, enemies,{from: 1, to: 200, duration: 7000, ease: 'Quad.easeOut', repeat: -1, yoyo: true, delay: 5000}, enemyFire);
          createEnemieSceneRandom(this, enemies2,{from: 50, to: 250, duration: 3000, ease: 'Linear', repeat: -1, yoyo: true, delay: 3000}, enemyFire);
          createEnemieSceneEnemy(this, enemieSuper,{from: 50, to: 250, duration: 3000, ease: 'Cubic.easeInOut', repeat: -1, yoyo: true, delay: 2000, nave}, enemySuperFire);


          //colisiones de los proyectiles enemigos con la nave usuario      
          createColliderSpaceNaveUser(self, this, projectilesEnemy, nave);
          //colisiones de los enemigos con los proyectiles                                                                                              
          colliderEnemieMars(self, this, projectiles, enemies, enemieSuper, enemiesGroup, enemiesGroup2, nave, marte);
          colliderEnemieMars(self, this, projectiles, enemies2, enemieSuper, enemiesGroup, enemiesGroup2, nave, marte);
          // colliderEnemieSuper(self, this, projectiles, enemies3, enemiesGroup, enemiesGroup3, nave, marte);
          
          colliderEnemie(self, this, nave, enemies, enemiesGroup, enemiesGroup2, nave, marte);
          colliderEnemie(self, this, nave, enemies2, enemiesGroup, enemiesGroup2, nave, marte);

          // Creación de eventos para la entrada del teclado
          const spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

          spaceBar.on('down', () => {
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
          
          let experienceEarth = createText(this,
            tierra.x, tierra.y + 160,
            'Pulsar enter para ver mi experiencia',
            {fontSize: '18px',
            fontWeight: 'bold', // Puedes utilizar 'normal' o un valor numérico también
            color: '#00ff00',
            fontFamily: 'Arial', // Cambia '#ff0000' por el código hexadecimal del color que desee
            visible: false,
            origin: 0.5})
              
          this.physics.add.collider(nave, tierra, () => {

            if (obtenerDeLocalStorageByProperty('spaceGame', 'tierra')) {
              experienceEarth.setVisible(true);
              const keyObj = this.input.keyboard.addKey('ENTER');
              keyObj.on('down', function (event) { self.travel('earth');});

              // Ocultar el texto después de un tiempo (por ejemplo, 2 segundos)
              this.time.delayedCall(2000, () => {
              experienceEarth.setVisible(false);
                keyObj.off('down'); // Eliminar el listener de teclado después de ocultar el texto
              });
            }

          });
          

          
          let experienceMars = createText(this,
            marte.x, marte.y + 160,
            'Pulsar enter para ver mis proyectos',
            {
                fontSize: '18px',
                fontWeight: 'bold', // Puedes utilizar 'normal' o un valor numérico también
                color: '#00ff00',
                fontFamily: 'Arial', // Cambia '#ff0000' por el código hexadecimal del color que desee
                visible: false,
                origin: 0.5
            })

        this.physics.add.collider(nave, marte, () => {

            if (obtenerDeLocalStorageByProperty('spaceGame', 'marte')) {
              experienceMars.setVisible(true);
              const keyObj = this.input.keyboard.addKey('ENTER');
              keyObj.on('down', () => self.travel('mars'));
                    
              this.time.delayedCall(2000, () => {
                  experienceMars.setVisible(false);
                  keyObj.off('down'); // Eliminar el listener de teclado después de ocultar el texto
              });
            }

        });

        
        },

        update() {
            moveShip(nave, this);

        },

      }

      return marsScene;

}