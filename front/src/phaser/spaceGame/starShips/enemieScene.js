export function createEnemieScene(game, enemies, object, enemyFire){
    const {from, to, duration, ease, repeat, yoyo, delay,  } = object;
    enemies.children.iterate((enemy) => {
        game.tweens.add({
          targets: enemy,
          y: { from: enemy.y + from, to: enemy.y + to},
          duration,
          ease,
          repeat,
          yoyo,
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