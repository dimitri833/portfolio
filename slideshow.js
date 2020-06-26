var i =0;
var images=[];
var time = 2000;
var timefade = 500;

images[0] ='thumbnail.jpg';
images[1] ='rooiecamaro.jpg';
images[2] ='wit.png';

function changeImg(){
  document.welkom.src = images[i];

  document.getElementById('links').onclick = function() {
  i--;
  }

  if( i < images.length -1){
i++;
}
else{
i = 0;
}

setTimeout("changeImg()", time);

}


window.onload = changeImg;
