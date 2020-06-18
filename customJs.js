//trigger starmap change event
function trigger_change_event(element_id){
  element = document.getElementById(element_id);
    var event = new Event('change');
    // Dispatch it.
    element.dispatchEvent(event);
}

//Color changes
var showGrid = document.getElementById("toggle-switch-comp-kbkfry6q").checked;
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
constellations: {
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



   document.querySelector('#background-fill').value =  color;
   document.querySelector('#stars-style-fill').value = starColor;
   trigger_change_event("background-fill");
   trigger_change_event("stars-style-fill");

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
