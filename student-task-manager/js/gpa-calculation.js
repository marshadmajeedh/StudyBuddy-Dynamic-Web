addModuleButton.addEventListener('click', () =>{

    let container = document.createElement('div')
    container.classList.add('container')
    container.innerHTML = createGpaElements()

    course_details_container.classList.add('style-course-details-container')
    course_details_container.appendChild(container)
    increaseModuleCount()
})

//input and select values
let container = course_details_container.querySelectorAll('.container')

removeModule()
calculateGpa(container)