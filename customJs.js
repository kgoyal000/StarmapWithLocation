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
     var time = document.getElementById('comp-kbkfr8b3-inner').value
    var t_hr = parseInt(time.split(':')[0]);
    $("#hr").val(t_hr);
    trigger_change_event("hr");
    //min
    var t_min = parseInt(time.split(':')[1]);
    $("#min").val(t_min);
    trigger_change_event("min");
    //sec
    

//     tz_val = document.getElementById("tz_form").value;
//     $("#tz").val(tz_val);

//     trigger_change_event("tz");

}
document.getElementById('comp-kbkg9zglcalendar').addEventListener('click',function(){
	console.log('inside Date');
        var date = document.getElementById('comp-kbkg9zglinput').value;
        var month_list1 = ['test','January','February','March','April','May','June','July','August','September','October','November','December'];
        var month =month_list1[parseInt(date.split('/')[0])];
        var year = parseInt(date.split('/')[2]);
        var day = parseInt(date.split('/')[1]);
        set_res_date(day,month,year);
});

document.getElementById('comp-kbkfr8b3-inner').addEventListener('change',function(){
	   var date = document.getElementById('comp-kbkg9zglinput').value;
        var month_list1 = ['test','January','February','March','April','May','June','July','August','September','October','November','December'];
        var month =month_list1[parseInt(date.split('/')[0])];
        var year = parseInt(date.split('/')[2]);
        var day = parseInt(date.split('/')[1]);
        set_res_date(day,month,year);
});
