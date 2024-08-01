function app(){
    const userInput = document.querySelector('#todo-input');
    const btnTodo = document.querySelector('.btn-todo');
    const todoList = document.querySelector('.todo-list');

    function createList() {
        const li = document.createElement('li');
        return li;
    }

    function createEraseBtn(li){
        li.innerHTML += ' ';
        const eraseBtn = document.createElement('button');
        eraseBtn.innerText = 'Apagar';
        eraseBtn.setAttribute('class', 'erase');
        li.appendChild(eraseBtn);
    }
    
    function createTodo(txtInput){
        const li = createList();
        li.innerHTML = txtInput;
        todoList.appendChild(li);
        cleanInput();
        createEraseBtn(li);
    }

    function cleanInput() {
        userInput.value = '';
        userInput.focus();
    }

    userInput.addEventListener('keypress', function(e){
        if (e.keyCode === 13) {
            if (!userInput.value) return; //if com uma linha só não preciso de chaves.
            createTodo(userInput.value);
        }
    });

    btnTodo.addEventListener('click', function(){
        if (!userInput.value) return; //if com uma linha só não preciso de chaves.
        createTodo(userInput.value);
    });

}

app();
