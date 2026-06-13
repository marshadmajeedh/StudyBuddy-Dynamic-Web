//This js file contains only the logic for reversing the task list using reverse() method

const reverseButton = document.getElementById('reverse-btn')

reverseButton.addEventListener('click',() =>{
    const tempArray = array.map(task => ({...task}))
    displayTask(tempArray.reverse())
})