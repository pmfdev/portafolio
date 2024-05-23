/* eslint-disable */

export function createEnemieSceneEnemy(game, enemy, object, enemyFire){

    const {from, to, duration, ease, repeat, yoyo, delay, nave } = object;

      const radius = 200;
      const angle = Phaser.Math.DegToRad(360);
      
      game.tweens.add({
        targets: enemy,
        x: () => nave.x + 500,
        y: () => nave.y + (Math.random() > 0.5 ? 100 : -100), // Esquivar arriba o abajo
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
}