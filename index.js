#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\t\nWelcome to Code with Saad - Cli Number Guessing Game!\n");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuesNumber",
        type: "number",
        message: "plese guess a number btween 1-6: ",
    },
]);
if (answer.userGuesNumber === randomNumber) {
    console.log("Congtratulation! you guessed right number.");
}
else {
    console.log("Sorry! You guessed wrong answer");
}
