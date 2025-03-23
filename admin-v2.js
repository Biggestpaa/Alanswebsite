
function savePart() {
  const name = document.getElementById("partName").value;
  const partNumber = document.getElementById("partNumber").value;
  const make = document.getElementById("partMake").value;
  const model = document.getElementById("partModel").value;
  const year = document.getElementById("partYear").value;
  const category = document.getElementById("partCategory").value;
  const subcategory = document.getElementById("partSubcategory").value;
  const price = document.getElementById("partPrice").value;
  const stock = document.getElementById("partStock").value;
  const imageInput = document.getElementById("partImage");

  const reader = new FileReader();
  reader.onload = function(e) {
    const image = e.target.result;
    const parts = JSON.parse(localStorage.getItem("parts") || "[]");
    parts.push({ name, partNumber, make, model, year, category, subcategory, price, stock, image });
    localStorage.setItem("parts", JSON.stringify(parts));
    alert("Part saved!");
    renderList("parts", "partsList");
  };

  if (imageInput.files.length > 0) {
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    const parts = JSON.parse(localStorage.getItem("parts") || "[]");
    parts.push({ name, partNumber, make, model, year, category, subcategory, price, stock, image: "" });
    localStorage.setItem("parts", JSON.stringify(parts));
    alert("Part saved!");
    renderList("parts", "partsList");
  }
}

function saveAccessory() {
  const name = document.getElementById("accName").value;
  const partNumber = document.getElementById("accNumber").value;
  const make = document.getElementById("accMake").value;
  const model = document.getElementById("accModel").value;
  const year = document.getElementById("accYear").value;
  const category = document.getElementById("accCategory").value;
  const subcategory = document.getElementById("accSubcategory").value;
  const price = document.getElementById("accPrice").value;
  const stock = document.getElementById("accStock").value;
  const imageInput = document.getElementById("accImage");

  const reader = new FileReader();
  reader.onload = function(e) {
    const image = e.target.result;
    const accessories = JSON.parse(localStorage.getItem("accessories") || "[]");
    accessories.push({ name, partNumber, make, model, year, category, subcategory, price, stock, image });
    localStorage.setItem("accessories", JSON.stringify(accessories));
    alert("Accessory saved!");
    renderList("accessories", "accessoriesList");
  };

  if (imageInput.files.length > 0) {
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    const accessories = JSON.parse(localStorage.getItem("accessories") || "[]");
    accessories.push({ name, partNumber, make, model, year, category, subcategory, price, stock, image: "" });
    localStorage.setItem("accessories", JSON.stringify(accessories));
    alert("Accessory saved!");
    renderList("accessories", "accessoriesList");
  }
}

function updateBanner() {
  const input = document.getElementById("bannerInput");
  if (input.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function(e) {
      localStorage.setItem("bannerImage", e.target.result);
      alert("Banner updated!");
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function updateLogo() {
  const input = document.getElementById("logoInput");
  if (input.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function(e) {
      localStorage.setItem("logoImage", e.target.result);
      alert("Logo updated!");
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function toggleSection(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === "none" ? "block" : "none";
}

function renderList(storageKey, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  const items = JSON.parse(localStorage.getItem(storageKey) || "[]");
  if (items.length === 0) {
    container.innerHTML = "<p>No items found.</p>";
    return;
  }
  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "stock-item";
    div.innerHTML = `<strong>${item.name}</strong><br>Part No: ${item.partNumber || "N/A"}<button class="delete-button" onclick="deleteItem('${storageKey}', ${index})">Delete</button>`;
    container.appendChild(div);
  });
}

function deleteItem(key, index) {
  const items = JSON.parse(localStorage.getItem(key) || "[]");
  if (index >= 0 && index < items.length) {
    items.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(items));
    renderList(key, key === 'parts' ? 'partsList' : 'accessoriesList');
    alert("Item deleted.");
  }
}

window.onload = function() {
  renderList("parts", "partsList");
  renderList("accessories", "accessoriesList");
};
