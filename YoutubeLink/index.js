const array = ["Paris", "Lyon", "Montreal", "Boston"];
const array1 = [33, "Lyon", ["Montreal", "Boston"], true];
const array2 = [33, 245673, 876782, 0, 22];

const numbers = [34, 90, 0989, 23, 1, 89];

// ******************

const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";

input.addEventListener("input", (e) => {
  changeLink(e.target.value);
  if (link) {
    video.innerHTML = `<iframe width="751" height="480" src="${link}" title="🇫🇷 UNE ERREUR JUDICIAIRE HORS NORMES... L'AFFAIRE RIDA DAALOUCHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  }
});

function changeLink(linkToChange) {
  let embed = linkToChange.replace("watch?v=", "embed/");
  link = embed.split("&")[0];
}

// https://www.youtube.com/embed/ifMTUWYStdQ
//https://www.youtube.com/watch?v=ifMTUWYStdQ
