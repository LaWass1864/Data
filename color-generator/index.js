function getColor() {
  // Créer 3 variables pour stocker 3 chiffres aléatoires correspondant au red,green et blue
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const color = `rgb(${r} ,${g} ,${b})`;

  // Donner au body une couleur de fond
  document.body.style.background = color;
  // Montrer sur le body la couleur rgb()
  document.body.innerHTML = `<h2>${color}</h2>`;
}
// On joue la fonction
setInterval(getColor, 3000);
