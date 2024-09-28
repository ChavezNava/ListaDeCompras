function agregarProducto() {
    var productName = document.getElementById("product-name").value;
    var productCost = parseFloat(document.getElementById("product-quantity").value);
    var productQuantity = parseFloat(document.getElementById("product-cost").value);

    if (!productName || isNaN(productCost) || isNaN(productQuantity) || productCost <= 0 || productQuantity <= 0) {
      alert("Por favor, ingresa un nombre, un costo y una cantidad de producto validos.");
      return;
    }

    var productTable = document.getElementById("product-table").getElementsByTagName('tbody')[0];
    var newRow = productTable.insertRow(-1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = productName;
    cell2.innerHTML = productCost;
    cell3.innerHTML = "$" + productQuantity.toFixed(2);
    cell4.innerHTML = "$" + (productCost * productQuantity).toFixed(2);

    // Actualizar total al agregar un nuevo producto
    actualizarTotal(productCost * productQuantity);
    limpiarCampos();
  }

  function actualizarTotal(costoProducto) {
    var totalElement = document.getElementById("total");
    var total = parseFloat(totalElement.innerText);
    total += costoProducto;
    totalElement.innerText = total.toFixed(2);
  }

  function limpiarCampos() {
    document.getElementById("product-name").value = "";
    document.getElementById("product-quantity").value = "";
    document.getElementById("product-cost").value = "";
    document.getElementById("product-name").focus();
  }

  