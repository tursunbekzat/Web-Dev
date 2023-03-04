let addMessage = document.querySelector("#main_div_input"),
    addButton = document.querySelector("#main_div_button"),
    toDo = document.querySelector(".toDo");

let toDoList = [];

if(localStorage.getItem('todo')){
    toDoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}
addButton.addEventListener('click', function (){
    if(!addMessage.value) return;
    let newToDo = {z
        todo: addMessage.value,
        checked: false,
        important: false
    };

    toDoList.push(newToDo)
    // console.log(toDoList)
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(toDoList));
    addMessage.value  = '';
});

function displayMessages(){
    let displayMessage = '';
    if(toDoList.length === 0) toDo.innerHTML = '';
    toDoList.forEach(function (item, i){
        // console.log(item);
        displayMessage += `
        <li>
        <input type="checkbox" id="item_${i}" ${item.checked ? 'checked' : ''}>
        <label for="item_${i}" class="${item.important ? 'important' : ''}">${item.todo}</label>
        </li>
        `;
        toDo.innerHTML = displayMessage;
        // console.log(displayMessage)

    });
}

toDo.addEventListener('change', function (event){
    let valueLabel = toDo.querySelector('[for='+event.target.getAttribute('id')+']').innerHTML;
    // console.log('forLabel: ', valueLabel);
    toDoList.forEach(function (item){
        if(item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(toDoList));
        }
    });
});

toDo.addEventListener('contextmenu', function (event){
    event.preventDefault();
    toDoList.forEach(function (item, i){
       if(item.todo === event.target.innerHTML){
           if(event.ctrlKey || event.metaKey){
               toDoList.splice(i, 1)
           }
           else{
               item.important = !item.important;
           }
           displayMessages();
           localStorage.setItem('todo', JSON.stringify(toDoList));
       }
    });
});

