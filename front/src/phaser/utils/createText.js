export function createText(game, x, y, text, style)  {
let newText = game.add.text(x, y, text, style);
    newText.setOrigin(style.origin);
    newText.setVisible(style.visible);
    return newText;
}