const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenselist");

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const description = document.getElementById("description").value.trim();
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (
    description &&
    category !== "Select Category" &&
    !isNaN(amount) &&
    amount > 0
  ) {
    const newRow = document.createElement("tr");

    newRow.innerHTML = `<td>${description}</td>
    <td>${category}</td>
    <td>${amount}</td>`;

    expenseList.appendChild(newRow);

    // Reset Form Fields
    document.getElementById("description").value = "";
    document.getElementById("category").value = "Select Category";
    document.getElementById("amount").value = "";
  } else {
    alert("Please fill out all fields with valid data.");
  }
});

document.querySelector(".clear-btn").addEventListener("click", function () {
  expenseList.innerHTML = "";
});
