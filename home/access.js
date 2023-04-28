
function checkPassword() {
	var password = document.getElementById("password").value;
	if (password === "#cook1es!") {
		document.getElementById("popup").style.display = "none";
	} else {
		alert("Incorrect password, please try again.");
	}
}
