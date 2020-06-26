window.onload = function(){
  let klopthetText = document.getElementById("klopthet");
  let vraagText = document.getElementById("vraag");
  let conclusieText = document.getElementById("conclusie");
  let knop = document.getElementById("button1").onclick;
  let clicks = 0;
  let randomtimer = randomIntFromInterval();
  document.getElementById("button1").onclick = function() {
    clicks +=1;
    document.getElementById("vraag").innerHTML = clicks;
    if(klopthetText.innerHTML === "tijd is om"){
      vraagText.innerHTML = clicks-clicks;
      conclusieText.innerHTML = "doorgeklikt";
    }
  }
  function randomIntFromInterval() {
    return Math.floor(Math.random() * (19000 - 5000 + 1) + 5000);
  }
  function tijdom() {
    klopthetText.innerHTML="tijd is om";
  }
  setTimeout(tijdom, randomtimer);
};
