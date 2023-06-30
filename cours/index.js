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

document.body.addEventListener('click', (e) => {
    

    switch (e.target.id) {
        case "hello":
            document.body.style.background = "pink";
            break;
        case "hi":
            document.body.style.background = "green";
            break;
        case "ola":
            document.body.style.background = "brown";
            break;    
        default:
            null;
    }
})


// Méthodes string. Une méthode est une fonction dont on a acces. Comme le addEventListener 

let string2 = "JavaScript est un langage oriénté objet";
// parseInt = transforme string en number
console.log(typeof "42");
console.log(typeof parseInt("42"));
// isNan pour distinguer si c'est un chiffre ou non
console.log(isNaN("--48"));
// Pour mesurer une chaine de caractere
console.log(string2.length);
// Connaitre le dernier caractere de cette chaine
console.log(string2[string2.length - 9]);
// Indexof, retourne -1 si il ne connait pas
console.log(string2.indexOf("é"));
// il découpe de 15 a 20 caracteres. Utile dans une BDD 
let newString = string2.slice(15, 20);
console.log(newString)
// Split, permet de séparer les variables
console.log(string2.split("t"))
// lowerCase : pour les inputs par exemple, cela transforme les données
console.log(string2.toLocaleUpperCase())
//Replace
console.log(string2.replace("JavaScript", "Is the best"))

// Méthodes pour les numbers
let numbers = 43.289;
let numberString = "42.12 est un chiffre";
// garder des chiffres aprés la virgule
console.log(numbers.toFixed(2))
// Changer une chaine de caractere en number
console.log(parseInt("24"))
// pour extraire le chiffre au début
console.log(parseInt(numberString))
// on garde la virgule et le nombre
console.log(parseFloat(numberString))


// Mathrandom

console.log(Math.PI)
// Arrondir au sup
console.log(Math.round(4.5))
// arrondire au inf
console.log(Math.floor(4.5))
// arrondir au plu haut
console.log(Math.ceil(4.1))
// Puissances
console.log(Math.pow(5, 5))
// Racine carré
console.log(Math.sqrt(8))
// Math.random
console.log(Math.floor(Math.random() * 50))

// Méthode pour les tableaux
let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// Additionner 2 tableaux 
let newArray = array3.concat(array4)
console.log(newArray);
// Spraid operateur
let newArrayA = [...array3, ...array4]
console.log(newArrayA)

// Ajouter des caracteres 
console.log(array3.join("&"));

// Slice = découpage 
console.log(newArray.slice(3, 5));

// IndexOf
console.log(array3.indexOf("JavaScript"));

array3.forEach((languages) => console.log(languages));

// Est ce que dans chacun de ces éléments il y a cet élément
// every = tous
console.log(array3.every((language) => language == "Php"))
// Est ce qu'il y a écrit php qql part // au moins un parmis eux
console.log(array3.some((language) => language == "Php"))

// Shift : permet de suppr le premier element du tableau
let shift = array3.shift()
console.log(shift);
// Pop : permet de suppr le dernier element
let shiftA = array3.pop()
console.log(shiftA);
// Splice
const restArray = array3.splice(0, 2, ...array4);
console.log(restArray)

// Important //
let arrayNumber = [10,4,74,28,12,1]
// additionner de tableaux
console.log(arrayNumber.reduce((x,y) => x + y))
// Ajouter un élément dans un tableau
arrayNumber.push(89)
console.log(arrayNumber);


// On nomme le tableau ou lobjet + application de la méthode + (parametre) 
// Filter SORT MAP
// le "." c'est comme une addition 
console.log(arrayNumber
        .filter((nina) => nina > 10))
// On l'agrémente souvent de paramétres, ici c'est dans l'ordre croissant
console.log(arrayNumber.sort((a, b) => a - b));
// Enumeration de tous les chiffres
arrayNumber.map((number) => console.log(number))
arrayNumber.map((number) => console.log(number))

document.body.innerHTML = arrayNumber.map((number) =>  `<li> ${number} </li>`).join("");