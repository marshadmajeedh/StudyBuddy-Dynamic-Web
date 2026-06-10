//This java script file contains delete element in last and first

function displayTask(){
    taskList.innerHTML = ''
    
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
        }else{
            isTaskComplete.checked = false
        }
        isTaskComplete.setAttribute('type','checkbox')
        isTaskComplete.classList.add('styleCheckBox')

        list.appendChild(spanBlock)
        list.appendChild(spanBlockPriority)
        list.appendChild(deleteTaskList)
        list.appendChild(isTaskComplete)

        taskList.appendChild(list)
        deleteTask(deleteTaskList,list,task.id)
    })
}

//function to remove last element
deleteLastElement.addEventListener('click',() =>{
    /**
     * here im trying to do is re rendering the UI every time i do pop() , so this prevent my web from desynchronizing with array
     * so when i pop i loop through the array using forEach and appending it to the list again so im using dedicated
     * function above this deleteLastElement function
    */

    if(array.length === 0) return
    array.pop()

    //calling display task function here
    displayTask()

    //This array removes css classes when array becomes empty
    isArrayEmpty(array)
})

//function to remove first element
deleteFirstElement.addEventListener('click',()=>{
    if(array.length === 0) return
    array.shift()
    
    //calling display function here too
    displayTask()

    //This array removes css classes when array becomes empty
    isArrayEmpty(array)
})
