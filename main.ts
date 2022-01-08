input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(最高温度)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(最低温度)
})
let 最低温度 = 0
let 最高温度 = 0
最高温度 = -100000000
最低温度 = 100000000
basic.forever(function () {
    if (最高温度 < input.temperature()) {
        最高温度 = input.temperature()
    }
    if (最低温度 > input.temperature()) {
        最低温度 = input.temperature()
    }
})
