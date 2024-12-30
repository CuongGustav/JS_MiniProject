function appendValue( value ) {
    document.getElementById('showResult').value += value;
}
function clearResult() {
    document.getElementById('showResult').value = "";
}
function calculator () {
    try {
        const result = eval(document.getElementById("showResult").value); //eval là một hàm trong JS dùng để tự tính toán
        document.getElementById("showResult").value = result.toFixed(10);
    } catch (error) {
        document.getElementById("showResult").value = "Error";
    }
}