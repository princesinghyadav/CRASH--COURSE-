

// let numbersArray = [2,3,7,8,10.13,15,18,34,25];


//  using mapp function    

//  let doublesarray = numbersArray.map(function(ele ){
//     let doublesArray=ele*2;

    
//     return doublesArray;
// })
// console.log(doublesarray)

 


//    numbersArray.forEach((ele )=>{
//  console.log(ele*2)

    
     
// })



//  using filter functiuon 

let numbersArray = [2,3,7,8,10.14,15,18,34,25];

// let evensNumberArray = numbersArray.filter(function(ele){
//     return ele%2 !==0;
// })
// console.log(evensNumberArray);


//  using the reduce function 


// let summnation =numbersArray.reduce(function(accu , current){
//     return  accu+current;
// },13)
// console.log(summnation);



let arr=[[1,2,] ,[4,5],[7,8],[3,8]];
 
   let concatt= arr.reduce((start,current)=>{
    return start.concat(current)
   },[2,7])
   console.log(concatt);

