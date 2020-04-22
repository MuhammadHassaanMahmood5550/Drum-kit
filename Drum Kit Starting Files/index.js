//
// document.querySelector("button").addEventListener("click" , firstbutton);   // --normal way doing
// function firstbutton(){
//   alert("i got clicked");
// }

document.querySelector(".refresh").addEventListener("click" , function(){
document.location.reload(true);
});

//$("#demo").load(location.href + " #demo");




// ----  ------determine which button is clicked---
for(var i=0; i<document.querySelectorAll(".drum").length; i++){      // good practice

document.querySelectorAll("button")[i].addEventListener("click" , function(){

    var whichButton=this.innerHTML;
    // switch (whichButton) {
    //   case "w":
    //   this.style.color = "blue";
    //
    //     break;
    //   case "a":
    //    this.style.color = "blue";
    //
    //     break;
    //   case "s":
    //   this.style.color = "blue";
    //
    //      break;
    //   case "d":
    //  this.style.color = "blue";
    //
    //      break;
    //  case "j":
    //  this.style.color = "blue";
    //
    //      break;
    //  case "k":
    //  this.style.color = "blue";
    //
    //      break;
    //  case "l":
    //   this.style.color = "blue";
    //
    //      break;
    //
    //   default: alert("Error");
    // }

    performAction(whichButton);
    usingCustomCss(whichButton);

});

}

// -------------determine which keyboard key is pressed---
document.addEventListener("keydown" , function(event){

  var whichKey =event.key;
  performAction(whichKey);
  usingCustomCss(whichKey);

});

function performAction(key){

  switch (key) {
    case "w":
    //this.style.color = "blue";
    document.querySelector(".w").style.color = "blue";
       var audio1=new Audio("sounds/crash.mp3");
       audio1.play();
      break;
    case "a":
    // this.style.color = "blue";
    document.querySelector(".a").style.color = "blue";
      var audio2=new Audio("sounds/kick-bass.mp3");
      audio2.play();
      break;
    case "s":
    //this.style.color = "blue";
    document.querySelector(".s").style.color = "blue";
       var audio3=new Audio("sounds/snare.mp3");
       audio3.play();
       break;
    case "d":
  //  this.style.color = "blue";
  document.querySelector(".d").style.color = "blue";
       var audio4=new Audio("sounds/tom-1.mp3");
       audio4.play();
       break;
   case "j":
  // this.style.color = "blue";
  document.querySelector(".j").style.color = "blue";
       var audio5=new Audio("sounds/tom-2.mp3");
       audio5.play();
       break;
   case "k":
  // this.style.color = "blue";
  document.querySelector(".k").style.color = "blue";
       var audio6=new Audio("sounds/tom-3.mp3");
       audio6.play();
       break;
   case "l":
   // this.style.color = "blue";
   document.querySelector(".l").style.color = "blue";
      var audio7=new Audio("sounds/tom-4.mp3");
      audio7.play();
       break;

    default: console.log("Error")
  }

}

function usingCustomCss(ans){

       document.querySelector("." + ans).classList.add("pressed");

   setTimeout(function(){
     document.querySelector("." + ans).classList.remove("pressed");
   } , 100);

}

// console.log(this);
// this.style.color = "blue";
//
// var audio= new Audio("sounds/crash.mp3");
// audio.play();
