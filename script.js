countLetter = (str, letter) => {
	let counter = 0
	let array = str.split("")
	
	for(let i = 0; i < array.length; i++) {
		if (array[i] == letter) {
			counter++;
		}
	} return counter

}
console.log(countLetter('Very cold outside', 'O'));

