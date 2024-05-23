
/* eslint-disable */
import { areAllEnemiesDestroyed } from "@/phaser/utils/destroyedEnemies";

export function colliderEnemieSuper(vue, game, group1, group2, enemiesGroup, enemiesGroup2, ship, planet) {
  let numCollision = 0;
  const numMaxCollision = 20;

  game.physics.add.collider(group2, group1, (enemy,projectile ) => {
    console.log('COLLISION');
    numCollision++;
    if (numCollision > numMaxCollision) {
      let explosion = game.add.image(enemy.x, enemy.y, 'explosion').setAlpha(0.7).setDepth(1);
      game.sound.play('explosionSound', { volume: 0.5 });

      projectile.destroy(); // Destruir el proyectil al impactar
      enemy.destroy(); // Destruir la nave enemiga al impactar
      game.time.delayedCall(1000, () => {
        explosion.destroy();
        let allEnemies = [].concat(enemiesGroup.getChildren(), enemiesGroup2.getChildren());
        areAllEnemiesDestroyed(vue, game, allEnemies, ship, planet);
      });
    }

  });

}