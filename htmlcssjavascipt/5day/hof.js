

let numbersArray = [2,3,7,8,10.13,15,18,34,25];


//  using mapp function    
 let doublesarray = numbersArray.map(function(ele ){
    let doublesArray=ele*2;

    
    return doublesArray;
})
console.log(doublesarray)

//  using filter functiuon 
let evensNumberArray= numbersArray.filter(function(ele){
    return ele%2 ==0;
})
console.log(evensNumberArray);


//  using the reduce function 
let summnation =numbersArray.reduce(function(accu , current){
    return accu+current;
})
console.log(summnation);