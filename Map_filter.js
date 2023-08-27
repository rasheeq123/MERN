const nums=[12,13,14,15];
const ans=nums.map ((n)=> {return n**2}) //callback function bcoz map() khud decide krega ki usko kaha call hona h
console.log(ans)

//wap to filter price less than 500
const prices=[625,100,77,384, 274, 405, 899, 1230];
const ans2= prices.filter((b)=>{return b<500 && b>200}); // yaha condition de rhe
console.log(ans2)

//WAP to add 10% GST to all prices
const ans3= prices.map((c)=>{return c+c*0.1}); // jaha changes krna hoga waha map
console.log(ans3)

// to convert decimal into int
const rawPrices=['$ 7623.3', '$ 278.9', '$0.13', '$9.87']
const ans4= rawPrices.map((d)=>{return parseInt(d.slice(1))});
console.log(ans4);






