/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)








// Link 1 Knop draggen naar droparea (Dragstart & dragend)
const dragLink = document.querySelector('a:nth-of-type(1)');
const dropArea = document.querySelector('.drop-area');

dragLink.addEventListener('dragstart', () => {
  dragLink.classList.add('dragging');
});

dragLink.addEventListener('dragend', () => {
  dragLink.classList.remove('dragging');
});

dropArea.addEventListener('dragover', (e) => {
  e.preventDefault(); // Toestaan dat je iets kunt slepen
});

dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  const dragging = document.querySelector('.dragging');
  dropArea.appendChild(dragging); // Verplaats het gesleepte element naar de drop area
});

// Link 2 Hover shake (Mouseover)
let shakeLink = document.querySelector('a:nth-of-type(2)')

shakeLink.addEventListener('mouseover', shakeAnimation)

function shakeAnimation() {

  shakeLink.classList.toggle('shake')
  
}

shakeLink.addEventListener('animationend', shakeAnimation)
