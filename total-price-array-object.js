//Find total price using array object

const products = [
    {name:'laptop' , price: 93000},
    {name:'watch' , price: 3000},
    {name:'shirt' , price: 900},
    {name:'pant' , price: 2000},
    {name:'glass' , price: 1500}
];

let totalPrice = 0;
for(const product of products){
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice);