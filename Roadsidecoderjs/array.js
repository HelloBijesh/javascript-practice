// let person={
//     name:"bijesh",
//     age:30
// }

// let arr =["apple","banana","cherry",person];

// console.log(arr[3].name);
// console.log(arr.length);

// arr.pop()   //it removes last elememt from an array
// console.log(arr);

// arr.push("orange");  //add element in the end of the array
// console.log(arr);


// // **  Add to Top of the array

// arr.unshift("orange");
// console.log(arr);  //it add orange from the start of ths array


//   arr.shift();
//   console.log(arr);  //it remove from the start of the array

  //**  loop */

//   const arr=['orange', 'apple', 'banana', 'cherry', 'orange']
// //   for(let i=0;i<arr.length;i++){
// //     console.log(arr[i]);
// //   }


//   let i=0;
//   while(i<arr.length){
//     console.log(arr[i]);
//     i++
//   }

// inbuilt loops in Array

// const number= [1,2,3,4,5];

//  const newNums=number.map((item,index,array)=>{
//     // console.log(item);
//     // console.log(index);
//     // console.log(array);
//     return item+5;
// });

// const newNums=number.filter((item,index,array)=>{
//     return item > 3;
// })

// const newNums=number.reduce((prev,curr)=>{
// return prev+curr
// },0)

// const newNums=number.some((item,index,array)=>{
//     return item > 3;
// })

// console.log(newNums);



// // spread opeartor

// const nums=[1,2,3];
// const nums2=[4,3,6,7];

// // const finalNmaes=[...nums,...nums2];
// // console.log(finalNmaes);

// // function sum(...numbers){
// //     return numbers
// // }

// // console.log(sum(nums,nums2));

// console.log(nums.concat(nums2));


// slicce and splice method

// const str= ["apple","banana","cherry","mango","orange"]

// const sliceOut=str.slice(-2);
// console.log(sliceOut);

// const spliceOut=str.splice(1,2,"qiwi","potato")

// console.log(spliceOut);


//fill
// const nums=[1,2,3,4];

// let output=nums.fill(0);
// console.log(output);


//findIndex method   -it takes always callback if it found return the indexno otherwise it returns -1

// const nums=[1,2,3,4,5];
// // const index=nums.findIndex((item)=>item===2);
// const index= nums.indexOf(3)
// console.log(index);


// /flat

// let arrays=[1,[2,3],[4,5],6];
// const flatter=arrays.flat(arrays.length);
// console.log(flatter);


// -----------------------------------**************************************

let address={
  street:'a',
  city:"b"
};

function createAddress(street,city){
  return{
    street,
    city
  }
}

function CreateAddress(street,city){
  this.street=street;
  this.city=city
}

const address1=new CreateAddress('a','b')
console.log(address1 );