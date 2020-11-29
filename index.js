const readlineSync=require("readline-sync");
const chalk=require("chalk");

// track the user score
let score=0;
let wrongAnswered=0;

// top scorer
let topScorer=[
    {
        name: "Anand",
        socre: 10
    },
    {
        name: "Shishir",
        score: 9
    }
]


const qnaLevelOne=[
    {
        q: "What move did Jorge Masvidal use for the quickest knockout in UFC history?", option: ["Uppercut", "Flying knee", "Spinning elbow", "Head-kick"],
        a: "Flying knee"
    },
    {
        q: "What former WWE champion defeated Randy Couture to win the UFC heavyweight title? ",
        option: ["Ken Shamrock", "Bobby Lashley", "Brock Lesnar" ,"Alberto Del Rio"],
        a: "Brock Lesnar"
    },
    {
        q: "Who was the first UFC fighter to simultaneously hold title belts in two different weight divisions? ",
        option: ["Khabib Nurmagomedov", "Jon Jones", "Chris Weidman", "Conor McGregor"], a: "Conor McGregor"
    }        
]

const qnaLevelTwo=[
    {
        q: "Jones’s one official UFC loss came via what decision? ", 
        option: ["Disqualification", "Submission", "Split decision", "Knockout"], 
        a: "Disqualification"
    },
    {
        q: "Which of these fighters won both a UFC title :) and an Olympic gold medal? ", option: ["Jose Aldo", "Henry Cejudo", "Yoel Romero", "Daniel Cormier"],
        a: "Henry Cejudo"
    },
    {
        q: "During Ronda Rousey’s historic 12-fight win streak, who was the only fighter to get past round one? ", 
        option: ["Miesha Tate", "Cat Zingano", "Bethe Correia", "Alexis Davis"],
        a: "Miesha Tate"
    }
]

const qnaLevelThree=
    [
        {
            q: "Name the winner of season five of The Ultimate Fighter. ", 
            a: "Nate Diaz"
        },
        {
            q: "How many times has Georges St-Pierre successfully defended his UFC welterweight championship over the course of his career?(Answer in word) ", 
            a: "Six"
        },
        {
            q: "What year was Nick Diaz's UFC debut? ", 
            a: "2003"
        },
        {
            q: "Who was the first UFC champion ever? ", 
            a: "Royce Gracie"
        }
    ]

// ask the user's name :) and greet them
let name=readlineSync.question(chalk.cyanBright("Your name? "));

console.log(`${chalk.greenBright("Hi")} ${chalk.magentaBright(name)}! \n${chalk.greenBright("Welcome to UFC Quiz Game!")} \n`);

// print random response to avoid repeated response
const wrongAnswerFirstPart=
[
    "The correct answer is", 
    "No, the correct answer is",
    "Nope, the answer would be"
]
const wrongAnswerlastPart=
[
    ", but that was good risk taking on your part!", 
    ", but atleast you tried!", 
    ", but well tried!"
]

const correctAnswer=["Correct 😊!", "Right 😊!", "Yes, that is just what I wanted 😊"]

// function to ask the question :) and do things based on the response
function playWithOption(q, option, a){
    // print the question
    console.log(chalk.cyanBright(q));
    // ask the answer
    let index = readlineSync.keyInSelect(option, "Choose One by Just Pressing Relevant Key", {cancel: false});
    // do the required action based on the given answer
    let randomNum=Math.floor(Math.random()*3);
    if(a.toUpperCase()===option[index].toUpperCase()){
        score++;

        console.log(chalk.green(`${correctAnswer[randomNum]}, Your Current Score is: ${score} \n`));

        console.log(chalk.magenta.bold("\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584"+"\n"));
    } else{
        wrongAnswered++;

        console.log(chalk.redBright(`${wrongAnswerFirstPart[randomNum]} ${chalk.green(a)}${wrongAnswerlastPart[randomNum]} \n`));

        console.log(chalk.magenta.bold("\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584"+"\n"));
    }
}

function playWithoutOption(q, a){
    // get the anser after asking the question
    let answer=readlineSync.question(chalk.cyanBright(q));
    // do the required action based on the given answer
    let randomNum=Math.floor(Math.random()*3);
    if(answer.toUpperCase()===a.toUpperCase()){
        score++;

        console.log(chalk.green(`${correctAnswer[randomNum]}, your current score is: ${score} \n`));

        console.log(chalk.magenta.bold("\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584"+"\n"));
    }else{
        wrongAnswered++;

        console.log(chalk.redBright(`${wrongAnswerFirstPart[randomNum]} ${chalk.green(a)}${wrongAnswerlastPart[randomNum]} \n`));

        console.log(chalk.magenta.bold("\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584"+"\n"));
    }
}

// loop over the `qna` :) and run `play` for each of them
console.log(chalk.black.bgYellowBright(`Question Level One \n`));
for(item of qnaLevelOne){
    playWithOption(item.q, item.option, item.a);
}

console.log(chalk.black.bgYellowBright(`Question Level Two \n`));
for(item of qnaLevelTwo){
    playWithOption(item.q, item.option, item.a);
}

console.log(chalk.black.bgYellowBright(`Question Level Three \n`));
for(item of qnaLevelThree){
    playWithoutOption(item.q, item.a);
}

// pirnt the final score
console.log(chalk.blueBright(`Your Final Score is ${chalk.greenBright(score)} and Number of Icorrect Response(s) is ${chalk.redBright(wrongAnswered)}. \n`));

// if score is equal to 9 or more
if(score => 9){
    console.log(chalk.yellow.bold("YAY!, YOU MADE INTO LEADER BOARD, PLEASE SEND THE SCREESHOT OF YOUR SCORE TO MARKTWO@GMAIL.COM TO ADD YOU TO OUR LEDER BOARD"));
}