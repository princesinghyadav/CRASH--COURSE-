function identifyPrime(num) {
    // Write code here
    let count=0;
    for(i=2;i<=num;i++){
     if(num%i==0){
        count++;
    }  
    }
    if(count==1){
       console.log( "Yes , it is prime number") 
    }else{
        console.log( "No, it is not a prime no.")
    }
 
    
}
identifyPrime(11)