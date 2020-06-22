// commit222
window.onload = function(){
	
	var oApp = document.querySelector('.app');
	
	function drag(ele){
		var obj = ele;
		
		obj.onmousedown = function(ev){
			var disX = ev.clientX - obj.getBoundingClientRect().left;
			var disY = ev.clientY - obj.getBoundingClientRect().top;
			document.onmousemove = function(ev){
				var l = ev.clientX - disX;
				var t = ev.clientY - disY;
				obj.style.left = l+'px';
				obj.style.top = t+'px';
			};
			
			document.onmouseup= function(){
				document.onmouseup = document.onmousemove = null;
			};
			return false;
		};
	}
	drag(oApp);
}
