const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
  ];
  
  function getPosts() {
     setTimeout(()=> {
        let output='';
        posts.forEach((post)=>
        {
          output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML=output;
  },1000);
  }
  getPosts();



  const student =[
    {id:1 , name:'hkirat'},
    {id:2,name:'komal'},
    {id:3,name:'rita'},
    ];

    function data(){
        setTimeout(()=>
        {
            let out=''
            student.forEach((data1)=>
            {
               out+= `<li>${data1}</li>`
            })
        },2000)
        document.body.innerHTML=out;
    }
    data();