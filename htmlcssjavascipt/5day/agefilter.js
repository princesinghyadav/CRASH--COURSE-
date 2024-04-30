 

 let arr=[
	{name: "Nrupul", age: 32},
	{name: "Prateek" , age: 30},
	{name: "Aman" , age: 26},
	{name: "Albert" , age: 28},
	{name: "Yogesh" , age: 44},
]

let aged= arr.filter((ele)=>{
    if(ele.age>30){
        return ele.name;
    }
})
console.log(aged)