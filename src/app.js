/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let form = document.querySelector("form");
  let soloLetras = /^[a-zA-Z\s]+$/;
  let soloNumero = /^[0-9]+$/;

  form.addEventListener("submit", event => {
    event.preventDefault(); // evitar el comportamiento del formulario (enviar los datos);

    let hasError = false; // variable para saber si tenemos errores;

    //target info
    let form = event.target;
    console.log(form.id);

    let {
      card,
      ccv,
      amount,
      firstname,
      lastname,
      city,
      postalcode,
      enviar
    } = container;
    console.log(card.value);
    console.log(ccv.value);
    console.log(amount.value);
    console.log(firstname.value);
    console.log(lastname.value);
    console.log(city.value);
    console.log(postalcode.value);
    console.log(enviar.value);

    if (card.value === "") {
      card.classList.add("is-invalid");
      hasError = true; // indicamos si tenemos error;
    } else if (!soloNumero.test(card.value)) {
      card.classList.add("is-invalid");
      hasError = true;
    } else {
      card.classList.remove("is-invalid");
    }

    if (ccv.value === "") {
      ccv.classList.add("is-invalid");
      hasError = true;
    } else if (!soloNumero.test(ccv.value)) {
      ccv.classList.add("is-invalid");
      hasError = true;
    } else {
      ccv.classList.remove("is-invalid");
    }

    if (amount.value === "") {
      amount.classList.add("is-invalid");
      hasError = true;
    } else if (!soloNumero.test(amount.value)) {
      amount.classList.add("is-invalid");
      hasError = true;
    } else {
      amount.classList.remove("is-invalid");
    }

    if (firstname.value === "") {
      firstname.classList.add("is-invalid");
      hasError = true;
    } else if (!soloLetras.test(firstname.value)) {
      firstname.classList.add("is-invalid");
      hasError = true;
    } else {
      firstname.classList.remove("is-invalid");
    }

    if (firstname.value === "") {
      lastname.classList.add("is-invalid");
      hasError = true;
    } else if (!soloLetras.test(lastname.value)) {
      lastname.classList.add("is-invalid");
      hasError = true;
    } else {
      lastname.classList.remove("is-invalid");
    }

    if (city.value === "") {
      city.classList.add("is-invalid");
      hasError = true;
    } else if (!soloLetras.test(city.value)) {
      city.classList.add("is-invalid");
      hasError = true;
    } else {
      city.classList.remove("is-invalid");
    }

    if (postalcode.value === "") {
      postalcode.classList.add("is-invalid");
      hasError = true;
    } else if (!soloNumero.test(postalcode.value)) {
      postalcode.classList.add("is-invalid");
      hasError = true;
    } else {
      postalcode.classList.remove("is-invalid");
    }

    if (!hasError) {
      form.submit();
    }
  });
};
