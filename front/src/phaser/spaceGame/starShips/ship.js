
export function createShip(vue, game, object ){
    const { x, y, ship, width, height} = object;
    const nave = game.add.image(x, y, ship).setInteractive();
    nave.displayWidth = width;
    nave.displayHeight = height;

    
    return nave;

}