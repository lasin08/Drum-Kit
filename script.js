for(var i=0;i<document.querySelectorAll("button").length;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var letter =this.innerHTML;
    sound(letter);
animateButton(letter);  })
  }

document.addEventListener("keydown", function(event){
  sound(event.key);
  animateButton(event.key);
})

function sound(x){

  switch(x){
    case "w":
  var song = new Audio("sounds/tom-1.mp3");
    song.play();
    break;
    case "a":
    var my = new Audio("sounds/tom-2.mp3");
    song.play();
    break;
  case "s":
    var my = new Audio("sounds/tom-3.mp3");
    song.play();
    break;
  case "d":
    var my = new Audio("sounds/tom-4.mp3");
    song.play();
    break;
  case "j":
    var my = new Audio("sounds/crash.mp3");
    song.play();
    break;
  case "k":
    var my = new Audio("sounds/kick-bass.mp3");
    song.play();
    break;
  case "l":
    var my = new Audio("sounds/snare.mp3");
    song.play();
    break;
    default: console.log("got it");
  }
}
function animateButton(t){
var activeButton = document.querySelector("."+t);
activeButton.classList.add("pressed");
setTimeout(function(){
activeButton.classList.remove("pressed");

}, 250);
}
