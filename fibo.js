first=0;
second=1;
 
console.log(first)
for(let i=2; i<10; i++)
{
    
    third=first+second;
    
    console.log(third)
    first=second;
    second=third;

}