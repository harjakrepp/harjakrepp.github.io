AOS.init();
		
		function displayTime() {
			var clientTime = new Date();
			var time = new Date(clientTime.getTime());
			var sh = time.getHours().toString();
			var sm = time.getMinutes().toString();
			var ss = time.getSeconds().toString();
			document.getElementById("digital-clock").innerHTML=
			(sh.length==1?"0"+sh:sh)+":"+(sm.length==1?"0"+sm:sm)+":"+(ss.length==1?"0"+ss:ss);
	}
	
function info() {
	alert("This website is only responsive on smartphone, because if you acces it by other devices like computer, tablet, and others, it will be messy or unresponsive. and don't translate this website into any language");
}