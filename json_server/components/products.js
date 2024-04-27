

let root=document.getElementById("roots");


function showdata(data){

let show= data.forEach((ele)=>{

    let box=document.createElement("div")
box.id="box"
    let img=document.createElement("img")
img.src=ele.src;
    let h2=document.createElement("h2")
h2.innerText=`Title:- ${ele.title}`
    let h3=document.createElement("h3")
h3.innerText=  `Price:- ${ele.price}`
    let h4=document.createElement("h4")
h4.innerText=  `Ratings:-  ${ele.ratings}`
let box2=document.createElement("div")
box2.id="box2"
let btn1=document.createElement("button")
btn1.innerHTML="Add to Cart";
let btn2=document.createElement("button")
btn2.innerHTML="Delete From Cart";
box2.append(btn1,btn2);
box.append(img,h2,h3,h4,box2)
root.append(box);

})
    

}

async function Product(URL){
    try {
        let res= await fetch(URL)
        let resp= await res.json()
        console.log(resp.products) 
       let response= resp.products;
       showdata(response)
    }
     catch (error) {
       console.log(error) 
    }
}

Product(`.\db.json`);