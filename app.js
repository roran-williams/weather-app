const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

app.post("/", function(req, res) {
    const city = req.body.cityName;
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    https.get(url, function(response) {
        let responseData = '';

        response.on("data", function(data) {
            responseData += data;
        });

        response.on("end", function() {
            const weatherData = JSON.parse(responseData);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

            res.write(`<p> <img src=${iconUrl}></p>`);
            res.write(`<p>description ${weatherDescription}</p>`);
            res.write(`<p>temperature ${temp} degrees Celsius</p>`);
            res.send();
        });
    });
});

app.listen(3000, function() {
    console.log("[+] running on port 3000");
});
