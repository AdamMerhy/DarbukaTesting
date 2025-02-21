# DarbukaTesting

## How to Run the Tests 

1. Clone the repository:
    * git clone https://github.com/AdamMerhy/DarbukaTesting.git
    * cd DarbukaTesting
    
2. Install dependencies:
    * npm install

3. Run the tests:
    * npm test

## Assumptions

1. applyDiscount:
    * The discountPercentage must be between 0 and 100 (inclusive).
    * The total must be a valid number. Non-numeric inputs or missing values result in NaN.

2. calculateTotal:
    * Each item in the items array must have price and quantity properties.
    * Missing or invalid properties result in NaN.

3. fetchUser:
    * The API endpoint (https://api.example.com/users/${userId}) is assumed to return valid JSON data.
    * Network errors or invalid user IDs result in thrown errors.

4. formatPrice
    * The amount must be a valid number. Non-numeric inputs or missing values result in thrown errors.
    * Small decimal numbers (e.g., 0.001) are rounded to 0.00.

## Testing Approach

1. applyDiscount:
    * Typical Use Cases	
        1. Valid Discount
	    2. 0% Discount
	    3. 100% Discount
	    4. Small Discount (1%)
	    5. Large Discount (99%)
	    6. Small Total
	    7. Large Total
	    8. Decimal Discount
    * Edge Cases	
        1. Total is 0
	    2. Negative Total
    * Error Handling	
        1. Missing Total
	    2. Missing Percentage
	    3. Non-Number Total Input
	    4. Non-Number Discount Percentage Input
	    5. Discount Percentage < 0
	    6. Discount Percentage > 100

2. calculateTotal:
    * Typical Use Cases	
        1. Normal input
	    2. Single item
	    3. Large item quantities
	    4. High price
	    5. High values
	    6. Decimal prices
	    7. Decimal quantity
    * Edge Cases	
        1. Empty array
	    2. Zero quantity
	    3. Zero price
	    4. Negative prices
	    5. Negative quantities
	    6. Both values negative
    * Error Handling	
        1. Missing property
	    2. Wrong input (non-number values)

3. fetchUser
    * Typical Use Cases
        1. return data
    * Error Handling Scenarios
        1. doesnt return data
        2. network failure

4. Format price
    * Typical Use Cases	
        1. Normal input
	    2. Decimal input
    * Edge Cases	
        1. Zero amount
	    2. Large amount
	    3. Negative input
	    4. Small decimal number
    * Error Handling	
        1. Missing amount (undefined)
	    2. Invalid input (string)

## Packages Used

1. Node.js
2. jest



  
