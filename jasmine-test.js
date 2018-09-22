module.exports = (numbers) => {
	let value = 0;

	for(let i = 0; i < numbers.length; i++){
		value += numbers[i];
	}

	return value;
}