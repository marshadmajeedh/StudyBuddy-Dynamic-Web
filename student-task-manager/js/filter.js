//This java script file consist of filter functions
/**
 * Here Writing all the necessary functions for Filters used in this web
**/

//Buttons and Input values of variety of Filter methods

const filterButton = document.getElementById('filter-btn')

filterButton.addEventListener('click',() => {

    /**
     * This function map all the tasks in main array and  return it into different array called
     * incompleteTasks
    */
    const incompleteTasks = array.filter(function(task){
        if(!task.isCompleted){
            return task
        }
    })

    displayTask(incompleteTasks)
})