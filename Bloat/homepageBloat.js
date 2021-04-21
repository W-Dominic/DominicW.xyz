function highlight(x){
	x.style.boxShadow = "0px 0px 10px white";
}
function normal(x){
	x.style.boxShadow = "0px 0px 0px white";	
}
function invertColor(x){
	var color = window.getComputedStyle(x).color;
	alert(color);
	if (color === "var(--fore)"){ 
		x.style.color = "var(--back)";
		x.style.backgroundColor = "var(--fore)";
	}
	else if (color === "var(--back)"){	
		x.style.color = "var(--fore)";
		x.style.backgroundColor = "var(--back)";
	}
	else {
		alert("Something went wrong");
	}
}
