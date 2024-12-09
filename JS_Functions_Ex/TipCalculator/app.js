
function calculateTip () {
    //lấy giá trị
    const billAmount = parseFloat( document.getElementById('billAmount').value );
    const numPeople = parseFloat( document.getElementById('numPeople').value );
    const tipPercentage = parseFloat( document.getElementById('tipPercentage').value );
    //tính toán giá trị
    let totalTip = billAmount*tipPercentage/100;
    let amountPerPerson = (billAmount+totalTip)/numPeople;
    //check các giá trị
    if (isNaN(billAmount) || isNaN(numPeople) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }
    if (numPeople <= 0) {
        alert("Number of people must be greater than 0.");
        return;
    }
    //hiển thị lên màn hình
    document.getElementsByClassName('totalTip')[0].innerHTML = totalTip.toFixed(2) + "$";
    document.getElementsByClassName('amountPerPerson')[0].innerHTML = amountPerPerson.toFixed(2) + "$";
}