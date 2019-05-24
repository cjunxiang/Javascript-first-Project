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
	let nameHolder = document.createElement("nameHolder");
		nameHolder.innerText = taskString;
	let editInput = document.createElement("input"); 
		editInput.type = "text";
    let editButton = document.createElement("button"); 
    	editButton.innerText = "Edit"; //aesthetics
    	editButton.className = "edit";
    let deleteButton = document.createElement("button");
    	deleteButton.innerText = "Delete";
    	deleteButton.className =  "delete";

    newlistItem.appendChild(checkBox).appendChild(nameHolder)
    .appendChild(editInput).appendChild(editButton).append(deleteButton);

    return newlistItem;
}

let addTask = function() {
	console.log("adding Task...");
	let currentItem = createNewTaskElement(newTask.value);

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

	let editInput = listItem.querySelector("input[type=text]");
	let nameHolder = listItem.querySelector("nameholder");
	let edittingClass = listItem.classList.contains("editMode");

	if (edittingClass) {
		nameholder.innerText = editInput.value;
	} else {
		editInput.value = nameHolder.innerText;
	}
	listItem.classlsit.toggle("editMode");
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

for (let listitem of incompleteTasks) {
	bindTaskEvents(listitem, taskCompleted);
}
for (let listitem of completedTasks) {
	bindTaskEvents(listitem, taskIncomplete);
}