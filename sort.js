//This JS file consist of all the necessary function to sort a task by alphabetically

const sortButton = document.getElementById('sort-btn')

sortButton.addEventListener('click',() =>{
    const tempArray = array.map(task => ({...task}))
    //localeCompare compares two names with alphabetically
    tempArray.sort((a,b) => 
        a.name.localeCompare(b.name)
    )
    displayTask(tempArray)
})
