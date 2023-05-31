countTheLetter = (str, b) => {
	let counter = 0
	for (let char of str) {
		if (str.includes(b)) {
			counter ++
		}
	} 
	return counter
}
console.log(countTheLetter('Check this', 'c'));