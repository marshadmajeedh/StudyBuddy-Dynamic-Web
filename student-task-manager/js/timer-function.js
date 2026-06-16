
const startTimerButton = document.getElementById('start')
const pauseTimerButton = document.getElementById('pause')
const resetTimerButton = document.getElementById('reset')

const hours = document.getElementById('hour')
const minutes = document.getElementById('minute')
const seconds = document.getElementById('second')

let clicked = false;

let intervalID;

startTimerButton.addEventListener('click', () =>{

    if (!clicked){
        clicked = true
        intervalID = setInterval(() => {

            let currentSeconds = Number(seconds.textContent)+ 1 
            let currentMinutes = Number(minutes.textContent)
            let currentHours = Number(hours.textContent)


            if(currentSeconds === 60){
                currentMinutes += 1
                currentSeconds = 0
            }

            if(currentMinutes === 60){
                currentHours += 1
                currentMinutes = 0
            }

            seconds.textContent = String(currentSeconds).padStart(2,"0")
            minutes.textContent = String(currentMinutes).padStart(2,"0")
            hours.textContent = String(currentHours).padStart(2,"0")

        },1000)
    }
})

pauseTimerButton.addEventListener('click', ()=>{
    clearInterval(intervalID)
    clicked = false
})

resetTimerButton.addEventListener('click', ()=>{
    hours.textContent = "00"
    minutes.textContent = "00"
    seconds.textContent = "00"
    clearInterval(intervalID)
    clicked = false
})