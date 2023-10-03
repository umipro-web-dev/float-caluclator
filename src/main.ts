import sum from "@methods/sum"
import diff from "@methods/diff"
import multi from "@methods/multi"
import devide from "@methods/devide"

const floatCaluclator = {
	/**
	 * @param {...number} floatNums
	 * @returns {number} 
	 * 
	 * This function outputs the exact sum of fractional numbers.
	 */
	sum,
	/**
	 * @param {...number} floatNums
	 * @returns {number} 
	 * 
	 * This function outputs the exact difference of fractional numbers.
	 */
	diff,

	multi,

	devide
} as const

export default floatCaluclator