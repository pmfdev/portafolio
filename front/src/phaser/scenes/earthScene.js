/* eslint-disable */

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
import { createEarth } from '../spaceGame/planets/Tierra';  
import { createMars } from '../spaceGame/planets/Mars';
import { createShip } from '../spaceGame/starShips/ship';
import { createGroup } from '../spaceGame/utils/createGroup';
import { createEnemieShips } from '../spaceGame/starShips/enemieShips';
import { createEnemieScene } from '../spaceGame/starShips/enemieScene';
import { colliderEnemie } from '../spaceGame/collider/colliderEnemie';
import { createColliderSpaceNaveUser } from '../spaceGame/collider/colliderSpace';
import {  obtenerDeLocalStorageByProperty } from '@/services/localstorage';
import { moveShip } from '../cursors/moveShip';
import { createText } from '../utils/createText';

import explosionSprite1 from '../../assets/sprite/explosion.json';
import explosion1 from '@/assets/images/explosion_sprite.png';
import { animExplosion } from '@/phaser/utils/configSprite';

export function earthScene(self) {

    let nave;
    let projectiles; // eslint-disable-line no-unused-vars
    let projectilesEnemy; // eslint-disable-line no-unused-vars


    let earthScene =  {
        key: 'tierra',
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
          this.load.atlas('explosion1', explosion1, explosionSprite1);
          self.setCountShips(30);
        },

        create() {
          //creacion actores en el juego
          let tierra = createEarth(self, this).setVisible(obtenerDeLocalStorageByProperty('spaceGame', 'tierra'));
          let marte = createMars(self, this).setVisible(obtenerDeLocalStorageByProperty('spaceGame', 'marte'));
          nave = createShip(self, this, {x: 110, y: 100, ship: 'userShip', width: 150, height: 100});
          this.anims.create(animExplosion);

          //creacion de los grupos
          projectiles = createGroup(self, this); 
          projectilesEnemy = createGroup(self, this); 
          
          //creacion grupos de enemigos
          let enemies = createGroup(self, this);  
          let enemies2 = createGroup(self, this);  
         
          //creacion de los enemigos
          let enemiesGroup = createEnemieShips(self, this, {x: 1500, y: 120, ship: 'enemyShip', width: 150, height: 100, num: 15, group: enemies});
          let enemiesGroup2 = createEnemieShips(self, this, {x: 1300, y: 120, ship: 'enemyShip', width: 150, height: 100, num: 15, group: enemies2});

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
          
          //colisiones de los proyectiles enemigos con la nave usuario
          createColliderSpaceNaveUser(self, this, projectilesEnemy, nave);
          //colisiones de los enemigos con los proyectiles
          colliderEnemie(self, this, projectiles, enemies, enemiesGroup, enemiesGroup2, nave, tierra);
          colliderEnemie(self, this, projectiles, enemies2, enemiesGroup, enemiesGroup2, nave, tierra);
          
          colliderEnemie(self, this, nave, enemies, enemiesGroup, enemiesGroup2, nave, tierra);
          colliderEnemie(self, this, nave, enemies2, enemiesGroup, enemiesGroup2, nave, tierra);

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
            'Pulsar enter para ver mis proyectos en Marte',
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

      return earthScene;

}