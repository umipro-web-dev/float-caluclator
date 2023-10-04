import { describe, expect, it } from "vitest"
import floatCaluclator from "../"
import convertAllNumToInt from "../src/methods_private/convertAllNumToInt"
import convertAllNumToInt2 from "../src/methods_private/convertAllNumToInt2"


describe("public methods tests", () => {

	// 和を出力する関数のテスト
	it("0.1 + 0.2 equals to 0.3 < this.sum() >", () => {
		expect(floatCaluclator.sum(0.1, 0.2)).toBe(0.3)
	})

	it("-0.1 + -0.2 equals to -0.3 < this.sum() >", () => {
		expect(floatCaluclator.sum(-0.1, -0.2)).toBe(-0.3)
	})

	it("0.3 + (-0.1) equals to 0.2 < this.sum() >", () => {
		expect(floatCaluclator.sum(0.3, -0.1)).toBe(0.2)
	})


	// 差を出力する関数のテスト
	it("0.3 - 0.1 equals to 0.2 < this.diff() >", () => {
		expect(floatCaluclator.diff(0.3, 0.1)).toBe(0.2)
	})

	it("0.1 - (-0.2) equals to 0.3 < this.diff() >", () => {
		expect(floatCaluclator.diff(0.1, -0.2)).toBe(0.3)
	})


	// 積を出力する関数のテスト
	it("0.3 * 1.5 equals to 0.45 < this.multi() >", () => {

		expect(floatCaluclator.product(0.3, 1.5)).toBe(0.45)

	})

	it("0.3 / 3 equals to 0.1 < this.devide() >", ()=>{

		expect( floatCaluclator.quotient(0.3, 3)).toBe(0.1)
	})


})




// private methods tests

describe("private methods tests ->", () => {

	it("0.1 and 0.02 convert to 10 and 2 (decodeNum: 100) < this.convertAllNumToInt() > #private", () => {

		const int = convertAllNumToInt(0.1, 0.02)

		console.log(int)

		expect(int.value[0]).toBe(10)
		expect(int.value[1]).toBe(2)
		expect(int.decodeNum).toBe(100)
	})

	it("0.1 and 0.02 convert to 10 and 2 (decodeNum: 1000) < this.convertAllNumToInt2() > #private", ()=>{
		const int = convertAllNumToInt2(0.1, 0.02)
		console.log(int)

		expect(int.value[0]).toBe(1)
		expect(int.value[1]).toBe(2)
		expect(int.decodeNum).toBe(1000)
	})

})

