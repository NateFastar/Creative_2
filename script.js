document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = (document.getElementById("weatherInput").value).replace(/^\w/, c => c.toUpperCase());
  if (value === "")
    return;
  console.log(value);
    const url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + value + "?key=903aa366-0a28-4438-8064-c395172f2817";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
	  let forcast = "";
	  console.log(json);
	  if(json[0].meta != null){
		results += '<h2>' + json.length + " definitions found for " + value + "</h2>";	
		forcast += "<div class='dayColumn'>";
		for (let i=0; i < json.length; ++i)
		{
			forcast += "<div class='card mb-3'>";
			forcast += "<div class='row no-gutters' style='width:95%;'>";
			forcast += "<div class='col-md-4'>";
			forcast += "<h2 class='card-title'>" + (json[i].hwi.hw).replace(/^\w/, c => c.toUpperCase()) 	+ ", " + (json[i].fl).replace(/^\w/, c => c.toUpperCase()) + "</h2>";
			forcast += "</div>";
			forcast += "<div class='col-md-8'>";
			forcast += "<ul>";
			for (let j=0; j < json[i].shortdef.length; ++j)
			{
				forcast += "<li>" + (json[i].shortdef[j]).replace(/^\w/, c => c.toUpperCase()) + ".</li>";
			}
			forcast += "</ul>";
			forcast += "</div>";
			forcast += "</div>";
			forcast += "</div>";
		}
		forcast += "</div>";
		
 //     for (let i=0; i < json.weather.length; i++) {
//	results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
  //    }
    //  results += '<h2>' + json.main.temp + " &deg;F, Feels Like: " + json.main.feels_like + " &deg;F</h2>"
    //  results += "<p>"
//      for (let i=0; i < json.weather.length; i++) {
	//results += json.weather[i].description
	//if (i !== json.weather.length - 1)
	//  results += ", "
     // }
	  //results += "<br/>"+ json.main.humidity + "% Humidity";
	  //results += "<br/>Low: "+ json.main.temp_min + "&deg;F High: "+ json.main.temp_max + "&deg;F";
     // results += "</p>";
     
    }
	else{
		results += "<h2>No definitions found for " + value + "</h2>";
		if(json.length > 0)
		{
			forcast += "<div class='card' style='width:50%;'>";
			forcast += "<h2>Similar words to " + value + " include:</h2>";
			forcast += "<ul>";
			for(let i = 0; i < json.length; ++i)
			{
				forcast += "<li style='font-size:20px;'>" +json[i]+ "</li>"
			}
			forcast += "</ul>";
			forcast += "</div>";
		}
		else
		{
			forcast += "<h2>No similar words found.</h2>";
		}
	}
	 document.getElementById("forecastResults").innerHTML = forcast;
	document.getElementById("weatherResults").innerHTML = results;
	});
});