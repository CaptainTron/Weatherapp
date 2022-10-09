// getweatherinfo function to implement the API call and return the data from the server
const getweatherinfo = (city) => {
    // declare the API_KEY
    let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
    // Give the URL of the API that we are going to fetch data from
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    // Use Full_URL method to implement the search option in the city and get it all information about it, it will basically make the full URL
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    // it will fetch the information from the webserver
    const weatherPromise  = fetch(FULL_URL);
    // define what we have to do with data, such after getting result from the data and make it admire true when available
    return weatherPromise.then((response) => {
    return response.json();
  })
    
}
// Define the search-city function that wil take variable city and value from the input box

// and will call the getwheatherinfo function will make an api call from the server and get the result from the server and finally process that result 
// from '.then' method process the result and get that data to showdata function if all the condition is otherwise it will throww an error
const searchcity =() => {
    const city = document.getElementById('inputcity').value || "Gorakhpur"
    getweatherinfo(city)
    .then((res)=>{
        showdata(res);
    }).catch((error)=>{
        console.log(error);
        alert("Something Went Wrong !!")
    })
}
// showdata function that will update the DOM element from the data that it will get from the API call
const showdata = (weatherdata) => {
    console.log(weatherdata)
    document.getElementById('location').innerText = weatherdata.name;
    document.getElementById('cond').innerText = weatherdata.weather[0].main;
    document.getElementById('temp').innerText = weatherdata.main.temp += " ℃";
    document.getElementById('mintemp').innerText = weatherdata.main.temp_min += " ℃";
    document.getElementById('maxtemp').innerText = weatherdata.main.temp_max += " ℃";
    document.getElementById('humi').innerText = weatherdata.main.humidity
    document.getElementById('windspeed').innerText = weatherdata.wind.speed
}
// this is to search the content in search box by just pressing the enter key
// create the variable wage and put the html content to inputcity
var wage = document.getElementById("inputcity");
// addEventListener and use keydown method , with function to check if any key is pressed if presssed does it match value "Enter" and then call searchcity()
wage.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        // call the searchcity()
        searchcity()
    }
});
