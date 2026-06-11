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
    displayTask(array)

    //This array removes css classes when array becomes empty
    isArrayEmpty(array)
})

//function to remove first element
deleteFirstElement.addEventListener('click',()=>{
    if(array.length === 0) return
    array.shift()
    
    //calling display function here too
    displayTask(array)

    //This array removes css classes when array becomes empty
    isArrayEmpty(array)
})

//This function remove a task by its index value when user input index it delete 
const deleteByIndexValue = document.getElementById('delete-by-index');
const deleteByIndexBtn = document.getElementById('delete-by-index-btn');

//Function to delete a list by index
deleteByIndexBtn.addEventListener('click',() =>{

    let index = Number(deleteByIndexValue.value)-1;

    if (index < 0){
        alert('Index input cannot be less than one')
        return
    }else if(array.length === 0){
        alert('Cannot delete because list is empty')
        return
    }else if(index+1 > array.length){
        alert('index cannot be greater than the list size')
        return
    }

    let list = taskList.children[index]
    array.splice(index,1)
    taskList.removeChild(list)

    isArrayEmpty(array)
    
    deleteByIndexValue.value = ''
})
