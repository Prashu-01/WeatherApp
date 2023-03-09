// setting default city from cookies
let city = "Varanasi"

// date on weather app
let d = new Date()
let mon = d.getMonth()
let str_mon
switch (mon) {
    case 0:
        str_mon = "Jan"
        break
    case 1:
        str_mon = "Feb"
        break
    case 2:
        str_mon = "Mar"
        break
    case 3:
        str_mon = "Apr"
        break
    case 4:
        str_mon = "May"
        break
    case 5:
        str_mon = "Jun"
        break
    case 6:
        str_mon = "July"
        break
    case 7:
        str_mon = "Aug"
        break
    case 8:
        str_mon = "Sept"
        break
    case 9:
        str_mon = "Oct"
        break
    case 10:
        str_mon = "Nov"
        break
    case 11:
        str_mon = "Dec"
        break
}
document.querySelector(".date").innerHTML= d.getDate()
document.querySelector(".mon").innerHTML = str_mon

// displaying weather of searched city
function myfun() {
    let city = document.querySelector("#search-city").value
    let url = `https://api.weatherapi.com/v1/current.json?key=ae8808174ead4af190b94146221112&q=${city}`
    let allcard = document.querySelector("#temp-details")
    let response = fetch(url)
    response.then((v) => {
        return v.json()
    }).then((weather) => {
        cardhtml = ""
        // testing for Weather + appending it in "all-cards" 
        // !for traversing object elements in object uncomment the below comment
        for (items in weather) {
            console.log(weather[items])
        }
        
        document.querySelector("#temp").innerHTML = `${weather[items].temp_c} &deg`
        document.querySelector(".c-name").innerHTML = `${city}`
        
        // weather status
        let status
        for(i in weather[items].condition){
            status=weather[items].condition[i]
        }
        document.querySelector(".wea-status").innerHTML=`${status}`

        // dynamically changing the background as per the weather condition
        let bg=document.querySelector("#container")
        switch(status){
            case "Sunny":
                bg.style.background="url(img/sunny_day.jpg) no-repeat fixed center"
                document.querySelector(".whether-status").innerHTML=`<img src="img/weather-icons/sun.png" alt="icon" class="whether-icon">
                <div class="wea-status">${status}</div>`
                break
            case "Cloudy":
                bg.style.background="url(img/cloudy.jpg) no-repeat fixed center"
                document.querySelector(".whether-status").innerHTML=`<img src="img/weather-icons/cloud.png" alt="icon" class="whether-icon">
                <div class="wea-status">${status}</div>`
                break
            case "Partly cloudy":
                bg.style.background="url(img/cloudy.jpg) no-repeat fixed center"
                document.querySelector(".whether-status").innerHTML=`<img src="img/weather-icons/cloud.png" alt="icon" class="whether-icon">
                <div class="wea-status">${status}</div>`
                break
            case "Rainy":
                bg.style.background="url(img/pexels-lisa-fotios-1107717.jpg) no-repeat fixed center"
                document.querySelector(".whether-status").innerHTML=`<img src="img/weather-icons/rainy.png" alt="icon" class="whether-icon">
                <div class="wea-status">${status}</div>`
                break
            case "Clear":
                bg.style.background="url(img/clear-night.jpg) no-repeat fixed center"
                document.querySelector(".whether-status").innerHTML=`<img src="img/weather-icons/moon.png" alt="icon" class="whether-icon">
                <div class="wea-status">${status}</div>`
                break
            // case "":
            //     break
            case "Mist":
                bg.style.background="url(img/mist.jpg) no-repeat fixed center"
                document.querySelector(".whether-status").innerHTML=`<img src="img/weather-icons/mist.png" alt="icon" class="whether-icon">
                <div class="wea-status">${status}</div>`
                break
            default:
                bg.style.background="url(img/pexels-pixabay-209831.jpg) no-repeat fixed center"
                document.querySelector(".whether-status").innerHTML=`<img src="img/weather-icons/cloud.png" alt="icon" class="whether-icon">
                <div class="wea-status">${status}</div>`
                break
        }

        // more weather status div
        cardhtml =
          `<span class="temp-d">Temp: ${weather[items].temp_c} &deg;C</span>
          <span class="temp-d">Feels like: ${weather[items].feelslike_c} &deg;C</span>
          <span class="temp-d">Wind -kph: ${weather[items].wind_kph} Kmph</span>
          <span class="temp-d">Wind -deg: ${weather[items].wind_degree}&deg;</span>
          <span class="temp-d">Wind -dir: ${weather[items].wind_dir}</span>
          <span class="temp-d">Humidity: ${weather[items].humidity} &percnt;</span>
          <span class="temp-d">Cloud: ${weather[items].cloud} &percnt;</span>
          <span class="temp-d">Visibility -km: ${weather[items].vis_km} Kmph</span>
          <span class="temp-d">Gust_kph: ${weather[items].gust_kph} Kmph</span>
          <span class="temp-d">Pressure-in: ${weather[items].pressure_in}</span>
          <span class="temp-d">UV: ${weather[items].uv} mW/m &square;</span>`
        allcard.innerHTML = cardhtml
    }).catch(err => alert(err))
}
