$(document).ready(function() {

    //array containing objects with question, options and answer
    var game = [{
        question: "What is the Soup Nazi's favorite expression?",
        options: ["For you, nothing!", "No soup for you!", "Die!", "Get Out!"],
        answer: "No soup for you!"
    }, {
        question: "During its nine-year run, how many episodes were there?",
        options: ["95", "200", "165", "180"],
        answer: "180"
    }, {
        question: "Which of the four main characters was not in the original pilot episode?",
        options: ["Kramer", "George", "Jerry", "Elaine"],
        answer: "Elaine"
    }, {
        question: "What's Elaine's catchphrase?",
        options: ["Giddyup!", "Oh, the humanity!", "Get out!", "It's not you, it's me"],
        answer: "Get out!"
    }, {
        question: "What is Kramer's first name?",
        options: ["Kenny", "Karl", "Cosmo", "Constantine"],
        answer: "Cosmo"
    }, {
        question: "What does Kramer accuse Calvin Klein of stealing from him?",
        options: ["His shoes", "His credit card", "A cologne he invented", "An underwear style"],
        answer: "A cologne he invented"
    }, {
        question: "What religion did George convert to for Sasha?",
        options: ["Catholicism", "Islam", "Judaism", "Latvian Orthodox"],
        answer: "Latvian Orthodox"
    }, {
        question: "What does Kramer have installed in his shower ?",
        options: ["A television", "A radio", "A garbage disposal", "A toilet"],
        answer: "A garbage disposal"
    }, {
        question: "Who got caught urinating in a corner of the parking garage?",
        options: ["Jerry and George", "Jerry and Elaine", "Elaine", "Kramer and George"],
        answer: "Jerry and George"
    }, {
        question: "What's Jerry's real name?",
        options: ["Joshua", "Jerome", "Gerald", "Jerard"],
        answer: "Jerome"
    }, {
        question: "What kind of pasta does Kramer make a Jerry figurine from ?",
        options: ["Penne", "Fusilli", "Tortellini", "Angel Hair"],
        answer: "Fusilli"
    }, {
        question: "In 'The Bubble Boy' what game do George and 'The Bubble Boy' fight about",
        options: ["Monopoly", "Uno", "Trivial Pursuit", "Go Fish"],
        answer: "Trivial Pursuit"
    }, {
        question: "If George were a porn star what did he say his name would be?",
        options: ["Buck Naked", "Ron Jeremy", "Hugh Johnson", "Peter Dong"],
        answer: "Buck Naked"
    }];

    // audio clips for the themes music and sound clips
    var seinfeldAssman = document.createElement("audio");
    seinfeldAssman.setAttribute("src", "assets/audio/Seinfeld_Assman 1.mp3");
    var seinfeldTheBro = document.createElement("audio");
    seinfeldTheBro.setAttribute("src", "assets/audio/Seinfeld_The-Bro 1.mp3");
    var seinfeldHumanFund = document.createElement("audio");
    seinfeldHumanFund.setAttribute("src", "assets/audio/Seinfeld_The-Human-Fund 1.mp3");
    var seinfeldVandelay = document.createElement("audio");
    seinfeldVandelay.setAttribute("src", "assets/audio/Seinfeld_Vandelay-Industries 1.mp3");
    // array index counter
    var questionArrayIndex = 0;
    // default value for question countdown
    var counterDefault = 24;
    // variable used to clear the countdown
    var questionInterval;
    // answer is equal to users button click input
    var userAnswer;
    // variable hold users correct responses
    var correctAnswer = 0;
    // variable hold users incorrectAnswer responses
    var incorrectAnswer = 0;
    // variable hold users unanswered responses
    var unanswered = 0;

    // function executes the next question
    function nextQuestionObject() {
        $("#timerCountdown").html(counterDefault);
        // populate  html elements with the corresponding information
        $("#question").html(game[questionArrayIndex].question);
        $("#optionOne").html(game[questionArrayIndex].options[0]);
        $("#optionTwo").html(game[questionArrayIndex].options[1]);
        $("#optionThree").html(game[questionArrayIndex].options[2]);
        $("#optionFour").html(game[questionArrayIndex].options[3]);
        // begins question countdown
        countdown();
    };

    function incrementIndex() {
        // questionArrayIndex increments for the upcoming question
        questionArrayIndex++;
        // countdown is reset to default value
        counterDefault = 24;
        // next question is shown
        nextQuestionObject();
    };

    // countdown decrements by 1 second. setInterval is used so that the function runs continuously
    function countdown() {
        questionInterval = setInterval(decrement, 1000);
    };

    // decrement function visually shows the number counting down
    function decrement() {
        counterDefault--;
        $("#timerCountdown").html(counterDefault);
        //if timer runs out
        if (counterDefault === 0) {
            // stops setInterval from running
            clearInterval(questionInterval);
            // shows time up and the correct answer
            $("#timerCountdown").html("Time's up! It's " + "'" + game[questionArrayIndex].answer + "'");
            // unaswered questions increments
            unanswered++;
            // if the timer runs out and it's the last question go to the results screen
            if (questionArrayIndex === game.length - 1) {
                // sets a timer before the final results are shown
                resultBeforeGameOver();
                // if timer went to zero but there are still questions remaining go to the next question
            } else {
                timeoutIncrement();
            }
        }
    };

    // function sets final count for correct, incorrect and unaswered questions. Includes a restart button
    function finalResults() {
        $("#question").html("");
        $("#optionOne").html("Game Over");
        $("#optionTwo").html("Correct: " + correctAnswer);
        $("#optionThree").html("Incorrect: " + incorrectAnswer);
        $("#optionFour").html("Unanswered: " + unanswered);
        $("#timerCountdown").html("Restart");
    };

    // function resets the values in case user selects restart
    function resetValues() {
        questionArrayIndex = 0;
        userAnswer;
        counterDefault = 24;
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
    };
    // sets a timeout to view the answer before showing the next question
    function timeoutIncrement() {
        setTimeout(function() {
            incrementIndex();
        }, 2000);
    };

    // the timeout lets the question result appear first before running these functions
    function resultBeforeGameOver() {
        setTimeout(function() {
            finalResults();
            resetValues();
        }, 2000);
    };

    // variable for game audio
    var themeSong = document.createElement("audio");
    themeSong.setAttribute("src", "assets/audio/Seinfeld-Theme.mp3");
    // function to loop audio
    themeSong.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    // when the game ends if the user selects restart then start the game over again
    $("#timerCountdown").on("click", function() {
        if ($(this).text() === "Restart") {
            resetValues();
            nextQuestionObject();
        } else if ($(this).text() === "Start Game") {
            // play themeSong at game start
            themeSong.play();
            //call the function on page load to have it populate the page h
            resetValues();
            nextQuestionObject();
        }
    });

    // when user clicks choice
    $("h3").on("click", function() {
        // if statements for advancing game based on user click for correct and incorrect answer to questions
        var ifOne = $(this).text() === game[questionArrayIndex].answer && $("#timerCountdown").text() != "Start Game" && $("#timerCountdown").text() != "Correct!" && $("#timerCountdown").text() != "Nope! It's " + "'" + game[questionArrayIndex].answer + "'";
        var ifTwo = $(this).text() != game[questionArrayIndex].answer && $("#timerCountdown").text() != "Start Game" && $("#timerCountdown").text() != "Correct!" && $("#timerCountdown").text() != "Nope! It's " + "'" + game[questionArrayIndex].answer + "'";
        // if statements for the blue buttons
        if ($(this).text() === '"Assman"') {
            seinfeldAssman.play();
        } else if ($(this).text() === '"The Human Fund"') {
            seinfeldHumanFund.play();
        } else if ($(this).text() === '"Vandelay Industries"') {
            seinfeldVandelay.play();
        } else if ($(this).text() === '"Manssiere/Bro"') {
            seinfeldTheBro.play();
            // if user button click equals to the current object's answer then do this
        } else if (ifOne) {
            clearInterval(questionInterval);
            $("#timerCountdown").html("Correct!");
            correctAnswer++;

            // after 3 seconds the next question runs
            if (questionArrayIndex != game.length - 1) {
                timeoutIncrement();
            } else if (questionArrayIndex === game.length - 1) {
                resultBeforeGameOver();
            }
            // if user button click doesn't equals the current object's answer then do this
        } else if (ifTwo) {

            clearInterval(questionInterval);
            $("#timerCountdown").html("Nope! It's " + "'" + game[questionArrayIndex].answer + "'");
            incorrectAnswer++;

            // after 3 seconds the next question runs
            if (questionArrayIndex != game.length - 1) {
                timeoutIncrement();
            } else {
                resultBeforeGameOver();
            }
        }
    });
});
