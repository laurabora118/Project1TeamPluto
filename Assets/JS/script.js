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
 Washignton: {
    Name: "Washington",
    lat: "38.9072",
    long: "77.0369",
  },
 Alaska: {
    Name: "Alaska",
    lat: "64.2008",
    long: "149.4937",
  },
 'New Hampshire': {
    Name: "New Hampshire",
    lat: "43.1939",
    long: "71.5724",
  },
 Texas: {
    Name: "Texas",
    lat: "331.9686",
    long: "99.9018",
  },
 Iowa: {
    Name: "Iowa",
    lat: "41.8780",
    long: "93.0977",
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
      var ssresponse = data.dataseries[0].weather
      console.log("ssresponse",ssresponse)
      myForecast.textContent = ssresponse;
  });
}

//FORECAST FOR HTML NAMES
//  <div><p>Forecast:</p><span id = "myForecast"></span></div>


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
  .then(function (data) {   
    console.log("data",data)
      var ssresponse = data.results.sunset
      console.log("ssresponse",ssresponse)
      var srresponse = data.results.sunrise
      console.log("srresponse",srresponse)
      mySunrise.textContent = srresponse;
      mySunset.textContent = ssresponse;
  });
}


cityScout.addEventListener("click", getCityScout);
cityScout.addEventListener("click", getSunriseScout);

//1 - transfer data needed to local storage with set item
//2 - get data from local storage with get item AND then also display the data

//LOCAL STORAGE EXAMPLE EQUATION 
//from https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/
//setItem() – the setItem method is used to add data to a web storage object. It takes in two arguments, a key and value pair, window. ...
//getItem() – the getItem method returns the value of the key name that's passed to it, such as window. localStorage. .

//from google w3 https://www.w3schools.com/jsref/prop_win_localstorage.asp
//*Save Data to Local Storage. 
//localStorage.setItem(key, value);
//console.log()
//*Read Data from Local Storage. 
//let lastname = localStorage.getItem(key);
//console.log()
//*Remove Data from Local Storage. localStorage.removeItem(key);
//console.log()
//Remove All (Clear Local Storage) localStorage.clear();
//console.log()

