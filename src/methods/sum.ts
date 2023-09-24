import convertAllNumToInt from "@methods_private/convertAllNumToInt"

/**
 * @param {...number} floatNums
 * @returns {number} 
 * 
 * This function outputs the exact sum of fractional numbers.
 */

const sum = (...floatNums: number[]): number => {

	const intNums = convertAllNumToInt(...floatNums)
	const intSum: number = eval(intNums.value.join(" + "))
	
	return intSum / intNums.decodeNum

}

export default sum