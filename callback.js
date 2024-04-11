const posts=[
   { title:'post one',body:'This is body one'},
   {title:'Post two', body:'This is body two'},
   ]
   function getPosts(post)
   {
     setTimeout(()=>
     {
       let output='';
       posts.forEach((post)=>
       {
         output+=`<li> ${post.title}</li>`
       });
       document.body.innerHTML=output;
       
     },1000)
   }
   
   
   function createPost(post,callback)
   {
     setTimeout(()=>
     {
       posts.push(post)
       callback();
     },2000)
   }
   createPost({title:'Post Three',body:'This is post three', body:'this is post Three'},getPosts)
   