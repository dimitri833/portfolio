function buttonClicked(keuze){
  let computerkeuzeText = document.getElementById("computerkeuze");
  let resultaatText = document.getElementById("resultaat");
  let spelerskeuzeText = document.getElementById("spelerskeuze");

  let spelerskeuze = kiesspeler();
  let computerkeuze = kiescomputer();
  computerkeuzeText.innerHTML = "computer " + computerkeuze ;
  spelerskeuzeText.innerHTML = "jij " + spelerskeuze  ;

  if(spelerskeuze === computerkeuze){
    resultaatText.innerHTML = "GELIJKGESPEELD";
  }

  else if(spelerskeuze > computerkeuze){ resultaatText.innerHTML = "GEWONNEN";}

  else if(spelerskeuze < computerkeuze){ resultaatText.innerHTML = "VERLOREN";}
}

function kiescomputer(){
  return Math.floor((Math.random() * 6) + 1);
}

function kiesspeler(){
  return Math.floor((Math.random() * 6) + 1);

}
