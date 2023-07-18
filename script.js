let password = document.getElementById("password");
confirmPassword = document.getElementById("confirmPassword");

function validatePasswordBtn() {
	let validator = document.getElementById("validator") ?? null;
	if (password.value !== confirmPassword.value) {
		return false;
	} else {
		if (validator) {
			validator.remove();
		}
		return true;
	}
}

confirmPassword.addEventListener("input", () => {
	let validator = document.getElementById("validator") ?? null;
	if (password.value !== confirmPassword.value) {
		if (validator) {
			validator.remove();
		}
		confirmPassword.insertAdjacentHTML(
			"afterend",
			"<span id=validator><br>*Passwords do not match</span>"
		);
	} else {
		if (validator) {
			validator.remove();
		}
	}
});
