const calculateTotal = require('../src/calculateTotal');


        //normal input
test('calculates the total cost for normal input', () => {
    const items = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 4 },
      { price: 20, quantity: 1 }
    ];
  
    const result = calculateTotal(items);
    expect(result).toBe(60);
});
        //normal input


        //single item
test('calculates the total cost for single item', () => {
    const items = [
      { price: 10, quantity: 2 },
    ];
  
    const result = calculateTotal(items);
    expect(result).toBe(20);
});
        //single item


        //large item quantities
test('calculates the total cost for large item quantities', () => {
    const items = [
      { price: 10, quantity: 2000 },
      { price: 5, quantity: 4000 },
      { price: 20, quantity: 1000 }
    ];
  
    const result = calculateTotal(items);
    expect(result).toBe(60000);
});
        //large item quantities


        //high price
test('Calculates the total cost with a high item price', () =>{
  const items = [
    {price: 200000, quantity: 10},
    {price: 5000000, quantity: 15}
];
    const result = calculateTotal(items);
    expect(result).toBe(77000000);
});
      //high price


      //high values
test('Calculates the total cost with a high item price and large quantity', () =>{
  const items = [
    {price: 200000, quantity: 100000},
    {price: 5000000, quantity: 15000}
];
    const result = calculateTotal(items);
    expect(result).toBe(95000000000);
});
      //high values


        //decimal prices
test('calculates the total cost for items with decimal prices', () => {
    const items = [
      { price: 10.4, quantity: 2 },
      { price: 5.3, quantity: 4 },
      { price: 20.7, quantity: 1 }
    ];
  
    const result = calculateTotal(items);
    const roundedResult = Math.round(result * 100) / 100; //for large decimals
    expect(roundedResult).toBe(62.7);
});
        //decimal prices


        //decimal quantity
test('calculates the total cost for items with decimal prices', () => {
  const items = [
    { price: 10, quantity: 2.4 },
    { price: 5, quantity: 4.1 },
    { price: 20, quantity: 1 }
  ];

  const result = calculateTotal(items);
  const roundedResult = Math.round(result * 100) / 100; //for large decimals
  expect(roundedResult).toBe(64.5);
});
      //decimal quantity


        //empty array
test('calculates the total cost when array is empty', () => {
    const items = [];
    const result = calculateTotal(items);
    expect(result).toBe(0);
});
        //empty array


        //zero quantity
test('calculates the total cost when quantity is zero', () => {
    const items = [
        {price: 10, quantity:0},
        { price: 5, quantity: 3 } 
    ];

    const result = calculateTotal(items);
    expect(result).toBe(15);
});
        //zero quantity


        //zero price
test('calculates the total cost when price is zero', () => {
    const items = [
        {price: 0, quantity:10},
        {price: 5, quantity:10}
    ];

    const result = calculateTotal(items);
    expect(result).toBe(50);
});
        //zero price


        //negative prices 
test('calculates total cost when price is negative', () => {
    const items = [
        {price: -10, quantity:10},
        {price: 5, quantity:10}
    ];

    const result = calculateTotal(items);
    expect(result).toBe(-50);
});
        //negative prices


        //negative quantities        
test('Calculates total when quantity is negative', () => {
    const items = [
        {price: 10, quantity:-10},
        {price: 5, quantity:10}
    ];

    const result = calculateTotal(items);
    expect(result).toBe(-50);
});
         //negative quantities


        //both values negative
test('handles items with negative price and negative quantity', () => {
    const items = [
      { price: -10, quantity: -2 },
      { price: 5, quantity: 3 },
    ];
    const result = calculateTotal(items);
    expect(result).toBe(35);
});
      //both values negative


         //missing property
test('handles items with missing properties', () => {
    const items = [
        { price: 10, quantity: 2 },
        { quantity: 3 }                         
    ];

    const result = calculateTotal(items);
    expect(result).toBeNaN();
});
          //missing property
          
         //wrong input
test('handles items with missing properties', () => {
    const items = [
        { price: 10, quantity: 2 },
        { price: "adam", quantity: 3 }                         
    ];
      
      const result = calculateTotal(items);
      expect(result).toBeNaN();
});
        //wrong input
