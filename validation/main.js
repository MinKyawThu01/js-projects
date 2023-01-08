const msg = document.querySelector(".msg");
const myform = document.querySelector("#myForm");
const msgValid = document.querySelector(".msg-valid");

// myform.addEventListener("submit", onSubmit);
msg.classList.add("error");
msg.innerHTML = "Please enter the email & password";
msg.style.display = "none";

 msgValid.classList.add("error");
 msgValid.innerHTML = "Please enter valid email";
 msgValid.style.display = "none";

function check() {
    
  for (var i = 0; i < myForm.elements.length; i++) {
    if (myForm.elements[i].className == "req" && myForm.elements[i].length == 0) {
      msg.style.display = "block";
      setTimeout(() => (msg.style.display = "none"), 3000);
    // alert("p");
      return false;
    }
  }
  
  var email = document.getElementById("email").value;
  var at = email.indexOf("@")
  var dot = email.lastIndexOf(".");
  if (at <1 || dot < at + 2 || dot +2 >= x.length){
    // alert("Please enter a valid email address");
    msgValid.style.display = "block";
    setTimeout(() => (msgValid.style.display = "none"), 3000);
    return false;
  }
}
