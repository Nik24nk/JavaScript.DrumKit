
//ACtivate when button on screen got pressed

var ButtonAll = document.querySelectorAll("button");
for (i = 0; i < ButtonAll.length; i++) {
    ButtonAll[i].addEventListener("click", function () {

        var buttonPress = this.innerHTML;
        makeSound(buttonPress);
        buttonAnimation(buttonPress)
    });
}

// //ACtivate when button on keyboard got pressed

document.addEventListener("keydown",function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
})


function makeSound(key){

    switch (key) {

        case "w": var sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
             
            break;
        case "a": var sound = new Audio("./sounds/tom-2.mp3");
            sound.play();
            break;
        case "s": var sound = new Audio("./sounds/tom-3.mp3");
            sound.play();
            break;
        case "d": var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case "j": var sound = new Audio("./sounds/crash.mp3");
            sound.play();
            break;
        case "k": var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case "l": var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
    }


}
// Button animation code

function buttonAnimation(Current_button){

    var active_button=document.querySelector("."+Current_button);
    active_button.classList.add("pressed");

    setTimeout(() => {
        active_button.classList.remove("pressed");
    }, 100);

}
