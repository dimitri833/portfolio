


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}



$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){


        window.location.hash = hash;
      });
    }
  });
});

var i =0;
var images=[];
var time = 2000;
var timefade = 500;

images[0] ='welkom.png';
images[1] ='welkom2.png';
images[2] ='welkom2.png';


function changeImg(){
  document.welkom.src = images[i];

  if( i < images.length -1){

i++;



}
else{
i = 0;
}

setTimeout("changeImg()", time);

}


window.onload = changeImg;
