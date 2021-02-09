//Loader jQuery
$(window).on("load",function(){
  $(".overlay-loader").fadeOut("slow");
});

//SmoothScrollBasic
var navMenuAnchorTags = document.querySelectorAll('.horizontal-lists a');
var interval;
for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener('click', function(event) {
    event.preventDefault();
    var targetSectionID=this.textContent.trim().toLowerCase();
    var targetSection=document.getElementById(targetSectionID);

    interval=setInterval(scrollVertically,20,targetSection);
  });
}

function scrollVertically(targetSection){
  var targetSectionCoordinates=targetSection.getBoundingClientRect();
  if(targetSectionCoordinates.top<=50)
  {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0,75);
}


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

//

var progressBars=document.querySelectorAll(".skills-progress > div");
var visited=false;
function initialiseBar(bar)
{
  bar.setAttribute("data-visited",false);
  bar.style.width=0+'%';
}
for(var bar of progressBars)
{
  initialiseBar(bar);
}
function fillBar(bar){
  var currentWidth=0;
  var targetwidth=bar.getAttribute("data-bar-width");
  var interval=setInterval(function(){
    if(currentWidth>=targetwidth)
    {
      clearInterval(interval);
      return;
    }
    currentWidth++;
    bar.style.width=currentWidth+'%';
  },10);
}
function improvedScroll(){
  for(let bar of progressBars)
  {
    var barCoordinates=bar.getBoundingClientRect();
    if((bar.getAttribute("data-visited")=="false")&&(barCoordinates.top<=(window.innerHeight-barCoordinates.height)))
    {
      bar.setAttribute("data-visited",true);
      fillBar(bar);
    }
    else if(barCoordinates.top>window.innerHeight)
    {
      bar.setAttribute("data-visited",false);
      bar.initialiseBar(bar);
    }
  }
}

window.addEventListener("scroll",improvedScroll);
window.addEventListener("load",improvedScroll);
