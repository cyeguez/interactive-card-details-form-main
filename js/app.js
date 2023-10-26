const form = document.querySelector(".data");
const inputName = document.getElementById("nameUser");
const inputMonth = document.getElementById("monthInput");
const inputYear = document.getElementById("yearInput");
const cardName = document.getElementById("cardUser");
const inputNumber = document.getElementById("cardNumber");
const cardSerial = document.getElementById("cardSerial");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvcCod");
const cvcInput = document.getElementById("cvcInput");
const btnForm = document.getElementById("btn-form");
const thanyou = document.querySelector(".thank-you");

inputName.addEventListener("keyup", (e) => {
  const patron = /^[a-zA-ZáéíóúüÁÉÍÓÚÜ]+( [a-zA-ZáéíóúüÁÉÍÓÚÜ]+)*$/;
  let value = e.target.value;
  let father = nameUser.parentNode;
  if (patron.test(value)) {
    cardName.textContent = value;
    father.classList.remove("error");
  } else {
    father.classList.add("error");
  }
});

inputNumber.addEventListener("keyup", (e) => {
  let father = inputNumber.parentNode;
  let valorInput = e.target.value;
  inputNumber.value = valorInput
    .replace(/\s/g, "")
    .replace(/([0-9]{4})/g, "$1 ")
    .trim();

  if (valorInput.match(/(\d{4}\s?)+/) == null) {
    father.classList.add("error");
  } else {
    father.classList.remove("error");
    cardSerial.textContent = valorInput;
  }
});

function maxLength(valuex, valuey) {
  valuex = valuex.slice(0, valuey);
  return valuex;
}

inputMonth.addEventListener("keyup", (e) => {
  inputMonth.value = inputMonth.value.replace(/\s/g, "");
  inputMonth.value = maxLength(inputMonth.value, 2);
  let valueInput = e.target.value;

  const reg = /^(1[0-2]?|[2-9])$/;
  let father = inputMonth.parentNode;

  if (!reg.test(valueInput)) {
    inputMonth.value = valueInput.replace(inputMonth.value, "");
  }
  if (inputMonth.value.length == 0) {
    father.classList.add("error");
  } else {
    month.textContent = inputMonth.value;
    father.classList.remove("error");
  }
});

inputYear.addEventListener("keyup", (e) => {
  inputYear.value = inputYear.value.replace(/\s/g, "");
  inputYear.value = maxLength(inputYear.value, 2);
  let valueInput = e.target.value;

  let father = inputYear.parentNode;

  if (inputYear.value.length == 0) {
    father.classList.add("error");
  } else {
    father.classList.remove("error");
    year.textContent = valueInput;
  }
});

//input del cvc
cvcInput.addEventListener("keyup", (e) => {
  let valueInput = e.target.value;
  let father = cvcInput.parentNode;
  valueInput = valueInput.replace(/\s/g, "").replace(/\D/g, "");
  cvc.textContent = cvcInput.value = maxLength(valueInput, 3);

  if (cvcInput.value.length == 0) {
    father.classList.add("error");
  } else {
    father.classList.remove("error");
  }
});

btnForm.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputName.value.length === 0 
    || inputNumber.value.length === 0 
    ||inputMonth.value.length === 0 
    ||inputYear.value.length === 0
    || cvcInput.value.length === 0
  ) {
    e.preventDefault();
  } else {
    form.style.display = "none ";
    thanyou.style.display = "flex";
  }
});
