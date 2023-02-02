const isPalindrome = (string) => {
    console.log(string)
    let j = string.length - 1;
    for(let i = 0; i<string.length; i++){
        if(string[i] != string[j]) return false;
        j--;
    }
    return true;
}


console.log(`false = ${isPalindrome('abcd')}`);
console.log(`true = ${isPalindrome('abba')}`);
console.log(`false = ${isPalindrome('abcabc')}`);
console.log(`true = ${isPalindrome('abcba')}`);