const addBtn = document.querySelector('.content__add');
const checkBtn = document.querySelector('.item__check');
const inputBtn = document.querySelector('.content__input');
const delBtn = document.querySelector('.item__delete');
const tasksBtn = document.querySelector('.main__tasks');
const taskItem = document.querySelectorAll('.tasks__item');
const tasksAll = [];


//CheckBox animation============================================================================
tasksBtn.addEventListener('click', (e) => {
        let targetItem = e.target
        if (targetItem.closest('.item__check')) {
            targetItem.closest('.item__check').classList.toggle('checked')
            
        }
    })
// Add task after click====================================================================
addBtn.onclick = () => {
    const newTaskText = inputBtn.value
    if(newTaskText && isNotHaveTask(newTaskText, tasksAll)){
        addTask(newTaskText, tasksAll)
        inputBtn.value = ''
        tasksRender(tasksAll)
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
            inputBtn.value = ''
        }
    })
    return isNotExist
}
//Add Task Into HTML==============================================================================
function tasksRender(arr){
    let htmlList = ''

    arr.forEach((item) => {
        const taskHtml = `                
        <div id=${item.id} class="tasks__item item">
            <div class="item__check"></div>
            <div class="item__content">${item.text}</div>
            <div class="item__delete"><a href="#">-</a> </div>
        </div>
        `
        htmlList = htmlList + taskHtml
    })
    tasksBtn.innerHTML = htmlList
}

