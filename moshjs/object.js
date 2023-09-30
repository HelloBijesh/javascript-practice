// function now(name,age){
//     return {
//         name,
//         age,
//         hello(){
//            console.log("wow");
//         }
       
//        }
// }

// let output=now("happy",20);
// console.log(output);

//constructor function
// function Circle(age){
//     // this.name="name",
//     this.age=age

// }
//in constructor function when we write new below it initially take the output from the constructor function 
//first it returns {},then new keyword return the value
//means it return the value thourgh this object
// const outputVal= new Circle(20)
// console.log(output);


// const output={
//     radious:1,
//     name:"happy"
// }
// output.color="balack"
// delete output.name;
// console.log(output);

//in const we cant assign another object -it will error ex: output={}
//But we can add value or delete the value


// function Circle(radius){
//     this.radius=radius,
//     this.draw=function (){
//         console.log("radius");
//     }

// }

// console.log(Circle.call({},1));
// const output=new Circle(1);
//above both are same
// // console.log(output);

// let num=10;
// function hello(num){
//     num++
// }
// hello(num);
// console.log(num);      //primitive

// let obj={value:10}
// function hello(obj){
// obj.value++
// }
// hello(obj);
// console.log(obj); //Refrenece type

// const draw={
//     radius:1,
//     draw:function (){
//         console.log("hi");
//     }
// }
// for(let raw in draw)
// console.log(raw);
// console.log(draw[raw]);
// for(let raw of Object.keys(draw))
//object.keys(draw)-return a object array thats why we are able to itrerabel using for--of loop
//object.entries(draw)-return an object array .here also we can use for--of loop(key and value we can get here)
// console.log(raw);

// important
// if('radius' in draw) console.log('yes');

// ==
// const Draw={
//     name:"happy",
//     draw:function (){
//         console.log("hello");
//     }
// }
// // const vale={},
// const value=Object.assign({},Draw)
// // const value={...Draw}

// console.log(value);

//==

//string primitive
// const message="hi";
// // console.log(typeof(message));
// //string object
// const another= new String("hi");
// console.log(typeof(another));




//question 1)

// let address={
//     street:'a',
//     city:'b',
//     zipcode:7656
// }

// function showaddress(address){
//     for(let key in address)
//     console.log(key, address[key]);
// }
// showaddress(address);

// 2)
// 
//CONSTRUCTOR FUNCTION===================>
//     function Showaddress(street,city,Number){
//        this. street="strret",
//         this.city="city",
//         this.zipcode="Number"
//     }

//    const value=new   Showaddress('a','b',32);
// console.log(value);

//FACTORY FUNCTION

// function address(street,city,zipcode){
//    return {street, //if key and value are same we can write street instead of street:street
//     city,
//     zipcode}
// }

// const value=address("third","bbsr",751015);
// console.log(value);

// 3) EXERCISE OBJECT EQUALITY


// function Showaddress(street,city,Number){
//            this. street="strret",
//             this.city="city",
//             this.zipcode="Number"
//         }
        
//          const outputOne=new Showaddress(1,2,3)
//          const outputTwo=new Showaddress(1,2,3)
//          const outputThree=outputOne;

//          console.log(areEual(outputOne,outputTwo));
//          console.log(areSame(outputOne,outputTwo));
//          console.log(areSame(outputThree,outputOne));

//          function areEual(outputOne,outputTwo){
//             return outputOne.street===outputTwo.street &&
//             outputOne.city===outputTwo.city  &&
//             outputOne.zipcode=== outputTwo.zipcode
//          }
//         function areSame(outputOne,outputTwo){
//             return outputOne===outputTwo
//         }


// 4)blog post object using object literal

// let post={
//     title:"a",
//     body:"b",
//     author:"c",
//     view:3,
//     comments:[
//         {author:"a",body:"b"},
//         {author:"c",body:"e"}
//     ],
//     isLive:true,
// }
// console.log(post);

// 5)constructor function
// when initially a blog starts you have to  show the output view,comment and live are not stated 
// function Post(title,body,author){
//     this.title=title,
//     this.title=title,
//     this.body=body,
//     this.view=0,
//     this.comments=[],
//     this.isLive=false;
// }

// const output=new Post('a','b','c')
// console.log(output);


// 6)Price Range which is more expensive in a resturant

// let priceRange=[
//     {'label':'$','tooltip':'inexpensive','minperson':1,'maxperson':10},
//     {'label':'$$','tooltip':'moderate','minperson':11,'maxperson':20},
//     {'label':'$$$','tooltip':'expensive','minperson':21,'maxperson':50}
// ]
// let resturants=[
//     {'averagePerson':5}
// ]


// ==============================================================
// const circle={
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     visible:true,
//     draw:function(){
//         console.log("draw");
//     }
// }
//      circle.draw();

    //  ***

    

   //factory function
   
//    function craeteCircle(radius){
//     return { 
//         radius,
//         draw(){
//             console.log("draw");
//         }
//     //    draw:function(){
//     //         console.log("draw");
//     //     }
//     };
    
//    }
//    console.log(craeteCircle(2));

// /constructor function
// function Circle(radius){
//     this.radius=radius;
//     this.draw=function (){
//         console.log("draw");
//     }
// }
// const circle=new Circle(1);


// const circle={
//     radius:1
// };
// circle.color='yellow';
// delete.
// let x={};

// //  const circle={
//     radius:1,
//     draw(){
//         console.log('draw');
//     }
//  }
// //  for(let key in circle)
//  console.log(circle[key]);
// console.log(Object.keys);

//  for(let key of Object.keys(circle))
// //  console.log(key);

// const circle={
//     radius:1,
//     draw(){
//         console.log('draw');
//     }
// };
// // const another={};
// // for(let key in circle)
// // console.log(another[key]=circle[key]);
// // console.log(another[key]);

// const obj=Object.assign({},circle);
// console.log(obj);

// const message='hi';
// console.log(typeof(message));

// const number=new Number('hi')
// console.log(typeof(number));


// const project={
//     name:"hello",
//     draw:function (){
//         console.log("draw");
//     }
// }
// // console.log(Object);
// const{name:a}=project;
// console.log(a);

const shape={
    radius:20,
    diameter(){
return this.radius*2;
    },
    perimeter:()=> {
        2*Math.PI*this.radius;
       console.log(this);
    }
}
// console.log(shape.diameter());
// console.log(shape.perimeter);
let a=shape.perimeter;
console.log(a);



//cloning an object //clonong means copy *********************************
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
// console.log(another);   ***************************************************************