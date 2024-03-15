const form = document.querySelector("form");
const password = document.querySelector("#password");
const country = document.querySelector("#country");
const zipCode = document.querySelector("#zipCode");
const email = document.querySelector("#email");

email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I'm expecting an email adress!");
  } else {
    email.setCustomValidity("");
  }
});

password.addEventListener("input", () => {
   if (password.validity.typeMismatch) {
     password.setCustomValidity("I'm expecting an password adress!");
   } else {
     password.setCustomValidity("");
   } 
})
zipCode.addEventListener("input", () => {
   if (zipCode.validity.typeMismatch) {
     zipCode.setCustomValidity("I'm expecting an zipCode adress!");
   } else {
     zipCode.setCustomValidity("");
   } 
})
country.addEventListener("input", () => {
   if (country.validity.typeMismatch) {
     country.setCustomValidity("I'm expecting an Valid Country name!");
   } else {
     country.setCustomValidity("");
   } 
})


form.addEventListener("submit", () => {
   if () {
     email.setCustomValidity("I'm expecting an email adress!");
   } else {
     email.setCustomValidity("");
   } 
})