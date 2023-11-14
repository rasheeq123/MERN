const movies=['KGF', 'RRR', 'FastX', 'Barbie', 'Tubelight', 'Dreamgirl'];
console.log(movies.length)

//indexing
console.log(movies[2]); //also works with srting
console.log(movies[5]);
console.log(movies.at(-2));
console.log(typeof movies);
console.log('rrafd'.at(-2))

// slicing- accessing more than one element 
console.log(movies.slice(2,5)); // 5 hai to 4 hi aaega

//adding elements
movies.push('dangal') //adds element at the end of the array
movies.unshift('koi mil gaya') // adds element in starting
console.log(movies)

//removing elements
movies.pop(); // removes element from end of array
movies.shift(); // removes elements from end of array

console.log(movies)

movies.splice(3,2); // removes element from any aaray (kaha se, kitte elemnts remove krne h)
console.log(movies)

const nums= [34,12,65,18,89,23,29];
nums.splice(3,3);
console.log(nums)

console.log(...movies)  //spread operator used to extract the element out of the array

console.log(['first', ...movies, 'last']);  //new elements can be added in this error 
console.log([...movies.slice(0,2), movies.at(-1)]);


