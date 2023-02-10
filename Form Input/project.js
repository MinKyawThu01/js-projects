const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const msg1 = document.querySelector(".msg1");

myForm.addEventListener("submit", onSubmit);
msg.classList.add("error");
msg.innerHTML = "Please enter fields";
msg.style.display = "none";



function onSubmit(e) {
  e.preventDefault();
  //   console.log(nameInput.value);
  if (nameInput.value === "" || emailInput.value === "") {
    console.log(msg);
    msg.style.display = "block";
    setTimeout(() => (msg.style.display = "none"), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );

    userList.appendChild(li);

    // clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
// msg1.classList.add("emailError");
// msg1.innerHTML = "Please enter the valid email address";
// msg1.style.display= "none";

// function check(){
//   for(var i = 0; i< myForm.element.lengths; i++ ){
//     if( 
//       myForm.element[i].className == "req" &&
//       myForm.element[i].value.lengths==0
//     ) {
//         alert("Please Fill in all required fields");
//         return false;
//   }

//   var email = document.getElementById("email").value ;
//   var at = email.indexOf("@");
//   var dot = email.lastIndexOf(".");
//   if (at <1 || dot < at +2 || dot + 2 >= x.length){
//     msg1.style.display = "block";
//     setTimeout(() => (msg1.style.display = "none"), 3000);
// }
//   }
// }
