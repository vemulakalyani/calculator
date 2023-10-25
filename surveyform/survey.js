function survey(){
	var name =
		document.forms.RegForm.Name.value;
	var email =
		document.forms.RegForm.EMail.value;
	var phone =
		document.forms.RegForm.Telephone.value;

	//Javascript reGex for Email Validation.
	var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
	// Javascript reGex for Phone Number validation.
	var regPhone=/^\d{10}$/;					 
	// Javascript reGex for Name validation
	var regName = /\d+$/g;						 

	if (name == "" || regName.test(name)) {
		window.alert("Please enter your name properly.");
		name.focus();
		return false;
	}

	
	
	if (email == "" || !regEmail.test(email)) {
		window.alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}
	

	if (phone == "" || !regPhone.test(phone)) {
		alert("Please enter valid phone number.");
		phone.focus();
		return false;
	}

	if (what.selectedIndex == -1) {
		alert("Please enter your date of birth.");
		what.focus();
		return false;
	}

	return true;
} 