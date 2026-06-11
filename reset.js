//This js file contains the logic to re set the task list when user clicks filter and want to reset
const resetButton = document.getElementById('reset-btn')

resetButton.addEventListener('click',()=>{
    displayTask(array)
})