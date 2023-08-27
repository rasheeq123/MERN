const user={
    name:"Raju",
    email:"raju@gmail.com",
    age:56
};
console.log(user)
console.log(user.name);
console.log(user.email);
console.log(user['name']);

user.address="lucknow"

user.age=46
console.log(user)

const phone={
    brand:"realme",
    model:"u1",
    price:12000,
    colors:['white', 'blue', 'black']
};
//syntax to access second color
console.log(phone.colors[2])

//syntax to store new color
phone.colors.push('red')
console.log(phone.colors)

//array inside array
const phonelist=[
    { brand:'realme',model:"u1",price:12000, colors:['white', 'blue', 'black']}
];
console.log(phonelist[0])

//syntax to access the 2nd clr of smartphone
console.log(phonelist[0].colors[1])

//change the model of the smartphone
phonelist.model="u2"
console.log(phonelist.model)


const smartphoneList = [
    { brand : 'Redmi', model : 'Note 11', price : 18000, colors : ['white', 'blue'] },
    { brand : 'Samsung', model : 'M31', price : 19000, colors : ['white', 'blue', 'black'] },
    { brand : 'Realme', model : '8', price : 15000, colors : ['black', 'yellow'] },
    { brand : 'Oppo', model : 'F19', price : 17000, colors : ['blue', 'black', 'red'] },
    { brand : 'Vivo', model : 'V20', price : 20000, colors : ['black', 'red', 'green'] },
];

//syntax to access price of the third smartphone
//syntax to increase the price of the second smartphone by 10%

