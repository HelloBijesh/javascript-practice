// question 1 second largest Number

//Input:[12,35,1,20,34,1,35]



// function secondLargest(arr){
//     const uniqueArr =Array.from( new Set(arr));
//     uniqueArr.sort((a,b)=>{
//         return b-a;
//     });
// if(uniqueArr.length>=2){
//     return uniqueArr[1]
// }else{
//     return -1
// }

//     console.log(uniqueArr);
// }

// console.log(secondLargest([12,35,1,20,34,1,35]));

//another way to solve 2nd largset

// function secondLargestOptimised(arr){
//     let largest= -1;
//     let secondLargest = -1;
// }







// function hello(){
//     console.log("hello");
// }

// // console.log(hello());

// let run=function (){
//     console.log("hello");
// };
// // console.log(run());
// let move=run
// console.log(move);

//function declarartion
// walk();
// function walk(){
//     console.log('walk');
// }


// //function expression
// run()
// var run=function (){
//     console.log("hello");
// }


// function sum(a,b){

// //     let total= 5;
// //     for(let value of arguments)
// // //    total+=value;
// //  total= total+value;
// //  return total;

// let total=9;
// return total;


//     // console.log(arguments);
    
// //   return  a+b; 
// }
// console.log(sum(7,6,8,7));




// function sum(...args){
// return args.reduce((a,b)=>a+b,0)
// }
// console.log(sum(1,2,3,4,5));


// function sum(...args){
//     return args.reduce((a,b)=>a+b)
//     }
//     console.log(sum([1,2,3,4,5]));   //cant get the output

// function sum(discount,...args){

// let total=args.reduce((a,c)=>a+c,0);
// return total*(1-discount)

// }
// console.log(sum(0.1,50,80,90,400));


// const person={
//     fname:"happy",
//     lname:"nayak",
//   get  fullname(){
//        return `${person.fname} ${person.lname}`
//     },
//     set fullname(value){

//         if(typeof value !== 'string') 
//         throw
//         const part=value.split(' ');
//         this.fname=part[0];
//         this.lname= part[1];
//     }
// };

// person.fullname=null;

// console.log(person);



// let x= 0;
// var y = 0;

// function starrt(){
//     for(var i=0;i<5;i++)
//         console.log(i);
//     console.log("a");
//     console.log(i);
// }
// starrt()



// const video={
//     title:'a',
//     play(){
//         console.log(this);
//     }
// };

// function Video(a){
//     this.a=a;
//     console.log(this);
// }
// const v= new Video("n")


// function playVideo(){
//     console.log(this);
// }

// playVideo.call({name:"happy"},1,2)
// playVideo.apply({name:"happy"},[1,2])
// playVideo.bind({name:"happy"})()
// // playVideo();

// console.log(sum([1,2,3,4]));
// function sum(...items){
// console.log(items);
// return items.reduce((a,b)=>a+b);
// }


// console.log(sum([1,2,3,4]));
// function sum(...items){
//     // console.log(Array.isArray(items[0]));
// // console.log(items);
// if(items.length === 1 && Array.isArray(items[0])){
// hello=[...items[0]];
// console.log(hello);
// return hello.reduce((a,b)=>a+b)
// }
// }

// const circle={
//     radius:1,
//     get area(){
//         return Math.PI*this.radius* this.radius;
//     }
// }
// console.log(circle.area);


// const numbers=[1,2,3,4];

// const count=countOccurrences(null,1);
// console.log(count);

// function  countOccurrences(array,searchElement){
//     const occurrence=(current===searchElement) ? 1:0;
//     return
// }


// let j=1;
// for(let i=1;i>0;i+=j){
//     console.log(i);
//     console.log(i);
//     if(i==6)
//     j=-1
// console.log(i);
// }

//  console.log('start');
//  function hello(){
//     setTimeout(()=>{console.log("hello")},1000)
//  }
//  const message=hello();
//  console.log(message);
//  console.log("stop");









// -----------callback,async,await practice-----------------------------------


 