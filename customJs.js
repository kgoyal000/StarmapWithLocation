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
