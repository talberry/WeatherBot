import fetch from 'node-fetch';

async function getTemp(location) {
    //temp
}

async function getWeather(location) {
    const key = '2752b085bb24306e72dbf85b73701144';

    if (location === undefined) {
        const city = 'sunnyvale';
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        );
        const data = await response.json();

        return Math.floor(data.weather.main);
    } else {
        const city = location;
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        );
        const data = await response.json();

        return Math.floor(data.weather.main);
    }
}

export {getTemp, getWeather};
