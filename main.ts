input.onButtonPressed(Button.A, function () {
    temp = "" + user_key + "A"
    user_key = temp
    serial.writeLine("" + (user_key))
})
input.onButtonPressed(Button.B, function () {
    temp = "" + user_key + "B"
    user_key = temp
    serial.writeLine("" + (user_key))
})
let temp = ""
let user_key = ""
pins.servoWritePin(AnalogPin.P1, 180)
pins.digitalWritePin(DigitalPin.P12, 1)
let key = "ABBABAAABA"
user_key = ""
basic.forever(function () {
    if (user_key == key) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
})
basic.forever(function () {
	
})
