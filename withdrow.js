document.getElementById("witdhdrow-btn").addEventListener("click", function () {
    const newWithdrowAmount = getInputValueById("widthdrow-field");
    const preveousWithdrowAmount = getElementValueById("widthdrow-amount");
    const newWithdrowBalance = preveousWithdrowAmount + newWithdrowAmount;
    setValueById("widthdrow-amount", newWithdrowBalance);

    const preveousBalanceTotal = getElementValueById("total-amount");
    const newBalanceTotal = preveousBalanceTotal - newWithdrowAmount;
    setValueById("total-amount", newBalanceTotal);


})