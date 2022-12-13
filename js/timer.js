export default function Timer({
    minutesDisplay,
    secondsDisplay,
    reset_controls
}) {

    let timerTimerOut
    let minutes = Number(minutesDisplay.textContent)


    function update_display(newMinutes, seconds) {

        newMinutes = newMinutes  === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }
    
    function reset() {
        update_display(minutes, 0)
        clearTimeout(timerTimerOut)
    }
    
    function count_down() {
        timerTimerOut = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
    
            if(seconds <= 0) {
                seconds = 60
                
                if(minutes <= 0) {
                    reset_controls()
                    update_display()                
                    return
                }
                minutes--       
            }
    
            update_display(minutes, --seconds)  
    
            count_down()
        }, 1000)
    }

    function update_minutes(newMinutes) {
        minutes = newMinutes
    }

    function hold() {
        clearTimeout(timerTimerOut)
    }

    return {
        reset,
        count_down,
        update_display,
        update_minutes,
        hold
    }
}
