// function Circle(radius){
//     this.radius = radius;

// this.draw=function(){
//     console.log('drdaw');
// }
// }

// class Circle{
//     constructor(radius){
//         this.radius = radius;
//         this.move = function() {}  //These are show in function
//     }
//     draw(){
//         console.log('draw');  //This one is shown in prototype
//     }
// }

// const c= new Circle(1)



// =====================================================
// STATIC METHOD

// class Circle{
//     constructor(radius){
//         this.radius= radius;
//     }
//     //instance method
//     draw(){

//     }

//     //static method
//     static parse(str){
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);
//     }
// }

// const circle = Circle.parse('{"radius":1}')
// console.log(circle);

// ===============================================================

// const Circle = function(){
//     this.draw= function (){console.log(this);}
// };

// const c=new Circle();
// //method call
// c.draw();  
// const draw = c.draw;
// //function call 
// draw();  

//* if we use stict mode and  do a function call output will shiow undefined means globally it show undefined

// ==================================================================
// inheritance

// class Shape{
//     constructor(color){
//         this.color = color;
//     }
//     move(){
//         console.log('move');
//     }
// }

// class Circle extends Shape{  //extends we use when we inhertitance from other class
//     constructor(color,radius){
//         super(color);   //super use when we inheritatae constructor from oter class
//         this.radius = radius;
//     }
//     draw(){
//         console.log('draw');
//     }
// }
// const c=new Circle("red",1);
// ==============================================================================

//Method Riding

// class Shape{
//     move(){
//         console.log('move');
//     }
// }

// class Circle extends Shape{
//     move(){
//         super.move();  //userd super for inheritance method from above class and we can use both of the metrhod
//         console.log('circle moves');
//     }
// }
// const c = new Circle()


// // c.move()  //we get move and circle moves

// =============================================================================



// const _item=new WeakMap();
// class stack{
//     constructor(){
// _item.set(this,[]);
//     }

//     push(obj){
//         _item.get(this).push(obj);
//     }

    
// }
// ******************************Leela Web Dev class and static method below************
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     hello() {
//         console.log(`hello world  this is  ${this.name} and my age is ${this.age}`);
//     }
// }


// class Happy extends Person {
//     constructor(age) {
//         super('bijesh')
//         this.age = age;
//     }

//     hello(){
//         console.log("Hello");
//     }
//     helloTwice(){
//         super.hello();
//         super.hello();
//     }

// }


// let happy = new Happy(30);
// happy.helloTwice();
// ========================================================
//static

// class Helper{
//     static getMessage(message){
//         console.log(message);
//     }
// }
// Helper.getMessage("helo");
