const course_details_container = document.querySelector('.course-details-container')
/**
 * here im writing a function create elements dynamically when user 'click' add module button this will appear in the screen
 * so user can add modules as for their wish and i can re use it whenever i need to create these elements
*/

function createGpaElements(){
    return `
        <label for="course-name-class">Course name:</label>
        <input type="text" class="course-name-class" placeholder="Software engineering">

        <label for="course-grade-class">Course grade:</label>
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

        <label for="grading-scale-class">Grading scale:</label>
        <select class="grading-scale-class">
            <option value="4.0">4.0</option>
            <option value="3.7">3.7</option>
            <option value="3.3">3.3</option>
            <option value="3.0">3.0</option>
            <option value="2.7">2.7</option>
            <option value="2.3">2.3</option>
            <option value="2.0">2.0</option>
            <option value="1.7">1.7</option>
            <option value="1.3">1.3</option>
            <option value="1.0">1.0</option>
            <option value="0.0">0.0</option>
        </select>

        <label for="course-credit-class">Course Credit:</label>
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
function increaseCreditCounts(credits){
    creditCounts.textContent = Number(creditCounts.textContent) + credits
}

function removeModule(){
    removeModuleButton.addEventListener('click',()=>{
        
        course_details_container.lastElementChild.remove()
        
        if (course_details_container.children.length === 0){
            course_details_container.classList.remove('style-course-details-container')
        }
        decreaseModuleCount()
    })
}

function calculateGpa(container){
    calculateButton.addEventListener('click',() =>{

        let points = 0
        let credits = 0
        container.forEach(module =>{

            let moduleGradeScale = module.querySelector('.grading-scale-class').value
            let moduleCredits = module.querySelector('.course-credit-class').value

            points = Number(points) + Number(moduleGradeScale * moduleCredits) 
            credits = Number(credits) + Number(moduleCredits)
        })

        let finalResult = Number(points)/Number(credits)

        increaseCreditCounts(credits)
        result.textContent = Number(result.textContent) +finalResult

    })
}