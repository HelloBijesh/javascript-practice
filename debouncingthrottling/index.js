const btn=document.querySelector(".Increment_btn");
const btnPres=document.querySelector(".increment_pressed");
const count=document.querySelector(".increment_count");


var pressCount=0;
var triggerCount=0;
//debouncing
// const debouncedCount=_.debounce(()=>{
//     count.innerHTML= ++triggerCount;   //debouncing when we stop for 8sec it counts
// },800)                                 //on every gap after 8sec it calls

// btn.addEventListener("click",()=>{
//     btnPres.innerHTML= ++pressCount;
//     // count.innerHTML= ++triggerCount;
//     debouncedCount();
// })


//throttling
const throttledCount=_.throttle(()=>{
    count.innerHTML= ++triggerCount;   //throttling  it counts after 8sec every time
},800)                                 //on every gap after 8sec it calls when you are working on it



btn.addEventListener("click",()=>{
    btnPres.innerHTML= ++pressCount;
    // count.innerHTML= ++triggerCount;
    throttledCount();
})

// continue with roadsidecoder polyfill in the same implementation