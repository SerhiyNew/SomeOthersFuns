let myValidator = {
  findMe: {
    valid: false
  },
  firstName: {
    valid: false,
    data: "",
    error: "Введите Ваше имя",
    rule: /^[a-zA-Z]*$/
  },
  email: {
    valid: false,
    data: "",
    error: "Введите Ваш email",
    rule: /^\w{1,}@\w{1,}\.\w{1,}$/
  },
  password: {
    valid: false,
    data: "",
    error: "Введите Ваш пароль"
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
  // перевірка загальної валідності форми
  let valid = Object.keys(myValidator).every(key => {
    return myValidator[key].valid == true;
  });
  // якщо валідне - розблокувати кнопку, перекрасити сердечко
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
    // якщо НЕвалідне заблокувати кнопку, перекрасити сердечко
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

// назначаємо обробник подій на радіо інпути та на чекбокс
let inputRadio = myForm.querySelectorAll("input[type=radio]");
let inputCheck = myForm.querySelector("input[type=checkbox]");
inputCheck.addEventListener("click", changeValidity);
for (let i = 0; i < inputRadio.length; i++) {
  inputRadio[i].addEventListener("click", changeValidity);
}

// отримуємо доступ до кнопки Реєстрації
let regAccept = myForm.querySelector(".regAccept");

// отримуємо доступ до сердечка на боковій панельці
let heart = document.querySelector(".heart");

// отримуємо доступ до текстових інпутів
let inputfirstName = document.getElementById("firstName");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");

// перевірка валідності при натисканні на клавішу
inputfirstName.addEventListener("keyup", validName);
inputEmail.addEventListener("keyup", validEmail);
inputPassword.addEventListener("keyup", validPass);

// вирізати вміст і помістити плейсхолдер\повідомлення про помилку
inputfirstName.addEventListener("blur", setPlaceholder);
inputEmail.addEventListener("blur", setPlaceholder);
inputPassword.addEventListener("blur", setPlaceholder);

// відновити вміст поля при кліку
inputfirstName.addEventListener("focus", setValueBack);
inputEmail.addEventListener("focus", setValueBack);
inputPassword.addEventListener("focus", setValueBack);

// функція що виводить повідомлення про помилку,
// якщо поле не валідне
function setPlaceholder() {
  if (!myValidator[this.name].valid) {
    this.placeholder = myValidator[this.name].error;
    myValidator[this.name].data = this.value;
    this.value = "";
  }
}

// функція що виводить повертає значення поля назад
function setValueBack() {
  if (!this.value && myValidator[this.name].data.length != 0) {
    this.value = myValidator[this.name].data;
  }
}
//перевірка валідності введеного імені
function validName() {
  if (this.value.length == 0) {
    myValidator[this.name].valid = false;
    myValidator.firstName.error = "Введите Ваше имя";
    this.placeholder = myValidator[this.name].error;
  } else if (!myValidator[this.name].rule.test(this.value)) {
    myValidator[this.name].valid = false;
    myValidator.firstName.error = "Имя только из букв";
    this.placeholder = myValidator[this.name].error;
  } else {
    myValidator[this.name].valid = true;
  }
  checkAllValidity();
}

//перевірка валідності введеного email
function validEmail() {
  if (this.value.length == 0) {
    myValidator[this.name].valid = false;
    myValidator[this.name].error = "Введите Ваш email";
    this.placeholder = myValidator[this.name].error;
  } else if (this.value.length > 30) {
    myValidator[this.name].valid = false;
    myValidator[this.name].error = "Не более 30-ти символов";
    this.placeholder = myValidator.email.error;
  } else if (!myValidator[this.name].rule.test(this.value)) {
    myValidator[this.name].valid = false;
    myValidator[this.name].error = "Неверный формат email";
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
    myValidator[this.name].error = "Придумайте Ваш пароль";
    this.placeholder = myValidator[this.name].error;
  } else if (this.value.length < 5 || this.value.length > 10) {
    myValidator[this.name].valid = false;
    myValidator[this.name].error = "Длинна пароля от 5ти до 10ти символов";
    this.placeholder = myValidator[this.name].error;
  } else if (
    this.value == this.value.toUpperCase() ||
    this.value == this.value.toLowerCase()
  ) {
    myValidator[this.name].valid = false;
    myValidator[this.name].error = "Используйте и большие и малые буквы";
    this.placeholder = myValidator[this.name].error;
  } else {
    myValidator[this.name].valid = true;
  }
  checkAllValidity();
}

// Опрацюємо клік на кнопку Продовжити
regAccept.addEventListener("click", registation);
function registation() {
  event.preventDefault();
  alert("Регистрация прошла успешно !");
}
