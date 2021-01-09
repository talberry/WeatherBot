export default async function getTemp (location, units){
    const key = '2752b085bb24306e72dbf85b73701144';
    const city = location;
    const units = units;
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`);
    const data = await response.json();

    return Math.floor(data.main.temp);
};


