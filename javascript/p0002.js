/**
 * Solution 1. With recursion.
 * @param {*} num 
 */
const sumEvenFibonacciRecursion = (num1=0, num2=0) => {
    let sum = 0;

    let num = num1 + num2;
    if(num > 4_000_000) return 0;
    if((num%2) === 0){
        sum += num;
    }
    console.log(`here on fib=${num}`);

    if(num === 0){
        sum += sumEvenFibonacciRecursion(0, 1);
    }
    else if(num === 1){
        sum += sumEvenFibonacciRecursion(1, 1);
    } 
    else{
        sum += sumEvenFibonacciRecursion(num2, num);
    }

    return sum;
}

console.log(sumEvenFibonacciRecursion());