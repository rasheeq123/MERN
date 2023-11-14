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
console.log('////////////')









