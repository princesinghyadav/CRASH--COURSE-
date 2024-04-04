

let arr =[1,4,7,9,5];
let arer2=[2,3,6,8]
function includes(str ){
    let include= arr.map((ele)=>{
   if(ele===str){
    return true ;
   }else{
    return false;
   }
    });
    return include;

}
// console.log(includes(4))
console.log(arer2.includes(8))