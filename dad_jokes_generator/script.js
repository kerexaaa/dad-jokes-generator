const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const API_KEY = "KEF1Use8Hm0TA9+3zDCTOQ==wSVTamSfvGYYYrVU"

const options = {
    method: 'GET',
    headers: {
        "X-Api-Key": API_KEY,
    },
}

const API_URL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

const tellJoke = async () => {

    try {
        jokeEl.classList.add("joke-updating")
        btnEl.disabled = true
        btnEl.innerText = "Loading..."
        const response = await fetch(API_URL, options)
        const data = await response.json()

        jokeEl.classList.remove("joke-updating")
        btnEl.disabled = false
        btnEl.innerText = "Tell me a joke"

        jokeEl.innerText = data[0].joke
    } catch (error) {
        btnEl.disabled = false
        btnEl.innerText = "Tell me a joke"
        jokeEl.innerText = "Something went wrong, try again later"
        console.error(error)
    }
}

btnEl.addEventListener("click", tellJoke)