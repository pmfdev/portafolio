/* eslint-disable */

export function createEnemieSceneRandom(game, enemies, object, enemyFire){
    const {from, to, duration, ease, repeat, yoyo, delay,  } = object;
    enemies.children.iterate((enemy) => {
      game.tweens.add({
        targets: enemy,
        x: enemy.x + Phaser.Math.RND.between(-500, 500),
        y: enemy.y + Phaser.Math.RND.between(-500, 500),
        duration: duration,
        ease: ease,
        repeat: repeat,
        yoyo: yoyo,
      });

        game.time.addEvent({
          delay, 
          loop: true,
          callback: () => {
            if (enemy && enemy.active && enemy.body && !enemy.isDestroyed) {
              enemyFire(enemy);
              game.sound.play('disparoSound', { volume: 0.1 });
            }
          },
          callbackScope: this,
        });
      });
}