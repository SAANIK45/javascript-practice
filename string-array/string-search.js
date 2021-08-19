//indexOf with search
const products = [
    'Lenovo Laptop',
    'Hp laptop',
    'singer Laptop',
    'Dell laptop',
    'Samsung phone',
    'Xiaomi Phone',
    'Lg LaPtoP',
    'Apple Iphone'
]

const search = 'laptop';
const laptop = [];
for(product of products){
    if(product.toLowerCase().indexOf(search.toLowerCase()) != -1){
        laptop.push(product);
    }
}
// console.log(laptop);

const newProducts = [
    'Lenovo Laptop',
    'Hp laptop',
    'singer Laptop',
    'Dell laptop',
    'Samsung phone',
    'Xiaomi Phone',
    'Lg LaPtoP',
    'dell Apple Iphone'
]
//using includes()
const phone = [];
for( item of newProducts){
    if(item.includes('phone')){
        phone.push(item);
    }
}
// console.log(phone);

//startsWith 
const element = [];
const find = 'hp';
for(gadget of products){
  if(gadget.toLowerCase().startsWith(find.toLowerCase())){
      element.push(gadget);
  }
}
console.log(element);
