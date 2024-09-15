
// TODO #2
// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
  height = prompt("Enter Height: "); //User input for height
  let string = ""; // empty string for rows
  for (let i = 1; i <= height; i++) {
// printing spaces
      for (let j = 0; j < height - i; j++) {
          string += " ";
}
// printing bricks
  for (let k = 0; k < i + 1; k++) {
  string += "#";
}
string += "\n"; //making a new line for the next row
}
console.log(string);
}

  // TODO #1
  // print that pyramid!
  printPyramid()