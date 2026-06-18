const greet = document.querySelector('#greet')
const quote = document.querySelector('#quote')
const time = document.querySelector('#time')

const day = new Date()

const motivationalQuotes = [
    "Small progress every day adds up to big results.",
    "Success is built one study session at a time.",
    "Discipline will take you where motivation cannot.",
    "The future depends on what you do today.",
    "Every expert was once a beginner.",
    "Focus on progress, not perfection.",
    "Your grades don't define you, but your effort does.",
    "Dream big, start small, act now.",
    "The harder you work today, the easier tomorrow becomes.",
    "Learning is an investment that never loses value.",
    "Don't watch the clock; keep moving like it does.",
    "One chapter at a time, one goal at a time.",
    "Consistency beats intensity.",
    "You are capable of more than you think.",
    "Mistakes are proof that you are learning.",
    "Success is the sum of small efforts repeated daily.",
    "Stay focused on your goals, not your obstacles.",
    "Every study hour is a step toward your future.",
    "The best way to predict your future is to create it.",
    "Growth begins where comfort ends.",
    "Keep showing up, even on difficult days.",
    "Knowledge gained today opens doors tomorrow.",
    "Believe in the student you are becoming.",
    "Your future self is watching your choices today."
];


function setGreetAndQuote(){

    let index = Math.random() * motivationalQuotes.length
    index = Math.floor(index)

    if (day.getHours() >= 0 && day.getHours() < 12){
        greet.textContent = "Good Morning!"
        time.textContent = "Morning"
        quote.textContent = motivationalQuotes[index]

    } else if(day.getHours() >=12 && day.getHours() < 17) {
        greet.textContent = "Good afternoon!"
        time.textContent = "Afternoon"
        quote.textContent = motivationalQuotes[index]

    } else if(day.getHours() >= 17 && day.getHours() < 21) {
        greet.textContent = "Good evening!"
        time.textContent = "Evening"
        quote.textContent = motivationalQuotes[index]

    } else{
        greet.textContent = "Good night!"
        time.textContent = "Night"
        quote.textContent = motivationalQuotes[index]

    }
}

setGreetAndQuote() 
