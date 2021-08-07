//shopping cart using array object   

const products = [
    {name:'laptop' , price: 93000, quantity: 1},
    {name:'watch' , price: 3000, quantity: 2},
    {name:'shirt' , price: 900, quantity: 4},
    {name:'pant' , price: 2000, quantity: 3},
    {name:'glass' , price: 1500, quantity: 2}
];

let totalPrice  = 0;
for(const product of products){
    let productTotal = product.price * product.quantity;
    totalPrice = totalPrice + productTotal;
}
console.log(totalPrice);