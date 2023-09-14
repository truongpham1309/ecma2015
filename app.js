// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
// }
// const makeList = (arrs) =>{
//     return `
//         ${arrs.map((e)=> {
//             return `
//                 <li class="text-center">${e}</li>
//             `
//         }).join(" ")}
//     `
// }

// const ul = (obj) => {
//     return `
//         <ul>
//             ${makeList(obj.success)}
//         </ul>
//         <ul>
//             ${makeList(obj.failure)}
//         </ul>
//         <ul>
//             ${makeList(obj.skipped)}
//         </ul>

//     `
// }
// document.querySelector('.list').innerHTML = ul(result);



// const source = [1,2,3,4,5,6,7,8,9,10];
// const removeFristTwo = (list) => {
//     const [a,b,...arr] =  list;
//     return arr;
// }
// console.log(removeFristTwo(source));
// console.log(source);



// const arr1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
// let arr2;
// arr2 = [...arr1];
// console.log(arr2);



// const spreatOut = () =>{
//     let fragment = ['to', 'code'];
//     let sentence = ['Learning',...fragment, 'is', 'funs'];
//     return sentence;
// }
// console.log(spreatOut());

// let myConcat = function (arr1, arr2){
//     return arr1.concat(arr2);
// }


// Arrow functions
// const myConcat = (arr1, arr2) => {
//     "use strict";
//     return [...arr1, ...arr2];

// }
// console.log(myConcat([1, 2], [3, 4]));

// let sumNumber = (number1, number2) => {

//     number2 = typeof number2 !== "undefined" ? number2 : 1;

//     return number1 + number2;
// }

// console.log(sumNumber(5));

const getcountDownIterator = function *(countDown){
    let i = countDown;
    yield i;
    while( i > 1){
        yield --i;
    }
}

console.log([...getcountDownIterator(10)]);