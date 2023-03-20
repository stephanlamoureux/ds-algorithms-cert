function palindrome(str) {
	// remove all non alphanumeric characters, convert to lowercase
	const formattedString = str.replace(/[\W_]/g, '').toLowerCase()
	// reverse the formatted string
	const reverseString = formattedString.split('').reverse().join('')
	// check if the reversed string matches the original
	const result = formattedString == reverseString ? true : false

	return result
	}

	console.log(palindrome("ey E")) // true
	console.log(palindrome("not a palindrome")) // false
	console.log(palindrome("_eye")) // true
	console.log(palindrome("My age is 0, 0 si ega ym.")) // true
	console.log(palindrome("1 eye for of 1 eye.")) // false
	console.log(palindrome("0_0 (: /-\ :) 0-0")) // true