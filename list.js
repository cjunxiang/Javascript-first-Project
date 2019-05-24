let newTask = document.getElementById("new-task");  
let buttonPressed = document.getElementsByTagName("button")[0];  

//UL unordered list
//li list item
let incompleteTasks = document.getElementById("incomplete-tasks");
let completedTasks = document.getElementById("completed-tasks")

//new list constructor (creates a new list)
/* new task under todo should have: 
[checkbox]||name||edit||delete */
let createNewTask = function(taskString) {
	let newListItem = document.createElement("li");

	let checkBox = document.createElement("input");
		checkBox.type = "checkbox";
	let label = document.createElement("label");
		label.innerText = taskString;
	let editInput = document.createElement("input"); 
		editInput.type = "text";
    let editButton = document.createElement("button"); 
    	editButton.innerText = "Edit"; //aesthetics
    	editButton.className = "edit";
    let deleteButton = document.createElement("button");
    	deleteButton.innerText = "Delete";
    	deleteButton.className =  "delete";

    newListItem.appendChild(checkBox); 
    newListItem.appendChild(label); 
    newListItem.appendChild(editInput); 
    newListItem.appendChild(editButton); 
    newListItem.appendChild(deleteButton); 

    return newListItem;
}

let addTask = function() {
	console.log("adding Task...");
	let currentItem = createNewTask(newTask.value);

	if (newTask.value == "") {
		return;
	}

	incompleteTasks.appendChild(currentItem);
	bindTaskEvents(currentItem, taskCompleted);
	//reset
	newTask.value = "";
}

let editTask = function() {
	console.log("editting Task...");

	let currentItem = this.parentNode;

	let editInput = currentItem.querySelector("input[type=text]");
	let label = currentItem.querySelector("label");
	let edittingClass = currentItem.classList.contains("editMode");

	if (edittingClass) {
		label.innerText = editInput.value;
	} else {
		editInput.value = label.innerText;
	}
	currentItem.classlsit.toggle("editMode");
}

let deleteTask = function() {
	console.log("deleting Task...");
	let currentItem = this.parentNode;
	let ul = currentItem.parentNode;

	ul.removeChild(currentItem);
	//incompleteTasks.removeChild(task)
}

let taskCompleted = function() {
	console.log("Completing Task...");
	let currentItem = this.parentNode;
	completedTasks.appendChild(currentItem);
	bindTaskEvents(currentItem, taskIncomplete);
}

let taskIncomplete = function() {
	console.log("Incomplete Tasks...");
	let currentItem = this.parentNode;
	incompleteTasks.appendChild(currentItem);
	bindTaskEvents(currentItem, taskCompleted);
}

buttonPressed.onclick = addTask;
//The addEventListener() method attaches an event handler to the specified element.
buttonPressed.addEventListener("click", addTask);

//makes the buttons work(?)
let bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log("binds list item events");

	let checkBox = taskListItem.querySelector("input[type=checkbox]");
	let editButton = taskListItem.querySelector("button.edit");
	let deleteButton = taskListItem.querySelector("button.delete");

	editButton.onclick = editTask;
	deleteButton.onclick = deleteTask;
	//checks if checkbox is checked, handles the event
	checkBox.onchange = checkBoxEventHandler;
}

for (let i = 0; i < incompleteTasks.children.length; i++) { 
    bindTaskEvents(incompleteTasks.children[i], taskCompleted); 
} 
   
for (let i = 0; i < completedTasks.children.length; i++) { 
    bindTaskEvents(completedTasks.children[i], taskIncomplete); 
} 