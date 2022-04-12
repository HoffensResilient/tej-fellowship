alert("Hello TEJ!");
const btnhello = document.querySelector(".btn-hello");

btnhello.addEventListener("click", () => {
  alert("Hello There");
});

let incr = document.querySelector(".btn1");
let remove = document.querySelector(".btn2");

let int = document.getElementById("number");
let integer = 0;

incr.addEventListener("click", function () {
  integer += 1;
  int.value = integer;
});
remove.addEventListener("click", function () {
  integer -= 1;
  int.value = integer;
});
