// Pointer le id target
const target = document.getElementById("target");

// creation d'index
let wordIndex = 0;
let letterIndex = 0;

// Données dans un tableau
let array = ["développeuse", "réveuse", "créative"];

// creation de la fonction qui va écrire des mots
const createLetter = () => {
  // creation d'une balise et injecter les lettres dans des span
  const letter = document.createElement("span");
  // appenChild est un enfant
  target.appendChild(letter);

  // On met letter dans le span
  // premier crochet c'est pour le mot et deuxieme crochet pour aller dans la lettre
  letter.textContent = array[wordIndex][letterIndex];

  // Compte a rebour pour que le mot disparaisse au bout de 2 secondes et 800 millieme
  setTimeout(() => {
    // je veux que letter tu t'en ailles du DOM au bout de 2 secondes 8
    letter.remove();
  }, 2800);
};

// Fonction recursive, c a d qu'elle va elle-même s'appeller si les conditions sont remplies
// On l'apelle une fois à l'exterieure
const loop = () => {
  setTimeout(() => {
    // On revient au premier mot lorsque le dernier est apparu
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
      // Tu me sors une nouvelle lettre
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      // tant qu'on est pas dans cette condition on avance d'une lettre
      letterIndex++;
      loop();
      
      // On va commencer a créer des lettres
    } else {
        // Conditionner l'apparition des lettres et si il n'y en a plus, on change d'un mot
      wordIndex++;
      // On le remet à 0
      letterIndex = 0;
      // Attends avant de relancer la suite, on rejoue dans 2, 8 secondes
      setTimeout(() => {
        loop();
      }, 3200);
    }
    // Fait moi une lettre dans les 5 centieme de secondes
  }, 60);
};
loop();
