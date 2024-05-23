export function moveShip( nave, game ) {
    const canvas = document.querySelector('canvas');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const cursors = game.input.keyboard.createCursorKeys();
    const naveWidth = nave.displayWidth;
    const naveHeight = nave.displayHeight;

    if (nave && cursors) {
      // Límites del canvas
      const minX = naveWidth / 2;
      const maxX = canvasWidth - naveWidth / 2;
      const minY = naveHeight / 2;
      const maxY = canvasHeight - naveHeight / 2;
      const halfScreenWidth = window.innerWidth / 2;
      const halfScreenHeight = window.innerHeight / 2;
    

      // Movimiento vertical dentro de los límites del canvas
      if (cursors.up.isDown && nave.y > minY) {
        nave.y -= 10;
      } else if (cursors.down.isDown && nave.y < maxY) {
        nave.y += 10;
      }

      if (cursors.right.isDown && nave.x > minX && nave.x > halfScreenWidth) {
        window.scrollBy(10, 0); // Hacer que el scroll avance verticalmente
      }

      if (cursors.left.isDown && nave.x < (halfScreenWidth + nave.x) && maxX - halfScreenWidth > nave.x) {
        window.scrollBy(-10, 0); // Hacer que el scroll avance horizontalmente
      }

      if (cursors.down.isDown && nave.y > minY && nave.y > halfScreenHeight) {
        window.scrollBy(0, 10); // Hacer que el scroll avance verticalmente
      }

      if (cursors.up.isDown && nave.y < (halfScreenHeight + nave.y) && maxY - halfScreenHeight > nave.y) {
        window.scrollBy(0, -10); // Hacer que el scroll avance verticalmente
      }

      if (cursors.left.isDown && nave.x > minX) {
        nave.x -= 10;
      } else if (cursors.right.isDown && nave.x < maxX) {
        nave.x += 10;
      }
      

    }
}