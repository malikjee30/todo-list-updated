#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


let todoList: string [] = [];
let conditions = true;


//print welcome message
console.log(chalk.bold.rgb(222, 137, 237)(`\n \t \t<<<==============================>>>`));
console.log(chalk.bold.rgb(222, 137, 237)(`<<<=====>>> ${chalk.bold.hex('#9999FF')('Welcome to \'Ghulam Nasir\'- todo - List app')} <<<=====>>>`));
console.log(chalk.bold.rgb(222, 137, 237)(`\t\t <<<==============================>>>\n`));


    
let main = async () => {
while(conditions){
    let option = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "select an option you want to do:",
            choices: ["Add Task", "Delete Task", "update Task", "view todo-List", "Exit"]
        }
    ]);
    if(option.choice === "Add Task"){
       await addTask()
    }
    else if(option.choice === "Delete Task"){
        await DeleteTask()
    }
    else if(option.choice === "update Task"){
        await updateTask()
    }

    else if(option.choice === "view todo-List"){
        await viewTask()
    }
    else if(option.choice === "Exit"){
        conditions = false;
    }
  }
}
// function to add new task to the list
let addTask = async () => {
let newTask = await inquirer.prompt([
    {
        name: "task",
        type: "input",
        message: "Enter your new task :"
    }
])
todoList.push(newTask.task);
console.log(`\n ${newTask.task} task added successfully in Todo-List`);
    
}
// function to view all todo list task
let viewTask = ( ) => {
    console.log("\n your Todo-List : \n");
    todoList.forEach((task , index) => {
     console.log(`${index + 1}: ${task}`);
     
    })
}
//function to Delete a task from List,
let DeleteTask = async () => {
 await viewTask() 
 let taskIndex = await inquirer.prompt([
    {
        name: "index",
        type: "number",
        message: "Enter the 'index no' of the task you want to delete :",
    }
 ])
 let DeletedTask = todoList.splice(taskIndex.index - 1, 1);
 console.log(`\n ${DeletedTask} this task has been deleted successfully from your todo-List`);
   
}
// function to update a task
let updateTask = async () => {
    await viewTask()
    let update_Task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "now Enter new Task name",
        },
    ]);
    todoList[update_Task_index.index - 1] = update_Task_index.new_task
    console.log(`\n Task at index no. ${update_Task_index.index - 1} updated successfully [for updated list Check option "view Todo List"]`);
    
} 
main();