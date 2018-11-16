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


$(document).ready(function(){
    const appId = "5bafdd2fa586f9c2def148d4ed83f4f9";
        var ciudad = "tonala";

            $.ajax(
                {      //http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml
                    url:'http://api.openweathermap.org/data/2.5/weather?q='+ ciudad + "&units=metric" + "&APPID="+appId,
                    type: "GET",
                    dataType:"jsonp",
                    success: function(data){
                       var widget = show(data);
                        $("#show").html(widget);
                        $("#ciudad").val('');
                    }

                });

});



function show (data){

return      "<br><br><h2> Current weather for " + data.name +"," + data.sys.country + "</h2>"+
            "<h3><strong>Weather</strong>: " + data.weather[0].main + "<img src=http://openweathermap.org/img/w/"+ data.weather[0].icon  + ".png>"+ "</h3>" +
            "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
            "<h3><strong>Temperature</strong>: " + data.main.temp + "&deg;C</h3>" +
            "<h3><strong>Pressure</strong>: " + data.main.pressure + " hPa</h3>"+
            "<h3><strong>Humidity</strong>: " + data.main.humidity + " %</h3>"+
            "<h3><strong>Min. Temperature</strong>: " + data.main.temp_min + "&deg;C</h3>" +
            "<h3><strong>Max. Temperature</strong>: " + data.main.temp_max + "&deg;C</h3>" +
            "<h3><strong>Wind Speed</strong>: " + data.wind.speed + " m/s</h3>" +
            "<h3><strong>Wind Direction</strong>: " + data.wind.deg + "&deg;</h3>" 
}





$(document).ready(function(){
    const appId = "5bafdd2fa586f9c2def148d4ed83f4f9";
    $('#submitBusca').click(function(){
        var ciudad = $("#ciudadB").val();

        if(ciudad != ''){
            $.ajax(
                {      //http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml
                    url:'http://api.openweathermap.org/data/2.5/weather?q='+ ciudad + "&units=metric" + "&APPID="+appId,
                    type: "GET",
                    dataType:"jsonp",

                    success: function(data2){
                       var widget2= show2(data2);
                        $("#show2").html(widget2);
                        $("#ciudad").val('');
                    }

                });
        }
        else
       
        $("#error").html("<div class='alert alert-danger' id='errorNotify'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>LLenar campo*</div>");
    });

});




function show2 (data2){

return      "<br><br><h2> Current weather for " + data.name +"," + data.sys.country + "</h2>"+
            "<h3><strong>Weather</strong>: " + data.weather[0].main + "<img src=http://openweathermap.org/img/w/"+ data.weather[0].icon  + ".png>"+ "</h3>" +
            "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
            "<h3><strong>Temperature</strong>: " + data.main.temp + "&deg;C</h3>" +
            "<h3><strong>Pressure</strong>: " + data.main.pressure + " hPa</h3>"+
            "<h3><strong>Humidity</strong>: " + data.main.humidity + " %</h3>"+
            "<h3><strong>Min. Temperature</strong>: " + data.main.temp_min + "&deg;C</h3>" +
            "<h3><strong>Max. Temperature</strong>: " + data.main.temp_max + "&deg;C</h3>" +
            "<h3><strong>Wind Speed</strong>: " + data.wind.speed + " m/s</h3>" +
            "<h3><strong>Wind Direction</strong>: " + data.wind.deg + "&deg;</h3>" 
}