// 1)//fill operator 
//starting number means what we want to change from originial//here we have original number to 0
//2nd is index from where we want to change the origina value to zero

// const dummy=[1,2,3,4];
// const output=dummy.fill(0,3);
// console.log(output);



// 2)//flat method
//in this method we can make a single array from multipple array
//when we have have multiple array inside an array we have to write howmany array to do i  a single array

// const flatEx=[1,2,[3,4]];
// const flatteran=flatEx.flat();
// console.log(flatteran);


// const flatEx=[1,2,[3,4],[12,3,4,[1,2,3,4]]];
// const flatteran=flatEx.flat(5);
// console.log(flatteran)

//array dsa roadside coder continue after 30mins



const person={
    title:'a',
    tags:['a','v','c'],
    // showTags(){
        name:()=>console.log(this)
    // }
};
person.name();