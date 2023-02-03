const START_3_DIGIT = 100;
const FINISH_3_DIGIT = 999;

const START_2_DIGIT = 10;
const FINISH_2_DIGIT = 99;

const isPalindrome = (num) => {
    str = num.toString();
    let j = str.length - 1;
    for(let i = 0; i < str.length; i++){
        if(str[i] != str[j]) return false;
        j--;
    }
    return true;
}

const largestPalindromeFromProduct = (numStart, numStart2, numFinish, numFinish2) => {
    let largestPalindrome = 0;
    for(let i = numStart; i <= numFinish; i++){
        for(let j = numStart2; j <= numFinish2; j++){
            let product = i * j;
            if(isPalindrome(product)){
                if(product > largestPalindrome) largestPalindrome = product;
            }
        }
    }
    return largestPalindrome;
}

console.log(largestPalindromeFromProduct(START_3_DIGIT, START_3_DIGIT, FINISH_3_DIGIT, FINISH_3_DIGIT));
