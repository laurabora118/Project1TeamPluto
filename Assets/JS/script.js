var requestData = `http://www.7timer.info/bin/api.pl?${cityCoordinates[0].long}&${cityCoordinates[0].lat}&product=civil&output=json`; //create function to change lat and long
var coordinates = document.getElementById("city");
var cityCoordinates = [
   {
    Name: "Detroit",
    lat: "",
    long: "",
  },
   {
     Name: "Miami",
    lat: "",
    Long: "",
  },
  {
    Name: "Miami",
   lat: "",
   Long: "",
 },
 {
  Name: "Miami",
 lat: "",
 Long: "",
},
]


function getApi(requestData) {
    fetch(requestData)
      .then(function (response) {
        console.log(response);
    
        return response.json();
    });
  }
  
getApi(requestData);




localStorage.setItem("42.3314, 25.7617, 40.7128, 42.3601, 29.7604, 33.4484, 35.0844, 39.7392, 36.1716, 45.5152, 34.0522") //lat
localStorage.setItem("83.0458, 80.1918, 74.0060, 71.0589, 95.3698, 112.0740, 106.6504, 104.9903, 115.1391, 122.6784, 118.2437") //long

function getCoordinates() {


 }

 var citySelect = document.getElementById("citySelect")


 citySelect.addEventListener("submit", function(){
    if

 });






