const eksterneLinker = document.querySelectorAll("a[href^=http]");
for(let i = 0; i < eksterneLinker.length; i++){
  eksterneLinker[i].setAttribute("target", "_blank");
}

const varer = document.querySelector("#varer");
varer.style.fontSize = "35px";
varer.style.fontWeight = "bolder";
varer.style.marginBottom = "10px";


const tekstFelt = document.querySelector("#tekst-felt");
const knapp = document.querySelector(".button");
const liste = document.querySelector("ul");

function hentTekst() {
  const TEKST = tekstFelt.value;
  const newLi = document.createElement("li")
  liste.appendChild(newLi);
  newLi.innerHTML = TEKST;
}

knapp.addEventListener("click", hentTekst);
