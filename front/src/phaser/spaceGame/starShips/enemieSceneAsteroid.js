/* eslint-disable */

export function createEnemieSceneAsteroid(game, enemy, object, enemyFire){
  const { from, to, duration, ease, repeat, yoyo, delay, nave } = object;

  // Añadir tween para mover la nave enemiga hacia la nave del jugador
  game.tweens.add({
      targets: enemy,
      x: nave.x - 2000,
      y: nave.y,
      duration: duration,
      onComplete: () => {
          // Lógica que se ejecutará al completar el tween (opcional)
          console.log("Nave enemiga ha alcanzado la posición de la nave del jugador");
          enemy.destroy();
      }
  });
}