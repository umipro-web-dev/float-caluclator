import convertAllNumToIntType from "@/types/convertAllNumToIntType"

const convertAllNumToInt2 = (...floatNums: number[]): convertAllNumToIntType => {

	// 引数の小数の小数部分の長さを取得する。

	const decimalLengthArr = floatNums.map(val => {
		const decimalOnlyString = val.toString().split(".")[1]

		// valが「1」のような.を含まない数だったときに長さをゼロにする。

		if (decimalOnlyString === undefined) return 0

		return decimalOnlyString.length
				
	})


	const decodeNum = 10 ** decimalLengthArr.reduce((prev, now) => prev+now)

	const forConvetingToIntNum = 10 ** Math.max(...decimalLengthArr)

	const intNums = floatNums.map(val => val * forConvetingToIntNum)

	return {

		value: intNums,
		decodeNum: decodeNum

	} as const


}

export default convertAllNumToInt2