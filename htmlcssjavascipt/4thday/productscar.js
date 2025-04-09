


function ProductsCart(names, quantities, prices) {
    this.data = [];
    
 
    for (let i = 0; i < names.length; i++) {
        this.data.push({
            name: names[i],
            quantity: quantities[i],
            price: prices[i]
        });
    }
    
   
    this.total = function() {
        let totalValue = 0;
        for (let i = 0; i < this.data.length; i++) {
            totalValue += this.data[i].quantity * this.data[i].price;
        }
        return totalValue;
    }
   this.print = function (){
   console.log(this.data)
}
    }

 
const names = ["Rice", "Dal", "Salt"];
const quantities = [2, 3, 1];
const prices = [60, 50, 20];

const cart = new ProductsCart(names, quantities, prices);
// const cart2 = new ProductsCart(names, quantities, prices);

console.log(cart.print());  
console.log(cart.total());



// console.log( ProductsCart(names, quantities, prices))
 