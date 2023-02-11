let city = "Varanasi"
let d = new Date()
// document.querySelector(".date-time").innerHTML=d.getDate()
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

function myfun() {
    let city = document.querySelector("#search-city").value
    let url = `http://api.weatherapi.com/v1/current.json?key=ae8808174ead4af190b94146221112&q=${city}`
    let allcard = document.querySelector("#temp-details")
    let response = fetch(url)
    response.then((v) => {
        return v.json()
    }).then((weather) => {
        cardhtml = ""

        // !testing for Weather + appending it in "all-cards" 
        for (items in weather) {
            console.log(weather[items])
        }

        // !for traversing object in object
        // for(i in weather[items].condition){ 
        //     console.log(weather[items].condition[i])
        // }
        // console.log(weather[items].name)
        document.querySelector("#temp").innerHTML = `${weather[items].temp_c} &deg`
        document.querySelector(".c-name").innerHTML = `${city}`
        cardhtml +=
            `<div class="temp-details">
          <div class="temp-d">Temp: ${weather[items].temp_c} &deg;C</div> <br>
          <div class="temp-d">Feels like: ${weather[items].feelslike_c} &deg;C</div> <br>
          <div class="temp-d">Wind -kph: ${weather[items].wind_kph} Kmph</div> <br>
          <div class="temp-d">Wind -deg: ${weather[items].wind_degree}&deg;</div> <br>
          <div class="temp-d">Wind -dir: ${weather[items].wind_dir}</div> <br>
          <div class="temp-d">Humidity: ${weather[items].humidity} &percnt;</div> <br>
          <div class="temp-d">Cloud: ${weather[items].cloud} &percnt;</div> <br>
          <div class="temp-d">Visibility -km: ${weather[items].vis_km} Kmph</div> <br>
          <div class="temp-d">Gust_kph: ${weather[items].gust_kph} Kmph</div> <br>
          <div class="temp-d">Pressure-in: ${weather[items].pressure_in}</div> <br>
          <div class="temp-d">UV: ${weather[items].uv} mW/m &square;</div> <br>
        </div>`
        allcard.innerHTML = cardhtml
    }).catch(err => console.error(err))
}