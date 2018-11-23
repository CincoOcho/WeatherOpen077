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
        var city = $("#ciudad").val();
        var appID =("&APPID=5bafdd2fa586f9c2def148d4ed83f4f9");
                 
        var api =('https://api.openweathermap.org/data/2.5/forecast?q=');
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
        $('#error').html("<div class='alert alert-danger text-center alert-dismissible' ><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Llene elcampo *</div>");
    });

});

function showData(data) {
    return "<br><br>"+

               
                "<p id='textTemp'>Weather in " + data.city.name +", " + data.city.country + "<img class='imgTableData'src=''>"+"</p>"+
                "<p id='textTemp'>" + "<img id='iconTemp'src=http://openweathermap.org/img/w/"+ data.list.weather[0].icon  + ".png> " + data.list.main.temp + "&deg;C</p>"+ 
                "<p id='textSecond'>" + data.list.weather.description[0] + "</p>"+
                "<div class='tData'>"+

                    "<table>"+


                      "<tr>"+
                        "<td>Hummidity</td>"+
                        "<td>" + data.list.main.humidity + " %</td>"+
                      "</tr>"+
                        
                      "<tr>"+
                        "<td>Temperature Min.</td>"+
                        "<td>" + data.list.main.temp_min + " &deg;C</td>"+
                      "</tr>"+

                      "<tr>"+
                        "<td>Temperature Max.</td>"+
                        "<td>" + data.list.main.temp_max + " &deg;C</td>"+
                      "</tr>"+

                      "<tr>"+
                        "<td>Wind speed</td>"+
                        "<td>" + data.list.wind.speed + " m/s</td>"+
                      "</tr>"+

                      "<tr>"+
                        "<td>Wind direction</td>"+
                        "<td>"+ data.list.wind.deg + " &deg;</td>"+
                      "</tr>"+
                       
                    "</table>"+
                    "</div>"
}
