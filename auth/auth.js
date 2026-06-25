// Login

const loginForm = document.getElementById("login-form");

if (loginForm) {
  const loginSubmitButton= loginForm.querySelector(".submit");
  const phoneError = document.getElementById("lpgin-phone-error");
  const passwordError = document.getElementById("login-password-error");

  loginForm.addEventListener("submit", async (event)=> {
  event.preventDefault();

  phoneError.innerText="";
  passwordError.innerText="";

  loginSubmitButton.disabled = true;
  loginSubmitButton.innerText="در حال ورود"

 
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
    submitButton.disabled = false;
    submitButton.innerText = "ورود";
    return;
  }

  loginForm.submit();

});



}




// Sign Up


const signupForm = document.getElementById("signup-form");

if (signupForm) {

  const phoneError= document.getElementById("signup-phone-error");
  const passwordError= document.getElementById("signup-password-error");
  const signupSubmitButton = signupForm.querySelector(".submit");

  signupForm.addEventListener("submit", async(event) => {
    event.preventDefault();
    phoneError.innerText="";
    passwordError.innerText="";

    signupSubmitButton.disabled=true;
    signupSubmitButton.innerText="در حال ثبت نام";

    const formData= new FormData(event.target);
    const data= {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      phone: formData.get("phone"),
      password: formData.get("password")
    };

    let error=false;

    if (data.phone.length !== 11) {
      phoneError.innerText = "شماره تلفن نامعتبر است.";
      error = true;
    }

    if (data.password.length < 8) {
      passwordError.innerText = "رمز عبور باید حداقل 8 کاراکتر باشد";
      error = true;
    }

    if (error) {
      signupSubmitButton.disabled=false;
      signupSubmitButton.innerText= "ثبت نام ";
      return;
    }

    
    signupForm.submit();
    });
    
  }







