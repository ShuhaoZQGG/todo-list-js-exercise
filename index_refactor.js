const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function(){
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    completeTask: function() {
      this.complete = true;
    }
  };

  return task;
}

// DRIVER CODE BELOW
// prints out the provided task's details


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed

console.log(tasks);