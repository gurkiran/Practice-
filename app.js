// Remove duplicate elements from an array 

/*var arr = [1,2,3,1,2,3,'q','q'];

var newArr=[];

for(var i = 0; i< arr.length; i++) {
    if(newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);
*/


// Print all the prime numbers ranging from some number to another 

/*var prime = [];
function getPrime(limit) {
    for(var i=0; i < limit; i++) {
        for(var j=0; j < i; j++) {
            if(i % 2 !== 0 & i % j !==0) {
                prime.push(i);
                break;
            }
        }
    }
    return prime;
}
console.log(getPrime(50));*/

// Print how many vowels are there in a sentence 

/*var sentence = 'hello there ! my name is john doe !';
var count = 0;

function getVowelCount(text) {
    var arr = text.split('');
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] ==='a' | arr[i] ==='e' | arr[i] ==='i' | arr[i] ==='o' | arr[i] ==='u') {
            count++;
        }
    }
    return count;
}


console.log(getVowelCount(sentence)); */

// Print fibonacci series 

/*var fibbo = [0, 1];

function fibonacci(limit) {
    for(var i = 0; i < fibbo.length;i++) {
        if(fibbo.length < limit) {
            var c = fibbo[i]+fibbo[i+1];
             fibbo.push(c)
        } 
        else {
            break;
        }
    }
    return fibbo;
}

console.log(fibonacci(20));*/

// Print the factorial of a number 

/*function fictorial(n) {
    if(n === 0){
        return 1;
    }else {
        
        return n *fictorial(n-1);
    }
}


console.log(fictorial(5));
*/

