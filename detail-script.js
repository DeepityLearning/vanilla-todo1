function displayTodo(todo) {
    const titleHeader = document.getElementById('todo-title');
    titleHeader.innerHTML = todo.title;


    
}

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('todoId');

getTodo(id).then(result => displayTodo(result));