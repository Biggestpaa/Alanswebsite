
document.getElementById("addPartBtn").addEventListener("click", function () {
  const parts = JSON.parse(localStorage.getItem("parts") || "[]");
  const partImage = document.getElementById("partImage").files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const newPart = {
      name: document.getElementById("partName").value,
      partNumber: document.getElementById("partNumber").value,
      price: document.getElementById("partPrice").value,
      make: document.getElementById("partMake").value,
      model: document.getElementById("partModel").value,
      year: document.getElementById("partYear").value,
      category: document.getElementById("partCategory").value,
      subcategory: document.getElementById("partSubcategory").value,
      image: reader.result || ""
    };

    if (window.editPartIndex !== null) {
      parts[editPartIndex] = newPart;
      window.editPartIndex = null;
      document.getElementById("addPartBtn").textContent = "Save Part";
    } else {
      parts.push(newPart);
    }

    localStorage.setItem("parts", JSON.stringify(parts));
    displayParts();
  };

  if (partImage) reader.readAsDataURL(partImage);
  else reader.onload();
});

document.getElementById("addAccessoryBtn").addEventListener("click", function () {
  const accs = JSON.parse(localStorage.getItem("accessories") || "[]");
  const accImage = document.getElementById("accImage").files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const newAcc = {
      name: document.getElementById("accName").value,
      partNumber: document.getElementById("accNumber").value,
      price: document.getElementById("accPrice").value,
      make: document.getElementById("accMake").value,
      model: document.getElementById("accModel").value,
      year: document.getElementById("accYear").value,
      category: document.getElementById("accCategory").value,
      subcategory: document.getElementById("accSubcategory").value,
      image: reader.result || ""
    };

    if (window.editAccessoryIndex !== null) {
      accs[editAccessoryIndex] = newAcc;
      window.editAccessoryIndex = null;
      document.getElementById("addAccessoryBtn").textContent = "Save Accessory";
    } else {
      accs.push(newAcc);
    }

    localStorage.setItem("accessories", JSON.stringify(accs));
    displayAccessories();
  };

  if (accImage) reader.readAsDataURL(accImage);
  else reader.onload();
});

function deletePart(index) {
  const parts = JSON.parse(localStorage.getItem("parts") || "[]");
  parts.splice(index, 1);
  localStorage.setItem("parts", JSON.stringify(parts));
  displayParts();
}

function deleteAccessory(index) {
  const accs = JSON.parse(localStorage.getItem("accessories") || "[]");
  accs.splice(index, 1);
  localStorage.setItem("accessories", JSON.stringify(accs));
  displayAccessories();
}

function editPart(index) {
  const parts = JSON.parse(localStorage.getItem("parts") || "[]");
  const part = parts[index];
  document.getElementById("partName").value = part.name;
  document.getElementById("partNumber").value = part.partNumber;
  document.getElementById("partPrice").value = part.price;
  document.getElementById("partMake").value = part.make;
  document.getElementById("partModel").value = part.model;
  document.getElementById("partYear").value = part.year;
  document.getElementById("partCategory").value = part.category;
  document.getElementById("partSubcategory").value = part.subcategory;
  window.editPartIndex = index;
  document.getElementById("addPartBtn").textContent = "Update Part";
}

function editAccessory(index) {
  const accs = JSON.parse(localStorage.getItem("accessories") || "[]");
  const acc = accs[index];
  document.getElementById("accName").value = acc.name;
  document.getElementById("accNumber").value = acc.partNumber;
  document.getElementById("accPrice").value = acc.price;
  document.getElementById("accMake").value = acc.make;
  document.getElementById("accModel").value = acc.model;
  document.getElementById("accYear").value = acc.year;
  document.getElementById("accCategory").value = acc.category;
  document.getElementById("accSubcategory").value = acc.subcategory;
  window.editAccessoryIndex = index;
  document.getElementById("addAccessoryBtn").textContent = "Update Accessory";
}

// Delete part
function deletePart(index) {
  let parts = JSON.parse(localStorage.getItem("parts") || "[]");
  if (index >= 0 && index < parts.length) {
    parts.splice(index, 1);
    localStorage.setItem("parts", JSON.stringify(parts));
    displayParts();
  }
}

// Delete accessory
function deleteAccessory(index) {
  let accessories = JSON.parse(localStorage.getItem("accessories") || "[]");
  if (index >= 0 && index < accessories.length) {
    accessories.splice(index, 1);
    localStorage.setItem("accessories", JSON.stringify(accessories));
    displayAccessories();
  }
}
