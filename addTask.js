addBtn.addEventListener('click',() =>{

    if(inputValue.value.trim() === ''){
        alert('Task name cannot be null');
        return;
    }

    
    //Storing the values as object for best practice
    let storedInputValueObject={
        id:Date.now(),
        name:inputValue.value,
        priority:priorityValue.value,
        isCompleted:false
    };

    //Storing the value also in Array
    array.push(storedInputValueObject);

    displayTask(array)

    //Making input value to NULL
    inputValue.value=''
    priorityValue.value = ''
})


