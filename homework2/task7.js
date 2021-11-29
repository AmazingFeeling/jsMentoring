let f = "action";
let task = {
    action: "Create",
    isDone: true,
    estHours: 16,
    getTask: function() {
        return true;
    }
};
console.log(task[f]); // accessing the value of property 'action' of object 'task' by it's name which is defined in variable 'f' with value 'action'
console.log(task.isDone); // accessing property 'isDone' value using dot notation
console.log(task["estHours"]); // accessing property 'estHours' value using square brackets notation
