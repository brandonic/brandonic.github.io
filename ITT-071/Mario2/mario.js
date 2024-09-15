

function printPyramid(height) {
    const element = document.getElementById("pyramid"); // Get the container
    element.innerHTML = ""; // Clear the pyramid div before adding the pyramid

    for (let i = 1; i <= height; i++) {
        let rowStr = ""; // This is to hold the characters for the pyramid

        // printing . to offset the bricks
        for (let j = 0; j < height - i; j++) {
            rowStr += ".";
        }

        // printing bricks
        for (let k = 0; k < i + 1; k++) {
            rowStr += "#";
        }

        const para = document.createElement("p"); // Create <p> element
        para.innerText = rowStr; // Set p element inner text to rowStr
        element.appendChild(para); // Add it to the pyramid div
    }
}

printPyramid(5) // default pyramid print