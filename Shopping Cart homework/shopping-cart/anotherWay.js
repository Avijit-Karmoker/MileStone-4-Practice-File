// add phone quantity and total price
const addPhoneUnit = document.getElementById("add-phone");
addPhoneUnit.addEventListener("click", function () {
    handleProductChange('phone', true);
});
const decreasePhoneUnit = document.getElementById('remove-phone');
decreasePhoneUnit.addEventListener("click", function () {
    handleProductChange('phone', false);
});
const addCaseUnit = document.getElementById("add-case");
addCaseUnit.addEventListener("click", function () {
    handleProductChange('case', true);
});
const decreaseCaseUnit = document.getElementById('remove-case');
decreaseCaseUnit.addEventListener("click", function () {
    handleProductChange('case', false);
});

function handlePhoneChange(isIncrease) {
    const phoneInput = document.getElementById('phone-quantity');
    const phoneQuantity = parseInt(phoneInput.value);
    let phoneNewQuantity = phoneQuantity;
    if (isIncrease == true) {
        phoneNewQuantity = phoneQuantity + 1;
    }
    if (isIncrease == false && phoneQuantity > 0) {
        phoneNewQuantity = phoneQuantity - 1;
    }
    phoneInput.value = phoneNewQuantity;
    const phoneTotal = phoneNewQuantity * 1219;
    document.getElementById("phoneTotal").innerText = phoneTotal;
}

// add case quantity and total price
const addCaseUnit = document.getElementById("add-case");
addCaseUnit.addEventListener("click", function () {
    handleCaseChange(true);
});
const decreaseCaseUnit = document.getElementById('remove-case');
decreaseCaseUnit.addEventListener("click", function () {
    handleCaseChange(false);
});

function handleCaseChange(isIncrease) {
    const caseInput = document.getElementById('case-quantity');
    const caseQuantity = parseInt(caseInput.value);
    let caseNewQuantity = caseQuantity;
    if (isIncrease == true) {
        caseNewQuantity = caseQuantity + 1;
    }
    if (isIncrease == false && caseQuantity > 0) {
        caseNewQuantity = caseQuantity - 1;
    }
    caseInput.value = caseNewQuantity;
    const caseTotal = caseNewQuantity * 59;
    document.getElementById("caseTotal").innerText = caseTotal;
}
addCaseUnit.addEventListener("click", function () {
    const caseInput = document.getElementById('case-quantity');
    const caseQuantity = parseInt(caseInput.value);
    const caseNewQuantity = caseQuantity + 1;
    caseInput.value = caseNewQuantity;
    const caseTotal = caseNewQuantity * 59;
    document.getElementById("caseTotal").innerText = caseTotal;
});

const decreaseCaseUnit = document.getElementById('remove-case');
decreaseCaseUnit.addEventListener("click", function () {
    const caseInput = document.getElementById('case-quantity');
    const caseQuantity = parseInt(caseInput.value);
    const caseNewQuantity = caseQuantity - 1;
    caseInput.value = caseNewQuantity;
    const caseTotal = caseNewQuantity * 59;
    document.getElementById('caseTotal').innerText = caseTotal;
})