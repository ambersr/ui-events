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


// Link 3 Klik en druk een key toets in blurry background img (Keydown)
let blurLink = document.querySelector('a:nth-of-type(3)')

blurLink.addEventListener('keydown', blurAnimation)

function blurAnimation() {
  
  blurLink.classList.toggle('blur')
}

// console.log('shake!');

// Link 4 Knop flip animatie (keyup)
  const keyLink = document.querySelector('a:nth-of-type(4)');

    document.addEventListener('keyup', (event) => {

      if (event.key === " " || event.key === "Spacebar") {
  
        keyLink.classList.toggle('flipped');
      }
    });

// console.log('shake!');

// Link 5 Dubbeklik bounce (dblclick)
let dubbelklikLink = document.querySelector('a:nth-of-type(5)')

dubbelklikLink.addEventListener('dblclick', dubbelklikAnimation)

function dubbelklikAnimation() {
  
  dubbelklikLink.classList.toggle('shaker')
}

// console.log('shake!');

// Link 6 Fade wanneer focus (focus & blur)
const fadeLink = document.querySelector('a:nth-of-type(6)');

fadeLink.addEventListener('focus', () => {
    fadeLink.classList.add('animate');
});

// Voeg een 'blur' event listener toe om de animatie te resetten
fadeLink.addEventListener('blur', () => {
  fadeLink.classList.remove('animate');
});

// console.log('shake!');

// Link 7 Load right animation
    window.addEventListener('load', () => { // Wacht tot de pagina volledig is geladen

      const loadLink = document.querySelector('section a:nth-of-type(7)');
      
      loadLink.classList.add('reload');
    });

// console.log('shake!');

// Link 8 Geklikt op knop muisanimatie (click & mousemove)
    const mouseLink = document.querySelector('a:nth-of-type(8)');
    let isAnimating = false;

    mouseLink.addEventListener('click', (e) => {
      e.preventDefault();  // Voorkomt de standaard klikactie
      isAnimating = !isAnimating;
      if (isAnimating) {
        mouseLink.classList.add('move');  // Voeg de animatieklasse toe
      } else {
        mouseLink.classList.remove('move');  // Verwijder de animatieklasse
        mouseLink.style.transform = '';  // Zet de originele positie terug
      }
    });

    // Beweging alleen als animatie is ingeschakeld
    window.addEventListener('mousemove', (e) => {
      if (isAnimating) {
        const offsetX = (e.screenX - window.innerWidth / 2) / 10;
        mouseLink.style.transform = `translateX(${offsetX}px)`; // Alleen de transformatie wordt toegepast
      }
    });

    // Link 9 Bij hover knop flip (mouseenter & mouseleave)

    const enterLink = document.querySelector('a:nth-of-type(9)');

    enterLink.addEventListener('mouseenter', () => {
      enterLink.classList.add('flipped');  // Start de animatie door de 'animate' klasse toe te voegen
    });

    enterLink.addEventListener('mouseleave', () => {
      enterLink.classList.remove('flipped');  // Stop de animatie door de 'animate' klasse te verwijderen
    });

    // Link 10 Resize (resize)

      const sizeLink = document.querySelector('a:nth-of-type(10)');

    // Luister naar het resize event
    window.addEventListener('resize', () => {
      // Als de breedte van het venster kleiner is dan 600px, activeer de animatie
      if (window.innerWidth < 600) {
        sizeLink.classList.add('colorchange');  // Start de animatie
      } else {
        sizeLink.classList.remove('colorchange');  // Stop de animatie
      }
    });




