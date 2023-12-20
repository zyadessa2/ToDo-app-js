const inputTask = document.getElementById('inputTask');
const toDos = document.getElementById('toDos');

function addTask(){
    if(inputTask.value === ''){
        alert('you Must write something..')
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputTask.value;
        toDos.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputTask.value = ''
    savedata()
}

toDos.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('cheked');
        savedata()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()
    }

}, false)

function savedata(){
    localStorage.setItem("data" , toDos.innerHTML)
}

function showTask(){
    toDos.innerHTML = localStorage.getItem("data")
}
showTask()