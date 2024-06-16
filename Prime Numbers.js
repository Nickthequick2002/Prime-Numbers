function showPrimes() {
    
    // Get the input value  
    const n = document.getElementById('numberInput').value;
    let primes = '';

    // Loop through all numbers from 2 to n  
    for (let i = 2; i <= n; i++) {
        // Add prime numbers to the string  
        if (isPrime(i)) primes += i + ' ';
    }

    // Display all the prime numbers 
    document.getElementById('result').textContent = primes;
}

// Check if the number is prime
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; // If divisible by any number other than 1 and itself, it is not a prime number 
    }
    return num > 1; // Return true if the number is greater than 1
}
