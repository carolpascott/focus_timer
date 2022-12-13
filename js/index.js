import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import { 
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondsDisplay
 } from "./elements.js"


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

const sounds = Sounds()


buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.count_down()
    sounds.pressButton()
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sounds.pressButton()

})

buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sounds.pressButton()

})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOff.classList.add("hide")
    buttonSoundOn.classList.remove("hide")
    sounds.bgAudio.pause()

})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add("hide")
    buttonSoundOff.classList.remove("hide")
    sounds.bgAudio.play()
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