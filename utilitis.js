function getInputValueById(inputFieldValue) {
    const inputField = document.getElementById(inputFieldValue);
    const inputFieldValueString = inputField.value;
    const inputValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputValue;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setValueById(elementId, setValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = setValue;
}
