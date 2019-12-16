function goNext() {
  event.preventDefault();
  document.location.href = "./pages/index1.html";
}

let btnGo = document.getElementsByClassName("btnGo")[0];
btnGo.addEventListener("click", goNext);
