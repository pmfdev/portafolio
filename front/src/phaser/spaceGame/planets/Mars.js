export function createMars(vue, game){
    const marte = game.add.image(1700, 1400, 'marte');
    marte.displayWidth = 250;
    marte.displayHeight = 250;
    game.physics.add.existing(marte);  
    return marte;
}