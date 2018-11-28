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
    var api2=('https://api.openweathermap.org/data/2.5/forecast?q=')

    if(city != ''){

      $.ajax(
      {
        url:api + city + units +appID,
        type: "GET",
        dataType:"jsonp",
        success: function(data){
          var widget = showData(data);
          var ban=retornarBandera(data.sys.country);
          var icono=retornarimagen(data.weather[0].icon);

          $("#tableData").html(widget);
          $("#ciudad").val('');                  
          $("#bandera").attr("src",ban);

        }
      });

      $.ajax(
      { 

        url: api2+city+units+appID,
        type: 'GET',
        dataType: "jsonp",

        success: function(days){
          console.log(days);
          $("#tableDays").text("");
                      //$("#clima5horas").append("<p>"+data.list[0].main.temp+"</p>");
                      var imagen;
                      $("#tableDay1").append(
                        "<p class='textTitulo'>Weather and forecast in "+days.city.name+", "+days.city.country+"</p>");
                      
                     
                      for( j=0; j<=3; j++){
                       imagen=retornarimagen(days.list[j].weather[0].icon);
                       $("#tableDay1").append(                         
"<div class='tData'>"+
  "<table>"+
"<tr>"+
  "<td><p>Fecha/Hora</p></td>"+
  "<td>" + days.list[j].dt_txt + "</td>"+
  "</tr>"+

  "<tr>"+
  "<td><p>Condition</p><img src=" +imagen+" </td>"+
  "<td>"+ days.list[j].weather[0].description +"</td>"+
  "</tr>"+



  "<tr>"+
  "<td><p><img src='../PIC/icons/TEMP.png'width='20' height='20' align='left'></p>Temperature</td>"+
  "<td>" + days.list[j].main.temp + "&deg;C</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/clouds.png'width='20' height='20' align='left'></p>Cloudiness</td>"+
  "<td>" + days.list[j].clouds.all  + " %</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/humidity.png'width='20' height='20' align='left'></p>Hummidity</td>"+
  "<td>" + days.list[j].main.humidity + " %</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/temp-low.png'width='20' height='20' align='left'></p>Temperature Min.</td>"+
  "<td>" + days.list[j].main.temp_min + " &deg;C</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/temp-high.png'width='20' height='20' align='left'></p>Temperature Max.</td>"+
  "<td>" + days.list[j].main.temp_max + " &deg;C</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/wind.png'width='20' height='20' align='left'></p>Wind speed</td>"+
  "<td>" + days.list[j].wind.speed + " m/s</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/wind-direction.png'width='20' height='20' align='left'></p>Wind direction</td>"+
  "<td>"+ days.list[j].wind.deg + " &deg;</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/press.png'width='20' height='20' align='left'></p>Pressure</td>"+
  "<td>"+ days.list[j].main.pressure + " hPa</td>"+
  "</tr>"+
  "<br><br>"+
  "</table>"+
  "</div>"

                        );

                     }

                    for( j=9; j<=12; j++){
                       imagen=retornarimagen(days.list[j].weather[0].icon);
                       $("#tableDay2").append(

"<div class='tData'>"+
  "<table>"+
"<tr>"+
  "<td><p>Fecha/Hora</p></td>"+
  "<td>" + days.list[j].dt_txt + "</td>"+
  "</tr>"+

  "<tr>"+
  "<td><p>Condition</p><img src=" +imagen+" </td>"+
  "<td>"+ days.list[j].weather[0].description +"</td>"+
  "</tr>"+


  "<tr>"+
  "<td><p><img src='../PIC/icons/TEMP.png'width='20' height='20' align='left'></p>Temperature</td>"+
  "<td>" + days.list[j].main.temp + "&deg;C</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/clouds.png'width='20' height='20' align='left'></p>Cloudiness</td>"+
  "<td>" + days.list[j].clouds.all  + " %</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/humidity.png'width='20' height='20' align='left'></p>Hummidity</td>"+
  "<td>" + days.list[j].main.humidity + " %</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/temp-low.png'width='20' height='20' align='left'></p>Temperature Min.</td>"+
  "<td>" + days.list[j].main.temp_min + " &deg;C</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/temp-high.png'width='20' height='20' align='left'></p>Temperature Max.</td>"+
  "<td>" + days.list[j].main.temp_max + " &deg;C</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/wind.png'width='20' height='20' align='left'></p>Wind speed</td>"+
  "<td>" + days.list[j].wind.speed + " m/s</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/wind-direction.png'width='20' height='20' align='left'></p>Wind direction</td>"+
  "<td>"+ days.list[j].wind.deg + " &deg;</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/press.png'width='20' height='20' align='left'></p>Pressure</td>"+
  "<td>"+ days.list[j].main.pressure + " hPa</td>"+
  "</tr>"+
  "<br><br>"+
  "</table>"+
  "</div>"
                                );
                       
                             }

            




                    for( j=17; j<=20; j++){
                       imagen=retornarimagen(days.list[j].weather[0].icon);
                       $("#tableDay3").append(
"<div class='tData'>"+
  "<table>"+
"<tr>"+
  "<td><p>Fecha/Hora</p></td>"+
  "<td>" + days.list[j].dt_txt + "</td>"+
  "</tr>"+

  "<tr>"+
  "<td><p>Condition</p><img src=" +imagen+" </td>"+
  "<td>"+ days.list[j].weather[0].description +"</td>"+
  "</tr>"+



  "<tr>"+
  "<td><p><img src='../PIC/icons/TEMP.png'width='20' height='20' align='left'></p>Temperature</td>"+
  "<td>" + days.list[j].main.temp + "&deg;C</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/clouds.png'width='20' height='20' align='left'></p>Cloudiness</td>"+
  "<td>" + days.list[j].clouds.all  + " %</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/humidity.png'width='20' height='20' align='left'></p>Hummidity</td>"+
  "<td>" + days.list[j].main.humidity + " %</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/temp-low.png'width='20' height='20' align='left'></p>Temperature Min.</td>"+
  "<td>" + days.list[j].main.temp_min + " &deg;C</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/temp-high.png'width='20' height='20' align='left'></p>Temperature Max.</td>"+
  "<td>" + days.list[j].main.temp_max + " &deg;C</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/wind.png'width='20' height='20' align='left'></p>Wind speed</td>"+
  "<td>" + days.list[j].wind.speed + " m/s</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/wind-direction.png'width='20' height='20' align='left'></p>Wind direction</td>"+
  "<td>"+ days.list[j].wind.deg + " &deg;</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/press.png'width='20' height='20' align='left'></p>Pressure</td>"+
  "<td>"+ days.list[j].main.pressure + " hPa</td>"+
  "</tr>"+
  "<br><br>"+
  "</table>"+
  "</div>"


                       );
                       
                     }

                       for( j=25; j<=28; j++){
                       imagen=retornarimagen(days.list[j].weather[0].icon);
                       $("#tableDay4").append(

                      "<div class='tData'>"+
  "<table>"+
"<tr>"+
  "<td><p>Fecha/Hora</p></td>"+
  "<td>" + days.list[j].dt_txt + "</td>"+
  "</tr>"+

  "<tr>"+
  "<td><p>Condition</p><img src=" +imagen+" </td>"+
  "<td>"+ days.list[j].weather[0].description +"</td>"+
  "</tr>"+




  "<tr>"+
  "<td><p><img src='../PIC/icons/TEMP.png'width='20' height='20' align='left'></p>Temperature</td>"+
  "<td>" + days.list[j].main.temp + "&deg;C</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/clouds.png'width='20' height='20' align='left'></p>Cloudiness</td>"+
  "<td>" + days.list[j].clouds.all  + " %</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/humidity.png'width='20' height='20' align='left'></p>Hummidity</td>"+
  "<td>" + days.list[j].main.humidity + " %</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/temp-low.png'width='20' height='20' align='left'></p>Temperature Min.</td>"+
  "<td>" + days.list[j].main.temp_min + " &deg;C</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/temp-high.png'width='20' height='20' align='left'></p>Temperature Max.</td>"+
  "<td>" + days.list[j].main.temp_max + " &deg;C</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/wind.png'width='20' height='20' align='left'></p>Wind speed</td>"+
  "<td>" + days.list[j].wind.speed + " m/s</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/wind-direction.png'width='20' height='20' align='left'></p>Wind direction</td>"+
  "<td>"+ days.list[j].wind.deg + " &deg;</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/press.png'width='20' height='20' align='left'></p>Pressure</td>"+
  "<td>"+ days.list[j].main.pressure + " hPa</td>"+
  "</tr>"+
  "<br><br>"+
  "</table>"+
  "</div>"
                      );
                       
                     }

                       for( j=33; j<=36; j++){
                       imagen=retornarimagen(days.list[j].weather[0].icon);
                       $("#tableDay5").append(

                        
                        "<div class='tData'>"+
  "<table>"+
"<tr>"+
  "<td><p>Fecha/Hora</p></td>"+
  "<td>" + days.list[j].dt_txt + "</td>"+
  "</tr>"+

  "<tr>"+
  "<td><p>Condition</p><img src=" +imagen+" </td>"+
  "<td>"+ days.list[j].weather[0].description +"</td>"+
  "</tr>"+



  "<tr>"+
  "<td><p><img src='../PIC/icons/TEMP.png'width='20' height='20' align='left'></p>Temperature</td>"+
  "<td>" + days.list[j].main.temp + "&deg;C</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/clouds.png'width='20' height='20' align='left'></p>Cloudiness</td>"+
  "<td>" + days.list[j].clouds.all  + " %</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/humidity.png'width='20' height='20' align='left'></p>Hummidity</td>"+
  "<td>" + days.list[j].main.humidity + " %</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/temp-low.png'width='20' height='20' align='left'></p>Temperature Min.</td>"+
  "<td>" + days.list[j].main.temp_min + " &deg;C</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/temp-high.png'width='20' height='20' align='left'></p>Temperature Max.</td>"+
  "<td>" + days.list[j].main.temp_max + " &deg;C</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/wind.png'width='20' height='20' align='left'></p>Wind speed</td>"+
  "<td>" + days.list[j].wind.speed + " m/s</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/wind-direction.png'width='20' height='20' align='left'></p>Wind direction</td>"+
  "<td>"+ days.list[j].wind.deg + " &deg;</td>"+
  "</tr>"+
  "<tr>"+
  "<td><p><img src='../PIC/icons/press.png'width='20' height='20' align='left'></p>Pressure</td>"+
  "<td>"+ days.list[j].main.pressure + " hPa</td>"+
  "</tr>"+
  "<br><br>"+
  "</table>"+
  "</div>"

                        );
                       
                     }








                    } //IF to empty textSearch

                 });

    }
    else
      $('#error').html("<div class='alert alert-danger text-center alert-dismissible' ><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Llene el campo obligatorio*</div>");

  });
});


function showData(data) {
  return "<br><br>"+


  "<p class='textTitulo'>Weather in " + data.name +", " + data.sys.country + "<img class='imgTableData'src=''>"+"</p>"+
  "<p class='textTitulo'>" + "<img id='iconTemp'src=http://openweathermap.org/img/w/"+ data.weather[0].icon  + ".png> " + data.main.temp + "&deg;C</p>"+ 
  "<p class='textSecond'>" + data.weather[0].description + "</p>"+

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


retornarBandera= function(bandera){
  var urlBandera;
  switch(bandera){
    case"AF":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/af.png";
    break;
    case"AL":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/al.png";
    break;
    case"DE":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/de.png";
    break;
    case"AD":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ad.png";
    break;
    case"AO":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ao.png";
    break;
    case"AI":
    urlBandera="http://bandera.vlajky.org/nahled-velky/anguila.png";
    break;
    case "AQ":
    urlBandera="http://bandera.vlajky.org/nahled-velky/antartida.png";
    break;
    case"AG":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ag.png";
    break;
    case"SA":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/sa.png";
    break;
    case"DZ":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/dz.png";
    break;
    case"AR":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ar.png";
    break;
    case"AM":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/am.png";
    break;
    case"AW":
    urlBandera="https://www.banderasvdk.com/fotos/banderas/200-bandera-aruba.jpg";
    break;
    case"AU":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/au.png";
    break;
    case"AT":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/at.png";
    break;
    case"AZ":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/az.png";
    break;
    case"BS":
    urlBandera="http://www.banderas-mundo.es/data/flags/ultra/bs.png";
    break;
    case "BD":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/bd.png";
    break;
    case"BB":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/bb.png";
    break;
    case"BH":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/bh.png";
    break;
    case"BE":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/be.png";
    break;
    case"BZ":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/bz.png";
    break;
    case"BJ":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/bj.png";
    break;
    case"BM":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bermuda.svg/2000px-Flag_of_Bermuda.svg.png";
    break;
    case"BY":
    urlBandera="http://www.banderas-mundo.es/data/flags/ultra/by.png";
    break;
    case"BO":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/6/6b/Bandera-de-bolivia.png";
    break;
    case"BQ":
    urlBandera="https://www.entfernungsrechner.net/img/flag-icon-css/flags/4x3/bq.svg";
    break;
    case"BA":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ba.png";
    break;
    case"BW":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/bw.png";
    break;
    case"BR":
    urlBandera="https://olharesdaserra.files.wordpress.com/2016/01/escudo-brasil-rf_30334.jpg";
    break;
    case"BN":
    urlBandera="http://www.statnevlajky.sk/data/flags/big/bn.png";
    break;
    case"BG":
    urlBandera="https://www.comprarbanderas.es/images/banderas/400/34-bulgaria_400px.jpg";
    break;
    case"BF":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/bf.png";
    break;
    case"BI":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/bi.png";
    break;
    case"BT":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/bt.png";
    break;
    case"CV":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/cv.png";
    break;
    case"KH":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/kh.png";
    break;
    case"CM":
    urlBandera="https://www.comprarbanderas.es/images/banderas/400/41-camerun_400px.jpg";
    break;
    case"CA":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ca.png";
    break;
    case"TD":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/td.png";
    break;
    case"CL":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/cl.png";
    break;
    case"CN":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/cn.png";
    break;
    case "CY":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/cy.png";
    break;
    case"CO":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/co.png";
    break;
    case"KM":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/km.png";
    break;
    case"CD":
    urlBandera="https://www.comprarbanderas.es/images/banderas/400/congo_400px.jpg";
    break;
    case"CG":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/cg.png";
    break;
    case"KR":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/kr.png";
    break;
    case"KP":
    urlBandera="http://www.banderas-mundo.es/data/flags/ultra/kp.png";
    break;
    case"CI":
    urlBandera="http://simbologiadelmundo.com/wp-content/uploads/2016/06/r-Costa-de-Marfil.png";
    break;
    case"CR":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/cr.png";
    break;
    case"HR":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/hr.png";
    break;
    case"CU":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/cu.png";
    break;
    case"CW":
    urlBandera="http://bandera.vlajky.org/nahled-velky/curacao.png";
    break;
    case"DK":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/dk.png";
    break;
    case"DM":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/dm.png";
    break;
    case"EC":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ec.png";
    break;
    case"EG":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/eg.png";
    break;
    case"SV":
    urlBandera="http://enciclopedia.us.es/images/8/89/Bandera_de_El_Salvador.png";
    break;
    case"AE":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ae.png";
    break;
    case"ER":
    urlBandera="http://www.banderas-mundo.es/data/flags/ultra/er.png";
    break;
    case"SK":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/sk.png";
    break;
    case"SI":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/si.png";
    break;
    case"ES":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/es.png";
    break;
    case"US":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/us.png";
    break;
    case"EE":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ee.png";
    break;
    case"ET":
    urlBandera="https://www.comprarbanderas.es/images/banderas/400/63-etiopia_400px.jpg";
    break;
    case"RU":
    urlBandera="https://banderade.net/wp-content/uploads/2018/04/Bandera-actual-de-la-Federaci%C3%B3n-Rusa.jpg";
    break;
    case"PH":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ph.png";
    break;
    case"FI":
    urlBandera="https://cdn.pixabay.com/photo/2013/07/13/14/15/finland-162294_960_720.png";
    break;
    case"FJ":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/fj.png";
    break;
    case"FR":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/fr.png";
    break;
    case"GA":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ga.png";
    break;
    case"GM":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/gm.png";
    break;
    case"GE":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ge.png";
    break;
    case"GH":
    urlBandera="https://www.comprarbanderas.es/images/banderas/400/71-ghana_400px.jpg";
    break;
    case"GI":
    urlBandera="https://www.comprarbanderas.es/images/banderas/400/413-gibraltar_400px.jpg";
    break;
    case"GD":
    urlBandera="https://turismo.org/wp-content/uploads/2011/05/Bandera-de-Granada.png";
    break;
    case"GR":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/gr.png";
    break;
    case"GL":
    urlBandera="https://www.comprarbanderas.es/images/banderas/400/568-groenlandia_400px.jpg";
    break;
    case"GP":
    urlBandera="https://previews.123rf.com/images/dipressionist/dipressionist1404/dipressionist140400029/27806985-bandera-de-la-isla-de-guadalupe-franc%C3%A9s.jpg";
    break;
    case"GU":
    urlBandera="https://alltheflags.us/438/bandera-de-guam.jpg";
    break;
    case"GT":
    urlBandera="http://www.banderas-mundo.es/data/flags/ultra/gt.png";
    break;
    case"GF":
    urlBandera="https://4.bp.blogspot.com/-oT3T0dKBBM0/VurTmhF5SpI/AAAAAAAAB84/f9XpHcYd0oAXLk7_Y4wiB5omJC24H6JBw/w1200-h630-p-k-no-nu/b%2Bguyana%2Bfrancesa.png";
    break;
    case"GG":
    urlBandera="http://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Guernsey.svg/400px-Flag_of_Guernsey.svg.png";
    break;
    case"GW":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/gw.png";
    break;
    case"GQ":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/gq.png";
    break;
    case"GN":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/gn.png";
    break;
    case"GY":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/gy.png";
    break;
    case"HT":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ht.png";
    break;
    case"HN":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/1200px-Flag_of_Honduras.svg.png";
    break;
    case"HK":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/1200px-Flag_of_Honduras.svg.png";
    break;
    case"HU":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/hu.png";
    break;
    case"IN":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/in.png";
    break;
    case"ID":
    urlBandera="https://www.worldflags.es/imagenes/productos/556p_INDONESIA.JPG";
    break;
    case"IQ":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/iq.png";
    break;
    case"IR":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ir.png";
    break;
    case"IE":
    urlBandera="https://www.comprarbanderas.es/images/banderas/400/87-irlanda_400px.jpg";
    break;
    case"BV":
    urlBandera="https://i.ytimg.com/vi/N5JimfzqIkc/maxresdefault.jpg";
    break;
    case"IM":
    urlBandera="http://www.vitomotorsport.com/blog/wp-content/uploads/2018/09/isle-of-man-26904_960_720.png";
    break;
    case"CX":
    urlBandera="https://i.ytimg.com/vi/UCL-ApgHTYQ/maxresdefault.jpg";
    break;
    case"NF":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Norfolk_Island.svg/1280px-Flag_of_Norfolk_Island.svg.png";
    break;
    case"IS":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/is.png";
    break;
    case"AX":
    urlBandera="https://st.depositphotos.com/1951597/4448/v/950/depositphotos_44487313-stock-illustration-flag-of-aland.jpg";
    break;
    case"KY":
    urlBandera="https://i.ytimg.com/vi/p_fWLhbp_Vs/maxresdefault.jpg";
    break;
    case"CC":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg/1280px-Flag_of_the_Cocos_%28Keeling%29_Islands.svg.png";
    break;
    case"CK":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ck.png";
    break;
    case"FK":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Falkland_Islands.svg";
    break;
    case"FO":
    urlBandera="https://www.comprarbanderas.es/images/banderas/400/11628-islas-feroe_400px.jpg";
    break;
    case"GS":
    urlBandera="https://image.jimcdn.com/app/cms/image/transf/dimension=734x10000:format=png/path/sce56dabcaa017cc3/image/i788633bdbd58aa24/version/1491736246/image.png";
    break;
    case"HM":
    urlBandera="https://i.ytimg.com/vi/Jlff3op6nW4/maxresdefault.jpg";
    break;
    case"MP":
    urlBandera="https://josueferrer.files.wordpress.com/2017/01/flag_of_the_northern_mariana_islands-svg.png?w=535&h=268";
    break;
    case"MH":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/mh.png";
    break;
    case"SB":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/sb.png";
    break;
    case"TC":
    urlBandera="https://i.ytimg.com/vi/jDhGls2PALc/maxresdefault.jpg";
    break;
    case"UM":
    urlBandera="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/500px-Flag_of_the_United_States.svg.png";
    break;
    case"VG":
    urlBandera="https://i.ytimg.com/vi/MgNUnsKn5QA/maxresdefault.jpg";
    break;
    case"VI":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_the_United_States_Virgin_Islands.svg/1200px-Flag_of_the_United_States_Virgin_Islands.svg.png";
    break;
    case"IL":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/il.png";
    break;
    case"IT":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/it.png";
    break;
    case"JM":
    urlBandera="https://www.comprarbanderas.es/images/banderas/400/93-jamaica_400px.jpg";
    break;
    case"JP":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/jp.png";
    break;
    case"JE":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Jersey.svg/200px-Flag_of_Jersey.svg.png";
    break;
    case"JO":
    urlBandera="https://turismo.org/wp-content/uploads/2011/04/Bandera-de-Jordania.svg_-760x400.png";
    break;
    case"KZ":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/kz.png";
    break;
    case"KE":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ke.png";
    break;
    case"KG":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/kg.png";
    break;
    case"KI":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kiribati.svg/1200px-Flag_of_Kiribati.svg.png";
    break;
    case"KW":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/kw.png";
    break;
    case"LS":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/1200px-Flag_of_Lesotho.svg.png";
    break;
    case"LV":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/lv.png";
    break;
    case"LB":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/lb.png";
    break;
    case"LR":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/1200px-Flag_of_Liberia.svg.png";
    break;
    case"LY":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ly.png";
    break;
    case"LI":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/li.png";
    break;
    case"LT":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/lt.png";
    break;
    case"LU":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/lu.png";
    break;
    case"MO":
    urlBandera="https://cdn.pixabay.com/photo/2013/07/13/14/16/macau-162346_960_720.png";
    break;
    case"MK":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_Macedonia.svg/1200px-Flag_of_Macedonia.svg.png";
    break;
    case"MG":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/200px-Flag_of_Madagascar.svg.png";
    break;
    case"MY":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/my.png";
    break;
    case"MW":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/mw.png";
    break;
    case"MV":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/mv.png";
    break;
    case"ML":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ml.png";
    break;
    case"MT":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ml.png";
    break;
    case"MA":
    urlBandera="http://www.banderas-mundo.es/data/flags/ultra/ma.png";
    break;
    case"MQ":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Snake_Flag_of_Martinique.svg/250px-Snake_Flag_of_Martinique.svg.png";
    break;
    case"MU":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/mu.png";
    break;
    case"MR":
    urlBandera="https://comprar-banderas.com/wp-content/uploads/2017/01/bandera-de-mauritania.png";
    break;
    case"YT":
    urlBandera="https://www.wur.nl/upload_mm/d/2/0/c35dfb84-aa9d-4c29-b911-9ebb1ab321a0_frankrijk_d0af2eae_490x330.jpg";
    break;
    case"MX":
    urlBandera="https://www.mexicodesconocido.com.mx/wp-content/uploads/2018/01/significado_colores_bandera_mexico.jpg";
    break;
    case"FM":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/fm.png";
    break;
    case"MD":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/md.png";
    break;
    case"MC":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/mc.png";
    break;
    case"MN":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/mn.png";
    break;
    case"ME":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/me.png";
    break;
    case"MS":
    urlBandera="http://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Montserrat.svg/400px-Flag_of_Montserrat.svg.png";
    break;
    case"MZ":
    urlBandera="https://www.comprarbanderas.es/images/banderas/400/mozambique_400px.jpg";
    break;
    case"MM":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/mm.png";
    break;
    case"NA":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/na.png";
    break;
    case"NR":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/nr.png";
    break;
    case"NP":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1200px-Flag_of_Nepal.svg.png";
    break;
    case"NI":
    urlBandera="https://www.comprarbanderas.es/images/banderas/400/131-nicaragua_400px.jpg";
    break;
    case"NG": 
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ng.png";
    break;
    case"NE":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ne.png";
    break;
    case"NU": 
    urlBandera="http://flags.fmcdn.net/data/flags/w580/nu.png";
    break;
    case"NO": 
    urlBandera="http://www.banderas-mundo.es/data/flags/ultra/no.png";
    break;
    case"NC": 
    urlBandera="https://i.ytimg.com/vi/wC2bQJA2ELU/maxresdefault.jpg";
    break;
    case"NZ": 
    urlBandera="http://flags.fmcdn.net/data/flags/w580/nz.png";
    break;
    case"OM": 
    urlBandera="http://flags.fmcdn.net/data/flags/w580/om.png";
    break;
    case"NL": 
    urlBandera="http://flags.fmcdn.net/data/flags/w580/nl.png";
    break;
    case"PK": 
    urlBandera="http://www.banderas-mundo.es/data/flags/ultra/pk.png";
    break;
    case"PW": 
    urlBandera="http://flags.fmcdn.net/data/flags/w580/pw.png";
    break;
    case"PS":
    urlBandera="https://www.comprarbanderas.es/images/banderas/400/139-palestina_400px.jpg";
    break;
    case"PA": 
    urlBandera="http://flags.fmcdn.net/data/flags/w580/pa.png";
    break;
    case"PG":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/pg.png";
    break;
    case"PY": 
    urlBandera="http://www.banderas-mundo.es/data/flags/ultra/py.png";
    break;
    case"PE":
    urlBandera="https://www.comprarbanderas.es/images/banderas/400/143-peru_400px.jpg";
    break;
    case"PN": 
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_the_Pitcairn_Islands.svg";
    break;
    case"PF": 
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_of_French_Polynesia.svg/200px-Flag_of_French_Polynesia.svg.png";
    break;
    case"PL": 
    urlBandera="http://flags.fmcdn.net/data/flags/w580/pl.png";
    break;
    case"PT": 
    urlBandera="http://flags.fmcdn.net/data/flags/w580/pt.png";
    break;
    case"PR": 
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Puerto_Rico_%281952%E2%80%931995%29.svg/270px-Flag_of_Puerto_Rico_%281952%E2%80%931995%29.svg.png";
    break;
    case"QA":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/qa.png";
    break;
    case"GB": 
    urlBandera="http://flags.fmcdn.net/data/flags/w580/gb.png";
    break;
    case"CF": 
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/1200px-Flag_of_the_Central_African_Republic.svg.png";
    break;
    case"CZ": 
    urlBandera="http://flags.fmcdn.net/data/flags/w580/cz.png";
    break;
    case"LA":
    urlBandera="http://3.bp.blogspot.com/-04IW95tgX0I/VSWhmP86F-I/AAAAAAAABeQ/1Uyx18W0kEI/s1600/BanderaDeLaos.png";
    break;
    case"DO":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/do.png";
    break;
    case"RE": 
    urlBandera="http://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/500px-Flag_of_France.svg.png";
    break;
    case"RW": 
    urlBandera="http://flags.fmcdn.net/data/flags/w580/rw.png";
    break;
    case"RO":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ro.png";
    break;
    case"EH":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/eh.png";
    break;
    case"AS": 
    urlBandera="http://www.bandetex.com/resources/archivosbd/productos_galeria/9c674ec0e7e2c04fa9c623c50bad4fef.jpg";
    break;
    case"WS":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/ws.png";
    break;
    case"BL":
    urlBandera="http://www.bandetex.com/resources/archivosbd/productos_galeria/7d611ad1778a3b4ff1043629b08f7d84.jpg";
    break;
    case"KN":
    urlBandera="http://www.banderas-mundo.es/data/flags/ultra/kn.png";
    break;
    case"SM": 
    urlBandera="http://flags.fmcdn.net/data/flags/w580/sm.png";
    break;
    case"MF":
    urlBandera="http://flags.fmcdn.net/data/flags/w580/fr.png";
    break;
    case"MP":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_Saint-Pierre_and_Miquelon.svg/200px-Flag_of_Saint-Pierre_and_Miquelon.svg.png";
    break;
    case"VC":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/1200px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png";
    break;
    case"SH":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_Saint_Helena_%281874-1984%29.svg/250px-Flag_of_Saint_Helena_%281874-1984%29.svg.png";
    break;
    case"LC":
    urlBandera="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/1200px-Flag_of_Saint_Lucia.svg.png";
    break;
    case"VA":
    urlBandera="https://estaticos.muyhistoria.es/media/cache/400x300_thumb/uploads/images/pyr/54941b888c770c961fd6de62/bandera-vaticano-p.jpg";
    break;
    case"ST":
    urlBandera="https://www.viajejet.com/wp-content/viajes/los-colores-de-la-bandera-de-santo-tome-y-principe.png";
    break;
    case"SN":
    urlBandera="https://www.comprarbanderas.es/images/banderas/400/164-senegal_400px.jpg";
            //naka
            break;
            case"RS":
            urlBandera="http://flags.fmcdn.net/data/flags/w580/rs.png";
            break;
            case"SC":
            urlBandera="http://flags.fmcdn.net/data/flags/w580/sc.png";
            break;
            case"SL":
            urlBandera="http://flags.fmcdn.net/data/flags/w580/sl.png";
            break;
            case"SG":
            urlBandera="http://flags.fmcdn.net/data/flags/w580/sg.png";
            break;
            case"SX": 
            urlBandera="https://st.depositphotos.com/1587911/2193/i/950/depositphotos_21930327-stock-photo-the-flag-of-sint-maarten.jpg";
            break;
            case"SY":
            urlBandera="http://flags.fmcdn.net/data/flags/w580/sy.png";
            break;
            case"SO":
            urlBandera="https://www.worldflags.es/imagenes/productos/528p_SOMALIA.JPG";
            break;
            case"LK":
            urlBandera="http://flags.fmcdn.net/data/flags/w580/lk.png";
            break;
            case"SZ":
            urlBandera="http://flags.fmcdn.net/data/flags/w580/sz.png";
            break;
            case"ZA": 
            urlBandera="http://flags.fmcdn.net/data/flags/w580/za.png";
            break;
            case"SS":
            urlBandera="http://flags.fmcdn.net/data/flags/w580/ss.png";
            break;
            case"SD": 
            urlBandera="http://flags.fmcdn.net/data/flags/w580/sd.png";
            break;
            case"SE": 
            urlBandera="http://flags.fmcdn.net/data/flags/w580/se.png";
            break;
            case"CH": 
            urlBandera="http://flags.fmcdn.net/data/flags/w580/ch.png";
            break;
            case"SR": 
            urlBandera="http://flags.fmcdn.net/data/flags/w580/sr.png";
            break;
            case"SJ": 
            urlBandera="https://images-na.ssl-images-amazon.com/images/I/318OZ8uB3lL._SX300_QL70_.jpg";
            break;
            case"TH": 
            urlBandera="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/400px-Flag_of_Thailand.svg.png";
            break;
            case"TW": 
            urlBandera="http://flags.fmcdn.net/data/flags/w580/tw.png";
            break;
            case"TZ": 
            urlBandera="http://flags.fmcdn.net/data/flags/w580/tz.png";
            break;
            case"TJ": 
            urlBandera="http://flags.fmcdn.net/data/flags/w580/tj.png";
            break;
            case"TG":
            urlBandera="http://1.bp.blogspot.com/-H4dSkkz-cgY/TscrdojxyII/AAAAAAAAGHI/G58QkBigP1I/s1600/Tongo.png";
            break;
            case"TT": 
            urlBandera="http://flags.fmcdn.net/data/flags/w580/tt.png";
            break;
            case"TN": 
            urlBandera="https://www.viajejet.com/wp-content/viajes/la-similitud-entre-las-banderas-de-tunez-y-turquia.png";
            break;
            case"TR": 
            urlBandera="http://flags.fmcdn.net/data/flags/w580/tr.png";
            break;
            case"UA": 
            urlBandera="http://flags.fmcdn.net/data/flags/w580/ua.png";
            break;
            case"UY": 
            urlBandera="http://flags.fmcdn.net/data/flags/w580/uy.png";
            break;
            case"VE": 
            urlBandera="http://flags.fmcdn.net/data/flags/w580/ve.png";
            break;
            case"VN": 
            urlBandera="http://flags.fmcdn.net/data/flags/w580/vn.png";
            break;
            case"YE":
            urlBandera="http://flags.fmcdn.net/data/flags/w580/ye.png";
            break;
            case"": 
            urlBandera="";
            break;
            case"ZM": 
            urlBandera="http://flags.fmcdn.net/data/flags/w580/zm.png";
            break;
          }
          return urlBandera;
        }




        retornarimagen=function imagen(icono){
          var ico;
          switch(icono){
            case "01d":
            ico="http://openweathermap.org/img/w/01d.png";
            break;

            case "01n":
            ico="http://openweathermap.org/img/w/01n.png";
            break;

            case "02d":
            ico="http://openweathermap.org/img/w/02d.png";
            break;
            case "02n":
            ico="http://openweathermap.org/img/w/02n.png";
            break;

            case "03d":
            ico="http://openweathermap.org/img/w/03d.png";
            break;

            case "03n":
            ico="http://openweathermap.org/img/w/03n.png";
            break;

            case "04d":
            ico="http://openweathermap.org/img/w/04d.png";
            break;
            case "04n":
            ico="http://openweathermap.org/img/w/04n.png";
            break;
            case "09d":
            ico="http://openweathermap.org/img/w/09d.png";
            break;
            case "09n":
            ico="http://openweathermap.org/img/w/09n.png";
            break;
            case "10d":
            ico="http://openweathermap.org/img/w/10d.png";
            break;

            case "10n":
            ico="http://openweathermap.org/img/w/10n.png";
            break;
            case "11d":
            ico="http://openweathermap.org/img/w/11d.png";
            break;
            case "11n":
            ico="http://openweathermap.org/img/w/11n.png";
            break;
            case "13d":
            ico="http://openweathermap.org/img/w/13d.png";
            break;
            case "13n":
            ico="http://openweathermap.org/img/w/13n.png";
            break;
            case "50d":
            ico="http://openweathermap.org/img/w/50d.png";
            break;
            case "50n":
            ico="http://openweathermap.org/img/w/50n.png";
            break;


          }
          return ico;
        }


