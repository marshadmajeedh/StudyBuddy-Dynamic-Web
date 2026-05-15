//Buttons and Input value for Enter tasks
const inputValue = document.getElementById('enter-task');
const addBtn = document.getElementById('add-btn');

//Task list container
const taskListContainer = document.querySelector('.task-container')

//Task list
const taskList = document.getElementById('task-list')

//Delete last and first element using pop() and shift()
const deleteLastElement = document.getElementById('deleteLastElement')
const deleteFirstElement = document.getElementById('deleteFirstElement')

const array=[];
addBtn.addEventListener('click',() =>{
    if(inputValue.value.trim() !== ''){

        //Creating a list element,Delete button and Radio
        let list = document.createElement('li')
        let deleteTaskList = document.createElement('button')
        let isTaskComplete = document.createElement('input')

        //setAttribute() sets the input type to check box and styling it using CSS
        isTaskComplete.setAttribute('type','checkbox')
        isTaskComplete.classList.add('styleCheckBox')

        //Button text content = Delete and CSS class styleDeleteButton added to it
        deleteTaskList.textContent="Delete"
        deleteTaskList.classList.add('styleDeleteButton')

        //List's content change to user's task input and added CSS class styleTask to it
        list.textContent = inputValue.value;
        list.classList.add('styleTask')

        //Storing the list into the un-ordered<ol> list in HTML
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

        //Storing the previous value of input to remove from the list when delete button is pressed
        let storedInputValue=inputValue.value;

        //Storing the value also in Array
        array.push(storedInputValue);

        //Making input value to NULL
        inputValue.value='';

         //functions to delete task
        deleteTaskList.addEventListener('click',()=>{

            //Finding the array index of previously stored tasks;
            let index=array.indexOf(storedInputValue)
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
            if(array.length === 0){
                taskListContainer.classList.remove('task-container-style')
                deleteFirstElement.classList.remove('style-task-container-button')
                deleteLastElement.classList.remove('style-task-container-button')
            }
        })
    }else{
        alert('Task name cannot be null');
    }
})

//function to remove last element
deleteLastElement.addEventListener('click',() =>{
    if(array.length === 0) return
    array.pop()
    taskList.lastElementChild.remove()

    if(array.length === 0){
        taskListContainer.classList.remove('task-container-style')
        deleteFirstElement.classList.remove('style-task-container-button')
        deleteLastElement.classList.remove('style-task-container-button')
    }
})

//function to remove first element
deleteFirstElement.addEventListener('click',()=>{
    if(array.length === 0) return
    array.shift()
    taskList.firstElementChild.remove()

    if(array.length === 0){
        taskListContainer.classList.remove('task-container-style')
        deleteFirstElement.classList.remove('style-task-container-button')
        deleteLastElement.classList.remove('style-task-container-button')
    }
})

/**
 * Here Writing all the necessary functions for Filters used in this web
**/

//Buttons and Input values of variety of Filter methods
const deleteByIndexValue = document.getElementById('delete-by-index');
const deleteByIndexBtn = document.getElementById('delete-by-index-btn');
const filterBtn = document.getElementById('filter-btn');
const findByNameValue = document.getElementById('find-by-name');
const findByNameBtn = document.getElementById('find-btn');
const sortBtn = document.getElementById('sort-btn');

//Function to delete a list by index
deleteByIndexBtn.addEventListener('click',() =>{
    if(deleteByIndexValue.value !== '' && array.length !== 0 && deleteByIndexValue.value <= array.length-1){
        array.splice(Number(deleteByIndexValue.value),1)
        let list = taskList.children[Number(deleteByIndexValue.value)]
        taskList.removeChild(list)

        if(array.length === 0){
            taskListContainer.classList.remove('task-container-style')
            deleteFirstElement.classList.remove('style-task-container-button')
            deleteLastElement.classList.remove('style-task-container-button')
        }

    } else if(array.length === 0){
        alert('Cannot delete because list is empty')

    } else if(deleteByIndexValue.value > array.length-1){
        alert('index cannot be greater than the list size')

    }else{
        alert('Index input cannot be null')
    }
})

//function to render all the in completed task
filterBtn.addEventListener('click',() =>{
    //variable to store all the in completed tasks from the task list
    if(array.length !== 0){
        const allInCompletedTask = Array.from(taskList.querySelectorAll('li input'))

        //x here is filtered list
        let x = allInCompletedTask.filter((e)=>{
            if(!e.checked){
                return e.parentElement
            }
        })

        //y is used to check if a list is again checked
        let y = allInCompletedTask.filter((item)=>{
            if(item.checked){
                return item.parentElement
            }
        })

        //add style when unchecked
        x.forEach((e)=>{
            e.parentElement.classList.add('style-list-when-task-in-completed')
        })

        //remove style when checked
        y.forEach((e)=>{
            e.parentElement.classList.remove('style-list-when-task-in-completed')
        })

    } else{
        alert('Cannot filter list is empty')
    }
})