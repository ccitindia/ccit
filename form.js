 // Select all input elements for varification
let phone = document.getElementById("phone");

// function for form varification
function formValidation() {

  // checking phone number
  if (!phone.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters long number and first digit can't be 0!");
    return false;
  }

  return true;
}
