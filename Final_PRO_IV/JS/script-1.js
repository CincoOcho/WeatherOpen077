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

    $('#submitWeather').click(function(){
        var city = $("#city").val();
        var appID =("&APPID=5bafdd2fa586f9c2def148d4ed83f4f9");
        var api =('http://api.openweathermap.org/data/2.5/weather?q=');
        var units =('&units=metric');
        if(city != ''){
            $.ajax(
                {
                    url:api + city + units +appID,
                    type: "GET",
                    dataType:"jsonp",
                    success: function(data){
                        var widget = showData(data);
                        $("#show").html(widget);
                        $("#city").val('');
                    }
                });
        }
        else
        $('#error').html("<div class='alert alert-danger text-center alert-dismissible' ><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field cannot be empty</div>");
    });

});

function showData(data) {
    return "<br><br><h2> Current weather for " + data.name +"," + data.sys.country + "</h2>"+
            "<h3><strong>Weather</strong>: " + data.weather[0].main + "<img src=http://openweathermap.org/img/w/"+ data.weather[0].icon  + ".png>"+ "</h3>" +
            "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
            "<h3><strong>Temperature</strong>: " + data.main.temp + "&deg;C</h3>" +
            "<h3><strong>Pressure</strong>: " + data.main.pressure + " hPa</h3>"+
            "<h3><strong>Hummidity</strong>: " + data.main.hummidity + " %</h3>"+
            "<h3><strong>Min. Temperature</strong>: " + data.main.temp_min + "&deg;C</h3>" +
            "<h3><strong>Max. Temperature</strong>: " + data.main.temp_max + "&deg;C</h3>"            
}






