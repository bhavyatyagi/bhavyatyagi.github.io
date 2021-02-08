//Loader jQuery
$(window).on("load",function(){
  $(".overlay-loader").fadeOut("slow");
});
//SmoothScrollBasic
var navMenuAnchorTags = document.querySelectorAll('.horizontal-lists a');

for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener('click', function(event) {
    event.preventDefault();
    var targetSectionID=this.textContent.trim().toLowerCase();
    var targetSection=document.getElementById(targetSectionID);

    var interval=setInterval(function(){
      var targetSectionCoordinates=targetSection.getBoundingClientRect();
      if(targetSectionCoordinates.top<=0)
      {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0,75);
    },20);
  });
}
