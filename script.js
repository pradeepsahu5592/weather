const searchBtn = document.getElementById("searchBtn");
let search = document.getElementById("search");
const cel = document.getElementById("cel");
const dsrp = document.getElementById("discription");
const place = document.getElementById("place");
const windData = document.getElementById("windData");
const humidityData=document.getElementById("humidityData");
const maxData = document.getElementById("maxData");
const minData = document.getElementById("minData");
const pressureData = document.getElementById("pressureData");
const seaData = document.getElementById("seaData");
const country = document.getElementById("country");
const date = document.getElementById("date");
        
        







searchBtn.addEventListener("click",()=>{
    let data = search.value;
    console.log(data);
let urlA = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=cd3171e9851260b568e88679e1602a07` ;

    var settings = {
        "async" : true,
        "scrossDosys" : true,
        "url" : urlA ,
        "method" : "GET",
        "headers" :{}
    }
    
    $.ajax(settings).done(function(response){

        let temp = response.main.temp -273.15;
        console.log(temp);
        cel.innerHTML =`${Math.round(temp)}<span style="font-size: 22px;font-weight: 600;">&deg;C</span>`;
        dsrp.innerHTML= `${response.weather[0].description}`;
        place.innerHTML=`${response.name}`;
        windData.innerHTML=`${response.wind.speed}km/h`;
        humidityData.innerHTML=`${response.main.humidity}%`;


        maxData.innerHTML=`${Math.round(response.main.temp_max - 273.15)}&deg;C`;
        minData.innerHTML=`${Math.round(response.main.temp_min - 273.15)}&deg;C`;

        pressureData.innerHTML=`${response.main.pressure}mbar`;
        country.innerHTML=`${response.sys.country}`;
        seaData.innerHTML=`${Math.round(response.main.sea_level/3.5)}m`;

        
        const time = new Date();
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[time.getMonth()];

        date.innerHTML=`${days[time.getDay()]}, ${time.getDate()} ${months[time.getMonth()]} `;


      
    })
})