// const arr=[3,4,5];

// //add in last  :=use push method
// arr.push(6,7);

// //adding value from first
// arr.unshift(1,2);

// //add the value in between anywhere
// const arrthree=[1,2,3,4,5,6]
// arrthree.splice(4,0,"a","b")
// console.log(arrthree);

// 2//finding element 

// const arr=[1,2,4,3,4,5,6];
// arr.index
// console.log(arr.indexOf(4,2));  //dout
// console.log(arr.indexOf(0)); //find the index number in a array
// // // console.log(arr.indexOf(9));  //if value is not their it return -1

// 3//Finding elemnet reference type

// const course=[
//     {id:1, name:"a"},
//     {id:2, name:"b"}
// ]

// const result=course.includes({id:1,name:"a"}); //returns false due to reference type both are in diffreenbt memory location
// console.log(result);
// find method -it returns first elemnt or value when condition satisfies 
//if not satiesfies ut return undefined (find method)

// const course=[
//     {id:1, name:"a"},
//     {id:2, name:"b"}
// ]
// const result=course.find(function (course){
//     return course.name==="a"
// });
// console.log(result); // output={ id: 1, name: 'a' }

// const output=course.find(function (course){
//     return course.name==="xyz"
// });
// console.log(output);  //output=undefined


// findIndex=it return the index no if not found return -1
// const course=[
//         {id:1, name:"a"},
//         {id:2, name:"b"}
//     ]
// const output=course.findIndex(function (course){
//         return course.name==="a"
//     });
//     console.log(output);

// 4//emptying an array

// let numbers=[1,2,3,4];
// numbers=[];
// numbers.length=0;
// numbers.splice(0,numbers.length)

// // we can use also pop method to empty array we have to do loop
// while(numbers.length>0){
//     numbers.pop();
// }

// console.log(numbers);


// 5//combining and slicing an array   (75 some dout)

// const first=[1,2,3];
// const second=[4,5,6];
// let combine=first.concat(second);


// console.log(combine);
// let slice=combine.slice(1,3)
// console.log(slice);


// in object case

// const first=[{id:1}];
// const second=[4,5,6];
// const combine=first.concat(second);
// console.log(combine);

// const slice=combine.slice(0,3);
// console.log(slice);


// 6//spread oprator

// const first=[1,2,3];
// const second=[4,5,6];

// const combine=[...first,"a",...second,"b"];
// console.log(combine);

// 8//Iterating of an array

// const numbers=[1,2,3,4];

// for(let num of numbers)
// console.log(num);  here we are using for-of loop

// numbers.forEach((number,index)=>console.log( number,index));  here we are using ForEach loop to iterate an array


// 9//sorting an array


// const arr=[3,1,2];
// arr.sort();
// console.log(arr);
// arr.reverse();
// console.log(arr);

// const courses=[
//     {id:1,name:'Node-js'},
//     {id:2,name:'Javascript'}
// ]

// courses.sort(function(a,b){
//     //a<b return -1
//     //a>b return 1
//     //a===b return 0
//     if(a.name<b.name) return -1;
//     if(a.name>b.name) return 1;
//     return 0;
// })
// console.log(courses);

// 10//Testing the element of an array

// const num=[1,-2,3];
// //every method return boolean value and it checks all value
// const Testing=num.every((elemnt)=>elemnt>0)

// console.log(Testing);

// const arr=[1,2,-3];

// //some method return boolean if it findatlaest one the condition is satisfy and rerturn true
// const atleastOne=arr.some((element)=>element>0);
// console.log(atleastOne);


// 11/map use case in an array
// const numbers=[1,2,3,4,5,-6,7];

// const filtered=numbers.filter(n=>n>=0);
// console.log(filtered);
// const mapped=numbers.map(n=>n>0);
// console.log(mapped);

// const mapped=numbers.map(n=>{
//     const obj={value:n};
//     return obj
// });
// console.log(mapped);

// 12 //Reduce method in js

// const numbers=[1,2,3-6,8,9];

// // let sum=0;
// // for(let num of numbers)
// // sum +=num;

// // console.log(sum);

// // using redunce method//
// const value=numbers.reduce((acc,curr)=>{
// return acc+=curr;
// },0);

// console.log(value);


// exerxise starts 1//when we give themin and max value it shows all value in between min and max
// const number=arrayFromRange(1,10);
// console.log(number);

// function arrayFromRange(min,max){
// const output=[];
// for(let i=min;i<=max;i++)
// output.push(i);
// return output;
// }

// exercise2 
    
// const numbers=[1,2,3,4,5];
// console.log(numbers.includes(1));

// //check what you are serachng in searchElement and if it is available then it is true otherwise false;
// function includes(array,searchElement){
//     for(let element of array)
//     if(element===searchElement)
//     return true
//  return false;
// }
// const include=includes([12,3],3)


// Exercise 3//

// const numbers=[1,2,3,4,5];
// const output=except(numbers,[1,2]);
// console.log(output);
//In this question output will show array-excluded
// function except(array,excluded){
// const value=[];
// for(let element of array)
// if(!excluded.includes(element))
//  value.push(element);
// return value;
// }
// const output=except([1,2,3,4,5],[1,2])
// console.log(output);

// Exercise 4//Moving an element
// const numbers=[1,2,3,4,5,6];
// const output=move(numbers,1,1);
// console.log(output);
// function move(array,index,offset){
//     const output=[...array];
//     const element=output.splice(index,1)[0];
//   const data=  output.splice(index+offset,0,element);
// return output;
// }

// exercise 5//count serachElememnt how many times it comming

// const numbers=[1,2,3,4,3,5];
//  const output=countOccurs(numbers,3)

// console.log(output);
// function countOccurs(array,searchElement){
// let count=0;
// // console.log(array);
// for(let element of array)
// if(element===searchElement)
// count++;
// return count;
// }

// using reduce method above solution\\\

// const numbers=[1,2,3,4,3,5];
//  const output=countOccurs(numbers,3)

// console.log(output);
// function countOccurs(array,searchElement){
//      return array.reduce((accumulator,current)=>{
//      const ocurrance=(current===searchElement)?1:0;
//     //  console.log(accumulator,searchElement,current);
//      return accumulator+ocurrance

//     },0)
// }

6//Get maximum number from an array

// const arr=[1,2,3,4];
// const max=getMax(arr);
// console.log(max);

// function getMax(array){
//     let max =array[0];
//     for(let i=1;i<array.length;i++)
//         if(array[i]>max)
//         max=array[i] 
//     return max
    

// }


// other method

// const arr=[1,2,3,4];
// const max=getMax(arr);
// console.log(max);
// function getMax(array){
//     return array.reduce(function (accumulator,current){
//         if(accumulator>current){
//             return accumulator
//         }else
//         current
//     })
    
// }

//above comapte logic we can write in single 
////return array.reduce((a,b)=>(a>b)?a:b)


// Exerxise 7// movies

// const movie=[
//     {title:"a",year:2017,rating:3.7},
//     {title:"b",year:2017,rating:4.3},
//     {title:"c",year:2024,rating:4.9},
//     {title:"d",year:2017,rating:4.7}
// ];

// const output=movie.filter((film)=>(film.rating)>4?1:0);
// console.log(output);

// const result=movie.filter(m=>m.year===2017 && m.rating>4)
// .sort((a,b)=>a.rating-b.rating)
// .reverse()
// .map(m=>m.title);
// console.log(result);

// =======================================================================================================
// const circle={
//     radius:1,
//     draw(){
//         console.log('draw');
//     }
// };
// //clone an object

// const another=Object.assign({},radius);
// const anotherOne={...circle}



// const circle={
//     radius:1,
//     draw(){
//         console.log('draw');
//     }
// };
// const another={}
// for(let key in circle)
// another[key]=circle[key]
// console.log(another);


// let another=Object.assign({},circle);
// console.log(another);

// let another=Object.assign({
//     color:'yellow'
// },circle);
// console.log(another);

// const another={...circle};
// console.log(another);