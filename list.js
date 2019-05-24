
let newTask = document.getElementbyId("new-task");
let buttonPressed = document.getElementsByTagName("button")[0];

//UL unordered list
// li list item
let incompleteTaskHolder = document.getElementbyId("incomplete-tasks");
let completedTaskHolder = document.getElementbyId("completed-tasks")

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
}

let editTask = function() {
	console.log("editting Task...");
}

let deleteTask = function() {
	console.log("deleting Task...");
}

let taskCompleted = function() {
	console.log("Completing Task...");
}

