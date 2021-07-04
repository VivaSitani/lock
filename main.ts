input.onButtonPressed(Button.A, function () {
    temp = "" + user_key + "A"
    user_key = temp
    serial.writeLine("" + (user_key))
    if (user_key == key) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
input.onButtonPressed(Button.B, function () {
    temp = "" + user_key + "B"
    user_key = temp
    serial.writeLine("" + (user_key))
    if (user_key == key) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.servoWritePin(AnalogPin.P1, 0)
    }
})
let temp = ""
let user_key = ""
let key = ""
pins.servoWritePin(AnalogPin.P1, 180)
key = "ABBABAAABA"
user_key = ""
basic.forever(function () {
	
})
