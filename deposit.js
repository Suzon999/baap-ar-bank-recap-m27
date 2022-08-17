
document.getElementById("deposit-btn").addEventListener("click", function () {
    const newDipositAmount = getInputValueById("deposit-field");

    const preveousDipositAmount = getElementValueById("diposit-amount");

    const totalDipositAmount = preveousDipositAmount + newDipositAmount;

    setValueById("diposit-amount", totalDipositAmount);

    const preveousBalanceTotal = getElementValueById("total-amount");
    const newBalanceTotal = preveousBalanceTotal + newDipositAmount;

    setValueById("total-amount", newBalanceTotal);

})