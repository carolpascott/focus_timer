import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff
} from "./elements.js"

export default function Events({
    controls, 
    timer, 
    sounds
}) {

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
        sounds.bgAudio.play()
        
    })
    
    buttonSoundOn.addEventListener('click', function() {
        buttonSoundOn.classList.add("hide")
        buttonSoundOff.classList.remove("hide")
        sounds.bgAudio.pause()
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
    
}
