//Loader jQuery
$(document).ready(function () {
  $(".overlay-loader").fadeOut("slow");
});

//SmoothScrollBasic
// var navMenuAnchorTags = document.querySelectorAll('.horizontal-lists a');
// var interval;
// for (var i = 0; i < navMenuAnchorTags.length; i++) {
//   navMenuAnchorTags[i].addEventListener('click', function(event) {
//     event.preventDefault();
//     var targetSectionID=this.textContent.trim().toLowerCase();
//     var targetSection=document.getElementById(targetSectionID);
//
//     interval=setInterval(scrollVertically,20,targetSection);
//   });
// }
//
// function scrollVertically(targetSection){
//   var targetSectionCoordinates=targetSection.getBoundingClientRect();
//   if(targetSectionCoordinates.top<=50)
//   {
//     clearInterval(interval);
//     return;
//   }
//   window.scrollBy(0,75);
// }


//Skill Section Animation Bars
//
// var progressBars=document.querySelectorAll('.skills-progress > div');
// var skillsContainer=document.getElementById('skills-container');
// window.addEventListener('scroll',checkScroll);
// var animationDone=false;
//
// function initialiseBars(){
//   for(let bar of progressBars)
//   {
//     bar.style.width=0+'%';
//   }
// }
// initialiseBars();
// function fillBars(){
//
//   for(let bar of progressBars)
//   {
//     let targetwidth=bar.getAttribute('data-bar-width');
//     let currentWidth=0;
//     let interval= setInterval(function(){
//       if(currentWidth>targetwidth){
//       clearInterval(interval);
//       return;
//     }
//     currentWidth++;
//     bar.style.width=currentWidth+'%';
//   },10);
//   }
// }
// function checkScroll(){
//   var coordinates=skillsContainer.getBoundingClientRect();
//   if(coordinates.top<window.innerHeight && !animationDone)
//   {
//     console.log('skills visible');
//     animationDone=true;
//     fillBars();
//   }
//   else if(coordinates.top>window.innerHeight)
//   {
//     animationDone=false;
//     initialiseBars();
//   }
// }

//Skill Section Animation Bars IMPROVED

var progressBars = document.querySelectorAll(".skills-progress > div");

var visited = false;
function initialiseBar(bar) {
  bar.setAttribute("data-visited", false);
  bar.style.width = 0 + '%';
}
for (var bar of progressBars) {
  initialiseBar(bar);
}
function fillBar(bar) {
  var currentWidth = 0;
  var targetwidth = bar.getAttribute("data-bar-width");
  var interval = setInterval(function () {
    if (currentWidth >= targetwidth) {
      clearInterval(interval);
      return;
    }
    currentWidth++;
    bar.style.width = currentWidth + '%';
  }, 10);
}
function improvedScroll() {
  for (let bar of progressBars) {
    var barCoordinates = bar.getBoundingClientRect();
    if ((bar.getAttribute("data-visited") == "false") && (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
      bar.setAttribute("data-visited", true);
      fillBar(bar);
    }
    else if (barCoordinates.top > window.innerHeight) {
      bar.setAttribute("data-visited", false);
      initialiseBar(bar);
    }
  }
}

window.addEventListener("scroll", improvedScroll);
window.addEventListener("load", improvedScroll);



//Contact-Form Submission Alert
$(".contact-form button").click(function (event) {
  if ($("#required_stuff").val() === "" || $("#required_name").val() === "")
    alert("Please fill the required details properly!");
  else
    alert("Thank you for your time. Mr. Tyagi will get back to you soon!");
});


// Site Progress bar
var filler = document.getElementById('filler');
function getDocHeight() {
  var d = document;
  return Math.max(d.body.offsetHeight, d.body.scrollHeight, d.body.clientHeight);
}
var docHeight = getDocHeight();
var windowHeight = window.innerHeight;
window.addEventListener('resize', function () {
  docHeight = getDocHeight();
  windowHeight = window.innerHeight;
});
window.addEventListener('scroll', function () {
  docHeight = getDocHeight();
  var scrolled = Math.floor((window.scrollY / (docHeight - windowHeight)) * 100);
  filler.style.width = scrolled + "%";
});

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const appearOptions = { threshold: 0, rootMargin: "0px 0px -330px 0px" };
const appearOnScroll = new IntersectionObserver(
  function (enteries, appearOnScroll) {
    enteries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});