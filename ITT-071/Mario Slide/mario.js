// Brandon Nichols


function printPyramid(height) {
    const element = document.getElementById("pyramid"); // Get the container
    var symbol = document.getElementById("symbol")
    element.innerHTML = ""; // Clear the pyramid div before adding the pyramid

    for (let i = 1; i <= height; i++) {
        let rowStr = ""; // This is to hold the characters for the pyramid

        // printing . to offset the bricks
        for (let j = 0; j < height - i; j++) {
            rowStr += ".";
        }

        // printing bricks
        for (let k = 0; k < i + 1; k++) {
            rowStr += symbol.value;
        }

        const para = document.createElement("p"); // Create <p> element
        para.innerText = rowStr; // Set p element inner text to rowStr
        element.appendChild(para); // Add it to the pyramid div
    }
}


function determineHeightAndThenDrawPyramid() {
    document.querySelector("#height").addEventListener("input", function() {
        // Get the value from the range input
        var pyrHeight = document.querySelector("#height").value;

        // Display the current value of the range in the output div
        document.querySelector("#output").innerHTML = pyrHeight;

        // Convert the input value to a number
        pyrHeight = Number(pyrHeight);

        // Call the printPyramid function to update the pyramid
        printPyramid(pyrHeight);
    });
}

determineHeightAndThenDrawPyramid()