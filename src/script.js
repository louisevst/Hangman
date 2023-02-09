var words = [
  "prediction",
  "perception",
  "explanation",
  "preparation",
  "presentation",
  "reproduction",
  "representation",
  "examination",
  "investigation",
  "information",
  "communication",
  "observation",
  "evaluation",
  "appreciation",
  "anticipation",
  "classification",
  "preoccupation",
  "coordination",
  "formulation",
  "elimination",
  "identification",
  "differentiation",
  "conservation",
  "operation",
  "manipulation",
  "innovation",
  "regulation",
  "accreditation",
  "acquisition",
  "stimulation",
  "formation",
  "abstraction",
  "revelation",
  "generation",
  "revolution",
  "integration",
  "validation",
  "application",
  "activation",
  "maturation",
  "saturation",
  "configuration",
  "organization",
  "creation",
  "destination",
  "vibration",
  "imagination",
  "investigation",
];
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
const hangmanImg = [
  "./Illustration1.png",
  "./Illustration2.png",
  "./Illustration3.png",
  "./Illustration4.png",
  "./Illustration5.png",
  "./Illustration6.png",
  "./Illustration7.png",
  "./Illustration8.png",
  "./Illustration9.png",
  "./Illustration10.png",
];

const keyboard = document.getElementById("keyboard");
const answer = document.getElementById("WordToFind");
const live = document.getElementById("live");
const hangman = document.getElementById("hangman");
const start = document.getElementById("start");
const popup = document.getElementById("defaultModal");
const score = document.getElementById("score");
const wordsToFind = words.length;
var points = 0;
score.innerHTML = points;

if (JSON.parse(localStorage.getItem("words"))) {
  getLocalStorage();
}

var lives = 8;
var number = 0;
hangman.src = hangmanImg[number];

function randomNumberInArray() {
  return Math.round(Math.random() * (words.length - 2) + 1);
}

var num = randomNumberInArray();
console.log(num);
var word = words[num];
words.splice(num, 1);

var Word = word.split("");

function createKeyboard() {
  for (var i = 0; i < letter.length; i++) {
    let button = document.createElement("button");
    let node = document.createTextNode(letter[i]);
    button.appendChild(node);
    keyboard.appendChild(button);
    button.setAttribute("id", letter[i]);
    button.classList.add("p-2");
    button.classList.add("m-1");
    button.classList.add("w-10");
    button.classList.add("h-10");
    button.classList.add("hover:bg-gray-300");
    button.classList.add("bg-gray-200");
    button.classList.add("rounded");
  }
}

function createMisteryWord() {
  for (var i = 0; i < word.length; i++) {
    const span = document.createElement("span");
    const node = document.createTextNode(" ");
    span.appendChild(node);
    answer.appendChild(span);
    span.classList.add("p-auto");
    span.classList.add("w-10");
    span.classList.add("h-10");
    span.classList.add("flex");
    span.classList.add("items-center");
    span.classList.add("justify-center");
    span.classList.add("m-0.5");
    span.classList.add("sm:m-1");
    span.classList.add("rounded");
    span.classList.add("bg-black/25");
  }
}

function findLetter(letter) {
  var thisLetter = document.getElementById(letter);
  if (word.includes(letter) === true) {
    thisLetter.classList.remove("hover:bg-gray-300");
    thisLetter.classList.remove("bg-gray-200");
    thisLetter.classList.add("bg-green-600");
    for (let i = 0; i < word.length; i++) {
      if (Word[i] === letter) {
        const collection = answer.children;
        collection[i].innerHTML = letter;
      }
    }
  } else {
    lives--;
    number++;
    hangman.src = hangmanImg[number];
    thisLetter.classList.remove("hover:bg-gray-300");
    thisLetter.classList.remove("bg-gray-200");
    thisLetter.classList.add("bg-red-600");
    if (lives <= 0) {
      disableKeyboard();
      setTimeout(() => {
        document.getElementById("defaultModal").classList.remove("hidden");
        document.getElementById("defaultModal").classList.toggle("show");
        popup.querySelector("h3").innerHTML = "You loose!";
        popup.querySelector(
          "p"
        ).innerHTML = `The word was ${word}. <br>You can start a new game by clicking the restart button or accept your defeat.`;
      }, 1000);
    }
  }
  thisLetter.disabled = true;
}

function Win() {
  var win = 0;
  let allChildren = answer.childNodes;
  for (let i = 0; i < allChildren.length; i++) {
    if (allChildren[i].innerHTML === " ") {
      win++;
    }
  }
  if (win === 0 && lives > 0) {
    updateScore();
    popup.classList.toggle("show");
    popup.classList.remove("hidden");
    popup.querySelector("h3").innerHTML = "You won!";
    popup.querySelector(
      "p"
    ).innerHTML = `Congratulation. <br>You can start a new game by clicking the restart button.`;
    disableKeyboard();
  }
}
function disableKeyboard() {
  for (var i = 0; i < letter.length; i++) {
    var button = document.getElementById(letter[i]);
    button.disabled = true;
  }
}
function updateScore() {
  points += 100;
  score.innerText = `Score: ${points}`;
}
function restart() {
  setLocalStorage();
  getLocalStorage();
  num = randomNumberInArray();

  word = words[num];

  Word = word.split("");
  number = 0;
  words.splice(num, 1);

  hangman.src = hangmanImg[number];
  lives = 8;
  var child = answer.lastElementChild;
  while (child) {
    answer.removeChild(child);
    child = answer.lastElementChild;
  }
  child = keyboard.lastElementChild;
  while (child) {
    keyboard.removeChild(child);
    child = keyboard.lastElementChild;
  }
  createMisteryWord();
  createKeyboard();
  for (var i = 0; i < letter.length; i++) {
    let thisLetter = letter[i];
    document.getElementById(letter[i]).addEventListener("click", function () {
      findLetter(thisLetter);
      Win();
    });
  }
}
function setLocalStorage() {
  localStorage.setItem("words", JSON.stringify(words));
  localStorage.setItem("score", JSON.stringify(points));
}
function getLocalStorage() {
  words = JSON.parse(localStorage.getItem("words"));
  points = JSON.parse(localStorage.getItem("score"));
  score.innerText = `Score: ${points}`;
}

setLocalStorage();
addEventListener("DOMContentLoaded", () => {
  getLocalStorage();
  createKeyboard();
  createMisteryWord();
  //adding event listener on the keyboard
  for (var i = 0; i < letter.length; i++) {
    let thisLetter = letter[i];
    document.getElementById(letter[i]).addEventListener("click", function () {
      findLetter(thisLetter);
      Win();
    });
  }
  document.getElementById("restart").onclick = function () {
    restart();
  };
  document.getElementById("ok").onclick = function () {
    restart();

    document.getElementById("defaultModal").classList.add("hidden");
    document.getElementById("defaultModal").classList.toggle("hide");
  };
});
