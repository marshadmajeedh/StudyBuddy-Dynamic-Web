addModuleButton.addEventListener('click', () =>{

    let container = document.createElement('div')
    container.classList.add('container')
    container.innerHTML = createGpaElements()

    course_details_container.classList.add('style-course-details-container')
    course_details_container.appendChild(container)
    increaseModuleCount()

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
        let newValue = Number(credit.value)

        creditCounts.textContent = Number(creditCounts.textContent) - previousValue
        creditCounts.textContent = Number(creditCounts.textContent) + newValue
        result.textContent = calculateGpa()
        previousValue = newValue
    }) 

})

removeModule()
resetForm()