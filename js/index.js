import Controls from "./controls.js"
import Timer from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    reset_controls: controls.reset
})


buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.count_down()
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
})

buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOff.classList.add("hide")
    buttonSoundOn.classList.remove("hide")

})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add("hide")
    buttonSoundOff.classList.remove("hide")

})

buttonSet.addEventListener('click', function() {
    let newMinutes = controls.get_minutes()
    if(!newMinutes) {
        timer.reset()
        return
    }

    timer.update_display(newMinutes, 0)
    timer.update_minutes(newMinutes)
})