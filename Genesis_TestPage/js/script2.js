let myValidator = {
  findMe: {
    valid: false
  },
  firstName: {
    valid: false,
    data: "",
    error: ""
  },
  email: {
    valid: false,
    data: "",
    error: ""
  },
  password: {
    valid: false,
    data: "",
    error: ""
  },
  agreement: {
    valid: true
  }
};
// Функція що запускає зміну стану валідації пункту меню
function changeValidity() {
  if (this.checked) {
    myValidator[this.name].valid = true;
  } else {
    myValidator[this.name].valid = false;
  }
  checkAllValidity();
}

// перевіряє Всі умови на валдіність форми
function checkAllValidity() {
  //
  let valid = Object.keys(myValidator).every(key => {
    return myValidator[key].valid == true;
  });
  //
  if (valid) {
    if (regAccept.hasAttribute("disabled")) {
      regAccept.removeAttribute("disabled");
    }
    if (!regAccept.classList.contains("active")) {
      regAccept.classList.add("active");
    }
    if (heart.classList.contains("invalid")) {
      heart.classList.remove("invalid");
    }
    //
    heart;
  } else {
    if (!regAccept.hasAttribute("disabled")) {
      regAccept.setAttribute("disabled", "disabled");
    }
    if (regAccept.classList.contains("active")) {
      regAccept.classList.remove("active");
    }
    if (!heart.classList.contains("invalid")) {
      heart.classList.add("invalid");
    }
  }
}

// отримуємо доступ до нашої форми
let myForm = document.forms.myRegForm;

// назначаємо обробник подій на текстові інпути
let inputRadio = myForm.querySelectorAll("input[type=radio]");
for (let i = 0; i < inputRadio.length; i++) {
  inputRadio[i].addEventListener("click", changeValidity);
}

// назначаємо обробник подій на чекбокс
let inputCheck = myForm.querySelector("input[type=checkbox]");
inputCheck.addEventListener("click", changeValidity);

// отримуємо доступ до кнопки Реєстрації
let regAccept = myForm.querySelector(".regAccept");

// отримуємо доступ до сердечка на боковій панельці
let heart = document.querySelector(".heart");

// отримуємо доступ окремо взятих інпутів
// і назначаємо для них обробник подій
let inputfirstName = myForm.querySelector("#firstName");
let inputEmail = myForm.querySelector("#email");
let inputPassword = myForm.querySelector("#password");

inputfirstName.addEventListener("blur", validName);
inputEmail.addEventListener("blur", validEmail);
inputPassword.addEventListener("blur", validPass);

//перевірка валідності введеного імені
function validName() {
  if (this.value.length == 0) {
    myValidator[this.name].valid = false;
    myValidator.firstName.error = "Введите Ваше имя";
    this.placeholder = myValidator[this.name].error;
  } else {
    myValidator[this.name].valid = true;
  }
  checkAllValidity();
}

//перевірка валідності введеного email
function validEmail() {
  if (this.value.indexOf("@") == -1 || this.value.length == 0) {
    myValidator.email.valid = false;
    myValidator.email.error = "Неверный формат email";
    this.placeholder = myValidator.email.error;
  } else {
    myValidator[this.name].valid = true;
  }
  checkAllValidity();
}

//перевірка валідності введеного password
function validPass() {
  if (this.value.length == 0) {
    myValidator[this.name].valid = false;
    myValidator.password.error = "Придумайте Ваш пароль";
    this.placeholder = myValidator[this.name].error;
  } else {
    myValidator[this.name].valid = true;
  }
  checkAllValidity();
}
