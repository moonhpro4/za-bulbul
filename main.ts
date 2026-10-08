// P0 = plus (+)
input.onPinPressed(TouchPin.P0, function () {
    setOp("+")
})
function setOp (o: string) {
    num1 = cur
    op = o
    cur = 0
    fresh = false
    basic.showString(o)
}
// A = add 1 to the number
input.onButtonPressed(Button.A, function () {
    if (fresh) {
        cur = 0
        fresh = false
    }
    cur += 1
    basic.showNumber(cur)
})
function resetAll () {
    cur = 0
    num1 = 0
    op = ""
    fresh = false
    basic.showNumber(0)
}
// P2 = times (x)
input.onPinPressed(TouchPin.P2, function () {
    setOp("x")
})
// A+B = divide (/)
input.onButtonPressed(Button.AB, function () {
    setOp("/")
})
// B = equals (=)
input.onButtonPressed(Button.B, function () {
    calculate()
})
// P1 = minus (-)
input.onPinPressed(TouchPin.P1, function () {
    setOp("-")
})
input.onGesture(Gesture.Shake, function () {
    resetAll()
})
function calculate () {
    if (op == "+") {
        result = num1 + cur
    } else if (op == "-") {
        result = num1 - cur
    } else if (op == "x") {
        result = num1 * cur
    } else if (op == "/") {
        if (cur == 0) {
            basic.showString("Error")
            resetAll()
            return
        }
        result = num1 / cur
    } else {
        result = cur
    }
    basic.showNumber(result)
    cur = result
    op = ""
    fresh = true
}
// Logo touch or shake = clear
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    resetAll()
})
let result = 0
let fresh = false
let op = ""
let cur = 0
let num1 = 0
resetAll()
