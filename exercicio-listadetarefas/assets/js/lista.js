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
        saveTasks();
    }

    function cleanInput() {
        userInput.value = '';
        userInput.focus();
    }

    function saveTasks(){
        const allTodoList = todoList.querySelectorAll('li');
        const savedTodoList = [];

        for (let todo of allTodoList) {
            let tasksList = todo.innerText;
            tasksList = tasksList.replace('Apagar', '').trim();
            savedTodoList.push(tasksList);
        }

        const todosJson = JSON.stringify(savedTodoList);
        localStorage.setItem('todos', todosJson);// LocalStorage é do navegador, então pode ser utilizado em qualquer lugar do sistema.
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

    document.addEventListener('click', function(e){
        const element = e.target;

        if (element.classList.contains('erase')) {
            element.parentElement.remove();
            saveTasks();
        }
    });

    function addSavedTodos(){
        const todos = localStorage.getItem('todos');
        const todoList = JSON.parse(todos);
        
        for( let todo of todoList) {
            createTodo(todo);
        }
    }

    addSavedTodos();

}

app();
