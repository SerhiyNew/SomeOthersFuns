const testAnswer = {
  "Вариант А": 35,
  "Вариант Б": 50,
  "Вариант В": 15
};
// функція-обробник результату
function setResult() {
  event.preventDefault();
  // отримуємо обраний варінт і записуємо його в потрібні блоки
  let value = this.innerHTML;
  proc.innerHTML = testAnswer[value] + "%";
  plot.innerHTML = `людей обращают внимание на ${value.split(" ")[1]}`;

  // робимо блок "answer" видимим
  answer.classList.remove("dispNone");
  answer.classList.add("dispBlock");
  // робимо кнопку "Продовжити" видимою
  btnGo.classList.remove("dispNone");
  btnGo.classList.add("dispBlock");
}

function goNext() {
  event.preventDefault();
  document.location.href = "./index2.html";
}

// Отримуємо доступ до вікна "answer"
let answer = document.getElementById("answer");

// Отримуємо доступ до текстових полів вікна "answer"
let proc = document.getElementById("proc");
let plot = document.getElementById("plot");

// отримуємо доступ до кнопки "Продовжити"
// та навішуєм на нього обробник подій
let btnGo = document.getElementsByClassName("btnGo")[0];
btnGo.addEventListener("click", goNext);

// отримуємо доступ до варіантів форми
let variants = document.forms.testOne.getElementsByTagName("span");

// Навішуєм обробник подій на кожен варіант
for (let i = 0; i < variants.length; i++) {
  variants[i].addEventListener("mousedown", setResult);
}
