const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (event)=> {
  event.preventDefault();

  const submitButton= document.querySelector(".submit");
  submitButton.disabled = true;
  submitButton.innerText="در حال ورود"

 

  const formData= new FormData(event.target);

  const data = {
    phone: formData.get("phone"),
    password: formData.get("password")
  }
  

  if (data.phone.length!==11) {
    alert("شماره تلفن اشتباه است");
    return;
  }

  if (data.password.length < 8) {
    alert("رمز عبور حداقل 8 کاراکتر");
    return;
  }

try {
    const result = await fakeLoginAPI(data);

    console.log("LOGIN SUCCESS:", result);
    alert("ورود موفق 🎉");

  } catch (error) {
    console.log("LOGIN FAILED:", error);
    alert(error.message);
  }

finally {

  submitButton.disabled = false;
  submitButton.innerText="ورود";

}


});


function fakeLoginAPI(data) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (data.phone === "09398055375" && data.password === "09398055375") {
        resolve({
          success: true,
          token: "fake-token-123"
        });
      } else {
        reject({
          success: false,
          message: "اطلاعات اشتباه است"
        });
      }

    }, 1500);

  });
}