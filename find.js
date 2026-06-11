//This JS file consist of all the necessary function to find a task by its name

const findButton = document.getElementById('find-btn')
const findByNameValue = document.getElementById('find-by-name')

findButton.addEventListener('click', () => {

    if(findByNameValue.value === ''){
        alert('Name of the task cannot be null')
        return
    }

    const foundTask = array.filter(function(task){
        if(task.name === findByNameValue.value){
            return task
        }
    })
    
    displayTask(foundTask)
})