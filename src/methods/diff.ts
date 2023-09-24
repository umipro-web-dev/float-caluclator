import convertAllNumToInt from "@methods_private/convertAllNumToInt"

/**
 * @param {...number} floatNums
 * @returns {number} 
 * 
 * This function outputs the exact difference of fractional numbers.
 */

const diff = (...floatNums: number[]): number => {

	const intNums = convertAllNumToInt(...floatNums)
	const intSum: number = eval(intNums.value.join(" - "))
	return intSum / intNums.decodeNum
	

}

export default diff