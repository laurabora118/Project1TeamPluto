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
 
  fetch(`https://www.7timer.info/bin/api.pl?lon={longCoordinates}&lat={latCoordinates}&product=civil&output=json`)
  .then(response => response.json())
  .then(data => console.log(data));
  
  //Original
  //fetch(`http://www.7timer.info/bin/api.pl?lon=${longCoordinates}&lat=${latCoordinates}&product=civil&output=json`)
  //.then(response => response.json())
  //.then(data => console.log(data));
  // getApi(cityObj)
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
  .then(data => console.log(data));
  // getApi(cityObj)
}


cityScout.addEventListener("click", getCityScout);
cityScout.addEventListener("click", getSunriseScout);









  







