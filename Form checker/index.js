// On va pointer tous les input
const inputs = document.querySelectorAll(
  "input[type=text],input[type=password]"
);

const progressBar = document.getElementById("progress-bar");
const form = document.querySelector("form");

// Variables pour y stocker les différentes DATA
let pseudo, email, password, confirmPass;
// On va coder une fonction qui prend toute la logique de l'affichage
const errorDisplay = (tag, message, valid) => {
  // On a besoin d'analyser les caractères avec le e.target.value
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

// on va se creer 4 fonctions en flechées et on va pouvoir analyser ce qu'il va se faire

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (
    // On teste les caractéres speciaux,
    !value.match(/^[a-zA-Z0-9_.-]*$/)
  ) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères speciaux"
    );
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

// Checker si c'est au bout format
const passwordChecker = (value) => {
  progressBar.classList = "";
  // Controle du password maj + 8 caractères speciaux + un chiffre
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay(
      "password",
      "Minimum de 8 caractère, une majuscule et un caractère et un chiffre"
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    errorDisplay("password", "", true);
    password = value;
  } else {
    progressBar.classList.add("progressGreen");
    errorDisplay("password", "", true);
    password = value;
  }
  if (confirmPass) confirmChecker(confirmPass);
};

const confirmChecker = (value) => {
  if (value !== password) {
    errorDisplay("confirm", "Les mots de passe ne correspondent pas");
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
};

// récupérer les data avec le (e) et pour chacun d'eux on adosser un addEventListener a chaque input
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    //   Le role du switch est de tester la valeur de e.target.id
    switch (e.target.id) {
      case "pseudo":
        // il faut jouer la fonction pseudoChecker
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        nul;
    }
  });
});

form.addEventListener("submit", (e) => {
  // se prevenir contre le rechargement de la apge
  e.preventDefault();

  if (pseudo && email && email && confirmPass) {
    // on envoi tous les elements dans la console dans un objet
    const data = {
      pseudo,
      email,
      password,
    };
    console.log(data);
    // pour vider les inputs et la prgressbar aprés valdiation du formulaire
    progressBar.classList = "";
    inputs.forEach((input) => (input.value = ""));
    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    alert("Inscription validée !");
  } else {
    alert("Veuillez remplir correctement les informations");
  }
});
