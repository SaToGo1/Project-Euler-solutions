
const CEILING = 1000;

/**
 * Solution 1: Using a Loop.
 * @param {*} ceiling, is the number below which we will search for the multiples. by default 1000.
 * @returns the summation of all the numbers.
 */
const SumOfMultiples3and5 = (ceiling=CEILING) => {

    let sum = 0;
    for(let i = 0; i < ceiling; i++){
        if(isMultipleOf3(i)) sum += i;
        else if(isMultipleOf5(i)) sum += i;
    }
    return sum;
}


const isMultipleOf3 = (num) => {
    return (num % 3) === 0;
}

const isMultipleOf5 = (num) => {
    return (num % 5) === 0;
}

/**
 * Solution 2: Using Recursion.
 * @param {*} number, is the number which we will check if its multiple of 3 and 5 or not.
 *              The first time it is called it contains the number below which we will check the multiples.
 *              By default the initial number is 1000.
 * @returns the summation of all the numbers.
 */
const SumOfMultiples3and5Recursive = (number=CEILING-1) => {
    let sum=0;
    if(number > 1) sum += SumOfMultiples3and5Recursive(number - 1);

    if(isMultipleOf3(number)) sum += number;
    else if(isMultipleOf5(number)) sum += number;
    return sum;
}

console.log(SumOfMultiples3and5());
console.log(SumOfMultiples3and5Recursive());
console.log(`SumOfMultiples3and5() === SumOfMultiples3and5Recursive() ${SumOfMultiples3and5() === SumOfMultiples3and5Recursive()}`);