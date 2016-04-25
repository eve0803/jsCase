
//第一个参数：拖拽的对象，第二个参数：移动的对象
function Drag( obj,box ){
	
	obj.onmousedown = function(ev){		
		var ev = ev || event;

		var disX = ev.clientX - box.offsetLeft;
		var disY = ev.clientY - box.offsetTop;
		
		if( obj.setCapture ) obj.setCapture(); 
		
		document.onmousemove = function(ev){
			
			var ev = ev || event;
			
			var l = ev.clientX - disX;
			var t = ev.clientY - disY;
			
			if( l < 0 )l = 0;
			if( l >= view().w - box.offsetWidth ) l = view().w - box.offsetWidth;
				
			if( t < 0 ) t = 0;
			if( t >= view().h - box.offsetHeight ) t = view().h - box.offsetHeight;
			box.style.marginLeft = box.style.marginTop = '0px';	
			box.style.left = l + 'px';
			box.style.top = t + 'px';				
		};
				
		document.onmouseup = function(){			
			if( obj.releaseCapture ) obj.releaseCapture(); 							
			document.onmousemove = document.onmouseup = null;		
		};
		
		return false;
	};	
}


function view(){
	return {
		w : document.documentElement.clientWidth,
		h : document.documentElement.clientHeight
	};
}