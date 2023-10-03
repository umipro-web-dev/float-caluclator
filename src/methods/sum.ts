import convertAllNumToInt from "@methods_private/convertAllNumToInt"



const sum = (...floatNums: number[]): number => {

	const intNums = convertAllNumToInt(...floatNums)
	const intSum: number = eval(intNums.value.join(" + "))
	
	return intSum / intNums.decodeNum

}

export default sum