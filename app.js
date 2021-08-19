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

function updateProductNumber(isAdd, product, price) {
    debugger;
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
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = inputFieldValue * price;
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-input-field');
    const productInputValue = parseInt(productInput.value);
    return productInputValue;
}

//This is calculate total

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    console.log(subTotal);

}
//This is phone section
document.getElementById('phone-plus-btn').addEventListener('click', function () {
    /* const inputPlusField = document.getElementById('phone-input-field');
    const inputFieldPlusValue = inputPlusField.value;
    inputPlusField.value = parseInt(inputFieldPlusValue) + 1; */

    updateProductNumber(true, 'phone', 1219);
});

document.getElementById('phone-minus-btn').addEventListener('click', function () {
    updateProductNumber(false, 'phone', 1219);
});


//This is phone-casing section

document.getElementById('case-plus-btn').addEventListener('click', function () {
    updateProductNumber(true, 'case', 59);
});

document.getElementById('case-minus-btn').addEventListener('click', function () {
    updateProductNumber(false, 'case', 59);
});