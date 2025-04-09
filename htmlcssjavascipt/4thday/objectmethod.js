 

    let obj={
        Length: 18,
        Width: 16,
        Area:  function(){
          let area= this.Length*this.Width
      return area;
          // console.log(area)
        },
        perimeter: function(){
            let perimeter= 2*(this.Length+this.Width)
     return perimeter;
            // console.log(perimeter)
        }
 


}
 
console.log(obj.Area())
console.log(obj.perimeter())
 