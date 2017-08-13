function loadCss() {
	var link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = "/stylesheets/common.css";
	document.getElementsByTagName("head")[0].appendChild(link);
}
module.exports = loadCss;