// var arr = [1,2,34,8,3,10]
// // console.log(arr.sort(compareFunction))


// var cgar = ["a","b","c","d","dd","asrc","wrt"];
// // console.log(cgar.sort());

// cgar.sort(function(a,b){
//     if(a>b) return -1;
//     if(a<b) return 1;
//     return 0
// });

// console.log(cgar)

// cgar.sort(function(a,b){
//     return b-a;
// });
// console.log("arr:",cgar)


let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];


employees.sort(function(a,b){
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0
});
console.log(employees)