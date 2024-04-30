
var sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];




function calculateSalesTotals(sales) {
    return sales.map(item => {
        const sale = (1 - (item.discount || 0)) * item.original;
        const total = sale * item.stock;
        return {
            item: item.item,
            original: item.original,
            sale: sale.toFixed(2),  
            stock: item.stock,
            total: total.toFixed(2) 
        };
    });
}
          


 
console.log(calculateSalesTotals(sales));
