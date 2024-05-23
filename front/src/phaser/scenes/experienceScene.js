/* eslint-disable */
// import Vue from 'vue';

// Creamos un Event Bus




import userShip from '../../assets/images/nave.png';
import cityBg from '../../assets/images/city.png';
import cloudBg from '../../assets/images/cloud.png';
import globo from '../../assets/images/globo.png';
import pedraforca from '../../assets/images/pedraforca.png';
import avionIMG from '../../assets/images/avion.png';
import aguilaIMG from '../../assets/images/aguila.png';
import airPlaneSound from '../../assets/audio/airplane.mp3';
import fly from '../../assets/sprite/fly.json';
import explosionSprite from '../../assets/sprite/explosion.json';
import explosionSound from '@/assets/audio/explosion.wav';
import zepelinIMG from '@/assets/images/zepelin.png';
import explosion from '@/assets/images/explosion_sprite.png';
import { createShip } from '../spaceGame/starShips/ship';
import { moveShip } from '../cursors/moveShip';
export function experienceScene(self) {

    let nave;
    let avion;
    var sky
    var city
    var cloud
    let cursors;
    let montain;
    let aguila; 
    let zepelin;
    let avionAnimationStarted = false;
    let zepelinAnimationStarted = false;

    let experienceScene =  {
        key: 'experience',
        gameOver() {
         self.gameOver();
        },
        preload() {
          this.load.image('userShip', userShip);
          this.load.image('city', cityBg);
          this.load.image('cloud', cloudBg);
          this.load.image('globo', globo);
          this.load.image('montain', pedraforca);
          this.load.image('avion', avionIMG);
          this.load.image('zepelin', zepelinIMG);
          this.load.audio('soundAirPlane', airPlaneSound);
          this.load.audio('explosionSound', explosionSound);

          this.load.atlas('bird', aguilaIMG, fly);
          this.load.atlas('explosion', explosion, explosionSprite);

          },

        create() {
          console.log('path', __dirname)
          cursors = this.input.keyboard.createCursorKeys();

          //creacion actores en el juego
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          
          // Carga el tileSprite de las nubes
          cloud = this.add.image(0, windowHeight, 'cloud').setOrigin(0, 1);
          const scaleXCloud = windowWidth / cloud.width;
          const scaleYCloud = scaleXCloud; // Mantenemos el mismo factor de escala horizontal para mantener el aspect ratio
          cloud.setScale(scaleXCloud, scaleYCloud);
          
          // Establece el origen del tileSprite en la esquina superior izquierda
          
          montain = this.add.image(0, windowHeight, 'montain').setOrigin(0, 1);
          const scaleXMontain = (windowWidth) / montain.width;
          const scaleYMontain = scaleXMontain; 
          montain.setScale(scaleXMontain, scaleYMontain);
          
          city = this.add.image(0, windowHeight, 'city').setOrigin(0, 1);
          const scaleX = windowWidth / city.width;
          const scaleY = scaleX; // Mantenemos el mismo factor de escala horizontal para mantener el aspect ratio
          city.setScale(scaleX, scaleY);
             
          nave = createShip(self, this, {x: windowWidth - 275, y: windowHeight - 450, ship: 'globo', width: 450, height: 400});
          avion = createShip(self, this, {x:  windowWidth + 1125, y: 350, ship: 'avion', width: 550, height: 300});
          zepelin = createShip(self, this, {x:  windowWidth + 1125, y: 350, ship: 'zepelin', width: 550, height: 300});
          

          const animConfig = {
            key: 'fly',
            frames: 'bird',
            frameRate: 5,
            repeat: -1
        };

        this.anims.create(animConfig);

        aguila  = this.add.sprite(-150, 200, 'bird', 'frame_0000');
        aguila.setScale(0.4);
        aguila.play('fly');

        this.physics.world.enable([nave, aguila]); 
        nave.body.setSize(100, 100); // Define el área de colisión para la nave
        aguila.body.setSize(100, 100); 
   
         const animExplosion = {
              key: 'explode',
              frames: 'explosion',
              frameRate: 10,
              repeat: -1
            };


          this.physics.add.overlap(nave, aguila, () => {
         
            this.anims.create(animExplosion);
            explosion = this.add.sprite(nave.x, nave.y, 'explosion')
            explosion.play('explode');
            aguila.destroy();
            nave.destroy();
            this.sound.play('explosionSound', { volume: 0.5 });
            this.time.delayedCall(1000, () => {
              explosion.destroy();
            });
          }
          );

        //colision aguila con globo
   


        },

        update() {
        

            let parallax = {
              cloudParallax: {
                cloud,
                up() {cloud.y -= 3.5; },
                down() {cloud.y += 3.5}
              },
              cityParallax: {
                city,
                up () {city.y -= 3; },
                down () {city.y += 3}
              },
              montainParallax: {
                montain,
                up () {montain.y -= 3.2 },
                down () {montain.y += 3.2}
              }
                   
            }

            moveShip(nave, this);
        if (cursors.up.isDown) {
          if (parallax.cityParallax.city.y <= 3000) {
            parallax.cloudParallax.down();
            parallax.cityParallax.down();
            parallax.montainParallax.down();

          }
        } else if (cursors.down.isDown) {
          if (parallax.cityParallax.city.y >= 1010) {
            parallax.cloudParallax.up();
            parallax.cityParallax.up();
            parallax.montainParallax.up();
          }
        }

        if (parallax.cloudParallax.cloud.y >= 1400 && !avionAnimationStarted) {
          avionAnimationStarted = true; // Marcar que la animación del avión ha iniciado
          // Animación para mover el avión
          this.sound.play('soundAirPlane', { volume: 0.5 });
          this.tweens.add({
              targets: avion,
              x: -250, // La posición Y a la que deseas que llegue el avión
              duration: 7000, // Duración de la animación en milisegundos
              ease: 'Linear', // Tipo de transición (puedes ajustarlo según tus necesidades)
              onComplete: function() {
                avion.destroy();
               }
          });
      }

        if (parallax.cloudParallax.cloud.y >= 2500 && !zepelinAnimationStarted) {
          zepelinAnimationStarted = true; // Marcar que la animación del avión ha iniciado
          // Animación para mover el avión
          this.sound.play('soundAirPlane', { volume: 0.5 });
          this.tweens.add({
              targets: zepelin,
              x: -250, // La posición Y a la que deseas que llegue el avión
              duration: 7000, // Duración de la animación en milisegundos
              ease: 'Linear', // Tipo de transición (puedes ajustarlo según tus necesidades)
              onComplete: function() {
                avion.destroy();
               }
          });
      }
      
      //objeto self hace referencia al this "contexto de la página earthPage.vue" 
      self.positionObjects({avion, nave, cloud, city, montain, aguila});
    },


      }

      return experienceScene;

}