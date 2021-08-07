const phones = [
    {
        name: 'samsung A50',
        price: 25000
    },
    {
        name: 'oppo A5',
        price: 20000
    },
    {
        name: 'Nokia n70',
        price: 13000
    },
    {
        name: 'walton s0',
        price: 9000
    }
]

let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);