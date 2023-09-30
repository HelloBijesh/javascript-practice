// 1)://function Declaration
// function run(){
//     console.log("A");
// }

// // function statement
// let hello=function(){
//     console.log("a");
// };
// console.log(hello);
// hello();

// 2):hoisting
// in function declaration we get the output 
// run();
// function run(){
//     console.log("a");
// }

//in function expression we can get the output
// console.log(hello);
// var hello=function run(){
//     console.log("a");
// }


// 3)Rest operator


// function sum(...args){
// console.log(args);
// }
// console.log(sum(1,2,3,4,5,6,7)); //with restoperator we will get all the argument[1,2,3,4,5,6,7]
// without rest operator
// function sum(args){
//     console.log(args);
//     }
//     console.log(sum(1,2,3,4,5,6,7)); =>it returns 1 without rest operator


// when we add total value using rest operator

// function sum(...args){
//  return args.reduce((a,b)=>a+b);
// }
// console.log(sum(1,2,3,4,5,6,7,8));

//when we give some discout to a customer

// function sum(discount,...args){
//      const total= args.reduce((a,b)=>a+b);
//      return total*(1-discount);
//     }
//     console.log(sum(0.1,20,30));


// ***After rest operator we cant add more parameter ex-function x(1,...args,9) here we cant give 9 after rest parameteer


// 4)//Deffault parameter
// value are passes directly in parameteer we can pass also in argument but if we do like this then it is correct

// function intrest(prinicipal,rate=3.5,year=5){
//     return prinicipal*rate/100*year
// }
// console.log(intrest(10000));



// 5)//Getter and setter

//Getter=>accept properties
// setter=>Change (mutted) the properties


// =>Getter method
// const person={
//     firstname:"bijesh",
//     lastname:"nayak",
//     get fullname(){
//         return `${this.firstname} ${this.lastname}`
//     }
// }
// console.log(person.fullname); here we are using getter method get fullname



// =>setter method

// const person={
//     firstname:"bijesh",
//     lastname:"nayak",
//     get fullname(){
//         return `${this.firstname} ${this.lastname}`
//     },
//     set fullname(valuethis){         //when we are using setter we have to have value as a parameter
//         const parts=value.split(' ');
//         .firstname=parts[0];
//         this.lastname=parts[1]
//     }
// };
// console.log(person.fullname);

// person.fullname='happy nayak'
// console.log(person); //here we will get the output happy nayak instead of bijesh nayak



// ==>Error handling in js ?????dout


// 7)this key word 

// imp// method referense to object.
// function refer to global object window


// 1)method=>Object

// const video={
//     title:'a',
//     play(){
//         console.log(this);
//     }
// }
// console.log(video.play);


// ===========================================================================================================

// this keyword
// this.a=5;
// console.log(this.a);
// console.log(this); //this refers to window object

// this.a=5;
// function getParam(){
//     console.log(this.a); //here this refers to window object which is a=5;
// }
// getParam();


// this.a=5;
// const getParam=()=>{
//     console.log(this.a); //here this refers to window object which is a=5;
// }
// getParam();

// =====in object case how this works
// let user={
//     name:"happy",
//     age:30,
//     getDetails(){
//         console.log(this.name);  //noraml method this keyword refers to object(user)
//     }
// };
// user.getDetails();


// **
// let user={
//     name:"happy",
//     age:30,
//    childobj:{
//     newName:"Bijesh",
//     getDetails(){
//         console.log(this.newName, "and",this.name);  //noraml method this keyword refers to immediate parent(childobj)
//     }
//    }
// };
// user.childobj.getDetails();  //output:bijesh nad undefined

//** */
// let user={
//     name:"happy",
//     age:30,
//  getDetails:()=>{
//         console.log(this.name);  //noraml arrow function refres to window object
//     }
   
// };
// user.getDetails();

//** */
// let user={
//     name:"happy",
//     age:30,
//  getDetails(){
//        const nestedArrrow=()=>console.log(this.name);  //here this kewyword inheritae the value from parent function(getDetails) and parenrt refers to his parent object(user)
//     nestedArrrow();
//     }
   
// };
// user.getDetails();

// ***
// function makUser(){
//     return{
//         name:"jhon",
//         ref:this
//     }
// };
// let user= makUser();
// // console.log(user);
// console.log(user.ref.name);




//Exercise starts 1

// when we pass an array
// console.log(sum([1,2,3,4]));
// function sum(...items){
//     // console.log(Array.isArray(items[0]));
// // console.log(items);
// if(items.length === 1 && Array.isArray(items[0])){
// items=[...items[0]];
// console.log(items);
// return items.reduce((a,b)=>a+b)
// }
// }


//Area of a circle using object literal

// const circle={
//     radius:1,
//     get area(){
//         return Math.PI*this.radius* this.radius;
//     }
// }
// console.log(circle.area);