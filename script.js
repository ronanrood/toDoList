const button = document.querySelector('.buttonTask')
const input = document.querySelector('.inputTask')
const list = document.querySelector('.contentTask')

let myTask = []

function addTask(){
    myTask.push({
        task: input.value,
        check: false,
    })

    input.value = ''

    viewTask()
}

function viewTask(){
    let newTask = ''

    myTask.forEach((task, i)=>{
        newTask = newTask + `
        <div class="containerTask ${task.check && 'done'}">
        <ul>
          <li>
            <img src="assets/checked.png" alt="" onclick="TaskCheck(${i})"/>
            <p>${task.task}</p>
            <img src="assets/trash.png" alt="" onclick="deleteTask(${i})"/>
          </li>
        </ul>
      </div>`      
    })
    list.innerHTML = newTask

    localStorage.setItem('tasks', JSON.stringify(myTask))
}

function TaskCheck(i){
    myTask[i].check = !myTask[i].check

    viewTask()
}

function deleteTask(i){
    myTask.splice(i, 1)

    viewTask()
}

function reloadTask(){
    const taskLocalStorage = localStorage.getItem('tasks')

    if(taskLocalStorage){
        myTask = JSON.parse(taskLocalStorage)
    }
    
    viewTask()
}

reloadTask()
button.addEventListener('click', addTask)
