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