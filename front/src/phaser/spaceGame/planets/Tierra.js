export function createEarth(vue, game) {

    const tierra = game.add.image(1000, 600, 'tierra');
    tierra.displayWidth = 370;
    tierra.displayHeight = 300;
    game.physics.add.existing(tierra);
    return tierra;

}