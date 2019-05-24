
let newTask = document.getElementbyId("new-task");
let buttonPressed = document.getElementsByTagName("button")[0];

//UL unordered list
//li list item
let incompleteTasks = document.getElementbyId("incomplete-tasks");
let completedTasks = document.getElementbyId("completed-tasks")

//new list constructor (creates a new list)
let createNewTask = function(taskString) {
	/* new task under todo should have: 
	[checkbox]||name||edit||delete */
	let newListItem = document.createElement("li");

	let checkBox = document.createElement("input");
		checkBox.type = "checkbox";
	let nameHolder = document.createElement("label");
		nameHolder.innerText = taskString;
	let editInput = document.createElement("input"); 
		editInput.type = "text";
    let editButton = document.createElement("button"); 
    	editButton.innerText = "Edit";
    	editButton.className = "Edit";
    let deleteButton = document.createElement("button");
    	deleteButton.innerText = "Delete";
    	deleteButton.className =  "delete";

    listItem.appendChild(checkBox).appendChild(nameHolder)
    .appendchild(editInput).appendChild(editButton).append(deleteButton);

    return listItem;
}

let addTask = function() {
	console.log("adding Task...");

	let newTask = createNewTaskElement(taskInput.value);
	if (newTask.value == undefined) {
		return;
	}

	incompleteTasks.appendChild(newTask);
	bindTaskEvents(newTask, taskCompleted);
	//reset
	taskInput.value = "";
}

let editTask = function() {
	console.log("editting Task...");
}

let deleteTask = function() {
	console.log("deleting Task...");
	//incompleteTasks.removeChild(task)
}

let taskCompleted = function() {
	console.log("Completing Task...");
	//just strike it off
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
	deleteButton.onclick = deleteTask;\
	//checks if checkbox is checked, handles the event
	checkBox.onchange = checkBoxEventHandler;
}