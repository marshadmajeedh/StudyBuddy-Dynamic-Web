addModuleButton.addEventListener('click', () =>{

    let container = document.createElement('div')
    container.classList.add('container')
    container.innerHTML = createGpaElements()

    course_details_container.classList.add('style-course-details-container')
    course_details_container.appendChild(container)
    increaseModuleCount()

    let grade = container.querySelector('.course-grade-class')
    let gradeScale = container.querySelector(".grading-scale-class")

    grade.addEventListener('change',() =>{
        gradeScale.value = matchingGradingScale(grade.value)
    })

})

removeModule()
calculateGpa()
resetForm()