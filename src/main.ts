import sum from "@methods/sum"
import diff from "@methods/diff"
import product from "@/methods/product"
import quotient from "@/methods/quotient"

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
	/**
	 * @param {...number} floatNums
	 * @returns {number}
	 * This function outputs the exact product of fractional numbers.
	 */
	product,
	/**
	 * @param {...number} floatNums
	 * @returns {number}
	 * 
	 * This function outputs the exact quotient of fractional numbers.
	 */
	quotient
} as const

export default floatCaluclator