const words = [
  "poussiere",
  "mysterieux",
  "diabolique",
  "bulletin",
  "astronaute",
  "distribution",
  "hibernation",
  "demembrer",
  "bachelier",
  "tristement",
  "cosmiquement",
  "kidnappeur",
  "approchant",
  "coincidence",
  "bonbonnierre",
  "graphique",
  "analytique",
  "populaire",
  "patrimoine",
  "contradictoirement",
  "preconditionnements",
  "inconditionnellement",
  "incontestablement",
  "incontournables",
  "inconscience",
  "psychopathologiques",
  "pedopsychiatre",
];

var answer = document.getElementById("WordToFind");
var live = document.getElementById("live");
var lives = 9;
live.innerHTML = lives;
//num random entre 0 et array.length-1
var num = Math.round(Math.random() * (words.length - 2) + 1);
//le nom à trouver
var word = words[num];
console.log(word);
var Word = word.split("");

function CreateSpan() {
  for (var i = 0; i < word.length; i++) {
    const span = document.createElement("span");
    const node = document.createTextNode(" _ ");
    span.appendChild(node);
    answer.appendChild(span);
  }
}

function findLetter(letter) {
  if (word.includes(letter) === true) {
    document.getElementById(letter).style.color = "green";
    for (let i = 0; i < word.length; i++) {
      if (Word[i] === letter) {
        const collection = answer.children;
        collection[i].innerHTML = letter;
      }
    }
  } else {
    lives--;
    live.innerHTML = lives;
    document.getElementById(letter).style.color = "red";
    if (lives <= 0) {
      answer.innerHTML = "YOU LOOSE";
    }
  }
  var button = document.getElementById(letter);
  button.disabled = true;
}

function Win() {
  var win = 0;
  let allChildren = answer.childNodes;
  for (let i = 0; i < allChildren.length; i++) {
    if (allChildren[i].innerHTML === " _ ") {
      win++;
    }
  }
  if (win === 0 && lives > 0) {
    document.getElementById("win").innerText = "Bravo!";
    var letter = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    for (var i = 0; i < letter.length; i++) {
      var button = document.getElementById(letter[i]);
      button.disabled = true;
    }
  }
}

CreateSpan();

document.getElementById("a").addEventListener("click", function () {
  findLetter("a");
  Win();
});
document.getElementById("b").addEventListener("click", function () {
  findLetter("b");
  Win();
});
document.getElementById("c").addEventListener("click", function () {
  findLetter("c");
  Win();
});
document.getElementById("d").addEventListener("click", function () {
  findLetter("d");
  Win();
});
document.getElementById("e").addEventListener("click", function () {
  findLetter("e");
  Win();
});
document.getElementById("f").addEventListener("click", function () {
  findLetter("f");
  Win();
});
document.getElementById("g").addEventListener("click", function () {
  findLetter("g");
  Win();
});
document.getElementById("h").addEventListener("click", function () {
  findLetter("h");
  Win();
});
document.getElementById("i").addEventListener("click", function () {
  findLetter("i");
  Win();
});
document.getElementById("j").addEventListener("click", function () {
  findLetter("j");
  Win();
});
document.getElementById("k").addEventListener("click", function () {
  findLetter("k");
  Win();
});
document.getElementById("l").addEventListener("click", function () {
  findLetter("l");
  Win();
});
document.getElementById("m").addEventListener("click", function () {
  findLetter("m");
  Win();
});
document.getElementById("n").addEventListener("click", function () {
  findLetter("n");
  Win();
});
document.getElementById("o").addEventListener("click", function () {
  findLetter("o");
  Win();
});
document.getElementById("p").addEventListener("click", function () {
  findLetter("p");
  Win();
});
document.getElementById("q").addEventListener("click", function () {
  findLetter("q");
  Win();
});
document.getElementById("r").addEventListener("click", function () {
  findLetter("r");
  Win();
});
document.getElementById("s").addEventListener("click", function () {
  findLetter("s");
  Win();
});
document.getElementById("t").addEventListener("click", function () {
  findLetter("t");
  Win();
});
document.getElementById("u").addEventListener("click", function () {
  findLetter("u");
  Win();
});
document.getElementById("v").addEventListener("click", function () {
  findLetter("v");
  Win();
});
document.getElementById("w").addEventListener("click", function () {
  findLetter("w");
  Win();
});
document.getElementById("x").addEventListener("click", function () {
  findLetter("x");
  Win();
});
document.getElementById("y").addEventListener("click", function () {
  findLetter("y");
  Win();
});
document.getElementById("z").addEventListener("click", function () {
  findLetter("z");
  Win();
});
