//Buttons and Input value for Enter tasks
const inputValue = document.getElementById('enter-task');
const addBtn = document.getElementById('add-btn');

//input value for task priority
const priorityValue = document.getElementById('set-priority')

//Task list container
const taskListContainer = document.querySelector('.task-container')

//Task list
const taskList = document.getElementById('task-list')

//Delete last and first element using pop() and shift()
const deleteLastElement = document.getElementById('deleteLastElement')
const deleteFirstElement = document.getElementById('deleteFirstElement')

const array=[]

//function to add classList based on priority level
function addCssStylingBasedOnPriority(spanBlock,value){
    switch(value){

        case "low":
        case "Low":
                spanBlock.classList.add('style-low-priority')
                break
        case "medium":
        case "Medium": 
                spanBlock.classList.add('style-medium-priority')
                break
        case "high":
        case "High":
                spanBlock.classList.add('style-high-priority')
                break

    }                   
}


//This function will delete a task within its delete button
function deleteTask(deleteTaskList,list,object){

    deleteTaskList.addEventListener('click',()=>{

        //Finding the array index of previously stored tasks;
        let index=array.findIndex(task => task.id === object.id)
        /**
        * splice is used to remove,replace,or add new by using first para as index,
        * second as count of delete
        * third as element name
        */
        array.splice(index,1)
        displayTask(array)
            
        /**
        * This condition checks if array is empty that means list has no task so the DIV element + Two buttons
        * of first element and last element button also disappears by using classList.remove()
        */
        isArrayEmpty(array)
    })
}

/**
* This condition checks if array is empty that means list has no task so the DIV element + Two buttons
* of first element and last element button also disappears by using classList.remove()
*/
function isArrayEmpty(array){
    if(array.length === 0){
        taskListContainer.classList.remove('task-container-style')
        deleteFirstElement.classList.remove('style-task-container-button')
        deleteLastElement.classList.remove('style-task-container-button')
        return;
    }
}

/**
 * here im passing the array to displayTask(array) so i can display any kind of array in my UI  whether its filtered based on incomplete or etc
*/
//This java script file contains delete element in last and first
function displayTask(array){
    taskList.innerHTML = ''
    
    isArrayEmpty(array)

    array.forEach(task =>{
        let list = document.createElement('li')
        let spanBlock = document.createElement('span')
        let deleteTaskList = document.createElement('button')
        let isTaskComplete = document.createElement('input')
        let spanBlockPriority = document.createElement('span')

        list.classList.add('styleTask')
        //set value for span block
        spanBlock.textContent = task.name
        spanBlockPriority.textContent = task.priority

        addCssStylingBasedOnPriority(spanBlockPriority,task.priority)

        //set text content and css class for delete button
        deleteTaskList.textContent = 'Delete'
        deleteTaskList.classList.add('styleDeleteButton')

        //set attribute and css class for input
        if(task.isCompleted){
            isTaskComplete.checked = true
            spanBlock.classList.add('style-complete-task')

        } else{
            isTaskComplete.checked = false
            spanBlock.classList.remove('style-complete-task')

        }

        isTaskComplete.setAttribute('type','checkbox')
        isTaskComplete.classList.add('styleCheckBox')
        isTaskComplete.addEventListener('change',() =>{
            task.isCompleted = isTaskComplete.checked
            if(task.isCompleted){
                spanBlock.classList.add('style-complete-task')
            } else{
                spanBlock.classList.remove('style-complete-task')
            }
        })

        list.appendChild(spanBlock)
        list.appendChild(spanBlockPriority)
        list.appendChild(deleteTaskList)
        list.appendChild(isTaskComplete)

        taskList.appendChild(list)

        //This functions add CSS style task-container-style to the DIV that contains all the list
        //When a list added to the Ol DIV will show up

        /** 
        * I have added delete first,last element button to appear when an item is added by using CSS function
        */
        if(!taskListContainer.classList.contains('task-container-style')){
            taskListContainer.classList.add('task-container-style')
            deleteFirstElement.classList.add('style-task-container-button')
            deleteLastElement.classList.add('style-task-container-button')
        }
        deleteTask(deleteTaskList,list,task)
    })
}
