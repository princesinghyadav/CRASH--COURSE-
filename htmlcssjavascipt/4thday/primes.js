 

function  Primes(limit) {
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num + " is  a prime number");
        }else{
            console.log(num, "is not a prime no. ")
        }
    }
}

// Test the function
 
 Primes(11);
