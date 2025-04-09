



export  function Browselement(){

    let  Browsearr=[
        {
            id:"1",
            img:" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT233.jpg?ver=41.47",
            type:" PERI PERI CHICKEN "
        },
        {
            id:"2",
            img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT224.jpg?ver=41.47 ",
            type:" VALUE SNACKERS"
        },
        {
            id:"3",
            img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT170.jpg?ver=41.47",
            type:"CHICKEN ROLLS "
        },
        {
            id:"4",
            img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=41.47",
            type:"CHICKEN BUCKETS"
        },
        {
            id:"5",
            img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=41.47",
            type:"BIRYANI BUCKETS"
        },
        {
            id:"6",
            img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=41.47",
            type:"BOX MEALS"
        },
        {
            id:"7",
            img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=41.47",
            type:"BURGERS"
        },{
            id:"8",
            img:"https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg",
            type:"VIEW ALL MENU"
        }
    ]

     return (
        <>
         <div > 
            {
              Browsearr.map((ele,i)=>{
                return (
                    <div id="rootsdiv" key={ele.id}> 
    <img 
    src={ele.img}
    alt="homepage-img" />
    <h3 id="text1"> {ele.type}</h3>
                    </div>
                )
              })
            }
         </div>

        </>
     )
 }
//  var roots=document.getElementById("roots")
 
// let browseArr=Browsearr.forEach((ele)=>{
//     let rootsdiv1=document.createElement("div");
//     rootsdiv1.id="rootsdiv";
   
    
//     let rootsdiv1img=document.createElement("img");
//     rootsdiv1img.src=ele.img;
//     let rootsdiv1h3=document.createElement("h3");
//  rootsdiv1h3.id="text1"
//     rootsdiv1h3.textContent=ele.type;
//     // anchor.innerHTML=  rootsdiv1h3.textContent=ele.type;
// rootsdiv1.append(rootsdiv1img,rootsdiv1h3);
 
// roots.append(rootsdiv1)

// })