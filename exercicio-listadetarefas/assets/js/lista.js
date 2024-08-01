function app(){
    const userInput = document.querySelector('#todo-input');
    const btnTodo = document.querySelector('.btn-todo');
    const todoList = document.querySelector('.todo-list');

    function createList() {
        const li = document.createElement('li');
        return li;
    }
    
    function createTodo(txtInput){
        const li = createList();
        li.innerHTML = txtInput;
        todoList.appendChild(li);
    }

    btnTodo.addEventListener('click', function(){
        if (!userInput.value) return; //if com uma linha só não preciso de chaves.
        createTodo(userInput.value);
    });

}

app();
