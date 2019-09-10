document.addEventListener("DOMContentLoaded", loadEvents);
function loadEvents(){
  document.querySelector('form').addEventListener('click', submitTask);
  document.querySelector('ul').addEventListener('click', completeTask);
}

function submitTask(e){
  e.preventDefault();
  var input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}

function deleteTask(e){
  if(e.target.className === 'delete')
  deletingTask(e);
}

function completeTask(e){
  if(e.target.checked){
    strikeTask(e);
  }else {
    var task = e.target.nextSibling;
    if(task) {
      task.style.textDecoration = "none";
    }
  }
}


// add a task
function addTask(task){
  var ul = document.querySelector('ul');
  var li = document.createElement('li');
  li.innerHTML = `<input type="checkbox"><input type="text" value="${task}"><button class="delete">Delete</button>`;
  li.querySelector('button').addEventListener('click', deleteTask)
  ul.appendChild(li);
  document.querySelector('.taskList');
}

// delete a task
function deletingTask(e){
  var removeTask = e.target.parentNode;
  var parentNode = removeTask.parentNode;
  parentNode.removeChild(removeTask);
}

// strike through when checked box
function strikeTask(e){
  var task = e.target.nextSibling;
  task.style.textDecoration = "line-through";
}
