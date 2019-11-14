function makeOpaque(el){
	el.classList.add("opaque");
}

function resetAll(){
document.location.reload("true");
}

function turnPurple(el){
	document.getElementById("box1").classList.add("purple");

}

function changePicture(el) {
	el.src = "transparent_shy.png";
	document.getElementById("boo").classList.add("transparent_shy.PNG")
		document.getElementById("boo").classList.remove("transparent_shy.PNG")
	
}