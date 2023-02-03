const START_RANGE = 1;
const END_RANGE = 20;

const checkDivision = (number, divisor=1) => {
    if(divisor == END_RANGE){
        if((number % divisor) === 0 ) return number;
        return -1;
    }

    if((number % divisor) === 0) return checkDivision(number, divisor + 1);
    else return -1;
}


const smallestNumberDivision = () => {
    
    let search = true;
    let dividend = 20;
    let num = 0;
    while(search) {
        num = checkDivision(dividend);
        if(num != -1) search = false;
        // it has to be divisible by the bigger numberso we can use it
        // to augment the dividend every iteration, so code is faster.
        dividend += END_RANGE;
    }
    return num;
}


console.log(smallestNumberDivision());