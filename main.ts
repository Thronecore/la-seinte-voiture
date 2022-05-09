/**
 * Code du micro:bit voiture
 */
/**
 * Code du micro:bit contrôleur
 */
/**
 * <-- Code du mode manuel
 */
/**
 * <-- Code du mode manuel
 */
/**
 * <-- Code du mode manuel
 */
/**
 * <-- Code du mode manuel
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (Mode == 0) {
        if (receivedNumber == 0) {
            servos.P0.run(VITESSE)
            basic.pause(10)
            servos.P0.run(0)
        }
        if (receivedNumber == 1) {
            servos.P1.run(VITESSE)
            basic.pause(10)
            servos.P1.run(0)
        }
        if (receivedNumber == 4) {
            servos.P0.run(-40)
            servos.P1.run(-40)
            basic.pause(10)
            servos.P0.run(0)
            servos.P1.run(0)
        }
        if (receivedNumber == 2) {
            if (VITESSE > 100) {
                VITESSE = VITESSE + 5
            }
        }
        if (receivedNumber == 3) {
            if (true) {
                VITESSE = VITESSE - 10
            }
        }
        if (receivedNumber == 5) {
            if (Mode == 0) {
                Mode = 1
                radio.sendString("A")
            } else {
                Mode = 0
                radio.sendString("M")
            }
        }
    }
})
input.onGesture(Gesture.LogoUp, function () {
    while (input.isGesture(Gesture.LogoUp)) {
        radio.sendNumber(4)
        basic.pause(10)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.TiltRight, function () {
    while (input.isGesture(Gesture.TiltRight)) {
        radio.sendNumber(1)
        basic.pause(10)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    while (input.isGesture(Gesture.TiltLeft)) {
        radio.sendNumber(0)
        basic.pause(10)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.LogoDown, function () {
    while (input.isGesture(Gesture.LogoDown)) {
        radio.sendNumber(0)
        radio.sendNumber(1)
        basic.pause(10)
    }
})
let VITESSE = 0
let Mode = 0
radio.setGroup(1)
Mode = 0
VITESSE = 30
/**
 * <-- code du mode auto
 */
basic.forever(function () {
    if (Mode == 1) {
    	
    }
})
