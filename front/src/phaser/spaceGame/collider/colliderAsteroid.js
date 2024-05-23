export function createEnemieSceneAsteroid(vue, game, group1, group2) {

    let numColisiones = 0;
    const numeroMaximoColisiones = 5;

    game.physics.add.collider(group1, group2, (projectileEnemy, ship) => {
        projectileEnemy.body.moves = false;
        numColisiones++;
        ship.destroy(); // Destruir el proyectil al impactar
        vue.setNumeroColisiones(numColisiones, numeroMaximoColisiones);

        // Acciones al colisionar con una nave enemiga (por ejemplo, explotar)
        if (numColisiones > numeroMaximoColisiones) {
            let explosion = game.add.image(group2.x, group2.y, 'explosion').setAlpha(0.7).setDepth(1);
            group2.destroy();
            game.time.delayedCall(1000, () => { explosion.destroy(); });
            game.sound.play('explosionSound', { volume: 0.5 });
            vue.gameOver();


        } else {
            let explosion = game.add.image(group2.x, group2.y, 'explosion').setAlpha(0.7).setDepth(1);
            explosion.displayWidth = 50;
            explosion.displayHeight = 70;
            game.time.delayedCall(1000, () => { explosion.destroy(); });
            game.sound.play('explosionSound', { volume: 0.5 });
        }

    });

}