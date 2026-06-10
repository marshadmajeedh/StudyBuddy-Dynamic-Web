//This java script file consist of filter functions
/**
 * Here Writing all the necessary functions for Filters used in this web
**/

//Buttons and Input values of variety of Filter methods
const deleteByIndexValue = document.getElementById('delete-by-index');
const deleteByIndexBtn = document.getElementById('delete-by-index-btn');

//Function to delete a list by index
deleteByIndexBtn.addEventListener('click',() =>{

    let index = Number(deleteByIndexValue.value)-1;

    if (index < 0){
        alert('Index input cannot be less than one')
    }else if(array.length === 0){
        alert('Cannot delete because list is empty')
    }else if(index+1 > array.length){
        alert('index cannot be greater than the list size')
    }else{

        let list = taskList.children[index]
        array.splice(index,1)
        taskList.removeChild(list)

        if(array.length === 0){
            taskListContainer.classList.remove('task-container-style')
            deleteFirstElement.classList.remove('style-task-container-button')
            deleteLastElement.classList.remove('style-task-container-button')
        }
    }
    deleteByIndexValue.value = ''
})
