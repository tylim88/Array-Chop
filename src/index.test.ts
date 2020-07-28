import 'jest'
import splitArray from '.'

it('splits simple array', () => {
	expect(splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 2)).toEqual([
		['a', 'b'],
		['c', 'd'],
		['e', 'f'],
	])

	expect(splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 3)).toEqual([
		['a', 'b', 'c'],
		['d', 'e', 'f'],
	])
})

it('handles the last item correctly', () => {
	expect(splitArray(['a', 'b', 'c', 'd', 'e', 'f', 'foo'], 6)).toEqual([
		['a', 'b', 'c', 'd', 'e', 'f'],
		['foo'],
	])
})

it('Throws on nonsense input', () => {
	// eslint-disable-next-line
	;['foo', function () {}, null, {}].forEach(input => {
		// eslint-disable-next-line
		expect(() => splitArray(input as any, 1)).toThrow(
			'Expected an array to split'
		)
	})
})
