var mySunrise = document.getElementById('mySunrise');
var mySunset = document.getElementById('mySunset');
var myForecast = document.getElementById('myForecast');


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var citySelector = document.getElementById("city"); //this variable is used in the getCityScout function. I am grabbing the value of the city option dropdown box depending on what is selected.
var cityScout = document.getElementById("cityscout"); //added an id to the cityscout button in HTML. This variable is called later for the event listener on line 75.
var latInput = document.getElementById("lat");
var longInput = document.getElementById("long");

//created an object and stored it in the cityCoordinates variable so that I can access its properties later.
var cityCoordinates = {
 Detroit: {
    Name: "Detroit",
    lat: "42.3314",
    long: "83.0458",
  },
 Miami: {
    Name: "Miami",
    lat: "25.7617",
    long: "80.1918",
  },
 'New York': {
    Name: "New York",
    lat: "40.7128",
    long: "74.0060",
  },
 Boston: {
    Name: "Boston",
    lat: "42.3601",
    long: "71.0589",
  },
 Phoenix: {
    Name: "Phoenix",
    lat: "33.4484",
    long: "112.0740",
  },
 Washington: {
    Name: "Washington",
    lat: "38.9072",
    long: "77.0369",
  },
 Alaska: {
    Name: "Alaska",
    lat: "64.2008",
    long: "149.4937",
  },
 Iowa: {
    Name: "Iowa",
    lat: "41.661129",
    long: "-91.530167",
  },
} 

//http://www.7timer.info/bin/astro.php?lon=113.17&lat=23.09&ac=0&lang=en&unit=metric&output=internal&tzshift=0
//http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml

//http://www.7timer.info/bin/astro.php?lon=${longCoordinates}&lat=${latCoordinates}&ac=0&lang=en&unit=metric&output=json&tzshift=0
//http://www.7timer.info/bin/api.pl?lon=${longCoordinates}&lat=${latCoordinates}&product=astro&output=xml

//Made this function instead of doing the for loop because it's shorter and cleaner than a for loop or an array method.
function getCityScout(){
  var city = citySelector.value;
  console.log(city)
  var cityObj = cityCoordinates[city]
  console.log(cityObj)
  var latCoordinates = cityObj.lat;
  console.log(latCoordinates)
  var longCoordinates = cityObj.long;
  console.log(longCoordinates)
  fetch(`https://www.7timer.info/bin/api.pl?lon=${longCoordinates}&lat=${latCoordinates}&product=civil&output=json`)
  .then(response => response.json())
  .then(function (data) {   
    console.log("data",data)
      var fcresponse = data.dataseries[0].weather
      console.log("fcresponse",fcresponse)
      //myForecast.textContent = fcresponse;
      //Forecast Local Storage
      var fclocal = fcresponse;
      localStorage.setItem("fclocal", JSON.stringify(fclocal));
      console.log("set forecast local storage")
  });
}

//https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400
function getSunriseScout(){
  var city = citySelector.value;
  console.log(city)
  var cityObj = cityCoordinates[city]
  console.log(cityObj)
  var latCoordinates = cityObj.lat;
  console.log(latCoordinates)
  var longCoordinates = cityObj.long;
  console.log(longCoordinates)
   fetch(`https://api.sunrise-sunset.org/json?lat=${latCoordinates}&lng=${longCoordinates}`)
  .then(response => response.json())
  .then(function a (data) {   
    console.log("data",data)
      var ssresponse = data.results.sunset
      console.log("ssresponse",ssresponse)
      var srresponse = data.results.sunrise
      console.log("srresponse",srresponse)
      //mySunset.textContent = ssresponse;
      //mySunrise.textContent = srresponse;
      //Sunset local Storage
      var sslocal = ssresponse;
      localStorage.setItem("sslocal", JSON.stringify(sslocal));
      console.log("set sunset local storage")
      //Sunrise local Storage
      var srlocal = srresponse;
      localStorage.setItem("srlocal", JSON.stringify(srlocal));
      console.log("set sunrise local storage")
      });
}

cityScout.addEventListener("click", getCityScout);
cityScout.addEventListener("click", getSunriseScout);

function SrisesetResults(){ 
  var sunscout = document.getElementById("sunscout");
      //Sunset Get local Storage
    let sslocal = localStorage.getItem("sslocal")
    console.log("get sunset local storage")
    mySunsetLocal.textContent = sslocal;
    console.log("send sunset to placeholder")  
  var sunscout = document.getElementById("sunscout"); 
    //Sunsrise Get local Storage
    let srlocal = localStorage.getItem("srlocal")
    console.log("get sunrise local storage")
    mySunriseLocal.textContent = srlocal;
    console.log("send sunrise to placeholder")
}

sunscout.addEventListener("click", SrisesetResults);
  
function ForecastResults(){
  var forecast = document.getElementById("forecastscout");
      //Forecast Get local Storage 
      let fclocal = localStorage.getItem("fclocal")
      console.log("get forecast local storage")
      myForecast.textContent = fclocal;
      console.log("send forecast to placeholder")
}

forecastscout.addEventListener("click", ForecastResults);
