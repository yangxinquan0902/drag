
function drag(id){
	var obj = document.getElementById(id);
	var disX = 0;
	var disY = 0;
	var wu = null;
	obj.onmousedown = function(ev){
		var l = ev.clientX - obj.offsetLeft;
		var t = ev.clientY - obj.offsetTop;
	};
}
