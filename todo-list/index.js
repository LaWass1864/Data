// Ajouter sur le dom ce qui est tapé dans le form à la validation du form
const form = document.querySelector("form");

// Ajouter un element en faisant Entré, c'est l'evenement sur le fom, donc on lui passe le submit ensuite on met le e.preventDefault pour que la page ne se charge pas.

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // on y ajoute dans la balise UL, une liste qui va ajouter les taches
  // Ces taches sont appellés item
  list.innerHTML += `<li> ${item.value}</li>`;
  item.value = "";
});

// Supprimer un item : quand je vais cliquer sur un UL (meme si on ne le voit pas)

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
});
