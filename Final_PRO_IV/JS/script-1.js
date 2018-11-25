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
                           
        var api =('https://api.openweathermap.org/data/2.5/weather?q=');
        var units =('&units=metric');
        if(city != ''){
            $.ajax(
                {
                    url:api + city + units +appID,
                    type: "GET",
                    dataType:"jsonp",
                    success: function(data){
                        var widget = showData(data);
                        $("#tableData").html(widget);
                        $("#ciudad").val('');

                    }
                });
        }
        else
        $('#error').html("<div class='alert alert-danger text-center alert-dismissible' ><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Llene el campo obligatorio*</div>");
    });

});

function showData(data) {
    return "<br><br>"+

               
                "<p id='textTemp'>Weather in " + data.name +", " + data.sys.country + "<img class='imgTableData'src=''>"+"</p>"+
                "<p id='textTemp'>" + "<img id='iconTemp'src=http://openweathermap.org/img/w/"+ data.weather[0].icon  + ".png> " + data.main.temp + "&deg;C</p>"+ 
                "<p id='textSecond'>" + data.weather[0].description + "</p>"+

                "<div class='tData'>"+
                    "<table>"+

                      "<tr>"+

                        "<td><p><img src='../PIC/icons/clouds.png'width='40' height='40' align='left'></p>Cloudiness</td>"+
                        "<td>" + data.clouds.all + " %</td>"+
                      "</tr>"+
                          
                      "<tr>"+

                        "<td><p><img src='../PIC/icons/humidity.png'width='40' height='40' align='left'></p>Hummidity</td>"+
                        "<td>" + data.main.humidity + " %</td>"+
                      "</tr>"+
                        
                      "<tr>"+
                        "<td><p><img src='../PIC/icons/temp-low.png'width='40' height='40' align='left'></p>Temperature Min.</td>"+
                        "<td>" + data.main.temp_min + " &deg;C</td>"+
                      "</tr>"+

                      "<tr>"+
                        "<td><p><img src='../PIC/icons/temp-high.png'width='40' height='40' align='left'></p>Temperature Max.</td>"+
                        "<td>" + data.main.temp_max + " &deg;C</td>"+
                      "</tr>"+

                      "<tr>"+
                        "<td><p><img src='../PIC/icons/wind.png'width='40' height='40' align='left'></p>Wind speed</td>"+
                        "<td>" + data.wind.speed + " m/s</td>"+
                      "</tr>"+

                      "<tr>"+
                        "<td><p><img src='../PIC/icons/wind-direction.png'width='40' height='40' align='left'></p>Wind direction</td>"+
                        "<td>"+ data.wind.deg + " &deg;</td>"+
                      "</tr>"+

                      "<tr>"+
                        "<td><p><img src='../PIC/icons/press.png'width='40' height='40' align='left'></p>Pressure</td>"+
                        "<td>"+ data.main.pressure + " hPa</td>"+
                      "</tr>"+
                       
                      "<tr>"+
                        "<td><p><img src='../PIC/icons/cord.png'width='40' height='40' align='left'></p>Geo coords</td>"+
                        "<td>Lat.: "+data.coord.lat+ ",<br> Long.: "+ data.coord.lon+ "</td>"+
                      "</tr>"+

                    "</table>"+
                    "</div>"
}
