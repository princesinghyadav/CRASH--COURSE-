

function identifyPrime(num) {
    // Write code here
    let count=0;
    for(i=2;i<=num;i++){
     if(num%i==0){
        count++;
    }  
    }
    if(count==1){
       console.log(num, "Yes , it is prime number") 
    }else{
        console.log( num, "No, it is not a prime no.")
    }
 
    
}
identifyPrime(19)