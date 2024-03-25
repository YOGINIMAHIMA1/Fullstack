import  {posts} from "./post.js"
/*posts.forEach(post =>
{
    console.log(post)

})
*/

const filteredPosts=posts.filter((post) =>
    {
        return post.userId===1 ;
    })
    console.log(filteredPosts)