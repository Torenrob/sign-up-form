let password = document.getElementById("password");
confirmPassword = document.getElementById("confirmPassword");

function validatePassword() {
	if (password.value !== confirmPassword.value) {
		alert("Passwords do not match. Try Again");
		return false;
	} else {
		return true;
	}
}
