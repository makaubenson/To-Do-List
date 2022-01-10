// ****** SELECT ITEMS **********
const Alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
// submitForm
form.addEventListener("submit", addItem);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  //   console.log(grocery.value);
  const value = grocery.value;

  const id = new Date().getTime().toString();
  //   console.log(id);
  if (value && !editFlag) {
    console.log("add item to the list");
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    // console.log("empty value");
    Alert.textContent = "empty value";
    Alert.classList.add("alert-danger");
  }
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
