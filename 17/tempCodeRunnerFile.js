function sumDigits(num){
    let sum = 0;

    //  Convert number to string
    let str = num.toString();

    // Step 2: Loop through each digit
    for(let i = 0; i < str.length; i++) {
        sum = sum + parseInt(str[i]);  // Convert char to number and add
    }

    return sum;
}
sumDigits(123); // 1 + 2 + 3 = 6
sumDigits(9081); // 9 + 0 + 8 + 1 = 18
