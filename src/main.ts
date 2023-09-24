import sum from "@methods/sum"
import diff from "@methods/diff"
import multi from "@methods/multi"
import devide from "@methods/devide"

const floatCaluclator = {
	sum,
	diff,
	multi,
	devide
} as const

export default floatCaluclator