export function createEnemieShips(vue, game, object) {
    const { x, y, ship, width, height, num, group } = object;
    for (let i = 1; i < num; i++) {
        const enemy = group.create(x, y * i, ship); // Ajusta la posición vertical con el incremento i * 100
        enemy.displayWidth = width;
        enemy.displayHeight = height;
        enemy.setInteractive();
        group.add(enemy);
    }
    return group;

}