const loginForm = document.getElementById("login-form");
const submitButton= document.querySelector(".submit");
const phoneError = document.getElementById("phone-error");
const passwordError = document.getElementById("password-error");

loginForm.addEventListener("submit", async (event)=> {
  event.preventDefault();

  phoneError.innerText="";
  passwordError.innerText="";

  submitButton.disabled = true;
  submitButton.innerText="در حال ورود"

 
  const formData= new FormData(event.target);

  const data = {
    phone: formData.get("phone"),
    password: formData.get("password")
  }

  let error=false;
  

  if (data.phone.length!==11) {
    phoneError.innerText="شماره تلفن اشتباه است.";
    error = true;
  }

  if (data.password.length < 8) {
    passwordError.innerText="رمز عبور اشتباه است."
    error = true;
  }

  if (error) {
    return;
  }

  try {
    const response =await fetch("http://localhost:3000/login", {
      method: "POST",
      headers:{
      "Content-Type":"application/json" },
      body: JSON.stringify(data)
      });

    const result= await response.json(); 
    if (response.ok) {
      alert("ورود موفق 🎉");
      console.log("TOKEN:", result.token);
    } else {
      alert(result.message || "خطا در ورود");
    }
  }

    catch (error) {
      console.log(error);
      alert("مشکل در اتصال به سرور");
  }

  submitButton.disabled = false;
  submitButton.innerText = "ورود";





});


const signupForm = document.getElementById("signup-form");
const telError= document.getElementById("tel-error");
const passwordError= document.getElementById("password-error");
const submitButton = document.querySelector(".submit");

signupForm.addEventListener("submit", async(event) => {
event.preventDefault();
telError.innerText="";
passwordError.innerText="";

submitButton.disabled=true;
submitButton.innerText="در حال ثبت نام";

const formData= new FormData(event.target);
const data= {
  firstname: formData.get("firstname"),
  lastname: formData.get("lastname"),
  phone: formData.get("phone"),
  password: formData.get("password")
};

let error=false;

if (data.phone.length !== 11) {
  telError.innerText = "شماره تلفن نامعتبر است.";
  error = true;
}

if (data.password.length < 8) {
  passwordError.innerText = "رمز عبور باید حداقل 8 کاراکتر باشد";
  error = true;
}

if (error) {
  submitButton.disabled=false;
  submitButton.innerText= "ثبت نام ";
  return;
}

try {
  const response = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();

  if (response.ok) {
    alert("ثبت نام موفق");

  } else {
    alert(result.message || "خطا در ثبت نام");
  }

}
catch (error) {
  console.log(error);
  alert("مشکل در اتصال به سرور");
}

submitButton.disabled = false;
submitButton.innerText = "ثبت نام";


});




