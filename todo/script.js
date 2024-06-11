let containerElement = document.getElementById("container");
let formElement = document.getElementById('form')
let inputElement = document.getElementById('title')

let todoList = [
  
];

function addTodo(id, title, isDone = false) {
  let todoItemElement = document.createElement("div");
  todoItemElement.classList.add(
    "border-md",
    "flex",
    "justify-between",
    "p-4",
    "rounded-md",
    "my-2",
    isDone ? 'bg-green-300' : 'bg-slate-300'
  );
  todoItemElement.textContent = title;

  // done button
  let doneElement = document.createElement("button");
  doneElement.classList.add(
    "bg-green-700",
    "text-white",
    "py-1",
    "px-4", 
    "rounded-md"
  );
  doneElement.textContent = isDone ? "Completed" : "Undone";

  doneElement.addEventListener('click',()=>{
    if(isDone){
        isDone = false
        todoItemElement.classList.remove("bg-green-300");
        doneElement.textContent = "Undone";

    }else{
        isDone= true
        todoItemElement.classList.remove("bg-slate-300");
        todoItemElement.classList.add('bg-green-300')
        doneElement.textContent= 'Completed'
    }
  })

  // remove button
  let deleteElement = document.createElement("button");
  deleteElement.classList.add(
    "bg-red-700",
    "text-white",
    "py-1",
    "px-4",
    "rounded-md"
  );
  deleteElement.textContent = "Delete";
  deleteElement.addEventListener('click',()=>{
    todoList = todoList.filter((todo)=>{
        return todo.id != id
    })
    containerElement.innerHTML=""
    displayTodo()
  })


  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add('space-x-3')

  buttonContainer.append(doneElement);
  buttonContainer.append(deleteElement);
  //   append to the parent
  todoItemElement.append(buttonContainer);

  return todoItemElement;
}

function displayTodo() {
  todoList.map((item) => {
    containerElement.append(addTodo(item.id, item.title, item.isDone));
  });
}

displayTodo();


formElement.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(inputElement.value.trim() !==""){
        let newTodo = {
          id: Math.floor(Math.random() * 1000),
          title: inputElement.value.trim(),
          isDone: false,
        };

        todoList.push(newTodo);
        containerElement.innerHTML = "";
        displayTodo();
        inputElement.value= ""
    }
})