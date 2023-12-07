// 1. Get element via querySelector()
// 2. Get element via querySelectorAll()
// 3. Get ELement via getElementById()
// 4. get Element via getElementsByClassName()

// const headingEl = document.getElementsByClassName("pageHeading");
// console.log(headingEl);
// setTimeout(() => {
//   headingEl[0].innerText = "Tada!!!!";
// }, 5000);

// Pass Element Name
// querySelector('h1 or h2 or p') => Element or
// querySelectorAll('h1 or h2 or p') => Nodes[]

// Pass Id
// getElementById('id'); => Element

// Pass ClassName
// getElementsByClassName('class') => HTMLCollection[]
// const listContainer = document.getElementById("description-list-container");
// listContainer.innerText = "<p>I am a div element</p>";
// const addNode = document.createElement("button");
// addNode.innerText = "Add";
// document.body.appendChild(addNode);

// addNode.addEventListener("click", appendParagraph);

// function appendParagraph() {
//   const topicDescription = document.createElement("p");
//   topicDescription.innerText = window.prompt("Enter Description");
//   topicDescription.setAttribute("id", "paragraph");
//   topicDescription.setAttribute("class", "para");
//   listContainer.append(topicDescription);
// }

const chessBoard = document.getElementById("chess-board");

const ranks = ["A", "B", "C", "D", "E", "F", "G", "H"];

function createFiles(input = 0) {
  let files = [];
  for (var x = 0; x < input; x++) {
    const file = document.createElement("div");
    file.setAttribute("id", `${ranks[x]}`);
    file.setAttribute("class", `square bg-black`);
    files.push(file);
    // if (x % 2 === 0) {
    //   row.setAttribute("class", `square bg-white`);
    // } else {
    //   row.setAttribute("class", `square bg-black`);
    // }
  }
  return files;
}

function createChessBoardRows(input = []) {
  let rows = [];
  for (var x = 0; x < input.length; x++) {
    const row = document.createElement("div");
    row.setAttribute("id", `${input[x]}`);
    row.setAttribute("class", `board-row`);
    row.append(...createFiles(8));
    rows.push(row);
  }
  return rows;
}

function getBoardReady() {
  const rows = createChessBoardRows(ranks);
  chessBoard.append(...rows);
}

getBoardReady();
