import convertAllNumToIntType from "@/types/convertAllNumToIntType"

const convertAllNumToInt2 = (...floatNums: number[]): convertAllNumToIntType => {

	// 引数の小数の小数部分の長さを取得する。

	const decimalLengthArr = floatNums.map(val => {
		const decimalOnlyString = val.toString().split(".")[1]

		// valが「1」のような.を含まない数だったときに長さをゼロにする。

		if (decimalOnlyString === undefined) return 0

		return decimalOnlyString.length
				
	})

	let cntOf10Times = 0
	

	const intNums = floatNums.map((val, idx) => {

		cntOf10Times += decimalLengthArr[idx]

		return val * (10**decimalLengthArr[idx])
		}
	)

	return {

		value: intNums,
		decodeNum: 10**cntOf10Times

	} as const


}

export default convertAllNumToInt2