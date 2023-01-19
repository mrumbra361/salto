input.onButtonPressed(Button.A, function () {
    personaje_abajo.change(LedSpriteProperty.Y, -1)
    personaje_arriba.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    personaje_abajo.change(LedSpriteProperty.Y, 1)
    personaje_arriba.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    personaje_arriba.change(LedSpriteProperty.X, -1)
    personaje_arriba.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    personaje_abajo.change(LedSpriteProperty.X, 1)
    personaje_arriba.change(LedSpriteProperty.Y, -1)
})
let personaje_arriba: game.LedSprite = null
let personaje_abajo: game.LedSprite = null
personaje_abajo = game.createSprite(1, 4)
personaje_arriba = game.createSprite(1, 3)
let objeto = game.createSprite(4, 4)
basic.forever(function () {
    objeto.change(LedSpriteProperty.X, -1)
    basic.pause(100)
    if (objeto.get(LedSpriteProperty.X) == 0) {
        objeto.change(LedSpriteProperty.X, 4)
    }
    if (objeto.isTouching(personaje_abajo)) {
        game.gameOver()
    }
})
