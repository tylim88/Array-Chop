const chopArray = <T>(input: T[], maxLength: number) => {
	if (!Array.isArray(input)) {
		throw new TypeError('Expected an array to split')
	}

	if (typeof maxLength !== 'number') {
		throw new TypeError('Expected a number of groups to split the array in')
	}

	const result = []
	let part = []

	for (let i = 0; i < input.length; i++) {
		part.push(input[i])

		// check if we reached the maximum amount of items in a partial
		// or just if we reached the last item
		if (part.length === maxLength || i === input.length - 1) {
			result.push(part)
			part = []
		}
	}

	return result
}

export default chopArray
