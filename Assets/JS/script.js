var citySelector = document.getElementById("city"); //this variable is used in the getCityScout function. I am grabbing the value of the city option dropdown box depending on what is selected.
var cityScout = document.getElementById("cityscout"); //added an id to the cityscout button in HTML. This variable is called later for the event listener on line 75.

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
    Long: "80.1918",
  },
'New York': {
    Name: "New York",
    lat: "40.7128",
    Long: "74.0060",
  },
 Boston: {
    Name: "Boston",
    lat: "42.3601",
    Long: "71.0589",
  },
} 

//http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml
//might move this function to a different line depending on what makes sense.
function getApi(cityData) {
  var requestData = `http://www.7timer.info/bin/api.pl?lon=${cityData.long}&lat=${cityData.lat}&product=civil&output=json`;
    fetch(requestData)
      .then(function (response) {
        console.log(response);
    
        return response.json();
    });
  }


//Made this function instead of doing the for loop because it's shorter and cleaner than a for loop or an array method.
function getCityScout(){
  var city = citySelector.value;
  console.log(city)
  var cityObj = cityCoordinates[city]
  console.log(cityObj)
  getApi(cityObj)
}

cityScout.addEventListener("click", getCityScout);

//(ignore)
// var lon = cityObj.Long
// document.getElementById("whatever").value = lon
//cityobj.value
// .anything is accessing properties of an object
// array.length string.split("")
 //create function to change lat and long
 //text area look up






//IMPORTANT!!!!!! The input field for the sun scout and forecast scout buttons is going to be split in two. I'll explain better during class.





  







