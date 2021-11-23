let f = "action";
let task = {
    action: "Create",
    isDone: true,
    estHours: 16,
    getTask: function() {
        return true;
    }
};
console.log(task[f]); // calls the value of variable 'action' in object 'task' by it's name which is defined in variable 'f' with value 'action'
console.log(task.isDone); // calls variable 'isDone'
console.log(task["estHours"]); // calls variable 'estHours'
