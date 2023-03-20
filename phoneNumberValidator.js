function telephoneCheck(str) {
	const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
	const validate = regex.test(str) ? true : false

	return validate
}

// tests
console.log(telephoneCheck('1555-555-5555'))
console.log(telephoneCheck('(555)-555-5555'))
console.log(telephoneCheck('1a555-555-5555'))
console.log(telephoneCheck('a555-555-5555'))