
// testing
$(function(){
	$(document).keydownmap({
		"shift": function(e) {console.log("holding shift"); if ($.iskeydown("ctrl")) {console.log("control is here too")}},
		"a":function(e) {console.log("An A or an a man;"); return false;},
		"other":function(e,kc,kn) {console.log("Other key pressed, here's original event, keycode and keyname",e,kc,kn);},
		// "any":function(e) {console.log("A key was pressed: ",e.keyCode)}
	})
})


