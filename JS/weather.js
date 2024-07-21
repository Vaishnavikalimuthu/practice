const city = document.getElementById('city')
const btn_city = document.getElementById("btn_city")
const weather_img = document.getElementsByClassName('weather_img')
const temp = document.getElementById('temp') 
const des = document.getElementById('des')
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")

async function checkWeather(cname){
    const api_key = "c59f00cc6f070cb18b875cfae332d374"
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cname}&appid=${api_key}`)

    const data = await response.json() 
    
    console.log(data)

    if(data.cod === '404'){
        console.log("Error")
    }
    temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`
    des.innerHTML = `${data.weather[0].description}`
    humidity.innerHTML = `${data.main.humidity}`
    wind.innerHTML = `${data.wind.speed}`


    switch(data.weather[0].main){
        case 'Clouds':
            weather_img.src="../images/clouds.jpg"
            break
        case 'Rain':
            weather_img.src="../images/Drizzling-Rain.avif"
            break
        case 'Mist':
            weather_img.src="../images/mist.jpg"
            break        
        case 'Snow':
            weather_img.src="../images/Cold-Weather.avif"
            break
        case 'Clear':
            weather_img.src="../images/clear.jpg"
            break
        case 'Sunny':
            weather_img.src="../images/Hot-Weather.avif"
            break
    }
}

btn_city.addEventListener('click',() => {
    checkWeather(city.value)
})


