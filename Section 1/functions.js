//unsing function keyword
function addnums(a,b)
{
    var c=a+b;
    console.log(c);
}

addnums(2,3);
// console.log(c);
// using fun keyword and assignment operator

const getper= function(m1,m2,m3,m4=90)
{
    console.log(m1,m2,m3,m4)
    total=m1+m2+m3+m4;
    percent=total/4;
    //console.log(percent)
    return percent;
}
// getper(50,50, 50, 50)
 const result=getper(50,50, 50, 50)
console.log(result)
//getper(50,50, 50) nan means undefined erroor 

//arror function
const fact=(n)=> {
    let f=1;
    for(let i=2; i<=n; i++)
    {
        f=f*i;
    }
    return f;
}

console.log(fact(5));