
//creating strings

// const string= new string();
// const hello = "hello"

// const str= 'world';

// console.log`hello ${str} how are ${"you"}`;
// output : ['hello ', ' how are ', '', raw: Array(3)] 'world' 'you'

// **)

// function test(string,youtubechannel,person){
//     console.log(string,youtubechannel,person);
//     return;
// }
// const channel = "happy solutions"
// const name = "happy"

// test`subscribe to ${channel} run by ${name}`
// output:- ['subscribe to ', ' run by ', '', raw: Array(3)] 'happy solutions' 'happy'


// **)string length

// const str ="hello"
// // console.log(str.length);  //output=5

// //Acessing characters

// // console.log(str[4]);
// console.log(str.charAt(4));


// **)//Modifying string

// const str= "hello world";
// // str[3]= "b" // cant do like this string are immutable in js
// console.log(str.replace("world","happy"));

// output=hello happy


// **)concat
// const str="hello happy"

// const newStr= str.concat(' and how are you');

// console.log(newStr);

// **)Trimm  //it removes space only from staring and ending

// const str= "            hello  world  "
// console.log(str.trim());


//searching

// const str="hello world";

// console.log(str.indexOf("l"));
   


// **) extracting

// const str= "hello world"

// console.log(str.substring(1,5));

// console.log(str.slice(3,1));


// **)converted string 

// const number =1;
// console.log(String(number));

//consvertrd object into string

// const toBeConverted={name:"happy"};
// console.log(JSON.stringify(toBeConverted));


// **)comapare String

// const str1="apple"
// const str2="banana"
// console.log(str1.localeCompare(str2));  
// // output=-1(it is not same) if same the output will be 0


// **)includes 
// if values is avialable means the output will be true otherwise false
// const str="Hello world";
// console.log(str.includes("world"));


// split method  
//convert string into array
// const str="hello world hello world"
// console.log(str.split("o"));  o/p= ['hell', ' w', 'rld hell', ' w', 'rld']

// console.log(str.split(" ")); o/p= ['hello', 'world', 'hello', 'world']


// **) Join method  use in array 

// const arr=["apple","banana"];
// console.log(arr.join("&"));  o/p=apple&banana