let bg = document.getElementById("oceanbg");
let fg = document.getElementById("oceanfg");
let rock = document.getElementById("oceanob");
let wavebg = document.getElementById("sky");
let wavefg = document.getElementById("wave");

//scroll magic for the earth
let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  triggerElement: '.earth'
})
.setClassToggle('.earth', 'scale')
.addTo(controller);

//scroll magic for the text that moves from left
let controller2 = new ScrollMagic.Controller();

let scene2 = new ScrollMagic.Scene({
  triggerElement: '.pollutiontext'
})
.setClassToggle('.pollutiontext', 'slidein')
.addTo(controller);

//scroll magic for the fish that moves to the right
let controller3 = new ScrollMagic.Controller();

let scene3 = new ScrollMagic.Scene({
  triggerElement: '.toxicfish'
})
.setClassToggle('.toxicfish', 'moveright')
.addTo(controller);

//magic scroll for the text that goes from 0% to 80% in width
let controller4 = new ScrollMagic.Controller();
let scene4 = new ScrollMagic.Scene({
  triggerElement: '.turtletext'
})
.setClassToggle('.turtletext', 'wide')
.addTo(controller);

//function for when mouse scrolls, then object moves.
let parallax1 = window.addEventListener('scroll', function(){
    var value = window.scrollY;
    //first image element
    bg.style.top = value * 0.3 + 'px';
    fg.style.top = value * 0.15 + 'px';
    rock.style.top = value * 0.1 + 'px';

    //second image element
    // wavefg.style.top = value * 0.1 + 'px';
})


//section image element
let parallax2 = window.addEventListener('scroll', function(){
  var value2 = window.scrollY;
  console.log("windowY2: " +value2)
  //if value2 which is the location of scroll is at the position where second image is, then start effect
  if (value2 >= 4500){
  //first image element
  wavebg.style.top= (value2 - 4500)  * 0.3 + 'px';
  wavefg.style.top = (value2 - 4500) * 0.15 + 'px';
  }
})
