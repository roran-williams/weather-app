const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res) {

	res.sendFile(`${__dirname}/index.html`);
	
});

app.post("/",function(req,res){

	const city = req.body.cityName;
	const apiKey = "c481a39878224b934320c4e818418808";
	const units = "metric";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
	
	https.get(url,function(response){
		response.on("data",function(data){
			var weatherData = JSON.parse(data);
			const temp = weatherData.main.temp;
			const weatherDescpription = weatherData.weather[0].description;
			const icon = weatherData.weather[0].icon;

			const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

			res.write(`<p> <img src=${iconUrl}></p>`);

			res.write(`<p>description ${weatherDescpription}</p>`);
			res.write(`<p>temprature ${temp} degrees celcious </p>`);

			res.send();
		})

		// console.log(response.statusCode);
	});

})


app.listen(3000,function(){
	console.log("[+]running 3000");
})