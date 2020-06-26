function buttonClickedv1(keuze){
  let computerkeuzeText = document.getElementById("computerkeuze");
  let resultaatText = document.getElementById("resultaat");

  let spelerskeuze = keuze;
  let computerkeuze = kies();
  computerkeuzeText.innerHTML = "Tegenstander: " + computerkeuze + " dus je hebt";

  if(spelerskeuze === computerkeuze){
    resultaatText.innerHTML = "GELIJKGESPEELD";
  }

  else if(spelerskeuze === "papier" && computerkeuze === "steen")
  { resultaatText.innerHTML = "GEWONNEN";}
  else if(spelerskeuze === "papier" && computerkeuze === "schaar")
  {resultaatText.innerHTML = "VERLOREN";}

  else if(spelerskeuze === "steen" && computerkeuze === "schaar")
  { resultaatText.innerHTML = "GEWONNEN";}
  else if(spelerskeuze === "steen" && computerkeuze === "papier")
  {resultaatText.innerHTML = "VERLOREN";}

  else if(spelerskeuze === "schaar" && computerkeuze === "steen")
  {resultaatText.innerHTML = "VERLOREN";}
  else if(spelerskeuze === "schaar" && computerkeuze === "papier")
  {resultaatText.innerHTML = "GEWONNEN";}
}

function kies(){
  let keuzes = ["steen", "papier", "schaar"];
  return keuzes = keuzes[Math.floor(Math.random() * keuzes.length)];
}

function buttonClickedv2(start){
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
}

function buttonClicked(keuzedobbel){
  let computerkeuzedobbelText = document.getElementById("computerkeuzedobbel");
  let resultaatdobbelText = document.getElementById("resultaatdobbel");
  let spelerskeuzedobbelText = document.getElementById("spelerskeuzedobbel");
  let spelerskeuzedobbel = kiesspeler();
  let computerkeuzedobbel = kiescomputer();
  computerkeuzedobbelText.innerHTML = "computer " + computerkeuzedobbel ;
  spelerskeuzedobbelText.innerHTML = "jij " + spelerskeuzedobbel  ;

  if(spelerskeuzedobbel === computerkeuzedobbel){
    resultaatdobbelText.innerHTML = "GELIJKGESPEELD";
  }

  else if(spelerskeuzedobbel > computerkeuzedobbel){ resultaatdobbelText.innerHTML = "GEWONNEN";}

  else if(spelerskeuzedobbel < computerkeuzedobbel){ resultaatdobbelText.innerHTML = "VERLOREN";}
}

function kiescomputer(){
  return Math.floor((Math.random() * 6) + 1);
}

function kiesspeler(){
  return Math.floor((Math.random() * 6) + 1);

}
