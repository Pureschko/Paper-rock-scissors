// User move
const userMove = process.argv.slice(2);

//I get the first element of the userMove array
const user = userMove[0];

// Computer move
const options = ['rock', 'scissors', 'paper'];
const computer = options[Math.floor(Math.random() * 3)];

// Сonditions for winning
function play(player, computer) {
    if (player === computer) 
        {console.log("\u001b[34mIt's a draw!");
    } 
    else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) 
    {console.log("\u001b[32mYou win!");
    } 
    else {console.log("\u001b[33mYou lose!");
    } 
}

// If the option was entered incorrectly
if (!user || (user !== 'rock' && user !== 'paper' && user !== 'scissors')) {
    console.error("\u001b[31mPlease provide a valid move: rock, paper, or scissors");
   return;
}

// Result
const result = play(user, computer);
console.log(`Your choice: ${user}. Computer chose: ${computer}.`);
//console.log(result);