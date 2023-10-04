import convertAllNumToInt2 from "@/methods_private/convertAllNumToInt2"

const product = (...floatNums: number[]): number => {

	const intNums = convertAllNumToInt2(...floatNums)

	const intMulti: number = eval(intNums.value.join(" * "))
	
	return intMulti / intNums.decodeNum
}

export default product