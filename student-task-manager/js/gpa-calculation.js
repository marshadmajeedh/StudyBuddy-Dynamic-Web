addModuleButton.addEventListener('click', () =>{

    
    let container = document.createElement('div')
    container.classList.add('container')
    container.innerHTML = createGpaElements()

    course_details_container.classList.add('style-course-details-container')
    course_details_container.appendChild(container)
    increaseModuleCount()
    result.textContent = calculateGpa()

    let grade = container.querySelector(".course-grade-class")
    let gradeScale = container.querySelector(".grading-scale-class")
    let credit = container.querySelector(".course-credit-class")
    let previousValue = Number(credit.value)

    grade.addEventListener('change',() =>{
        gradeScale.value = matchingGradingScale(grade.value)
        result.textContent = calculateGpa()
    })

    //this function will change total credit based on user selected credit value dynamically
    credit.addEventListener('change',() => {
        creditCounts.textContent = calculateTotalCredits()
        result.textContent = calculateGpa()
    }) 

})

removeModule()
resetForm()