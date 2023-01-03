// const APIkey = '44f62dcb98528e9197f428899a6524bf'
const APIkey = '1e19de890032c2a8cea2057d61ce1a01'
const output = document.querySelector('output')
const select = document.getElementById('units')
const form = document.querySelector('form')
form.addEventListener('submit', async (evt) => { 
    evt.preventDefault()
    output.classList.add('loading')
    const city = document.getElementById('city').value
    if (city.trim() === "") return 
    const units = select.value 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=${APIkey}&units=${units}`
    const response = await fetch(url)
    output.classList.remove('loading')
    await new Promise ((resolve) => setTimeout(resolve, 0))
    if (response.ok){
        const data = await  response.json()
        console.log(data)
        const { name, main: { temp } } = data 
        output.textContent = `${name}: ${temp}°${units === 'metric' ? 'C' : 'F'}`
    } else (alert(output.textContent = `${city} not found.`))
   
})

