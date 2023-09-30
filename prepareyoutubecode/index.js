//OBJECT PRACTICE QUESTION


// const user={
//     name:"happy",
//     age:30
// };
// console.log(user);
// const strObj=JSON.stringify(user)
// // console.log(strObj);
// localStorage.setItem("test",strObj)

// console.log(JSON.parse(strObj));


// 2// console.log([..."happy"]);  //output-index.js:13 (5) ['h', 'a', 'p', 'p', 'y']


// 3

// const setting={
//     username:"happy",
//     level:19,
//     health:90,
// };
// //when we stringify like this below we will get the output whatwver in the array that only converted in to string
// const data=JSON.stringify(setting,["level"]);
// console.log(data);   //output: {"level":19}


//4****Important  OBJECT DESTRUCTURING
// let user={
//     name:"happy",
//     age:30,
//     fullName:{
//         first:"Bijesh",
//         lastname:"Nayak"
//     }
// };

// const {name}=user
// console.log(name);

// const {fullName:{first}}=user;
// console.log(first);

// 5//


// let person={name:"happy"};
// const menbers=[person]; //whe we are storing person in members array it store in 0 index
// person=null;
// console.log(menbers);  //output 0:{name:happy}


// but when we change person.name=null output will be null

// let person={name:"happy"};
// const menbers=[person];
// person.name=null;  //here we have chnge the name value to null
// console.log(menbers)   //output :0:{name:null}


//6   

// const value={Number:10};

// const multiply= (x={...value})=>{
//     console.log((x.Number *=2));
// };
// multiply();  //output=20
// multiply();  //20
// multiply(value); //20
// multiply(value); //40

//Roadsider coder object interview question 25mins