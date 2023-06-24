/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  window.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".container");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      var errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach(function(errorMessage) {
        errorMessage.textContent = "";
      });

      // Get the form fields//
      var card = document.querySelector('input[name="card number"]');
      var ccv = document.querySelector('input[name="CVC"]');
      var amount = document.querySelector('input[name="Amount"]');
      var firstname = document.querySelector('input[name="First name"]');
      var lastname = document.querySelector('input[name="Last name"]');
      var city = document.querySelector('input[name="City"]');
      var postalcode = document.querySelector('input[name="PostalCode"]');

      // Regular expression patterns
      var soloNumero = /^\d+$/;
      var soloLetras = /^[A-Za-z]+$/;

      // Validation
      var hasError = false; // Flag to track if there are any errors

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
};
