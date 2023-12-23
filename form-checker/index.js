// On va pointer tous les input
const inputs = document.querySelectorAll('input[type=text],input[type=password]')

// on va se creer 4 fonctions

const pseudoChecker = () => {};
const emailChecker = () => {};
const passwordChecker = () => {};
const confirmChecker = () => {};

// récupérer les data avec le (e)
inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        console.log(e.target.id);
    });
});