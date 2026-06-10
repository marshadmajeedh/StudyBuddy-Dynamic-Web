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

/**
* This condition checks if array is empty that means list has no task so the DIV element + Two buttons
* of first element and last element button also disappears by using classList.remove()
*/
function isArrayEmpty(array){
    if(array.length === 0){
        taskListContainer.classList.remove('task-container-style')
        deleteFirstElement.classList.remove('style-task-container-button')
        deleteLastElement.classList.remove('style-task-container-button')
    }
}

//This function will delete a task withing its delete button
function deleteTask(deleteTaskList,list,objectID){

    deleteTaskList.addEventListener('click',()=>{

        //Finding the array index of previously stored tasks;
        let index=array.findIndex(task => task.id === objectID.id)
        /**
        * splice is used to remove,replace,or add new by using first para as index,
        * second as count of delete
        * third as element name
        */
        array.splice(index,1)
        list.remove()
            
        /**
        * This condition checks if array is empty that means list has no task so the DIV element + Two buttons
        * of first element and last element button also disappears by using classList.remove()
        */
        isArrayEmpty(array)
    })
}

addBtn.addEventListener('click',() =>{

    if(inputValue.value.trim() === ''){
        alert('Task name cannot be null');
        return;
    }

    //Creating a list element,Delete button and Radio
    let list = document.createElement('li')
    let deleteTaskList = document.createElement('button')
    let isTaskComplete = document.createElement('input')
    let taskName = inputValue.value 
    let taskPriorityLevel = priorityValue.value


    //setAttribute() sets the input type to check box and styling it using CSS
    isTaskComplete.setAttribute('type','checkbox')
    isTaskComplete.classList.add('styleCheckBox')

    //Button text content = Delete and CSS class styleDeleteButton added to it
    deleteTaskList.textContent="Delete"
    deleteTaskList.classList.add('styleDeleteButton')

    //List's content change to user's task input and added CSS class styleTask to it
    /**
    * Here im trying to write the input value in a span block and add it into a list so when filtering in-complete task i can decorate
    * text content of span block to straight through
    **/ 
    let spanBlock = document.createElement('span')
    let spanBlockPriority = document.createElement('span')

    spanBlockPriority.textContent = taskPriorityLevel
    spanBlock.textContent = inputValue.value;
    list.classList.add('styleTask')

    //calling the styling method here
    addCssStylingBasedOnPriority(spanBlockPriority,taskPriorityLevel)

    //Storing the list into the un-ordered<ol> list in HTML
    list.appendChild(spanBlock)
    list.appendChild(spanBlockPriority)
    list.appendChild(deleteTaskList)
    list.appendChild(isTaskComplete)
    taskList.appendChild(list);

    //This functions add CSS style task-container-style to the DIV that contains all the list
    //When a list added to the UL DIV will show up

    /** 
    * I have added delete first,last element button to appear when an item is added by using CSS function
    */
    if(!taskListContainer.classList.contains('task-container-style')){
        taskListContainer.classList.add('task-container-style')
        deleteFirstElement.classList.add('style-task-container-button')
        deleteLastElement.classList.add('style-task-container-button')
    }

    //Storing the values as object for best practice
    let storedInputValueObject={
        id:Date.now(),
        name:taskName,
        priority:taskPriorityLevel,
        isCompleted:false
    };

    //Storing the value also in Array
    array.push(storedInputValueObject);

    //Making input value to NULL
    inputValue.value=''
    priorityValue.value = ''

   deleteTask(deleteTaskList,list,storedInputValueObject)
})


