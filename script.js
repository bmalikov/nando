"use strict";

const input = document.querySelector(".input");
const list = document.querySelector(".list");
const add = document.querySelector(".add");
const item = document.querySelector("li");

const addItem = function () {
  const item = document.createElement("li");
  const deleteItem = document.createElement("button");
  deleteItem.textContent = "Delete";
  if (input.value.length > 0) {
    item.textContent = input.value;
    list.append(item, deleteItem);
    input.value = "";
  }
  // Add class done
  item.addEventListener("click", function () {
    item.classList.toggle("done");
  });
};

// Add item
add.addEventListener("click", addItem);

// Add item with Enter
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});
