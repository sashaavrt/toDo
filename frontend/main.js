// let task_arr = [
//     {   text: 'Сделать приложение',
//         status: false,
//     },
//     {   text: 'Купить продукты',
//         status: false,
//     },
//     {   text: 'Погулять с собакой',
//         status: true,
//     }
// ];
import { select } from "./fetch/select.js";
select();
localStorage.setItem("1", JSON.stringify(task_arr));
let arr = JSON.parse(localStorage.getItem("1")) || task_arr;
console.log(arr,task_arr);
document.addEventListener("DOMContentLoaded", () => {
    displayPreviousTasks(arr);
})
function displayPreviousTasks(task_arr) {
    console.log(task_arr);
    for (i of Object.values(task_arr || {})) {
        let container = document.getElementById('tasks');
        let new_task = document.createElement('div');
        let done_button = document.createElement('button');
        done_button.setAttribute("id", task_arr.indexOf(i));
        let delete_button = document.createElement('button');
        delete_button.setAttribute("id", task_arr.indexOf(i));

        new_task.appendChild(document.createTextNode(i.text));
        container.appendChild(new_task);  
        done_button.textContent = 'Сделано!';
        delete_button.textContent = 'Удалить!';
        new_task.appendChild(done_button);
        new_task.appendChild(delete_button);

        if (i.status==true) {
            new_task.style.background = 'green';
        }

        delete_button.addEventListener('click', () => {
            container.removeChild(new_task);
            task_arr = task_arr.filter((item)=> task_arr.indexOf(item) != delete_button.id);
            console.log(task_arr);
            localStorage.setItem("1", JSON.stringify(task_arr));
          });
          done_button.addEventListener('click', () => {
            task_arr[done_button.id].status = true;
            new_task.style.background = "green";
            console.log(task_arr);
            localStorage.setItem("1", JSON.stringify(task_arr));
          });
        
    }
    
}

function addTask() {   
    let task = document.getElementById('task_input').value.trim();
    if (task == '') {
        alert("Введите задачу");
    }
    else {
        task_arr.push({text: task, status: false});
        localStorage.setItem("1", JSON.stringify(task_arr));
        console.log(task_arr);
        let container = document.getElementById('tasks');
        container.replaceChildren();
        displayPreviousTasks();
    }
    
}