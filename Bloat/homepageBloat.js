function highlight(x){
	x.style.boxShadow = "0px 0px 10px white";
}
function normal(x){
	x.style.boxShadow = "0px 0px 0px white";	
}
function invertColor(x){
	//since the css was defined in an external file we need to use getComputedStyle() to get the value
	var color = window.getComputedStyle(x,null).getPropertyValue("color");
	//alert(color);
	if (color === "rgb(239, 233, 240)"){ 
		console.log(color);
		x.style.color = "var(--back)";
		x.style.backgroundColor = "var(--fore)";
	}
	else if (color === "rgb(76, 86, 106)"){	
		console.log(color);
		x.style.color = "var(--fore)";
		x.style.backgroundColor = "var(--back)";
	}
	else {
		alert("Something went wrong");
	}
}
