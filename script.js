countLetter = (str, letter) => {
//used arrow function to define the parameters

	let counter = 0
	let array = str.split("")
//array splits the string into an array of letters

	for(let i = 0; i < array.length; i++) {
		if (array[i].toLowerCase() === letter.toLowerCase()) {
			counter++;
		}
	} return counter
//loops through each index of the array checking for the specified letter
//the letter in the array and the letter as a parameter are both compared as lower case elements
//each time the letter occurs, the counter increases by one
}

console.log(countLetter('Our cold outside', 'O'));

