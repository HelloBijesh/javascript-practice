// 1)Fibonaci series 
// let a=0,b=1,nextTerm;

// for(let i=0;i<15;i++){
//     console.log(a);
//     nextTerm=a+b;
//     a=b;
//      b=nextTerm;
// }


//Fibonaci series Ends************************************************************************************
//2)Tribonaci series

// function tribonacci(n){
//     if(n==0 || n==1 || n==2)
//     return 0;
//     if(n==3)
//     return 1;
//     else
//     return tribonacci(n-1)+
//            tribonacci(n-2)+
//            tribonacci(n-3)
// }
// function printtribo(n){
//     for(let i=1;i<=n;i++)
//     console.log(tribonacci(i));
// }
// let n=10;
// printtribo(n);


//Tribonaci series ends ************************************************************************************
// 3)Missung number in an array 

// const arr = [1, 2, 4, 5, 7, 9];
// missout = [];
// for (let i = 1; i <= arr.length - 1; i++) {
//     if (arr.indexOf(i) == -1) {
//         missout.push(i)
//     }
// }
// console.log(missout);

//missing number in an array ends *************************************************************************
// 4)Data Duplication in an array
// const arr=[1,2,3,2,34,5,6,7,5,6,7,8];
// const duplicate=[...new Set(arr)];
// console.log(duplicate);   


// *******************************************
// const arr=[1,2,3,2,3,4,5,6,5,7,8];
// const duplicate=arr.filter((index,value)=>arr.indexOf(index)==value);
// console.log(duplicate);



// **********************************************
// const array = [1, 2, 2, 4, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5];
// const duplicates = [];

// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] === array[j] && !duplicates.includes(array[i])) {
//       duplicates.push(array[i]);
//     }
//   }
// }
// console.log(duplicates)
// ***********************************************************
// one question duplicate of array Object?????????????????????????????????????????????????????????????

// Data duplication ends***********************************************************************************************
// 5)Reverse String starts 
// const str="this is india";
//  const revetrse=str.split(' ').reverse(' ').join(' ');
//  console.log(revetrse);

// *********************************************************
// const str="this is india";
// const duplicate=str.split(' ').map(d=>d.split('').reverse(' ').join(''));
// console.log(duplicate);
// Reverse string Ends******************************************************************************************************************
// 6))Leap year
// function leapYear(year){
//     if((0 == year%4) && (0== year%100) || (0==year%400)){
//         console.log(year + "this is leap year");
//     }
//         else{console.log(year+"this is not leap year")

//         }
//     }

//     leapYear(2016);


//leap year logic ends *********************************************************************************

// 7)hiow to find prime number 
// function prime(n){
//     if(n===1){
//        return false;  
//     }else if(n===2){
//         return true;
//     }else{
//         for(var i=2;i<n;i++){
//             if(n%i===0){
//                 return false;
//             }
//         }return true;
//     }
// }
// console.log(prime(67));
// console.log(prime(20));




//prime number logic ends**********************************************************************************
// 7)Find Largest number of an Array

// const arr=[1,2,3,4,5];
// function largest(){
// for(let i=0;i<=arguments.length-1;i++){
//     if(arr[i]>arr[0])
//     arr[0]=arr[i];
// }
// // console.log(arr[i]);
// }
// largest();


// doutful upper ome 7 **************************************************************************************

//8)How many times numbers are their in an array

// const arr=[1,1,8,4,2,5,4,3,9,8,9,5,7,8,7];

// const count={};
// function numCount(){
//     for(const element of arr){
//         if(count[element]){
//             count[element]=count[element]+1
//         }else{
//             count[element]=1
//         }
//     }
//     return count;
// }
// console.log(numCount());




//How many times numbers are their in an array ends (8)*******************************************************

//9)How many times strings are their in an array 

// const arr=["happy","Bijesh","nayak","happy","Bijesh"];

// const count={};
// function countStr(){
//     for(const element of arr){
//         if(count[element]){
//             count[element]=count[element]+1
//         }else{
//             count[element]=1
//         }

//     }
//     return count
// }
// console.log(countStr());


//How many times strings are their in an array Ends 9)**************************************************************

//10)How many times letters are their in a string Starts

// const name="Happy";
// const arr=name.split('');

// const count={};
// function countLetter(){
//   for(const element of arr){
//     if(count[element]){
//         count[element]=count[element]+1
//     }
//     else{
//         count[element]=1
//     }
//   }
//   return count
// }
// console.log(countLetter());


//How many times strings are their in an array Ends (10)*********************************************************

// 11) how to reverse a string with logic Starts

// const arr="happy";
// const newName=arr.split('');

// const name2=[];
// function fn(){
//     for(let i=newName.length-1;i>=0;i--){
//         name2.push(newName[i])
//     }
//     return name2.join('');
// };
// console.log(fn());


// how to reverse a string with logic Ends (11)*********************************************************************

// 12)how to swap two variable Stat

// let a=10;
// let b=20;
// console.log(a);
// console.log(b);
// let temp;
// temp=a;
// a=b;
// b=temp;
// console.log(a);
// console.log(b);



// how to swap two variable Ends (12)***************************************************************************

// 13)how to write first leter will be capital strats 

// let str="the-title-case";
// let newStr=str.split('-').map(val=>{
//     return val.charAt(0).toUpperCase()+val.slice(1);
// })
// console.log(newStr);


// output:[ 'The', 'Title', 'Case' ]

// how to write first leter will be capital ends (13)************************************************************

// 14)promise question and answers starts

// const promise=new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve("Hi This Is Problem")
//     },3000)
// })
// promise.then(d=>console.log(d))


// Promise question answer Ends (14) ************************************************************************************

// let str="bat";
// let str1="tab";

// let str2=str.split('').sort().join('');
// let str3=str1.split('').sort().join('');
// console.log(str2=str3);





// Prime number++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// showPrime(20);

// function showPrime(limit){
//     for(let number=2;number<=limit;number++){
//         // console.log(number);
//         isPrime= true;
//         for(let factor=2;factor<=number;factor++){
//             if(number % factor===0)
//             isPrime = false
//         break;
//         }
//         // console.log(factor);

//         if(isPrime) console.log(number);
//     }

// }


// Prime number logic ends ===========================================================================================


//how to sort an array in looping*********************************************************************************

// var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

// for (var i = 1; i < Arr.length; i++)
//     for (var j = 0; j < i; j++)
//         if (Arr[i] < Arr[j]) {
//             var x = Arr[i];
//             Arr[i] = Arr[j];
//             Arr[j] = x;
//         }

// console.log(Arr);

// var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

// for(i=0;i<Arr.length;i++){
//     for(j=0;j<Arr.length;j++){
//         if(Arr[j]>Arr[j+1]){
//             let temp=Arr[j];
//             Arr[j]=Arr[j+1];
//             Arr[j+1]=temp;
//         }
//     }
// }
// // console.log(Arr);

// print 1 to 10 intervalof 2sec****************************************************************************8

// for (let i = 1; i <= 10; i++) {
//     setTimeout( () =>{
//       console.log(i)
//     }, i * 2000)
//   }

// in for loop if it is var output will come 11,11,11,11,11,... 10times
// if it is let output will come 1,2,3,,4,5,6,78,9,10

//const a = [1,2,[3,4,[5]]]; convert in to single array********************************************************

// var arr = [1,2,[3,4,[5]]]
//   var   result = arr.reduce((r, a) => r.concat(a), []);
//   var final=result.reduce((r,a)=>r.concat(a),[]);

// console.log(final)

//convert string to array*************************************************************************************
// const string = 'word';

// // Option 1
// string.split('');

// // Option 2
// var c=[...string];
// console.log(c);


// ******************************************************************************************************************
// var n=7;
// for(let i=1;i<=n+n-1;i++){
//  if(i >n){
//  console.log(2*n-i)
//  }else{
//  console.log(i)
//  }} 
// //  var=naturalNumber(6)


// or//
// let j=1;
// for(let i=1;i>0;i+=j){
//     console.log(i);
//     if(i==6)
//     j=-1
// console.log(i);
// }

// output=1,2,3,4,5,6,7,6,5,4,3,2,1


// =====================================================================================================================

//How to find thruthy value in js

// const array=[0,null,undefined,'',2,3,5];

// console.log(countTruthy(array));
// function countTruthy(array){
    // let count=0;
    // for(let value of array)
    // if(value)
    // count++;
    // return count;
    // }
 // =====================================================================================================================

// array destructuring
// In Array we are destructuring with the position
// let numbers=[1,2,3];



// let [a,b,c]=numbers;
// console.log(a);
// console.log(b);
// console.log(c);



// insawping we are using Array destructuring
// let a=1;
// let b=2;

// [b,a]=[a,b];
// console.log(a);
// console.log(b);

// ===================================================================================================================
// OBJECT DESTRUCTURING
// In object we are not destructing in the position
// let obj={
//     name:"happy",
//     age:30,
//     hello:function(){
//         console.log("hello Man");
//     }

// }
// let {name,age,hello}=obj;
// console.log(name,age);
// hello();
// suppose we want to write welcome instead of hello we write in

// let {name,hello:welcome}=obj;
// welcome();

// ==============================================================================================
// // var name = "Joker";

// var hero = {
//     name: "Batman",
//     getName: function() {
// return this.name;
//     }
//   };
// var getHeroName = hero.getName;
// console.log(getHeroName);
//   console.log(getHeroName());
// //   joker

//   // console.log(hero.getName());
// //   batman

// // console.log(hero.getName);

// let obj = {};
// obj.name = 'messi';
// obj.year= 2018;
// obj.speak = function(){
//  return "My Name is "+this.name+""+ "and this is year "+this.year;
// }
// console.log(obj.speak());

// let x=10;
// console.log(x--);
// console.log(x);


// ===============================================================duplicate find an object in an Array of objects
// let books = [
//     { title: "C++", author: "Bjarne" },
//     { title: "Java", author: "James" },
//     { title: "Python", author: "Guido" },
//     { title: "Java", author: "James" },
// ];

// const unique=[];
// for(let item of books){
//     const duplicate=unique.find(
//        (obj)=>obj.title === item.title && obj.author===item.author
//     );
//     if(!duplicate){
//         unique.push(item)
//     }
// }
// console.log(unique);


// =================================================filter an object in an Array of objects

// const movie=[
//         {title:"a",year:2017,rating:3.7},
//         {title:"b",year:2017,rating:4.3},
//         {title:"c",year:2024,rating:4.9},
//         {title:"d",year:2017,rating:4.7}
//     ];
    
    // const output=movie.filter((film)=>(film.rating)>4?1:0);
    // console.log(output);
    
    // const result=movie.filter(m=>m.year===2017 && m.rating>4)
    // .sort((a,b)=>a.rating-b.rating)
    // .reverse()
    // .map(m=>m.title);
    // console.log(result);
