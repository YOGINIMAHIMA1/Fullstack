const posts=[
     {title:'body 1',body:'this is body 1'},
     {title:'body 2', body:'this is body 2'},
]
function getPosts()
{
    setTimeout(()=>
    {
        let output=''
        posts.forEach((post)=>
        {
            output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML=output
    },1000)
}
// 

