
const TARGET_TEST = 13195;
const TARGET = 600851475143;

const biggerPrimeRecursive = (target) => {

    if(target === 1) return 1;

    let num = 2;
    let biggerNum = 0;
    while((target%num) !== 0){
        num++;
    }
    target = target/num;
    let num2 = biggerPrimeRecursive(target);
    
    if(num > biggerNum) biggerNum = num;
    if(biggerNum < num2) biggerNum = num2;
    return biggerNum;
}


console.log(biggerPrimeRecursive(TARGET));
