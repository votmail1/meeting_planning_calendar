function include(url) {
	let script = document.createElement('script');
	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
}	
include("js/functions.js");
include("js/manager.js");
include("js/calendar.js");
window.onload = () => {
	manager();
	calendar();
}
