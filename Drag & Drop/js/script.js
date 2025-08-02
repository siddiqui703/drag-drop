let items = document.querySelectorAll("#left .list");
let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");

let selected = null;

items.forEach((list) => {
  list.addEventListener("dragstart", function (e) {
    selected = e.target;
    selected.classList.add("dragging");
  });

  list.addEventListener("dragend", function () {
    selected.classList.remove("dragging");
  });
});

rightBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

rightBox.addEventListener("drop", function (e) {
  if (selected) {
    rightBox.appendChild(selected);
    selected = null;
  }
});

leftBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

leftBox.addEventListener("drop", function (e) {
  if (selected) {
    leftBox.appendChild(selected);
    selected = null;
  }
});
