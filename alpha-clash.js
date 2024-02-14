
// function play(){
//     // step-1 : hide the home screen. to hide the screen add the class hidden to the home section
//    const homeSection = document.getElementById('home-screen');
//    homeSection.classList.add('hidden');
// //    console.log(homeSection.classlist);



//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

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