
// function play(){
//     // step-1 : hide the home screen. to hide the screen add the class hidden to the home section
//    const homeSection = document.getElementById('home-screen');
//    homeSection.classList.add('hidden');
// //    console.log(homeSection.classlist);



//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

// function handleKeyboardButtonPress(){
//     console.log('button pressed');
// }
// // capture keyboard key press
// document.addEventListener('keyup', handleKeyboardButtonPress)

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('you got a point!');

        const currentScore = getTextElementValueById('current-score');
        
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // update score:
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // // 2. increase the score by 1
        // const newScore = currentScore + 1;
        // // 3.show the updated score
        // currentScoreElement.innerText= newScore;

        // start a new round
        
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('dhurr vaiya ba apu ..... right key press koro');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife -1;
        setTextElementValueById('current-life', updatedLife);



        // step-1 : get the current Life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step-2: reduce the life count
        // const newLife = currentLife - 1;

        // // step-3 :  display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    // step 1 : get a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('your random alphabet is', alphabet)
// set randomly generated alphabet to the screen (show it)
    const alphabetElement = document.getElementById('current-alphabet');
    alphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}