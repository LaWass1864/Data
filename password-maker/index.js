// On va stocke dans des tableaux, toutes les données
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&é'(-è_çà)^$ù%*µ,;:!\"";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  // creation de tableau que l'ont va incrementer
  let data = [];
  let password = "";
  // En js pas besoin de declarer l'id d'une checkbox
  // On utilise le spread operateur pour casser données
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }
  // cette condition va s'enumerer jusqu'à ce qu'elle fera la longueur de rangeValue.value
  for (i = 0; i < rangeValue.value; i++) {
    // Suppr les virgules + aleatoire, math.floor c'est pour aller jusqu'à 61
    // Math.floor = arrondi un nombre à l'entier ou au mutliple inférieur.
    // Math.random = nombre flottant aléatoire
    password += data[Math.floor(Math.random() * data.length)];
  }
  // Pour un input on ne peut pas mettre un InnerHtml.
  passwordOutput.value = password;

  // Pour copier le mdp
  passwordOutput.select();
  navigator.clipboard.writeText(passwordOutput.value);

  generateButton.textContent = "Copié !";
  // Mettre une limite de temps pour enlever le Copié du bouton et remettre le txt content initial au bout de qql seconde
  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 700);
}

generateButton.addEventListener("click", generatePassword);
