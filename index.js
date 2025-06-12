let currentDisplay='';
function btnClick(x){
    currentDisplay+=x;
    document.querySelector('#display').value = currentDisplay;
    playSound();
} 

function backspace() {
    currentDisplay = currentDisplay.slice(0, -1);
    document.querySelector('#display').value = currentDisplay;
    playSound();
}

function result(){

    try{
        currentDisplay = eval(currentDisplay);
    document.querySelector('#display').value = currentDisplay;
    }
    catch{document.querySelector('#display').value = "Error";}
    playSound();
    
}

function playSound(){
    const audio = new Audio('/btnClickAudio/btnclick.wav');
    audio.play();
}

