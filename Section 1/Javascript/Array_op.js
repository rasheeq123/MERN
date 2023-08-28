const nums=[23,68,45,89,45,75,37]
for(let i=0; i<nums.length; i++)
{
    console.log(nums[i]);
    
}
console.log('-----------')
for(let i of nums){
    // console.log(i*i)
}
console.log('-----------')

console.log('-----------')
for(let i of nums){
    if(i%2==0)
    {
    console.log(i)
    }
}
const names=['raju', 'ramu', 'shamu', 'pinki']
for(i=0; i<names.length; i++)
{
    console.log(names[i]. toLowerCase())
}
// console.log('ramu'. toUpperCase())
