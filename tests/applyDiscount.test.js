const applyDiscount = require('../src/applyDiscount');


        //valid discount
test('Calculates the price after valid discount', () =>{
    const total = 100;
    const discountPercentage = 30;
    
    const result = applyDiscount(total, discountPercentage);
    expect(result).toBe(70);
});
        //valid discount


        //0% discount
test('Calculates the price after 0% discount', () =>{
    const total = 100;
    const discountPercentage = 0;

    const result = applyDiscount(total, discountPercentage);
    expect(result).toBe(100);
});
        //0% discount


        //total is 0
test('Calculates the price with a 0 total', () =>{
    const total = 0;
    const discountPercentage = 30;

    const result = applyDiscount(total, discountPercentage);
    expect(result).toBe(0);
});
        //total is 0


        //100% discount
test('Calculates the price after 100% discount', () =>{
    const total = 100;
    const discountPercentage = 100;

    const result = applyDiscount(total, discountPercentage);
    expect(result).toBe(0);
});
        //100% discount


        //small discount
test('Calculates the price after a small discount', () =>{
    const total = 100;
    const discountPercentage = 1;

    const result = applyDiscount(total, discountPercentage);
    expect(result).toBe(99);

});
        //small discount

        //large discount
test('Calculates the price after a large discount', () =>{
    const total = 100;
    const discountPercentage = 99;
        
    const result = applyDiscount(total, discountPercentage);
    expect(result).toBe(1);
        
});
        //large discount


        //small total
test('Calculates the price of a small total', () =>{
    const total = 1;
    const discountPercentage = 50;
        
    const result = applyDiscount(total, discountPercentage);
    expect(result).toBe(0.5);
        
});
        //small total


        //large total
test('Calculates the price of a large total', () =>{
    const total = 50000;
    const discountPercentage = 10;
                
    const result = applyDiscount(total, discountPercentage);
    expect(result).toBe(45000);
                
});
        //large total


        //decimal discount
test('Calculates the price after a decimal discount', () =>{
    const total = 100;
    const discountPercentage = 50.5;

    const result = applyDiscount(total, discountPercentage);
    expect(result).toBe(49.5);

});
        //decimal discount


        //negative total
test('Handles a negative total', () =>{
    const total = -100;
    const discountPercentage = 10;

    const result = applyDiscount(total, discountPercentage);
    expect(result).toBe(-90);
});
        //negative total


        //missing total
test('handles missing total',() => {
    const total = undefined;
    const discountPercentage = 10;

    const result = applyDiscount(total, discountPercentage);
    expect(result).toBeNaN();

});
        //missing total

        
        //missing percentage
test('handles missing percentage',() => {
    const total = 10;
    const discountPercentage = undefined;
        
    const result = applyDiscount(total, discountPercentage);
    expect(result).toBeNaN();
        
});
        //missing percentage


        //non-number total input
test('handles wrong input', () =>{
    const total = "adam";
    const discountPercentage = 10;

    const result = applyDiscount(total, discountPercentage);
    expect(result).toBeNaN();

});
        //non-number total input


         //non-number percentage input
test('handles wrong input', () =>{
    const total = 20;
    const discountPercentage = "adam";

    const result = applyDiscount(total, discountPercentage);
    expect(result).toBeNaN();

});
        //non-number percentage input


        //discount percentage < 0
test('should throw an error for discount percentage < 0', () => {
    expect(() => applyDiscount(100, -10)).toThrow("Invalid discount");
});
        //discount percentage < 0


        // discount percentage > 100
test('should throw an error for discount percentage > 100', () => {
    expect(() => applyDiscount(100, 110)).toThrow("Invalid discount");
});
        // discount percentage > 100

//testing workflow