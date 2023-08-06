import "bootstrap";
import "./style.css";

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".container");
  const soloNumero = /^\d+$/;
  const soloLetras = /^[A-Za-z]+$/;

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function(errorMessage) {
      errorMessage.textContent = "";
    });

    const card = document.querySelector('input[name="card number"]');
    const ccv = document.querySelector('input[name="CVC"]');
    const amount = document.querySelector('input[name="Amount"]');
    const firstname = document.querySelector('input[name="First name"]');
    const lastname = document.querySelector('input[name="Last name"]');
    const city = document.querySelector('input[name="City"]');
    const postalcode = document.querySelector('input[name="PostalCode"]');

    let hasError = false;

    if (card.value === "") {
      card.classList.add("is-invalid");
      document.getElementById("CardError").textContent =
        "Card number must be filled out";
      hasError = true;
    } else if (!soloNumero.test(card.value)) {
      card.classList.add("is-invalid");
      document.getElementById("CardError").textContent =
        "Card number must contain only numbers";
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

    if (lastname.value === "") {
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
      // Form is valid, submit it
      form.submit();
    }
  });
});
