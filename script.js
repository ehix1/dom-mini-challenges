"use strict";
//selectors
const totalParagraph = document.querySelector(".total");
const colaButton = document.querySelector(".cola");
const peanutsButton = document.querySelector(".peanuts");
const chocolateButton = document.querySelector(".chocolate");
const gummiesButton = document.querySelector(".gummies");
let total = 0;
//
const coinForm = document.querySelector(".form");
const coinContainer = document.querySelector(".coin-container");
//
const lightbulb = document.querySelector(".lightbulb");
const onButton = document.querySelector(".on");
const offButton = document.querySelector(".off");
const toggleButton = document.querySelector(".toggle");
const endButton = document.querySelector(".end");
const lightButtons = document.querySelectorAll(".light-switch");

//vending-machine
console.dir(totalParagraph);

const updateVendingTotal = (price) => {
  total += price;
  totalParagraph.textContent = `Total: $${total}.00`;
};

colaButton.addEventListener("click", () => {
  updateVendingTotal(2);
});
peanutsButton.addEventListener("click", () => {
  updateVendingTotal(3);
});
chocolateButton.addEventListener("click", () => {
  updateVendingTotal(4);
});
gummiesButton.addEventListener("click", () => {
  updateVendingTotal(6);
});

//make-money
coinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //grab data from user input, check in console
  const howManyInput = document.querySelector("#howMany").value; // string, no longer a node object
  const typeOfCointInput = document.querySelector("#type").value;
  console.dir(howManyInput);
  console.dir(typeOfCointInput);

  for (let i = 0; i < howManyInput; i++) {
    //make elements
    const newCoin = document.createElement("div");
    //modify elements
    newCoin.classList.add(typeOfCointInput, "coin");
    newCoin.textContent = typeOfCointInput;
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
    //append to the page
    coinContainer.append(newCoin);
  }
});

//lightbulb
onButton.addEventListener("click", () => {
  //lightblub.classlist.add("light");
  lightbulb.style.backgroundColor = "yellow";
  lightbulb.style.color = "black";
});

offButton.addEventListener("click", () => {
  //lightblub.classlist.remove("light");
  lightbulb.style.backgroundColor = "rgb(70, 70, 70)";
  lightbulb.style.color = "white";
});

toggleButton.addEventListener("click", () => {
  //lightbulb.classList.toggle("light");
  if (lightbulb.style.backgroundColor === "yellow") {
    lightbulb.style.backgroundColor = "rgb(70, 70, 70)";
    lightbulb.style.color = "white";
  } else {
    lightbulb.style.backgroundColor = "yellow";
    lightbulb.style.color = "black";
  }
});
//does not toggle :/

endButton.addEventListener("click", () => {
  // lightbulb.style.display = "none";
  // onButton.disabled = true;
  // offButton.disabled = true;
  // toggleButton.disabled = true;
  // endButton.disabled = true;
  lightButtons.forEach((button) => {
    button.setAttribute("disabled", true);
  });
  lightbulb.remove();
});
