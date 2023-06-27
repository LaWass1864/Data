// Types de données

let string = "je suis une phrase";
let number = 34;
let boolean = true;
let maVariable;

// Tableaux = crochet

let array = ["Bordeaux", "Toulouse", "Nantes","Paris"]
// console.log(array[2][3])

let array2 = ["Bordeaux", 24, true , [1,2], {nom: "Mike"}];

// console.log(array2[4].nom)

// Creation d'un objet avec index : valeur
let objet = {
    pseudo : "Denis",
    age: 33,
    technos: ["Javascript", "NodeJs", "php"],
    admin: false,
}
objet.adresse = "89 rue du landy";
// console.log(objet) 
// data est un tableau qui abrite des objets
let data = [
    {
        pseudo : "Denis",
        age: 33,
        technos: ["Javascript", "NodeJs", "php"],
        admin: false,
    },
    {
        pseudo : "Samia",
        age: 14,
        technos: ["Css", "Html", "php"],
        admin: false,
    }, {
        pseudo : "Nicolas",
        age: 42,
        technos: ["React", "NodeJs", "php"],
        admin: true,
    }
];
// console.log(data[1].technos[1])


// Les structures de controle

if (data[0].age > data[1].age) {
    console.log(data[0].pseudo +  " est plus agé que " + data[1].pseudo)
}

// Fonction ternaire, sur une seule ligne.
// valeur à tester ? si vrai : si faux

// While

let w = 0;

while (w > 100) {
    w++;
    console.log("La valeur de w est de : " + w)
}