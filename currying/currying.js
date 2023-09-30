


// function f(a){
//     return function(b){
//         console.log(a,b);
//     }
// }
// console.log(f(5)(6));

//normal function
// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(2,6,1));

// in currying

// function sum(a){
//     return function (b){
//         return function (c){
//             return a+b+c
//         }
//     }
// }
// console.log(sum(2)(6)(1));


// question 2
// evaluate ('sum')(4)(2) =>6
// evaluate ('multiply')(4)(2) =>8
// evaluate ('divide')(4)(2) =>2
// evaluate ('subtract')(4)(2) =>2


// function evaluate(operation){
//     return function(a){
//         return function(b){
//             if(operation == "sum") return a+b;
//            else  if(operation === "multiply") return a*b;
//           else   if(operation === "divide") return a/b;
//           else if(operation ==="subtract") return a-b;
//           else return "invalid operation"

//         }
//     }
// }
// const mul =evaluate("multiply");
// console.log(mul(2)(4));


3//infinite currying ->


function add(a){
    return function (b){
        if(b) return add(a+b);
        return a;
    }

}
console.log(add(5)(2)(4)(8)());
