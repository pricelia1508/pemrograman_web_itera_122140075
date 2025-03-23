document.addEventListener("DOMContentLoaded", loadTodos);

function addTodo() {
    const input = document.getElementById("todoInput");
    const todoText = input.value.trim();

    if (todoText === "") {
        alert("Item tidak boleh kosong!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = todoText;
    li.addEventListener("click", toggleComplete);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.onclick = function() {
        li.remove();
        saveTodos();
    };

    li.appendChild(deleteBtn);
    document.getElementById("todoList").appendChild(li);

    input.value = "";
    saveTodos();
}

function toggleComplete(event) {
    event.target.classList.toggle("completed");
    saveTodos();
}

function saveTodos() {
    const todos = [];
    document.querySelectorAll("#todoList li").forEach(li => {
        todos.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const todoList = document.getElementById("todoList");

    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        if (todo.completed) {
            li.classList.add("completed");
        }
        li.addEventListener("click", toggleComplete);
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Hapus";
        deleteBtn.onclick = function() {
            li.remove();
            saveTodos();
        };

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}
