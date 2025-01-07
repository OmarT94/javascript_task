//Step 1: Create an array of numbers. Use the '.map' function to double all the numbers in the array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleNumbers=numbers.map(number=>number*2);
console.log(doubleNumbers);

//Step 2: Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.
const words=["Hamburg","Berlin","Mun","Dort","Pa"]
const longWords=words.filter(word=>word.length>5);
console.log(longWords);

//Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
const numbersSum=[1, 2, 3, 4, 5,6,7,8,9,10];
const sum=numbersSum.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

//Step 4: Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.
const checkNumbers=[1, 2, 3, 4, 5,6,7,8,9,11];
const sumChecks=checkNumbers.some(number=>number > 10);
console.log(sumChecks);


//Sort these numbers in descending order.
const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
const sort=[...list].sort((a,b)=>b - a);
console.log("descending: " + sort)

//Square these numbers.
const square=sort.map(num=>num**2);
console.log("SquaredList: " + square);

//Remove the lowest two numbers and the highest 4 numbers from the list.
const trimmedList=square.slice(4,-2)
console.log("TrimmedList: " + trimmedList);

//Remove all numbers that are divisible by 4.
const filteredList=trimmedList.filter(num=>num % 4 !==0);
console.log("FilteredList: " + filteredList);

//Add up all the numbers.
const summeAllNumbers=filteredList.reduce((accumulator, current)=>accumulator + current, 0);
console.log("Summe of All Numbers: " + summeAllNumbers);