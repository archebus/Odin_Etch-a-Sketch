const boxContainer = document.getElementById("boxes");

function makeBoxes() {
    for (let j = 0; j < 16; j++) {
        for (let i = 0; i < 16; i++) {
            let boxo = document.createElement("div");
            boxo.className = "boxo";
            boxContainer.append(boxo);
        }
    }
}

makeBoxes();