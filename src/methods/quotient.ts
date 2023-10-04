import convertAllNumToInt2 from "@/methods_private/convertAllNumToInt2"

const quotient = (...floatNums: number[]): number => {

	const intNums = convertAllNumToInt2(...floatNums)

	const intDevide: number = eval(intNums.value.join(" / "))
	
	return intDevide / intNums.decodeNum
}

export default quotient