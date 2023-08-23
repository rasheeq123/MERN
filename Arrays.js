const movies=['KGF', 'RRR', 'FastX', 'Barbie', 'Tubelight', 'Dreamgirl'];
console.log(movies.length)

//indexing
console.log(movies[2]); //also works with srting
console.log(movies[5]);
console.log(movies.at(-2));
console.log(typeof movies);
console.log('rrafd'.at(-2))

// slicing- accessing more than one element 
console.log(movies.slice(2,5));

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

