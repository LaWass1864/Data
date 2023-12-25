// Ajouter sur le dom ce qui est tapé dans le form à la validation du form
const form = document.querySelector("form");

// On va créer une fonction pour stocker Storage part
function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo ppur le supprimer</li>`;
  }
}

// Jouer la fonction lors du chargement de la page
window.addEventListener('load', getTodos)

// Ajouter un element en tapant sur Entré, c'est l'evenement sur le fom, donc on lui passe le submit ensuite on met le e.preventDefault pour que la page ne se charge pas.

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // on y ajoute dans la balise UL, une liste qui va ajouter les taches
  // Ces taches sont appellés item
  list.innerHTML += `<li> ${item.value}</li>`;
  item.value = "";
  storeList();
});

// Supprimer un item : quand je vais cliquer sur un UL (meme si on ne le voit pas)

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});
