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
        age: 35,
        technos: ["Css", "Html", "php"],
        admin: false,
    }, {
        pseudo : "Nicolas",
        age: 42,
        technos: ["React", "NodeJs", "php"],
        admin: true,
    },
    {
        pseudo : "Carole",
        age: 42,
        technos: ["React", "NodeJs", "php"],
        admin: true,
    },
    {
        pseudo : "John",
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

// while : tant que

let w = 0; 

while (w < 3) {
    w++;
    // alert("la valeur de w est de : " + w);
}

// do while 
let d = 0;

do {
    d++;
    // console.log(d)
} while (d < 5);

// Boucles for
// guillemets de la touche 7 permettent de ne pas mettre de + 

for (const user of data ) {
//    document.body.innerHTML += `<li>${user.pseudo} / ${user.age} ans / ${user.technos} </li>`;
    
}

// d'abord on déclare la valeur de i ensuite jusque ou on boucle et incrementer si la condition 2 n'est pas remplis
for (i = 0; i < data.length; i++) {
    //document.body.innerHTML += "<h2>" + data[i].technos.join (' / ') + "</h2>";
    
}

// Switch

document.body.addEventListener('click', (e) => {
    console.log(e.target.id)

    switch(e.target.id) {
        case "javascript":
            document.body.style.background = "yellow";
            break;
        case "php":
            document.body.style.background = "violet";
            break;
        case "python":
            document.body.style.background = "blue";
            break;
            default:
                null;

    }
})

