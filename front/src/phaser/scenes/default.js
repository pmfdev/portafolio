/* eslint-disable */

import tierraImg from '../../assets/images/tierra.png';
import marte from '../../assets/images/marte.png';
import { createEarth } from '../spaceGame/planets/Tierra';  
import { createMars } from '../spaceGame/planets/Mars';
import {  obtenerDeLocalStorageByProperty } from '@/services/localstorage';
import { createShip } from '../spaceGame/starShips/ship';
import userShip from '../../assets/images/nave.png';
import { moveShip } from '../cursors/moveShip';
import { createText } from '../utils/createText';
import introStarWars from '../../assets/audio/big-space.mp3';


export function defaultScene(self) {
    let nave;

   return {

        preload() {
            this.load.image('userShip', userShip);
            this.load.image('tierra', tierraImg);
            this.load.image('marte', marte);
            this.load.audio('introStarWars', introStarWars);

        },
        
        create() {
            const tierra = createEarth(self, this).setVisible(obtenerDeLocalStorageByProperty('spaceGame', 'tierra'));
            const marte = createMars(self, this).setVisible(obtenerDeLocalStorageByProperty('spaceGame', 'marte'));
            nave = createShip(self, this, {x: 110, y: 100, ship: 'userShip', width: 150, height: 100});

            this.physics.add.existing(nave); // Agrega la nave como un objeto físico

            let experienceEarth = createText(this,
                tierra.x, tierra.y + 160,
                'Pulsar enter para ver mi experiencia',
                {
                    fontSize: '18px',
                    fontWeight: 'bold', // Puedes utilizar 'normal' o un valor numérico también
                    color: '#00ff00',
                    fontFamily: 'Arial', // Cambia '#ff0000' por el código hexadecimal del color que desee
                    visible: false,
                    origin: 0.5
                });

            this.physics.add.collider(nave, tierra, () => {

                if (obtenerDeLocalStorageByProperty('spaceGame', 'tierra')) {           
                    experienceEarth.setVisible(true);
                    const keyObj = this.input.keyboard.addKey('ENTER');
                    keyObj.on('down', () => self.travel('earth'));

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

            this.sound.play('introStarWars', { volume: 0.4 });
                     
              
        },

        update() {
            moveShip(nave, this);
          },
    }

}