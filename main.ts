pins.servoWritePin(AnalogPin.P1, 0)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (input.buttonIsPressed(Button.B)) {
            if (input.buttonIsPressed(Button.B)) {
                if (input.buttonIsPressed(Button.A)) {
                    if (input.buttonIsPressed(Button.B)) {
                        if (input.buttonIsPressed(Button.A)) {
                            if (input.buttonIsPressed(Button.A)) {
                                if (input.buttonIsPressed(Button.A)) {
                                    if (input.buttonIsPressed(Button.B)) {
                                        if (input.buttonIsPressed(Button.A)) {
                                            pins.digitalWritePin(DigitalPin.P0, 0)
                                            pins.servoWritePin(AnalogPin.P1, 180)
                                            pins.digitalWritePin(DigitalPin.P2, 1)
                                        } else if (input.buttonIsPressed(Button.B)) {
                                            pins.digitalWritePin(DigitalPin.P0, 1)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
basic.forever(function () {
	
})
