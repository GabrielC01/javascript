describe("Number Object", () => {
	describe("Number properties", () => {
		describe("EPSILON", () => {
			test("Return EPSILON.", () => {
				expect(Number.EPSILON).toBe(2**-52);
			});
		});
		
		describe("MAX_SAFE_INTEGER", () => {
			test("Return MAX_SAFE_INTEGER value.", () => {
				expect(Number.MAX_SAFE_INTEGER).toBe(9007199254740991);
			});
		});

		describe("MAX_VALUE", () => {
			test("Return MAX_VALUE", () => {
				expect(Number.MAX_VALUE).toBe(1.7976931348623157e+308);
			});
			test("Add 1 to MAX_VALUE", () => {
				expect(Number.MAX_VALUE).toBe(1.7976931348623157e+308);
			});
		});

		describe("MIN_SAFE_INTEGER", () => {
			test("Return MIN_SAFE_INTEGER", () => {
				expect(Number.MIN_SAFE_INTEGER).toBe(-9007199254740991);
			});
		});

		describe("MIN_VALUE", () => {
			test("Return MIN_VALUE", () => {
				expect(Number.MIN_SAFE_INTEGER).toBe(-9007199254740991);
			});
		});

		describe("NaN", () => {
			test("Return NaN", () => {
				expect(Number.NaN).toBe(NaN);
			});
		});

		describe("NEGATIVE_INFINITY", () => {
			test("Return NEGATIVE_INFINITY", () => {
				expect(Number.NEGATIVE_INFINITY).toBe(-Infinity);
			});
		});

		describe("POSITIVE_INFINITY", () => {
			test("Return POSITIVE_INFINITY", () => {
				expect(Number.POSITIVE_INFINITY).toBe(Infinity);
			});
		});
	});

	describe("Number Methods", () => {
		describe("isFinite()", () => {
			test("arg: Infinity", () => {
				expect(Number.isFinite(Infinity)).toBe(false);
			});
			test("arg: NaN", () => {
				expect(Number.isFinite(NaN)).toBe(false);
			});
			test("arg: -Infinity", () => {
				expect(Number.isFinite(-Infinity)).toBe(false);
			});
			test("arg: 0", () => {
				expect(Number.isFinite(0)).toBe(true);
			});
			test("arg: 2e64", () => {
				expect(Number.isFinite(2e64)).toBe(true);
			});
		});

		describe("isInteger()", () => {
			test("arg: 0", () => {
				expect(Number.isInteger(0)).toBe(true);
			});
			test("arg: 1", () => {
				expect(Number.isInteger(1)).toBe(true);
			});
			test("arg: -100000", () => {
				expect(Number.isInteger(-100000)).toBe(true);
			});
			test("arg: Infinity", () => {
				expect(Number.isInteger(Infinity)).toBe(false);
			});
		});

		describe("isNaN", () => {
			test("arg: NaN", () => {
				expect(Number.isNaN(NaN)).toBe(true);
			});
			test("arg: 37", () => {
				expect(Number.isNaN(37)).toBe(false);
			});
			test("arg: 0 / 0", () => {
				expect(Number.isNaN(0 / 0)).toBe(true);
			});
		});

		describe("isSafeInteger", () => {
			test("arg: MAX_SAFE_INTEGER", () => {
				expect(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true);
			});
			test("Try isSafeInteger() with MAX_SAFE_INTEGER + 1.", () => {
				expect(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
			});
		});

		describe("parseFloat()", () => {
			test("arg: '10.2'", () => {
				expect(Number.parseFloat('10.2')).toBe(10.2);
			});
			test("arg: '1'", () => {
				expect(Number.parseFloat('1')).toBe(1.0);
			});
		});

		describe("parseInt()", () => {
			test("arg: '1'", () => {
				expect(Number.parseInt('1')).toBe(1);
			});
			test("arg: '10.2'", () => {
				expect(Number.parseInt('10.2')).toBe(10);
			});
		});

		describe("prototype.toExponential()", () => {
			/* It converst a number to its exponential
			 * notation, and, optionally, specifies the
			 * number of digits after the decimal point.
			 * It returns a string. */
			test("arg: 10", () => {
				let n = 10;
				expect(n.toExponential()).toBe("1e+1");
			});
			test("arg: 3", () => {
				let n = 3;
				expect(n.toExponential()).toBe("3e+0");
			});
			test("arg: 77", () => {
				let n = 77;
				expect(n.toExponential()).toBe("7.7e+1");
			});
		});

		describe("prototype.toFixed()", () => {
			/* It formats a number, removing the digits
			 * after its decimal point, or, optionally,
			 * specifying the number of them.
			 * It returns a string */
			let n = 10.3080;
			test("arg: undefined", () => {
				expect(n.toFixed()).toBe("10");
			});
			test("arg: 1", () => {
				expect(n.toFixed(1)).toBe("10.3");
			});
			test("arg: 4", () => {
				expect(n.toFixed(4)).toBe("10.3080");
			});
		});

//		describe("", () => {
//		});
	});
});