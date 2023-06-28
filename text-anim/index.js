const target = document.getElementById("target");
let wordIndex = 0;
let letterIndex = 0;

let array = ["développeuse", "photographe", "créative"];

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];

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
