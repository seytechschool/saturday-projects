function calcBill  () {
    var bill = document.querySelector('#billPrice').value
    var totalPeople = document.querySelector('#numberOfPeople').value
    var tipData = document.querySelector('#tipInfo').value

    if (bill === "" || tipData == 0) {
        alert("Please enter values");
        return;
      }
    // var tipInfo = tipdata * bill;
    // var result = (tipInfo + bill)/totalPeople;
    // console.log(result)
    
     var result = (bill * tipData) / totalPeople;
     alert(result.toFixed())

}