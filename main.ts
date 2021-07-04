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
music.setVolume(255)
basic.forever(function () {
    if (user_key == key) {
        pins.servoWritePin(AnalogPin.P1, 90)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        basic.showString("Welcome!")
        music.setVolume(0)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
})
