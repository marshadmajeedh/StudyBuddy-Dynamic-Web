const greet = document.querySelector('#greet')
const quote = document.querySelector('#quote')

const day = new Date()

function setGreetBasedOnTime(){

    if (day.getHours() >= 0 && day.getHours() < 12){
        greet.textContent = "Good Morning!"
    } else if(day.getHours() >=12 && day.getHours() < 5) {
        greet.textContent = "Good afternoon!"
    } else if(day.getHours() >= 5 && day.getHours() < 9) {
        greet.textContent = "Good evening!"
    } else{
        greet.textContent = "Good night!"
    }
}

setGreetBasedOnTime()