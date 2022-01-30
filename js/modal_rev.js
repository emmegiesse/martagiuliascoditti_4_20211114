//------DISPLAY NAV RESPONSIVE------
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//------DOM------
// DOM Elements MODAL
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");


//------MODAL DISPLAY #1 ISSUE------
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//close modal form
function closeModal() {
  modalbg.style.display = "none";
}
// launch and close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));


//------FORM VALIDATION #2 #3 ISSUE------
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const events = document.getElementById("quantity");
const allCities = document.getElementById('cities');
const locations = document.querySelectorAll('#cities .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');
const submitBtn = document.querySelectorAll(".btn-submit");

// First name check
function checkFirstName() {
  console.log("testname")
  const nameRegex = new RegExp(/[A-zÀ-ÿ]{2,}/);
  let errorFirst = document.getElementById("error-first");
  if (!nameRegex.test(firstName.value)) {
    errorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    return false;
  } else {
    errorFirst.innerHTML = "";
    return true;
  }
}

// Last name check
function checkLastName() {
  const nameRegex = new RegExp(/[A-zÀ-ÿ]{2,}/);
  let errorLast = document.getElementById("error-last");
  if (!nameRegex.test(lastName.value)) {
    errorLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    return false;
  } else {
    errorLast.innerHTML = "";
    return true;
  }   
}

// Email check
function checkEmail() {
  const emailRegex = new RegExp(/(.+)@(.+){2,}\.(.+){2,}/);
  let errorEmail = document.getElementById("error-email");
  if (!emailRegex.test(email.value)) {
    errorEmail.innerHTML = "Adresse mail non valide";
    return false;
  } else {
    errorEmail.innerHTML = "";
    return true;
  }    
}

// Birthdate check
function checkBirthdate() {
  let errorDOB = document.getElementById("error-DOB");
  if (birthDate.value.trim().length !== 10) {
    errorDOB.innerHTML = "Vous devez entrer votre date de naissance";
    return false;
  } else {
    errorDOB.innerHTML = "";
    return true;
  }    
}

// Events check 
function checkEvents() {
  let errorEvents = document.getElementById("error-events");
  if (events.value.trim().length === 0 || isNaN(events.value.trim()) === true || events.value.trim() < 0){
    errorEvents.innerHTML = "Vous devez entrer une valeur numerique";
    return false;
  } else {
    errorEvents.innerHTML = "";
    return true;
  }    
}

// Location check 
function checkLocations() {
  let errorLocations = document.getElementById("error-locations");
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked === true) {
      errorLocations.innerHTML = "";
      return true;
    }    
  }
  errorLocations.innerHTML = "Vous devez choisir une option";
  return false;
}

// TERMS OF USE 
function checkTerms() {
  let errorTOU = document.getElementById("error-terms");
  if (checkbox1.checked === false) {
    errorTOU.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions";
    return false;
  } else {
    errorTOU.innerHTML = "";
    return true;
  }    
}

// FORM FIELDS EVENTS
function formFieldsValidation(element, method, event) {
  element.addEventListener(event, method);
}
formFieldsValidation(firstName, checkFirstName, 'focusout');
formFieldsValidation(lastName, checkLastName, 'focusout');
formFieldsValidation(email, checkEmail, 'focusout');
formFieldsValidation(birthDate, checkBirthdate, 'focusout');
formFieldsValidation(events, checkEvents, 'focusout');

function allFormCheck() {
  return (checkFirstName() &&
  checkLastName() &&
  checkEmail() &&
  checkBirthdate() &&
  checkEvents() &&
  checkLocations() &&
  checkTerms()) 
}

// lauch form validation 
submitBtn.forEach((btn) => btn.addEventListener("click",function (e) {
  e.preventDefault();
  if (allFormCheck() == true) {
    displayModalSubmit();
    document.querySelector('form').reset();
  } else {
    //allFormCheck();
  }
}));

//------FORM VALIDATION #4 ISSUE-----
// DOM ELEMENTS SUBMITTED CONFIRMATION
const modalSubmit = document.getElementsByClassName('confirmation-submit');
const closeModalSubmit = document.getElementsByClassName('close-modal-submit');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');

// ------ SUBMITTED CONFIRMATION ------ //
// DISPLAY MODAL SUBMIT
function displayModalSubmit() {
  modalbg.style.display = 'none';
  modalSubmit[0].style.display = 'block';
}

// CLOSE SUBMIT
function closeSubmit() {
  modalSubmit[0].style.display = 'none';
  first.style.border = 'none';
  last.style.border = 'none';
  email.style.border = 'none';
  birthdate.style.border = 'none';
  quantity.style.border = 'none';
}

// EVENT CLOSE MODAL SUBMIT
closeModalSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click', closeSubmit);