/* //Function of increment and decrement

function incrementDecrement(isIncrement, product, productInput) {
    const plus = document.getElementById(product + '-plus-btn');
    const minus = document.getElementById(product + '-minus-btn');
    if (isIncrement == true) {
        plus.addEventListener('click', function () {
            const phoneInput = document.getElementById('phone-input-field');
            phoneInputValue = phoneInput.value;

        })
    }
} */
//Update case number

function updateCaseNumber(isAdd) {
    if (isAdd) {
        const inputPlusField = document.getElementById('phone-input-field');
        const inputFieldPlusValue = inputPlusField.value;
        inputPlusField.value = parseInt(inputFieldPlusValue) + 1;
    }
    else {
        const inputMinusField = document.getElementById('phone-input-field');
        const inputFieldMinusValue = inputMinusField.value;
        inputMinusField.value = parseInt(inputFieldMinusValue) - 1;
    }
}

document.getElementById('phone-plus-btn').addEventListener('click', function () {
    /* const inputPlusField = document.getElementById('phone-input-field');
    const inputFieldPlusValue = inputPlusField.value;
    inputPlusField.value = parseInt(inputFieldPlusValue) + 1; */

    updateCaseNumber(true);
});

document.getElementById('phone-minus-btn').addEventListener('click', function () {
    updateCaseNumber(false);
});