const course_details_container = document.querySelector('.course-details-container')
/**
 * here im writing a function create elements dynamically when user 'click' add module button this will appear in the screen
 * so user can add modules as for their wish and i can re use it whenever i need to create these elements
*/

function createGpaElements(){
    return `
        <label for="course-name-class">Course name:</label>
        <input type="text" class="course-name-class" placeholder="Software engineering">

        <label for="course-grade-label">Course grade:</label>
        <select class="course-grade-class">
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="E">E</option>
        </select>

        <label for="grading-scale-label">Grading scale:</label>
        <input type="text" class="grading-scale-class" value="4.0" readonly>

        <label for="course-credit-label">Course Credit:</label>
        <select class="course-credit-class">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
    `;

}

//here writing function to add modules when user clicks Add module + button
const addModuleButton = document.getElementById('add')
const removeModuleButton = document.getElementById('remove')

//This is module count
const moduleCounts = document.getElementById('total-modules-count')
//This is credit counts
const creditCounts = document.getElementById('total-credits-count') 
//This is GPA
const result = document.getElementById('result-span')

const calculateButton = document.getElementById('calculate-gpa-button')
const resetFormButton = document.getElementById('reset-gpa-button')

function increaseModuleCount(){
   moduleCounts.textContent = Number(moduleCounts.textContent) + 1
}

function decreaseModuleCount() {
    if (Number(moduleCounts.textContent) > 0) {
        moduleCounts.textContent = Number(moduleCounts.textContent) - 1
    }
}

function checksCourseContainerIsEmpty(){
    if (course_details_container.children.length === 0){
        course_details_container.classList.remove('style-course-details-container')
    }
}

function removeModule(){
    removeModuleButton.addEventListener('click',()=>{
        
        if(course_details_container.children.length === 0){
            alert('cannot remove module section is empty')
            return
        }

        let lastChild = course_details_container.lastElementChild
        let courseCreditLastChild = Number(lastChild.querySelector('.course-credit-class').value)

        if (courseCreditLastChild > 0){
            creditCounts.textContent = Number(creditCounts.textContent) - courseCreditLastChild
        }

        lastChild.remove()
        checksCourseContainerIsEmpty()
        decreaseModuleCount()
        result.textContent = calculateGpa()

    })
}

//Function to calculate GPA
function calculateGpa(){

    if(course_details_container.children.length === 0){
        return 0
    }

    let finalResult = calculateTotalGradePoints()/calculateTotalCredits()
    
    return Number(finalResult.toFixed(2))
}

//Function to calculate total credits
function calculateTotalCredits(){
    
    if(course_details_container.children.length === 0){
        return 0
    }

    //input and select values
    let container = course_details_container.querySelectorAll('.container')
    let credits = 0

      container.forEach(module =>{

        let moduleCredits = module.querySelector('.course-credit-class')
        credits += Number(moduleCredits.value)
    })

    return Number(credits)

}

//function to calculate total Grade points
function calculateTotalGradePoints(){

    if(course_details_container.children.length === 0){
        return 0
    }

    //input and select values
    let container = course_details_container.querySelectorAll('.container')
    let points = 0

    container.forEach(module =>{

        let moduleGradeScale = module.querySelector('.grading-scale-class')
        let moduleCredits = module.querySelector('.course-credit-class')

        points += Number(moduleGradeScale.value) * Number(moduleCredits.value) 
    
    })

    return Number(points)
}

calculateButton.addEventListener('click',() =>{
    result.textContent = calculateGpa()
})

//This function contains the logic to clear out user typed entries for modules
function resetForm (){
    resetFormButton.addEventListener('click',() =>{
        course_details_container.innerHTML = '';
        checksCourseContainerIsEmpty()
        moduleCounts.textContent = 0
        creditCounts.textContent = 0
        result.textContent = 0
    })
}

//this function converts grade to its corresponding scale
function matchingGradingScale(moduleGrade){
    switch(moduleGrade){
        case "A+":
        case "A":
            return 4.0
        case "A-":
            return 3.7
        case "B+":
            return 3.3
        case "B":
            return 3.0
        case "B-":
            return 2.7
        case "C+":
            return 2.3
        case "C":
            return 2.0
        case "C-":
            return 1.7
        case "D+":
            return 1.3
        case "D":
            return 1.0
        case "E":
            return 0.0
        default:
            return 0.0
    }
}