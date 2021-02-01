function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-quantity');
    const productQuantity = parseInt(productInput.value);
    let productNewQuantity = productQuantity;
    if (isIncrease == true) {
        productNewQuantity = productQuantity + 1;
    }
    if (isIncrease == false && productQuantity > 0) {
        productNewQuantity = productQuantity - 1;
    }
    productInput.value = productNewQuantity;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewQuantity * 1219;
    }
    if (product == 'case') {
        productTotal = productNewQuantity * 59;
    }
    document.getElementById(product + "Total").innerText = productTotal;
    calculateTotal();
}

function calculateTotal() {
    // const phoneInput = document.getElementById('phone-quantity');
    // const phoneQuantity = parseInt(phoneInput.value);
    const phoneQuantity = getInputValue('phone');
    // const caseInput = document.getElementById('case-quantity');
    // const caseQuantity = parseInt(caseInput.value);
    const caseQuantity = getInputValue('case');
    const totalPrice = phoneQuantity * 1219 + caseQuantity * 59;
    document.getElementById('subTotal').innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-quantity');
    const productQuantity = parseInt(productInput.value);
    return productQuantity;
}