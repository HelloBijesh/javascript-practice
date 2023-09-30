
// While-loops are best used when you want the loop to break based on a condition other than the number of times it runs.

// 1)// if---else Condsition

// if(condition){
//     statement
// }
// else if(consition){
//     statement
// }
// else if(consition){
//     statement
// }
// else
// condition


// let hour=10;
// if(hour>=6 && hour<12){
//     console.log("Good Morning");
// }
// else if(hour>=12 && hour<18){
//     console.log("Good AfterNoon");
// }else
// console.log("Good Evening");


// 2//switch case

// switch(val){
//     case "someValueHere":
//       //execute some functionality here
//     break;
//     }

// let role='guest';

// // switch(role){
// // case 'guest':
// // console.log("Guest User");
// // break;

// // case 'moderator':
// //     console.log('Moderator User');
// //     break;

// //     default:
// //         console.log("unknown Usert");
// // }

// //same thing if we have to implement in if--else

// if(role==="guest") console.log("Guest User");
// else if(role==="moderator") console.log("moderator User");
// else console.log("Guest User");



// 3//For---loop
// for(let i=0;i<5;i++){
//     // console.log('Hello World',i);
//     if(i%2 !==0) console.log(i); 
// }
// for(let i=5;i>=1;i--){
//     if(i%2 !==0) console.log(i);
// }


// 4//while -lloop

// let i=0;
// while(i<=5){
//     if(i%2 !==0) console.log(i);
//     i++;
// }

// 5//do--while loop

// let i=0;
// do{
//     if(i%2 !==0) console.log(i);
//     i++; 
// }while (i<=5) {

// }


// 1//write a function that takes two numbers and retrurn the maximum of two


// function maximum(a,b){
//     if(a>b){
//         return a
//     }else 
//     return b
// }
// let output=maximum(6,7);
// console.log(output);


// function maximum(a,b){
//     return a>b?a:b
// }
// let output=maximum(6,7);
// console.log(output);


// 2//landscape of portatarte

// --------------when we want to see the output if it is geaterthan then true else if lesserthan it false

// function isLandscape(width,height){
//     return width>height?true:false;
// }
// let output=isLandscape(1,2);
// console.log(output);

// function isLandscape(width,height){
//     return width>height
// }
// let output=isLandscape(9,6);
// console.log(output);


// 3//Question
//divisible by 3 =>Fizz
//divisible by 5 =>Buzz
//divisible by both 3 and 5 =>FizzBuzz
//NOt divisible by  3 or 5 =>input
//Not a number => 'Not a number'

// function fizzBuzz(input) {
//     if (typeof input !== 'number')
//         return input;
//     if (input % 3 === 0 && input % 5 === 0)
//         return ('Fizz Buzz');
//     if (input % 3 === 0)
//         return ('fizz');
//     if (input % 5 === 0)
//         return ('Buzz');
//     return input;
// }

// let output = fizzBuzz(hello);
// console.log(output);


// 4//Question 

//speed limit=70
//5 ->1 Point
//12 points->licence suspended
//Above 70 means if 75=1 point if 80=2 points

// function checkspeed(spped){

// var limit=70;
// // var points=Math.floor((spped-limit)/5);
//     if(spped<limit+5)
//     return "ok"
// else{
//     const points=Math.floor((spped-limit)/5);
//     if(points>=12)
//     console.log('Liceence Cancelled');
// else
// console.log('points',points);
// }
// }
// let output=checkspeed(75);
// console.log(output);


// 5//Find Thruthy value

// const array=[0,null,undefined,'',2,3,5];

// console.log(countTruthy(array));
// function countTruthy(array){
// let count=0;
// for(let value of array)
// if(value)
// count++;
// return count;
// }


// 6//String properties

// const movie={
//     title:'a',
//     releaseYear:2018,
//     rating:4.5,
//     director:'b'
// };

// showProperties(movie)

// function showProperties(obj){

// for(let key in obj)
// // console.log(key);
// // console.log(obj[key]);

// if(typeof obj[key]==='string')
// console.log(key,obj[key]);

// }


// 7//Sum of multiple 3 and 5

//Multiple of 3:3,6,9
//Multiple of 5:5,10

// function sum(limit){
//     let sum=0;

//     for(let i=0;i<=limit;i++)
//     if(i %3 ===0 || i%5=== 0)
//     sum +=i;

//     return sum
// }
// console.log(sum(10));


// 8//Calculate Grade


// const marks = [80, 80, 80];
// //Average  = 70;

// //1-59; F
// //60-69; D
// //70-79; C
// //90-89; A


// console.log(calculateGrade(marks));
// function calculateGrade(marks) {
//     let sum = 0

//     for (let mark of marks)
//         // console.log(mark);
//     sum += mark
//     let average = sum / marks.length;

//     if(average>60) return F;
//     if(average<=60 && average>70) return D;
//     if(average<=70 && average>80) return C;
//     if(average<=80 && average>90) return B;
//     if(average<=90 && average>=100) return A
// }



// 9//Star Exercise

// showStar(2);
// function showStar(rows){

//     for(let row =1;row<= rows;row++){
//     let pattern = '';
//     for (let i=0;i<row;i++)
//     pattern += '*';

//     console.log(pattern);
//     }
// }

// 10//prime number

//prime (whose factor are only 1 and itself)
//composite 
//12=1,2,3,4,6,12
//can be divided evenly by its factors

//11=1,11
//13=1,13

showPrime(20);
function showPrime(limit){
 for(let number=2;number<=limit;number++){
    // console.log(number);
  let isPrime = true;
    for(let factor=2;factor<number;factor++){
        // console.log(number, + " "+factor);
        if(number % factor===0){
            isPrime = false;
            break;

        }
        if(isPrime) console.log(number);
    }
 }
}











