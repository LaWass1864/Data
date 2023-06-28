
// Pointer le id target
const target = document.getElementById("target");

// creation d'index
let wordIndex = 0;
let letterIndex = 0;

// Données dans un tableau
let array = ["développeuse", "photographe", "créative"];


// creation de la fonction qui va écrire des mots
const createLetter = () => {
    // creation d'une balise et injecter les lettres dans des span
  const letter = document.createElement("span");
  // appenChild est un enfant 
  target.appendChild(letter);

  // On met letter dans le span
  letter.textContent = array[wordIndex][letterIndex];

  // Compte a rebour pour que le mot disparaisse au bout de 2 secondes et 800 millieme
  setTimeout(() => {
    letter.remove();
  }, 2800)
};

// Fonction recursive, c a d qu'elle va elle-meme s'appeller

const loop = () => {
  setTimeout(() => {
    if (letterIndex < array[wordIndex].length) {
            createLetter();
    letterIndex++;
    loop();
  } else {
    wordIndex++;
    letterIndex = 0;
    setTimeout(() => {
        loop();
        
    }, 2800);
  }
  }, 90);
};
loop();
