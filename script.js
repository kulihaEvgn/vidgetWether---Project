// task 1 --------------------

// 89f6c9dcc113ac260ec5f688b09b6ac8

const cityName = document.querySelector('.card__header_city');
const cityTemp = document.querySelector('.card__body_temp');
const cityDesc = document.querySelector('.card__footer_desc');
const cityIcon = document.querySelector('.card__footer_icon');
const cityWind = document.querySelector('.card__footer_wind');
const cityId = document.querySelector('#city');
const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "89f6c9dcc113ac260ec5f688b09b6ac8"
}
const cities = {
    698740: 'Odesa',
    709930: 'Dnipro',
    709717: 'Donetsk',
    702569: 'Lutsk',
    710687: 'CHERNOMORSKOYE',
    625144: 'Minsk'
}

for (key in cities) {
    let option = document.createElement('option');
    option.setAttribute('value', key);
    option.textContent = cities[key];
    cityId.append(option);
    if (cities[key] == 'Odesa') option.setAttribute('selected', '')
}


function getWeather() {
    fetch(`${param.url}weather?id=${cityId.value}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}
getWeather();

cityId.onchange = getWeather;


function showWeather(data) {
    cityTemp.innerHTML = Math.round(data.main.temp) + '&deg;';
    cityName.textContent = data.name;
    cityDesc.textContent = data.weather[0].description;
    cityWind.textContent = `Speed Wind : ${data.wind.speed} m/s`;
    cityIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
}

