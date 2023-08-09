
// On va stocke dans des tableaux, toutes les données 
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&é'(-è_çà)^$ù%*µ,;:!\"";


function generatePassword() {
    // creation de tableau que l'ont va incrementer
    let data = [];
// En js pas besoin de declarer l'id d'une checkbox
// On utilise le spread operateur pour casser données
if (lowercase.checked) data.push(...dataLowercase);
if (uppercase.checked) data.push(...dataUppercase);
if (numbers.checked) data.push(...dataNumbers);
if (symbols.checked) data.push(...dataSymbols);
// Suppr les virgules + aleatoire, math.floor c'est pour aller jusqu'à 61
console.log(data[Math.floor(Math.random()) * data.length]);    
console.log(data);
    
} 

generateButton.addEventListener('click', generatePassword);

