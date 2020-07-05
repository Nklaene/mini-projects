const form = document.querySelector("#signup");
const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const usernamePattern = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // check email
  checkField(emailPattern, form.email);

  // check username
  checkField(usernamePattern, form.username);

  // check password
  checkField(passwordPattern, form.password);

  // check password match
  checkPasswords(form.password, form.password2);
});

const checkField = (pattern, element) => {
  if (pattern.test(element.value)) {
    addSuccess(element);
  } else {
    addError(element);
  }
};

const checkPasswords = (pass1, pass2) => {
  if (pass1.value === pass2.value) {
    addSuccess(pass2);
  } else {
    addError(pass2);
  }
};

const addSuccess = element => {
  if (element.classList.contains("error")) {
    element.classList.remove("error");
  }
  element.classList.add("success");
};

const addError = element => {
  if (element.classList.contains("success")) {
    element.classList.remove("success");
  }
  element.classList.add("error");
};