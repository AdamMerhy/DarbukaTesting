const formatPrice = require('../src/formatPrice');


    //normal input
test('display normal amount', ()=>{
    const amount = 10;
    expect(formatPrice(amount)).toBe("$10.00");
});
    //normal input


    //0 amount
test('display amount 0', () =>{
    const amount = 0;
    expect(formatPrice(amount)).toBe("$0.00");
});
    //0 amount


    //large amount
test('display large amount', () =>{
    const amount = 10000000;
    expect(formatPrice(amount)).toBe("$10000000.00");
});
    //large amount

    
    //decimal input
test('display decimal amount', () =>{
    const amount = 15.2;
    expect(formatPrice(amount)).toBe("$15.20");
});
    //decimal input


    //negative input
test('display negative amount', () =>{
    const amount = -15;
    expect(formatPrice(amount)).toBe("$-15.00");
});
    //negative input


    //small decimal number
test('display small decimal number as $0.00', () =>{
    const amount = 0.001;
    expect(formatPrice(amount)).toBe("$0.00");
});
    //small decimal number


    //missing amount
test('should throw an error for non-number input (undefined)', () => {
    const amount = undefined;
    expect(() => formatPrice(amount)).toThrow();
});
    //missing amount
    

    //invalid input
test('should throw an error for non-number input (string)', () => {
    const amount = "adam";
    expect(() => formatPrice(amount)).toThrow();
});
    //invalid input