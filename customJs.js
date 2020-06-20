
document.getElementsByClassName('StatesButton928128992--root AddToCartButton3061789056--addToCartButton')[0].style.display = 'none';
        document.getElementById("comp-kbnmp412collection").classList.add("bear-months");
        document.getElementById("comp-kbnmpvw5collection").classList.add("bear-years")
        document.getElementById("comp-kbnmoeqacollection").classList.add("bear-dates")
//trigger starmap change event
function trigger_change_event(element_id){
  element = document.getElementById(element_id);
    var event = new Event('change');
    // Dispatch it.
    element.dispatchEvent(event);
}

//Color changes
//document.getElementById("comp-kbkfxefvlink").addEventListener('click',function(){
var showGrid = document.getElementById("toggle-switch-comp-kbkfry6q").checked;
var showConstellations = document.getElementById("toggle-switch-comp-kbkfu2mm").checked;
var color;
  var fcolor;
  var textColor;
  var starColor;
  var strokeColor;
  var gridColor;
  var moonColor;
  var lineColor;
  if(document.getElementsByTagName('h1')[1].innerText == "Mystique - Black / Black, with Grid"){
    color = '#000000';
    fcolor = '#000000';
    textColor='#ffffff';
  }else if(document.getElementsByTagName('h1')[1].innerText == "The Classic - Black / White"){
    color = '#000000';
    fcolor = '#ffffff';
    textColor='#000';
  }else if(document.getElementsByTagName('h1')[1].innerText == "Marine - Navy / White"){
    color = '#4b687e';
    fcolor = '#ffffff';
    textColor='#000';
  }else if(document.getElementsByTagName('h1')[1].innerText == "Boho - Terra Cotta / White"){
    color = '#d19b81';
    fcolor = '#ffffff';
    textColor='#000';
  }else{
    color = '#efc8be';
    fcolor = '#ffffff';
    textColor='#000';
  }

   if( color=='#efc8be' || color == '#d19b81' ){
    starColor = '#000000'
   }
   else{
    starColor = '#ffffff'
   }

   if( color=='#efc8be' || color == '#d19b81' ){
    gridColor = '#000000'
   }
   else{
    gridColor = '#ffffff'
   }


   if( color=='#4b687e' ){
   lineColor = '#949494';
   strokeColor = '#4b687e';
  }else if( color=='#000000' ){
   lineColor = '#444444';
   strokeColor = '#ffffff';
  }else if(color == '#d19b81'){
    lineColor = '#787878';
    strokeColor = '#d19b81';
  }else if( color=='#efc8be' ){
   strokeColor = '#efc8be';
   lineColor = '#787878';
    }
   else{
   lineColor = "#949494";
   strokeColor = '#ffffff';
   }


   if( color=='#efc8be' ){
    moonColor = '#efc8be';
    }else if(color == '#d19b81'){
      moonColor = '#d19b81'
    }
    else{
    moonColor = '#ffffff'
    }

  ACTIVE_SPINNER_ID = color=='#ffffff'?"spinner":"spinner_white";

Celestial.display({
    form: false,
    formFields: {download: true},
    datapath:  "https://ofrohn.github.io/data/",
stars: {
    style: { fill: starColor, opacity: 1 },
}, 
constellations: {
    lines: showConstellations, 
    lineStyle: { stroke: gridColor, width: 0.7, opacity: 0.6 },
  },
  lines: {
    graticule: { show: showGrid, stroke: lineColor, width: 2.75, opacity: 0.68,      // Show graticule lines
			// grid values: "outline", "center", or [lat,...] specific position
      lon: {pos: [], fill: "#eee", font: "10px 'Lucida Sans Unicode', Helvetica, Arial, sans-serif"},
			// grid values: "outline", "center", or [lon,...] specific position
		  lat: {pos: [], fill: "#eee", font: "10px 'Lucida Sans Unicode', Helvetica, Arial, sans-serif"}},
  },
  background: {
    fill: color,
    stroke: strokeColor, // Outline
  },
planets: {
    which: ["ter", "lun"],
    // Symbols as unicode codepoints, letter abbreviations and colors to be displayed

    symbols: {
      "lun": {symbol: "\u25cf", letter:"L", fill: moonColor, size: 40},
      }
    }
  })
//});

//for constellations
document.getElementById("toggle-switch-comp-kbkfu2mm").addEventListener('change',function(){
    var showConst = document.getElementById("toggle-switch-comp-kbkfu2mm").checked;
    document.getElementById("constellations-lines").checked = showConst;
    trigger_change_event("constellations-lines")
});

//for Grid
document.getElementById("toggle-switch-comp-kbkfry6q").addEventListener('change',function(){
       var showGrid = document.getElementById("toggle-switch-comp-kbkfry6q").checked;
    document.getElementById("lines-graticule-show").checked = showGrid;
    trigger_change_event("lines-graticule-show");
});
// Date Change
function set_res_date(day,monthh,year){

    console.log(day+" "+monthh+" "+year);
    var month_list = ['test','January','February','March','April','May','June','July','August','September','October','November','December'];
    month = month_list.indexOf(monthh);
    month_str = month;
    if(month<=9){
        month_str = "0"+month_str;
    }
    day_str = day;

    if(day<=9){
        day_str = "0"+day_str;
    }

    month_val = month-1;
    $("#datepick").click();

    $('#yr option:contains('+year+')').prop('selected','selected');
    trigger_change_event("yr");

    $('#mon').val(month_val);
    trigger_change_event("mon");


    // day id click
    date_val = year+"-"+month_str+"-"+day_str;
    $("#"+date_val).click();
    trigger_change_event(date_val);

     //hrs
//      var time = document.getElementById('comp-kbnamx97collection').value
    var t_hr = parseInt(document.getElementById('comp-kbnaf0lycollection').value);
    $("#hr").val(t_hr);
    trigger_change_event("hr");
    //min
    var t_min = parseInt(document.getElementById('comp-kbnamx97collection').value);
    $("#min").val(t_min);
    trigger_change_event("min");
    //sec
    

//     tz_val = document.getElementById("tz_form").value;
//     $("#tz").val(tz_val);

//     trigger_change_event("tz");

}


function toDegreesMinutesAndSeconds(coordinate) {
  var absolute = Math.abs(coordinate);
  var degrees = Math.floor(absolute);
  var minutesNotTruncated = (absolute - degrees) * 60;
  var minutes = Math.floor(minutesNotTruncated);
  var seconds = Math.floor((minutesNotTruncated - minutes) * 60);

  return degrees + "." + minutes;
}


$('#comp-kbnmp412collection,#comp-kbnmpvw5collection,comp-kbnmoeqacollection,#comp-kbnaf0lycollection,#comp-kbnamx97collection').on('change', function() {
	console.log('inside Date');
//         var date = document.getElementById('comp-kbkg9zglinput').value;
//         var month_list1 = ['test','January','February','March','April','May','June','July','August','September','October','November','December'];
        var month =parseInt(document.getElementById('comp-kbnmp412collection').value);
        var year = parseInt(document.getElementById('comp-kbnmpvw5collection').value);
        var day = parseInt(document.getElementById('comp-kbnmoeqacollection').value);
        set_res_date(day,month,year);
});

function convert_month(month){
    var months = ['test','January','February','March','April','May','June','July','August','September','October','November','December'];
    return months[month];
}

function submit_starForm(){
     var name = document.getElementById("comp-kbkfviu6input").value;
     var lat = 34.52;
     var lng = 15.95;
     if(document.getElementById('comp-kbkjinfccollection').value == "Custom Text"){
      var message = document.getElementById("comp-kbkfwbw6textarea").value;
     }else{
      var message = document.getElementById("comp-kbkjinfccollection").value;
     }
	
	var date1 = document.getElementById('comp-kbkg9zglinput').value;
        var month_list1 = ['test','January','February','March','April','May','June','July','August','September','October','November','December'];
//          var time1 = document.getElementById('comp-kbkfr8b3-inner').value
         var month = month_list1[parseInt(date1.split('/')[0])];
         var day = parseInt(date1.split('/')[1]);
         var year = parseInt(date1.split('/')[2]);
         var hrs = parseInt(document.getElementById('comp-kbnaf0lycollection').value);
         var min = parseInt(document.getElementById('comp-kbnamx97collection').value);
     
     var address = document.getElementsByClassName('input3143712229__nativeInput has-custom-focus')[0].value;
     var order = Math.floor(Math.random()*10000+1);

     var latitude = toDegreesMinutesAndSeconds(lat);
     var latitudeCardinal = lat >= 0 ? "N" : "S";
      lat = latitude + "˚ " + latitudeCardinal
     var longitude = toDegreesMinutesAndSeconds(lng);
     var longitudeCardinal = lng >= 0 ? "E" : "W";
       lng = longitude + "˚ " + longitudeCardinal
	

    if(address == "" || lat == "" || lng == "" || order==""){
        alert("Please fill all fields first");
    }else{

        $("#download-svg").click();
	

	    if(min < 10){
	    	min = "0"+min;
	    }

         var dayTag = "th";
         var timeTag = "am";
         if(day == 1 || day == 21 || day == 31){
              dayTag = "st";
         }else if(day == 2 || day == 22){
                dayTag = "nd";
         }else if(day == 3 || day == 23){
                dayTag = "rd";
         }else{
                dayTag = "th";
         }

        if(hrs > 12){
            hrs = hrs - 12;
            timeTag = "pm";
        }else if(hrs == 12){
            timeTag = "pm";
        }else{
            timeTag = "am"
        }

        if(name == ""){
            name= "blablabla";
            }

        setTimeout(() => {
            svg = document.getElementById("svg_element").value
            var json = {
                    'myname':name,
                    'address':address,
                    'timeTag':timeTag,
                    'lat' : lat,
                    'long' : lng,
                    'msg':message,
                    'month': month,
                    'day': day,
                    'year': year,
                    'hrs': hrs,
                    'min':min,
                    'fcolor':fcolor,
                    'textColor':textColor,
                    'dayTag':dayTag,
                    'order':order,
                    'svg_image':svg
                    }

                document.getElementById("json_data").value = JSON.stringify(json);
                $("#svg_element").remove();
                document.getElementById("final_sub").submit();
		//form submission


     }, 1000);
    $('#cover-spin').show(0)

    }
}
document.getElementById('comp-kbkfxefv').addEventListener('click',function(){
	submit_starForm();
	document.getElementsByClassName('StatesButton928128992--root AddToCartButton3061789056--addToCartButton')[0].click()
});
