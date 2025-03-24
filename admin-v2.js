
document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("savePartBtn");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const type = document.querySelector('input[name="itemType"]:checked').value;
      const category = document.getElementById("category").value;
      const subcategory = document.getElementById("subcategory").value;
      const name = document.getElementById("partName").value;
      const partNumber = document.getElementById("partNumber").value;
      const description = document.getElementById("description").value;
      const price = document.getElementById("price").value;
      const stock = document.getElementById("stock").value;
      const make = document.getElementById("make").value;
      const model = document.getElementById("model").value;
      const year = document.getElementById("year").value;
      const imageInput = document.getElementById("image");
      const imageData = imageInput && imageInput.files.length > 0 ? URL.createObjectURL(imageInput.files[0]) : "";

      const newItem = {
        category,
        subcategory,
        name,
        partNumber,
        description,
        price,
        stock,
        make,
        model,
        year,
        image: imageData
      };

      const key = type === "part" ? "parts" : "accessories";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push(newItem);
      localStorage.setItem(key, JSON.stringify(existing));

      alert(`${type === "part" ? "Part" : "Accessory"} saved!`);
    });
  }
});
