// function test(){
//     test();
// }
// test();


// function countDown(n){
//     for(var i=n;i>0;i--)
//     console.log(i);
// }
// countDown(3)
//recursion function ------------
// function recursiveCountDown(n){
//     if(n===0)
//     return;
//     console.log(n);
//     recursiveCountDown(n-1)
// }
// recursiveCountDown(3);
// recursiveCountDown(3) //first call n=3
// recursiveCountDown(2) //second call(n=3-1)
// recursiveCountDown(1) //third call(n=2-1)
// recursiveCountDown(0) //fourth call (n=1-1)


///

// noraml 
// function calculateTotal(n){
//     let total=0;
//     for(let i=0;i<=n;i++){
//         total+=i
//     }
//     return total;
// }
// console.log(calculateTotal(3));

//using recursion funcvtion 

// function calculateTotalrecursion(n,total=0){
// if(n===0)
// return total;
// return calculateTotalrecursion(n-1,total+=n)
// }
// console.log(calculateTotalrecursion(3));

// calculateTotalrecursion(3) //(3,0)
// calculateTotalrecursion(2,3) //(2,3)
// calculateTotalrecursion(1,5)   //(1,5)
// calculateTotalrecursion(0,6)   //(0,6)




// const teamStructure={
//     name:'kunal',
//     teams:[
//         {
//             name:'Harish',
//             teams:[
//                 {
//                     name:"Alisha",
//                     teams:[]
//                 }
//             ]
//         },
//         {
//             name:'Anurag',
//             teams:[]
//         }
//     ]
// }

// function getTeamDetails(t){
//     if(t.teams.length===0)
//     return;
// t.teams.forEach(team => {
//     console.log(team);
//     getTeamDetails(team)
// });

// }
// console.log(getTeamDetails(teamStructure));


