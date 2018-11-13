document.getElementById("tab1").click();

function openTab(evt, tabSelect) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabSelect).style.display = "block";
    evt.currentTarget.className += " active";
}



// Consult to WEB to Weather
$(function() {      
    const _appId = "5bafdd2fa586f9c2def148d4ed83f4f9"
                    
    setupForecastClick();
    getWeather();

    ////////////////////////////////////////////////////////////

    function setupForecastClick() {
        $(".forecast-button").click(function() {
            
            if(this.dataset.modal === "ON"){
                this.dataset.modal = "OFF"
                $(this).html("Forecast");
                $(this).prev().slideUp();
            }
            else {
                this.dataset.modal = "ON"
                $(this).html("Close Forecast");

                if (this.dataset.forecast === "NO"){
                    this.dataset.forecast = "YES"; //prevent unnecessary api calls if clicked more than once
                    getForecast(this.dataset.cityId, this.dataset.cityName, this);
                }
                else
                    $(this).prev().slideDown();
            }
        });
    }

   
    function getWeather() {

        $.ajax({
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=tonala&appid="+ _appId,
        })    
        .done(function( data ) {
            $(".loader").slideUp().fadeOut();

            console.log("Successfully retrieved city data.");

            buildCityCards(data);
        });

    }

    //get the forecast for the clicked city. It appears that the API returns a list of 3 hour blocks
    //of weather forecasts so I'm just going to read the first one.
    function getForecast(cityClass, thisRef) {

        $.ajax({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=tonala&appid=" + _appId,
        })
        .done(function( msg ) {
            $(cityClass + " .forecast-text").text(msg.list[0].weather[0].main);
            $(cityClass + " .forecast-icon").html("<img src='http://openweathermap.org/img/w/" + msg.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
            $(thisRef).prev().slideDown();
        });

    }

    //build our cards. If I was allowed to use ES6 (Angular2/Aurelia) I would've made this a simple
    //repeater and it would've been much more lean, both in the JS and HTML
    function buildCityCards(data) {

        setWind(data.list);
        setTemps(data.list);
        setIcons(data.list);

        $(".cards").animate({ opacity: 1 }, { queue: false, duration: 'slow' });
    }

    function setWind(data) {

        $(".edinburgh .wind").html("Current wind: " + data[0].wind.speed + " m/s");
        
    }

    function setTemps(data) {

        $(".edinburgh .temp").html(Math.round(data[0].main.temp) + "° C");
       
    }

    function setIcons(data) {

        $(".edinburgh .icon").html("<img src='http://openweathermap.org/img/w/" + data[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
       
    }

});