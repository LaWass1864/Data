
// Il faut récuperer un chiffre qui est taper dans l'input et quand on valide le formulaire
 let totalSeconds ;
 let interval;
 // Creation de fonction

 function countDown() {
    // combien on a de minutes
    const minutes = Math.floor(totalSeconds/ 60)
    const seconds = totalSeconds % 60;

    const sec = seconds < 10 ? "0" + seconds : seconds;
    // Afficher du compte a rebours
    countdownDisplay.textContent = `${minutes} : ${sec}`;
    // On descends en secondes

    totalSeconds--;

    if(totalSeconds > 0) {
        totalSeconds--;
    } else {
        countdownDisplay.textContent = "C'est términé !"
        clearInterval(interval);
    }
 }


// On met un evenement sur le submit
 form.addEventListener("submit", (e) => {
    e.preventDefault();
   // On doit récuperer le chiffre que met l'utilisateur 
   if (isNaN(choice.value)) {
    alert('Entrez un chiffre')
   } else {
    totalSeconds = choice.value * 60;
    // on vide le formulaire
    choice.value = "";
    // tu nettoies l'interval et tu m'en relance un autre
    clearInterval(interval);
    interval = setInterval(countDown,1000)
   }
 })
