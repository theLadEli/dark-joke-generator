
async function getJoke() {
    let response = await fetch('https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,racist&type=single');
    let data = await response.json();
    let joke = data.joke;
    console.log("Joke:", joke);
    document.getElementById("joke").innerText = joke;
}
// getJoke();