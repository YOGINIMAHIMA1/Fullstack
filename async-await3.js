const myJoke= async () =>
{
    const response= await fetch("https://icanhazdadjoke.com/",{
    method:"GET",
    headers: {
        Accept:"application/json"
    }
})
const JokeData = await response.json();
console.log(JokeData)
}
myJoke();
