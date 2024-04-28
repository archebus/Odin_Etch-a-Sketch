const boxContainer = document.getElementById("boxes");
const eightButton = document.getElementById("eight");
const sixteenButton = document.getElementById("sixteen");
const thirtytwoButton = document.getElementById("thirtytwo");

let boxSize = 16;
let minHeight = 800 / boxSize;
let flexWidth = 100 / boxSize;

makeBoxes(); // Initial Call of Boxes

eightButton.onclick = () => {
    boxSize = 8;
    minHeight = 800 / boxSize;
    flexWidth = 100 / boxSize;
    removeBoxes();
    makeBoxes();
}

sixteenButton.onclick = () => {
    boxSize = 16;
    minHeight = 800 / boxSize;
    flexWidth = 100 / boxSize;
    removeBoxes();
    makeBoxes();
}

thirtytwoButton.onclick = () => {
    boxSize = 32;
    minHeight = 800 / boxSize;
    flexWidth = 100 / boxSize;
    removeBoxes();
    makeBoxes();
}

function makeBoxes() {    
    for (let j = 0; j < boxSize; j++) {
        for (let i = 0; i < boxSize; i++) {
            var boxo = document.createElement("div");
            boxo.className = "boxo";
            boxContainer.append(boxo);
            boxo.style.cssText = `flex: 1 0 ${flexWidth}%; min-height: ${minHeight}px;`;
        }
    }
    const boxes = document.querySelectorAll(".boxo");

    boxes.forEach((boxo) => {
        boxo.addEventListener("mouseenter", () => {
            boxo.style.backgroundColor = "black";
        });
    });
}

function removeBoxes() {
    let child = boxContainer.lastElementChild;
    while (child) {
        boxContainer.removeChild(child);
        child = boxContainer.lastElementChild;
    }
}