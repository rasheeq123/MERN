const smartphoneList = [
    { brand : 'Redmi', model : 'Note 11', price : 18000, colors : ['white', 'blue'] },
    { brand : 'Samsung', model : 'M31', price : 19000, colors : ['white', 'blue', 'black'] },
    { brand : 'Realme', model : '8', price : 15000, colors : ['black', 'yellow'] },
    { brand : 'Oppo', model : 'F19', price : 17000, colors : ['blue', 'black', 'red'] },
    { brand : 'Vivo', model : 'V20', price : 20000, colors : ['black', 'red', 'green'] },
];


console.log("Assignment Ans:")
//syntax to access price of the third smartphone
console.log(smartphoneList[2].price)

//syntax to increase the price of the second smartphone by 10%
const increment=smartphoneList[1].price+0.1
console.log(increment)
console.log('\n')

//WAP to get first name from an array of full names.
const people = [ 'abcd efgh', 'Samd hash','Read ssfh', 'Ijkl bjch','Mnop jcch'];
let firstname = people.map(people => people.split(' ')[0]);
console.log("First name:", firstname);
let lastname = people.map(people => people.split(' ')[1]);
console.log("Last name:", lastname);

console.log('\n')

//WAP to filter name having length greater than 4.
const names=['abcd', 'efhhgu', 'tyuityu', 'sdfgh']
let ans= names.filter((b)=>{return b.length>4}); 
console.log('length greater than 4:', ans)