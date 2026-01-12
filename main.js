let priceBox = document.getElementById("priceBox")


function vat(){
    let price = Number(priceBox.value);
    let vat = price * 1.18;
    alert("Vat: " + vat);
}