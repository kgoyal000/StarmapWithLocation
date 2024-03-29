
document.getElementsByClassName('AddToCartButton3061789056--addToCartButton')[0].style.display = 'none';
document.getElementsByClassName('_3WchY')[0].style.display = 'none'
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

//googleapi
function initialize() {
    var input = document.getElementById('comp-kbosn1rpinput');
var autocomplete = new google.maps.places.Autocomplete(input);
google.maps.event.addListener(autocomplete, 'place_changed', function () {
    var place = autocomplete.getPlace();
    var nameG = place.name;
    var latG = place.geometry.location.lat();
   var lonG= place.geometry.location.lng();
document.getElementById('comp-kboxpr47input').value =parseFloat(latG).toFixed(2);
document.getElementById('comp-kboxpkppinput').value =parseFloat(lonG).toFixed(2);
        document.getElementById("lat").value = document.getElementById("comp-kboxpr47input").value;
  document.getElementById("lon").value = document.getElementById("comp-kboxpkppinput").value;
    trigger_change_event("lon");
    //alert("This function is working!");
    //alert(place.name);
   // alert(place.address_components[0].long_name);
});
  }
google.maps.event.addDomListener(window, 'load', initialize);
  
//Color changes
//document.getElementById("comp-kbkfxefvlink").addEventListener('click',function(){
var showGrid = document.getElementById("toggle-switch-comp-kbv5w0h8").checked;
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
color = '#060808';
fcolor = '#060808';
textColor='#ffffff';
}else if(document.getElementsByTagName('h1')[1].innerText == "The Classic - Black / White"){
color = '#060808';
fcolor = '#ffffff';
textColor='#000';
}else if(document.getElementsByTagName('h1')[1].innerText == "Marine - Navy / White"){
color = '#5e8098';
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
starColor = '#060808'
}
else{
starColor = '#ffffff'
}

if( color=='#efc8be' || color == '#d19b81' ){
gridColor = '#060808'
}
else{
gridColor = '#ffffff'
}


if( color=='#5e8098' ){
lineColor = '#949494';
strokeColor = '#5e8098';
}else if( color=='#060808' ){
lineColor = '#515151';
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

var unknownTimeChecked = false;
document.getElementById("comp-kbrjtjnvinput").addEventListener('click',function(){
  if (document.getElementById('comp-kbrjtjnvinput').checked) {
    unknownTimeChecked = true;
  $('#comp-kbnaf0lycollection,#comp-kbnamx97collection').prop('disabled', true);
  document.getElementById("comp-kbnaf0lycollection").value = "00";
  document.getElementById("comp-kbnamx97collection").value = "01";
  $("#hr").val(parseInt(document.getElementById("comp-kbnaf0lycollection").value));
    trigger_change_event("hr");
    //min
    $("#min").val(parseInt(document.getElementById("comp-kbnamx97collection").value));
    trigger_change_event("min");
  } else {
    $('#comp-kbnaf0lycollection,#comp-kbnamx97collection').prop('disabled', false);
    unknownTimeChecked = false;
  }
});
//for constellations
document.getElementById("toggle-switch-comp-kbkfu2mm").addEventListener('change',function(){
var showConst = document.getElementById("toggle-switch-comp-kbkfu2mm").checked;
document.getElementById("constellations-lines").checked = showConst;
trigger_change_event("constellations-lines")
});

//for Grid
document.getElementById("toggle-switch-comp-kbv5w0h8").addEventListener('change',function(){
var showGrid = document.getElementById("toggle-switch-comp-kbv5w0h8").checked;
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


}

$('#comp-kbnmp412collection,#comp-kbnmpvw5collection,#comp-kbnmoeqacollection,#comp-kbnaf0lycollection,#comp-kbnamx97collection').on('change', function() {
console.log('inside Date');
//         var date = document.getElementById('comp-kbkg9zglinput').value;
//         var month_list1 = ['test','January','February','March','April','May','June','July','August','September','October','November','December'];
var month =document.getElementById('comp-kbnmp412collection').value;
var year = parseInt(document.getElementById('comp-kbnmpvw5collection').value);
var day = parseInt(document.getElementById('comp-kbnmoeqacollection').value);
set_res_date(day,month,year);
});

function convert_month(month){
var months = ['test','January','February','March','April','May','June','July','August','September','October','November','December'];
return months[month];
}

var details;

  function setNativeValue(element, value) {
    let lastValue = element.value;
    element.value = value;
    let event = new Event("input", { target: element, bubbles: true });
    // React 15
    event.simulated = true;
    // React 16
    let tracker = element._valueTracker;
    if (tracker) {
        tracker.setValue(lastValue);
    }
    element.dispatchEvent(event);
}


function submit_starForm(){
var lat = document.getElementById("comp-kboxpr47input").value;
var lng = document.getElementById("comp-kboxpkppinput").value;
var name = document.getElementById("comp-kbkfviu6input").value;
if(document.getElementById('comp-kbkjinfccollection').value == "Other- please instert text below"){
var message = document.getElementById("comp-kbkfwbw6textarea").value;
}else{
var message = document.getElementById("comp-kbkjinfccollection").value;
}

//          var time1 = document.getElementById('comp-kbkfr8b3-inner').value
var month =document.getElementById('comp-kbnmp412collection').value;
    var year = parseInt(document.getElementById('comp-kbnmpvw5collection').value);
 var day = parseInt(document.getElementById('comp-kbnmoeqacollection').value);
 var hrs = parseInt(document.getElementById('comp-kbnaf0lycollection').value);
 var min = parseInt(document.getElementById('comp-kbnamx97collection').value);

var address = document.getElementById('comp-kbosn1rpinput').value;
var order = name+"_"+day.toString()+year.toString()+hrs.toString()+Math.floor(Math.random()*33000+Math.random()*33000+Math.random()*3300+7847);
var latitudeCardinal;
var longitudeCardinal;
var latitude = lat;
var longitude = lng;
if(lat >= 0){
  latitudeCardinal = "N";
}else{
 latitudeCardinal = "S";
 latitude = -1*lat;
}
if(lng >= 0){
 longitudeCardinal = "E";
}else{
 longitudeCardinal = "W";
 longitude = -1*lng;
}
      if ($(window).width() > 720) {
var woodFrame = document.getElementsByClassName('DropdownBase1838877040--childrenWrapper')[0].innerText;
      }else{
        if(document.getElementsByClassName('DropdownNativeSelect1650023343--root')[0].value == ""){
            var woodFrame = "Select";
        }
      }
 var randTime = Math.floor(Math.random() * (5 - 3 + 1) + 3);
if(address == "" || lat == "" || lng == "" || order=="" || woodFrame == "Select"){
alert("Please fill all fields first");
$('#cover-spin').hide(0)
}else{
 lat = latitude + "˚ " + latitudeCardinal
 lng = longitude + "˚ " + longitudeCardinal
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
if(unknownTimeChecked){
          hrs = 35;
        }
if(name == ""){
    name= "blablabla";
    }
    document.getElementsByClassName('_2ORQo')[0].classList.add('_1dGXc');
    document.getElementsByClassName('_2ORQo')[0].classList.add('focus-ring');
   
    details = address+"\n"+day+"/"+month+"/"+year+"\n"+hrs+":"+min+"\n"+name+"\n"+message+"\n"+order;
    
var input = document.querySelector("textarea._2ORQo");
setNativeValue(input, details);
console.log(document.querySelector('textarea._2ORQo').value);

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


}, randTime * 1000);
}
}
document.getElementById('comp-kbkfxefv').addEventListener('click',function(){

    $('#cover-spin').show(0)
    submit_starForm();
    document.getElementsByClassName('AddToCartButton3061789056--addToCartButton')[0].click()
});

