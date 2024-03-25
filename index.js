#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enterfirst number", type: "number", name: "firstNumber" },
    { message: "Entersecond number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "multiplication", "division"],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select a valid operator");
}
