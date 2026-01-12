function calculateVat() {
    const priceBox = document.getElementById("priceBox");
    const spanResult = document.getElementById("spanResult");
    const price = +priceBox.value;
    const vat = price * 0.18;
    spanResult.innerText = `Price: ${price} VAT: ${vat}`;
}



