let roots = document.getElementById("roots");
let select= document.getElementById("sele");
select.addEventListener("change",category)

let sorti= document.getElementById("sor");
// 

let searchh= document.getElementById("sea")
searchh.addEventListener("change", searc)


function call  (data){
    sorti.addEventListener("change",  ()=>{
        sort(data)
    })
    searchh.addEventListener("change", ( )=>{
        searc(data)
    })


}

function searc(data){
    // let searchh= document.getElementById("sea")
    let value2=searchh.value

    let titlee =  data.filter((ele,i)=>{

    
            return ele.title.toLowerCase() === value2.toLowerCase()
       })
    
 
   
       if(titlee.length>0){
           showdata( titlee)
       }
       else{
           roots.innerHTML = "<h2>Product not found ...</h2>"
       }
}


function category (){

    let filtervalue=select.value;
    // console.log(filtervalue)

    fetchh(`https://fakestoreapi.com/products/category/${filtervalue}`);
}

function showdata(data){
roots.innerHTML=""


    let dataa= data.forEach((ele,i)=>{

        let box= document.createElement("div")
        box.id="box"
        let img = document.createElement("img")
img.src=ele.image;
        let title= document.createElement("h2")
        title.innerHTML=`Title:-${ele.title}`
        let price = document.createElement("h2")
        price.innerHTML=`Price:-${ele.price}`;
      
      

        box.append(img,title,price)
        roots.append(box);
    })
}

function sort(data){
    
let sortvalue= sorti.value;


if(sortvalue=="High"){
    // console.log(sortvalue)
let narr= data.sort((a,b)=>{
    return a.price -b.price
})
}
else if(sortvalue=="Low"){
    narr=data.sort((a,b)=>{
        return b.price - a.price
    })
} 

showdata(narr)


}
 




 async function fetchh(URL){
try {
    let res= await fetch(URL)
    let resp= await res.json();
//  console.log(resp)
 showdata(resp)
 call(resp)


} catch (error) {
    console.log(error)

}
   
}



fetchh(`https://fakestoreapi.com/products`)
 