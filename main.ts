input.onButtonPressed(Button.AB, function () {
    basic.showString("base menor")
    basic.showNumber(basemenor)
    basic.showString("base mayor")
    basic.showNumber(base_mayor)
    basic.showString("altura")
    basic.showNumber(altura)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Area del trapecio=")
    area_trapecio = (base_mayor + basemenor) / 2 * altura
    basic.showNumber(area_trapecio)
})
let area_trapecio = 0
let altura = 0
let basemenor = 0
let base_mayor = 0
basic.showString("Ruben Cantu")
basic.showString("A01285468")
base_mayor = 20
basemenor = 12
altura = randint(1, 200)
