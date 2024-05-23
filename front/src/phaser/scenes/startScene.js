/* eslint-disable */

import Phaser from 'phaser';
import { earthScene } from './earthScene';
import { marsScene } from './marsScene';
import { experienceScene } from './experienceScene';
import { defaultScene } from './default';



export function startScene(self, scene) {

        self.showGameOver = false;
        scene != 'experience' && self.resetScrollPosition();
       
        const getScene = (scene) => {
          switch (scene) {
            case "tierra":
              return earthScene;
            case "marte":
              return marsScene;
            case "experience":
              return experienceScene;
            case "default":
              return defaultScene;
            default:
              return defaultScene;
          }

        };
       
        // const config = {
        //   type: Phaser.AUTO,
        //   width: (() => scene == "experience" ? window.innerWidth : 3500)(),
        //   height: 2000,
        //   scene:  getScene(scene)(self),
        //   physics: {
        //     default: 'arcade',
        //     arcade: {
        //       gravity: { y: 0 },
        //     },
        //   },
        // };
       
        const config = {
          type: Phaser.AUTO,
          width: (() => scene == "experience" ? window.innerWidth : 2500)(),
          height: (() => scene == "experience" ? window.innerHeight : 2000)(),
          scene:  getScene(scene)(self),
          physics: {
            default: 'arcade',
            arcade: {
              gravity: { y: 0 },
            },
          },
          render: {      
            clearBeforeRender: true 
        }
        };
  
       return new Phaser.Game(config);
   
}
