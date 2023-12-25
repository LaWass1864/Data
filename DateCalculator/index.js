// Convertir la date du jour comme on la souhaite dans l'Input avec le bon format
const today = new Date().toISOString().split("T")[0];
// On donne cette valeur a l'input start-date
start_date.value = today;
// Eviter de reserver une date dans le passé
start_date.min = today;

// Tomorrow date calc
let tomorrow = new Date();
// Ajouter un jour de plus que le start_date
tomorrow.setDate(tomorrow.getDate() + 1);
// Convertir au bon format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
// On le passe a l'input
end_date.value = tomorrowFormat;
// Eviter de reserver une dans le passé
end_date.min = tomorrowFormat;

// Date de départ ne doit pas être superieure a la date de fin

start_date.addEventListener("change", (e) => {
  // Récuperation de la date dans l'input start day
  let day = new Date(e.target.value);
  // Faire en sorte que la end_date soit tjr superieure a la date du jour
  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

// Parametrer pour que end_date ne peut pas aller plus loin que start_date
end_date.addEventListener("change", (e) => {
  // récupere moi la date qui a été choisie
  let day = new Date(e.target.value);
  // Assure que la date de fin est toujours inferieure a la date de début.
  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    // Mettre la date de l'input au bon format
    start_date.max = day.toISOString().split("T")[0];
  }
});
// Fonction pour calculer le prix
const bookingCalc = () => {
    // seconde de difference entre les 2 input
    let diffTime = Math.abs(
        new Date(end_date.value) - new Date(start_date.value)
    );
    // Transformer en jours
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    // Calculer le montant total du nombre de nuit
    total.textContent = diffDays * nightPrice.textContent;
};

start_date.addEventListener("change", bookingCalc)
end_date.addEventListener("change", bookingCalc)

bookingCalc();