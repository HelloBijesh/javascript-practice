const posts=[
    {title:'post one',body:'this is one'},
    {title:'post two',body:'this is two'}
]
function getPosts(){
    setTimeout(()=>{
        let output="";
        posts.forEach((post,index)=>{
            output +=`<li>${post.title}</li>`
        });
        document.body.innerHTML=output;

    },1000)
};

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;

            if(!error){
                resolve();
            }else{
reject('Error:something went wrong')
            }
        },2000)

    })
    
}
createPost({title:'post three',body:'this is three'}).then(getPosts)


//async/Await
// async function init(){
//     await createPost({title:'post three',body:'this is three'})
//     getPosts();
// }
// init();


//async/Await/Fetch
async function fetchUsers(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    console.log(data);
}
fetchUsers();