let body = document.querySelector("body");
let form = document.querySelector(".form__main-form");
let input = document.querySelector(".form__input");
let button = document.querySelector(".form__button");
let incorrectText = document.querySelector(".form__incorrect-text");
let list = document.querySelector(".form__list");
let overlay = document.querySelector(".stopping");
input.addEventListener("input", (e) => {
  inputText = e.target.value;
  if (/^[A-Za-z\s]+$/.test(inputText)) {
    incorrectText.textContent = ``;
    input.style.outline = "2px solid green";
  } else {
    incorrectText.textContent = `*Harflar va begilar ishlatmang`;
    input.style.outline = "2px solid red";
    // button.disabled = true;
    // overlay.style.display = "block";
  }
  if (inputText.length < 3) {
    incorrectText.textContent = `*Kamida 3 ta so'z kirit`;
    input.style.outline = "2px solid red";
  } else {
    input.style.outline = "2px solid green";
  }
  if (inputText.length >= 25) {
    incorrectText.textContent = `*Maksimal 25 ta so'z kirit!`;
    e.target.value = "";
    input.style.outline = "2px solid red";
  } else {
    input.style.outline = "2px solid green";
  }
});
form.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = input.value;
  let lists = document.createElement("li");
  if (incorrectText.textContent !== ``) {
    return;
  }
  lists.textContent = inputValue;
  form.append(incorrectText);
  list.append(lists);
  form.append(list);
  input.value = "";
});
