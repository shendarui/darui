/***************************
*****element：代表绑定事件的元素
*****type： 要绑定的事件名（不含on）
*****fn： 要绑定事件的函数
***************************/ 
// 绑定事件的兼容性写法
function addEvent(element, type, fn) {
	if(element.addEventListener) {
		element.addEventListener(type,fn,true);
	}
	// IE
	else if(element.attachElement) {
		element.attachElement('on' + type,fn);
	}
	// 最原始写法
	else {
		element['on' + type] = fn;
	}
}
// 解除事件的兼容写法
function removeEvent(element, type, fn) {
	if(element.addEventListener) {
		element.removeEventListener(type, fn, false);
	}
	else if(element.attachElement) {
		element.detachEvent('on' + type,fn);
	}
	else {
		element['on'+type] = null;
	}
}


/***************************
*****取消冒泡
*****ev  要取消冒泡的事件对象
***************************/ 
function stopBubble(ev) {
	if(ev && ev.stopPropagation) {
		ev.stopPropagation();
	}
	else {
		e.cancelBubble = true;
	}
}

/***************************
*****非IE下获取计算后样式 getComputedStyle(redDiv,':before').color;
*****element 要获取样式的元素
*****key 要获取的样式
*****null => ':before'  伪类名称
*****IE下获取样式 redDiv.currentStyle.color;
***************************/ 
function getStyle(element, key) {
	if(element.currentStyle) {
		return element.currentStyle[key];
	}else {
		return getComputedStyle(element,null)[key];
	}
}







// 设置scrollTop  兼容性写法
setTimeout(function() {
	if(document.documentElement.scrollTop) {
		document.documentElement.scrollTop = 60;
	}else {
		document.body.scrollTop = 60;
	}
	
},1000)


// 滚轮绑定事件兼容
// el ： 滚轮事件绑定对象
// fn ： 绑定事件对应的函数
function addMousewheel(el,fn) {
	if(navigator.userAgent.indexOf("Firefox") != -1) {
		// 火狐
		el.addEventListener('DOMMouseScroll',fn,false);
	}else {
		// 谷歌
		el.onmousewheel = fn;
	}
}








