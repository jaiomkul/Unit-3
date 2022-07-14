In Splice  The original array will be modified and creat new array.

let name = ['Raju', 'Splice', 'Karta', 'New', 'Array'];
// add by Index;
    name.splice(1,0, 'Raj')
    console.log(name);

    //replaces 1 element at index 4
    name.splice(2,1, 'Rahul')
    console.log(name);

    //remove in index
    name.splice(2,1)
    console.log(name);

    //remove in index name.length-N
    name.splice(-2,1)
    console.log(name);

    //Remove all elements, starting from index 2
    name.splice(2)
    console.log(name);

    console.log("********************Slice*********************************");

// In Slice  The original array will not be modified.

let name1 = ['Raju', 'Splice', 'Karta', 'New', 'Array'];
res=name1.slice(1);
console.log(res)

res=name1.slice(2,3);
console.log(res)

// remove front element
res=name1.slice(-2);
console.log(res)

// remove front element
res=name1.slice(2,-1);
console.log(res)

// All element
res=name1.slice();
console.log(res)