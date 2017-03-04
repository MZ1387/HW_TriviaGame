# HW_TriviaGame
In this assignment, I created a Trivia game using JavaScript for the logic and jQuery to manipulate HTML.

## Live Link (GitHub Pages)
- https://mz1387.github.io/HW_TriviaGame/


## Requirements

1. Create a trivia game that shows only one question until the player answers it or their time runs out.
2. If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.
3. The scenario is similar for wrong answers and time-outs.
4. If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
5. If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
6. On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

## Concepts Implemented

- Dynamically updated HTML powered by jQuery code
- Manipulated HTML elements based on user input
- Object Oriented Programming
- Execute commands based on pre-defined intervals

## Code Explanation
- When the user starts game a timer begins to countdown.
- User has a set time to answer each question
- If user answers correctly the game acknowledges that before moving on to the next question
- If user answers incorrectly the game acknowledges that and provides the correct answer before moving on to the next question
- If user doesn't answer before time runs out the game acknowledges that and provides the correct answer before moving on to the next question
- After all the questions have appeared the game shows the final results based on what the user selected for each question
