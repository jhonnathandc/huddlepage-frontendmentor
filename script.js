const buttonForm = document.querySelector(".btn-form");

function checkEmail(e) {
  e.preventDefault();
  const form = document.querySelector(".form");
  const email = document.getElementById("email");

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const emailToValidate = email.value;

  if (!validateEmail(emailToValidate)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
}

buttonForm.addEventListener("click", checkEmail);
