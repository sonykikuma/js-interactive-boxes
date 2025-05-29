document.addEventListener("DOMContentLoaded", () => {
  // Pricing data
  const prices = {
    1: 10.0,
    2: 18.0,
    3: 24.0,
  };

  // Elements
  const form = document.getElementById("product-form");
  const unitOptions = document.querySelectorAll(".product-option");
  const totalPriceEl = document.querySelector(".total-price");

  function updateDropdowns() {
    const selected = form.units.value;
    unitOptions.forEach((opt) => {
      const dropdowns = opt.querySelector(".unit-dropdowns");
      const unit = opt.dataset.units;
      if (dropdowns) {
        dropdowns.style.display = unit === selected ? "block" : "none";
      }

      if ((unit === "2" || unit === "3") && unit === selected) {
        opt.classList.add("active-option");
      } else {
        opt.classList.remove("active-option");
      }
    });
  }

  function updateTotal() {
    const selected = form.units.value;
    totalPriceEl.textContent = `$${prices[selected].toFixed(2)} USD`;
  }

  updateDropdowns();
  updateTotal();

  form.addEventListener("change", (e) => {
    if (e.target.name === "units") {
      updateDropdowns();
      updateTotal();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Added to cart!");
  });
});
