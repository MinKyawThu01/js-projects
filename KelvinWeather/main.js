const cInput = document.querySelector("#celsisus");
const fInput = document.querySelector("#fahrenheit");
const answer = document.querySelector("#answer");
const msg = document.querySelector(".msg");
const msgWarnning = document.querySelector(".msgWarnning")
const main = document.querySelector("#main");
//Formula

main.addEventListener("submit", onSubmit);
msg.classList.add("error");
msg.innerHTML = "Please enter the fields";
msg.style.display = "none";
msgWarnning.classList.add("warnning");
msgWarnning.innerHTML = "Please fill the only one Unit(Celcisus or Fahrenheit)";
msgWarnning.style.display = "none"

function onSubmit(e) {
  e.preventDefault();
  if (cInput.value === "" && fInput.value === "") {
    console.log(msg);
    msg.style.display = "block";
    setTimeout(() => (msg.style.display = "none"), 3000);
  } else if (cInput.value === "") {
    const li = document.createElement("li");
    // console.log( (fInput.value));
    let fahrKelvin = ((Number(fInput.value)) - 32) * 5 / 9 + 273;
    fahrKelvin = Math.floor(fahrKelvin);
    li.appendChild(
      document.createTextNode(
        `${fInput.value}°F  is equal to ${fahrKelvin} Kelvin.`
      )
    );
    answer.appendChild(li);
  } else if(fInput.value===""){
    const li = document.createElement('li');
    // console.log(typeof (cInput.value));
    let celKelvin = Number(cInput.value)+273;
    celKelvin = Math.floor(celKelvin);
    li.appendChild(
      document.createTextNode(`${cInput.value}°C is equal to ${celKelvin} Kelvin.`)
    );
    answer.appendChild(li);
  } else if(fInput.value === fInput.value && cInput.value === cInput.value){
    const li = document.createElement('li');
    // Fahrenheit Formula
    fahrKelvin = ((Number(fInput.value)) - 32) * 5 / 9 + 273;
    fahrKelvin = Math.floor(fahrKelvin);
    // Celsisus Formula
    celKelvin = Number(cInput.value)+273;
    celKelvin = Math.floor(celKelvin);
    // Display Result
    li.appendChild(
      document.createTextNode(
        `${fInput.value}°F  is equal to ${fahrKelvin} Kelvin.`
      )
    ); 
    li.appendChild(
      document.createElement("br") //HTML tag using
      )
    ; 
    li.appendChild(
      document.createTextNode(`${cInput.value}°C is equal to ${celKelvin} Kelvin.`)
    );
    answer.appendChild(li);
  }
  //  else if(fInput.value === fInput.value && cInput.value === cInput.value){
  //   console.log(msgWarnning);
  //   msgWarnning.style.display = "block";
  //   setTimeout(()=> (msgWarnning.style.display="none"), 3000);
  // }
}

