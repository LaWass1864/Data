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
        age: 102032252009,
        technos: ["Css", "Html", "php"],
        admin: false,
    }, {
        pseudo : "Nicolas",
        age: 42,
        technos: ["React", "NodeJs", "php"],
        admin: true,
    },
    {
        pseudo : "Nicolas",
        age: 42,
        technos: ["React", "NodeJs", "php"],
        admin: true,
    },
    {
        pseudo : "Nicolas",
        age: 42,
        technos: ["React", "NodeJs", "php"],
        admin: true,
    }
];
// console.log(data[2].technos[2])

if (data[0].age > data[1].age) {
    // alert(data[0].pseudo + " est plus jeune que " + data[1].pseudo );
    // valeur si vrai
} else {
//    document.body.style.background = "red";
// valeur si faux
}

// 