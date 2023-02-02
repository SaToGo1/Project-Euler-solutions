
const CEILING = 1000;

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

console.log(SumOfMultiples3and5());