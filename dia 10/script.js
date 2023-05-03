const btn = document.getElementById('btn')
const div = document.getElementById('bromas')



const generateJoke = async () => {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    div.innerHTML = data.joke


}

generateJoke()

btn.addEventListener('click',generateJoke)
