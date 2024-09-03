// 4 => false
// 5 => true
// 6 => false
// 7 => true
// 11 => true
// 12 => false
// 16 => false
// 17 => true

function isPrime(n) {


    if (n >= 2) {
        let i = 2;
        const limit = Math.sqrt(n);
        if (limit === 2) { return false; }

        while (i < limit) {
            i += 1;
            if (n % i === 0) {
                return false;
            }
        }
    }
    return true;
}

console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(11));
console.log(isPrime(12));
console.log(isPrime(16));
console.log(isPrime(17));
