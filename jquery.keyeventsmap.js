/* 
KEY EVENTS MAP   jQuery extension 
Developed by Kristijan Burnik :: (nc) 2010 :: http://www.invision-web.net/

jQuery Extensions:
	$.fn.keyboardBuffer
	$.fn.keymap
	$.fn.keydownmap
	$.fn.keyupmap
	$.iskeydown

DOM extensions
	document.usesBuffer
	document.buffer
	document.keynames
	document.keycodes
	element._kf  -- temporary function
*/
(function($) {
	$.fn.extend({
		keyboardBuffer:function(options) {
			var t=this[0];
			if (t.usesBuffer) return true;
			(function(t) {
				t.usesBuffer=true;
				t.buffer={};
				t.keynames={"8":"backspace", "9":"tab", "13":"enter", "16":"shift", "17":"ctrl", "18":"alt", "19":"pause", "20":"capslock", "27":"escape","32":"space", "33":"pageup", "34":"pagedown", "35":"end", "36":"home", "37":"leftarrow", "38":"uparrow", "39":"rightarrow", "40":"downarrow", "45":"insert", "46":"delete", "48":"0", "49":"1", "50":"2", "51":"3", "52":"4", "53":"5", "54":"6", "55":"7", "56":"8", "57":"9", "65":"a", "66":"b", "67":"c", "68":"d", "69":"e", "70":"f", "71":"g", "72":"h", "73":"i", "74":"j", "75":"k", "76":"l", "77":"m", "78":"n", "79":"o", "80":"p", "81":"q", "82":"r", "83":"s", "84":"t", "85":"u", "86":"v", "87":"w", "88":"x", "89":"y", "90":"z", "91":"leftwindowkey", "92":"rightwindowkey", "93":"selectkey", "96":"numpad0", "97":"numpad1", "98":"numpad2", "99":"numpad3", "100":"numpad4", "101":"numpad5", "102":"numpad6", "103":"numpad7", "104":"numpad8", "105":"numpad9", "106":"multiply", "107":"add", "109":"subtract", "110":"decimalpoint", "111":"divide", "112":"f1", "113":"f2", "114":"f3", "115":"f4", "116":"f5", "117":"f6", "118":"f7", "119":"f8", "120":"f9", "121":"f10", "122":"f11", "123":"f12", "144":"numlock", "145":"scrolllock", "186":"semi-colon", "187":"equalsign", "188":"comma", "189":"dash", "190":"period", "191":"forwardslash", "192":"graveaccent", "219":"openbracket", "220":"backslash", "221":"closebraket", "222":"singlequote"};
				t.keycodes={'backspace':8, 'tab':9, 'enter':13, 'shift':16, 'ctrl':17, 'alt':18, 'pause':19, 'capslock':20, 'escape':27, 'space':32,'pageup':33, 'pagedown':34, 'end':35, 'home':36, 'leftarrow':37, 'uparrow':38, 'rightarrow':39, 'downarrow':40, 'insert':45, 'delete':46, '0':48, '1':49, '2':50, '3':51, '4':52, '5':53, '6':54, '7':55, '8':56, '9':57, 'a':65, 'b':66, 'c':67, 'd':68, 'e':69, 'f':70, 'g':71, 'h':72, 'i':73, 'j':74, 'k':75, 'l':76, 'm':77, 'n':78, 'o':79, 'p':80, 'q':81, 'r':82, 's':83, 't':84, 'u':85, 'v':86, 'w':87, 'x':88, 'y':89, 'z':90, 'leftwindowkey':91, 'rightwindowkey':92, 'selectkey':93, 'numpad0':96, 'numpad1':97, 'numpad2':98, 'numpad3':99, 'numpad4':100, 'numpad5':101, 'numpad6':102, 'numpad7':103, 'numpad8':104, 'numpad9':105, 'multiply':106, 'add':107, 'subtract':109, 'decimalpoint':110, 'divide':111, 'f1':112, 'f2':113, 'f3':114, 'f4':115, 'f5':116, 'f6':117, 'f7':118, 'f8':119, 'f9':120, 'f10':121, 'f11':122, 'f12':123, 'numlock':144, 'scrolllock':145, 'semi-colon':186, 'equalsign':187, 'comma':188, 'dash':189, 'period':190, 'forwardslash':191, 'graveaccent':192, 'openbracket':219, 'backslash':220, 'closebraket':221, 'singlequote':222 };
				$(t).keydown(function(e){t.buffer[e.keyCode]=true;}).keyup(function(e){delete t.buffer[e.keyCode];});
			})(t);
		},
		keymap:function(e,map) {
			var r;
			var t = $(this)[0];
			var kc = e.keyCode;
			var kn = $(document)[0].keynames[kc];
			
			if (typeof (t._kf=map[kn]) == 'function') r = t._kf(e,kc,kn); 
			else if (typeof (t._kf=map['other']) == 'function') r = t._kf(e,kc,kn);
			else if (typeof (t._kf=map['any']) == 'function') r = t._kf(e,kc,kn);
			
			delete t._kf;
			return r;
		},
		keydownmap:function(map) {return $(this).keydown(function(e) {return $(this).keymap(e,map);});},
		keyupmap:function(map) {return $(this).keyup(function(e) {return $(this).keymap(e,map);});}
	});

	$.extend({
		iskeydown:function(key){
			var t=$(document)[0];
			if (typeof key == 'string') key = t.keycodes[key];
			return (typeof t.buffer[key] != 'undefined');
		}
	});

	$(function() {$(document).keyboardBuffer();});
})(jQuery);


