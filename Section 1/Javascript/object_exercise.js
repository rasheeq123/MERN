const smartphoneList = [
    { brand : 'Redmi', model : 'Note 11', price : 14000, colors : ['white', 'blue'] },
    { brand : 'Samsung', model : 'M31', price : 12000, colors : ['white', 'blue', 'black'] },
    { brand : 'Realme', model : '8', price : 13000, colors : ['black', 'yellow'] },
    { brand : 'Oppo', model : 'F19', price : 17000, colors : ['blue', 'black', 'red'] },
    { brand : 'Vivo', model : 'V20', price : 20000, colors : ['black', 'red', 'green'] },
];

//WAP to create an array of brands
const brands= smartphoneList.map((phone)=>{ return phone.brand})
console.log(brands)

//WAP to store first color of each smartphone in an array
const colors= smartphoneList.map((obj)=>{ return obj.colors[0]})
console.log(colors)

// WAP to filter smartphone having price less than 15000

const ans= smartphoneList.filter((obj)=>{return obj.price>15000}); // yaha condition de rhe
console.log(ans)
console.log('/////')

// WAP to filter smartphone having brand matching search
let search= 'Samsung';
const ans1= smartphoneList.filter((obj)=>{return obj.brand==search}); // yaha condition de rhe
console.log(ans1)

//WAP to return the brand if the Samsung is written as samsung
let search2= 'samsung';
console.log( smartphoneList.filter((obj)=>{return obj.brand.toLowerCase()==search2.toLowerCase()})); 

console.log('/////')
let search1= 'r';
console.log( smartphoneList.filter((obj)=>{return obj.brand.toLowerCase().includes(search1.toLowerCase())})); 


