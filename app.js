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

function updateCaseNumber(isAdd, product) {
    const inputField = document.getElementById(product + '-input-field');
    let inputFieldValue = inputField.value;
    if (isAdd) {
        inputFieldValue = parseInt(inputFieldValue) + 1;
    }
    else if (inputFieldValue > 0) {
        inputFieldValue = parseInt(inputFieldValue) - 1;
    }
    inputField.value = inputFieldValue;


    //update product price
    const productPrice = document.getElementById(product + '-total');
    const productPriceNum = parseFloat(productPrice);
    productPrice.innerText = inputFieldValue * productPriceNum;
}

//This is phone section
document.getElementById('phone-plus-btn').addEventListener('click', function () {
    /* const inputPlusField = document.getElementById('phone-input-field');
    const inputFieldPlusValue = inputPlusField.value;
    inputPlusField.value = parseInt(inputFieldPlusValue) + 1; */

    updateCaseNumber(true, 'phone');
});

document.getElementById('phone-minus-btn').addEventListener('click', function () {
    updateCaseNumber(false, 'phone');
});


//This is phone-casing section

document.getElementById('case-plus-btn').addEventListener('click', function () {
    updateCaseNumber(true, 'case');
});

document.getElementById('case-minus-btn').addEventListener('click', function () {
    updateCaseNumber(false, 'case');
});