function calcBill  () {
    var bill = document.querySelector('#billPrice').value
    var total = document.querySelector('#numberOfPeople').value
    var tip = document.querySelector('#tipInfo').value

    if (bill === "" || tipData == 0) {
        console.log("sum of bill");
        return;
    }
    
     var result = (bill * tip) / total;
     alert(result.toFixed()