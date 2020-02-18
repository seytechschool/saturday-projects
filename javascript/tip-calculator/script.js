var button = document.querySelector('#btn');
var results = document.querySelectorAll('.info')[0];
var message = document.querySelectorAll('.message')[0];
var clear = document.querySelector('#clear');
console.log(results)

button.addEventListener('click', function(){
    var total = document.querySelector('#amount').value;
    var people = document.querySelector('#people').value;
    var e = document.querySelector('#grat');
    var tipPercentage = e.options[e.selectedIndex].value;
    
    var totalN = parseInt(total);
    var peopleN = parseInt(people);

    calculate(totalN, peopleN, tipPercentage);

    if (total < 0 || people < 0 || tipPercentage < 0){
        results.style.display = 'none';
    }
    else if(total.length == 0){
        message.innerHTML = ` <p>Bill Amount Cannot Be Blank</p> `;
        results.style.display = 'none';
    }
    else if(people.length == 0 || people < 0){
        message.innerHTML = ` <p>Number Of Users Must Be Greater Than Zero</p> `
        results.style.display = 'none';
    }
    else if(tipPercentage.selectedIndex == 0){
        message.innerHTML = ` <p>You Must Select A Service</p> `
        results.style.display = 'none';
    }
    clear.style.display = 'block';
    
})

function calculate(totalN, peopleN, tipPercentage){
    var tip = (totalN * tipPercentage) / 100;
    var totalN = totalN + tip;
    var eachPerson  = totalN / peopleN;
    eachPerson.toFixed(3);
    
    results.innerHTML = `<p>Tip Amount $${tip}</p> <p>Total Amount $${totalN}</p> <p>Each Person Owes $${eachPerson}</p>`;
    results.style.display = 'block';
}

clear.addEventListener('click', function(){
    results.style.display = 'none';
    clear.style.display = 'none';
    document.querySelector('#amount').value = '';
    document.querySelector('#people').value = '';
    document.querySelector('#grat').value = 'choose';

})



