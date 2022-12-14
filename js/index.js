import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import Events from "./events.js"
import { 
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
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

Events({ controls, timer, sounds})