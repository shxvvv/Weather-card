const apiKey = "b5ff9f9b3d4227be576ea59b9de118e6";
const city = "Chennai"; // Or any other city you want to get the weather for
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Extract relevant data from the response
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    // Display the data in your app's interface
    console.log(`Current temperature in ${city}: ${temperature}°C`);
    console.log(`Weather: ${weatherDescription}`);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
