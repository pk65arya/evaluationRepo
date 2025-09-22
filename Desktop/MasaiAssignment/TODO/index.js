const input = document.getElementById("input");
const add = document.getElementById("button");
const result=document.getElementById('result');
let db = [];

add.addEventListener("click",()=>{
  const task=input.value;
 if (task) {
    db.push(task);   
    render();               // store in array
    console.log("Task added:", task);
    console.log("Current DB:", db);
    input.value = "";               // clear input
  } else {
    console.log("Please enter a task.");
  }
});

function render(){
   result.innerHTML = ""
  db.forEach((ele, index) => {
    const div = document.createElement("div");
    div.className = "list";

    div.innerHTML = `
      <h3>${ele}</h3>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    `;

    // Delete handler
    div.querySelector(".delete").addEventListener("click", () => {
      db.splice(index, 1); // remove from array
      render(); // re-render
    });

    // Edit handler
    div.querySelector(".edit").addEventListener("click", () => {
      const newTask = prompt("Edit task:", ele);
      if (newTask) {
        db[index] = newTask;
        render();
      }
    });

  result.appendChild(div);
  }
  )}
