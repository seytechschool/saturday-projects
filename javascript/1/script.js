function calc(){
    var bill = document.getElementById('bill');
    var people = document.getElementById('people');
    var percentage = document.getElementById('percentage');

    var billNum = Number(bill.value);
    var peopleNum = Number(people.value);
    var percentageNum = Number(percentage.value);

    var errorData = '';
    if(billNum === 0){
        errorData += '<p>Bill Amount Cannot Be Blank</p>';
    }
    if(peopleNum === 0){
        errorData += '<p>Number Of Users Must Be Greater Than Zero</p>';
    }
    if(percentageNum === 0){
        errorData += '<p>You Must Select A Service</p>';
    }
    if(errorData.length > 0){
        document.getElementById('show-tip').innerHTML = '';
        document.getElementById('error').innerHTML = errorData
        document.getElementById('error').classList.add('show');
    } else {
        document.getElementById('error').classList.remove('show');
        var tip = billNum * percentageNum/100;
        var total = billNum + tip;
        var paymentPerPerson = total / peopleNum;

        document.getElementById('show-tip').innerHTML = `
        <p>Tip Amount $${tip}</p>
        <p>Total Amount $${total}</p>
        <p>Each Person Owes $${paymentPerPerson}</p>
        <div id='clear' class="icon close">Clear <i class="fas fa-times"></i></div>
        `
        document.getElementById('clear').addEventListener('click',function(){
            clear()
        })
    }
}

function clear(){
    document.getElementById('show-tip').innerHTML = '';
    document.getElementById('bill').value = '';
    document.getElementById('people').value = '';
    document.getElementById('percentage').value = "0";
}