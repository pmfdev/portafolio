
/* eslint-disable */
import { areAllEnemiesDestroyed } from "@/phaser/utils/destroyedEnemies";

export function colliderEnemie( vue, game, group1, group2, enemiesGroup, enemiesGroup2, ship, planet ) {

  game.physics.add.collider(group1, group2, (projectile, enemy) => {
        let explosion = game.add.sprite(enemy.x, enemy.y, 'explosion1').play('explode1')  
        game.sound.play('explosionSound', { volume: 0.5 });
        
        projectile.destroy(); // Destruir el proyectil al impactar
        enemy.destroy(); // Destruir la nave enemiga al impactar
        game.time.delayedCall(1000, () => {
          explosion.destroy();
          console.log('Collissionnss', enemiesGroup.getChildren());
          let allEnemies = [].concat(enemiesGroup.getChildren(), enemiesGroup2.getChildren());
          vue.setCountShips(allEnemies.length);
          areAllEnemiesDestroyed(vue, game, allEnemies, ship, planet);
        });
      });

}