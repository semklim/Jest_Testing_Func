// import expect from "expect";
// import { sum } from "./sum";

const { multiply } = require('./multiply.js');
describe('check ZeroBothSide', () => {
	test("", () => {
		/*
			Expected: "502"
	Received: "5020000000000"
		*/
		expect(multiply("0010000000", "000502000")).toBe('502');
	});
	test("", () => {
		/*
	Expected: "151102"
	Received: "1556200000000000"
		*/
		expect(multiply("0310000000", "0005020000")).toBe('151102');
	});
	test("", () => {
		/*
Expected: "28280"
Received: "282800000000"
*/
		expect(multiply("0014000000", "0000020200")).toBe('28280');

	});
	test("", () => {
		/*
	Expected: "17316"
	Received: "17316000000000"
		*/
		expect(multiply("00156000000", "000111000")).toBe('17316');
	});

})

describe.only("check floatNumber", () => {
	test("1", () => {
		/*
Expected: "0.02"
Received: "0.02"
*/
		expect(multiply("0.1", "0.2")).toBe('0.02');
	});
	test("2", () => {
		/*
	Expected: "0.0025"
	Received: "0.0025"
*/
		expect(multiply("0.05", "0.05")).toBe('0.0025');
	});
	test("3", () => {
		/*
			Expected: "0.018"
			Received: "00.018"
		*/
		expect(multiply("0.15", "0.12")).toBe('0.018');
	});

})

test("check Infinity", () => {
	/*
	Expected: "-Infinity"
	 SyntaxError: Cannot convert Infinity to a BigInt
*/
	expect(multiply("Infinity", "-Infinity")).toBe('-Infinity');
});
test("check Number.MAX_VALUE", () => {
	/*
Expected: "-1.7976931348623157e+308"
 SyntaxError: Cannot convert Infinity to a BigInt
*/
	expect(multiply("1.7976931348623157e+308", "-1")).toBe('-1.7976931348623157e+308');
});