const today = new Date();

document.getElementById("currentyear").textContent = today.getFullYear();


document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


    function calculateWindChill(temp, wind) {
         return 13.12 + (0.6215 * temp) - (11.37 * wind ** 0.16) + (0.3965 * temp * wind ** 0.16);
}

const temperature = 5;
const windSpeed = 10;

if (temperature <= 10 && windSpeed > 4.8) { document.getElementById("windchill").textContent =
    calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
    
}

    