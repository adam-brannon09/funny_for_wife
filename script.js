
let loveNoteP = document.querySelector('#love-note');
let grenadePin = document.querySelector('#test-btn');
let grenadePinTwo = document.querySelector('#test-btn2');

function loveNote() {
    
    if (loveNoteP.style.display = "none") {
        loveNoteP.style.display = "block";
    }
}
grenadePin.addEventListener("click", loveNote)

function funny() {
    for (let i = 0; i < 1000; i++){
        document.write('<h1>Amber Brannon is the smartest, sexiest, hottest, best-cookin, best-lookin, most drop-dead gorgeous, intelligent, best mom, best friend, best wife, best every damn thing you could think of. Dont bother scrolling becaue this has been written 1000 times. Seriously though I love you babe. I hope this made you smile.</h1> ');
    }
    
}


grenadePinTwo.addEventListener("click", funny);


