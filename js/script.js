const addBtn = document.querySelector('.content__add')
const checkBtn = document.querySelectorAll('.item__check')
const inputBtn = document.querySelector('.content__input')
const delBtn = document.querySelector('.item__delete')
const tasksBtn = document.querySelector('.main__tasks')
const tasksAll = []



//CheckBox animation============================================================================
checkBtn.forEach(check => {
    check.addEventListener('click',(e) =>{
        e.preventDefault()
        check.classList.toggle('checked')
    })
})
// Add task after click====================================================================
addBtn.onclick = () => {
    const newTaskText = inputBtn.value
    if(newTaskText && isNotHaveTask(newTaskText, tasksAll)){
        addTask(newTaskText, tasksAll)
        inputBtn.value = ''
    }
}
function addTask(text,arr){
    const timesTamp = Date.now()
    const task = {
        id: timesTamp,
        text:text,
        isComplete: false
    }
    arr.push(task)
}
//Check the array on the task==================================================================================
function isNotHaveTask(text,arr){
    let isNotExist = true
    arr.forEach((value) =>  {
        if(value.text === text){
            alert('Task already exist')
            isNotExist = false
        }
    })
    return isNotExist
}
function removeTask(){

}

