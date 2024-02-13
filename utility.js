function hideElementById(elementId){
    const homeSection = document.getElementById(elementId)
    homeSection.classList.add('hidden');
}

function showElementById(elementId){
    const playgroundSection = document.getElementById(elementId);
    playgroundSection.classList.remove('hidden');
}