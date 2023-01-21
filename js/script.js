const addBtn = document.querySelector('.content__add');
const tasksBtn = document.querySelector('.main__tasks');
const inputBtn = document.querySelector('.content__input');
const tasksAll = [];
 

//CheckBox animation============================================================================
tasksBtn.addEventListener('click', (e) => {
        const targetItem = e.target
        if (targetItem.closest('.item__check')) {
            targetItem.closest('.item__check').classList.toggle('checked')
            
        }
        if(targetItem.closest('.item__delete')){
            const task = targetItem.parentElement
            const taskId = task.getAttribute('id')
            deleteTasks(taskId, tasksAll)
            tasksRender(tasksAll)
    
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
            <div class="item__delete">-</div>
        </div>
        `
        htmlList = htmlList + taskHtml
    })
    tasksBtn.innerHTML = htmlList
}
//Delete task fumction
function deleteTasks(id,list){
    list.forEach((task,idx) => {
        if(task.id == id){
            list.splice(idx,1)
        }
    })
}
