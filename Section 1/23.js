//WAP to square all elements of an array and store them into a new array.
const nums=[12,13,14,15];
const newnums= [];
for(let n of nums)
{
    newnums.push(n**2);
}
console.log(newnums)
// for(i=0; i<4; i++)
// {
//     const arr= nums[i]*nums[i];
// console.log(arr);

// }

//WAP store all even numbers from an array to a new array.
console.log("//////////////")

const num=[12,13,14,15];
const evennums= [];
for(let n of nums)
{
    if(n%2==0)
    evennums.push(n)
}
console.log(evennums)

// for(i=0; i<4; i++)
//     if(num[i]%2===0)
//     {
//         const arr= nums[i];
//         console.log(arr);
//     }
    

