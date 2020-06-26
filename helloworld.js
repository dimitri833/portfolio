function buttonClicked(keuze){
  let computerkeuzeText = document.getElementById("computerkeuze");
  let resultaatText = document.getElementById("resultaat");

  let spelerskeuze = keuze;
  let computerkeuze = kies();
  computerkeuzeText.innerHTML = "Tegenstander: " + computerkeuze + " dus je hebt";

  if(spelerskeuze == computerkeuze){
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
  var keuzes = ["steen", "papier", "schaar"];
  return keuzes = keuzes[Math.floor(Math.random() * keuzes.length)];
}
