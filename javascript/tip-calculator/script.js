var msg = document.querySelector('.msg');
var btn = document.querySelector('.btn');
var result = document.querySelector('.result');


// btn.addEventListener('click', function () {
//     var value_bill = document.querySelector('#bill').value;
//     var people_amount = document.querySelector('#people').value;
//     var value_amount = document.querySelector('#amount').value;
//
//     alert(value_bill)
// });


btn.addEventListener('click', function () {
    var value_bill = document.querySelector('#bill').value;
    var people_amount = document.querySelector('#people').value;
    var value_amount = document.querySelector('#amount').value;

    if (msg.childNodes.length > 0) {
        msg.removeChild(msg.childNodes[0]);
    }

    if (result.childNodes.length > 0) {
        result.removeChild(result.childNodes[0])
    }

    var new_p = document.createElement('p');
    msg.appendChild(new_p);

    msg.style.margin = "0 auto";
    msg.style.backgroundColor = '#f8d7da';
    msg.style.color = '#721c24';
    msg.style.textAlign = 'center';
    msg.style.width = '90%';
    msg.style.marginTop = "3vh";
    msg.style.padding = "3vh 0";
    msg.style.borderRadius = '10px';
    msg.style.display = 'none';


    if (value_bill === '' && people_amount === '' && value_amount === '') {

        new_p.innerHTML = "Bill Amount Cannot Be Blank<br><br>" +
                          "Number Of User Must Be Greater Than Zero<br><br>" +
                          "You Must Select A Service";
        msg.style.display = 'block';

    } else if (value_bill !== '' && people_amount === '' && value_amount !== '') {

        new_p.innerHTML = "Number Of User Must Be Greater Than Zero<br><br>";
        msg.style.display = 'block';

    } else if (value_bill === '' && people_amount !== '' && value_amount === '') {

        new_p.innerHTML = "Bill Amount Cannot Be Blank<br><br>" +
                          "You Must Select A Service";
        msg.style.display = 'block';

    }

    else if (value_bill === '' && people_amount === '' && value_amount !== ''){

        new_p.innerHTML = "Bill Amount Cannot Be Blank<br><br>" +
                          "Number Of User Must Be Greater Than Zero<br><br>";
        msg.style.display = 'block';

    } else if (value_bill === '' && people_amount !== '' && value_amount !== '') {

        new_p.innerHTML = "Bill Amount Cannot Be Blank<br><br>";
        msg.style.display = 'block';

    } else if (value_bill !== '' && people_amount === '' && value_amount === '') {
        new_p.innerText = '';
        new_p.innerHTML = "Number Of User Must Be Greater Than Zero<br><br>" +
                          "You Must Select A Service";
        msg.style.display = 'block'
    } else if (value_bill !== '' && people_amount !== '' && value_amount === '') {
        new_p.innerHTML = "You Must Select A Service";
        msg.style.display = 'block'
    } else {

        var pResult = document.createElement('p');
        result.appendChild(pResult);
        pResult.style.textAlign = 'center';
        pResult.style.paddingBottom = '3vh';

        if (value_amount === 'great') {
            var tip_amount = parseInt(value_bill) * 0.2;
            var total = parseInt(value_bill) + parseInt(tip_amount);
            var eachPerson = total / parseInt(people_amount);
            pResult.innerHTML = `Tip Amount $${tip_amount} <br><br>
                                Total Amount $${total}<br><br>
                                Each Person Owes $${eachPerson}<br><br>
                                Clear <a href="#" class="close"><i class="fas fa-times"></i></a>`;
            var clear = document.querySelector('.close');
            clear.addEventListener('click',function () {
                document.querySelector('#bill').value = '';
                document.querySelector('#people').value = '';
                document.querySelector('#amount').value = '';
                pResult.innerHTML = ''
            })


        } else if (value_amount === 'good') {
            var tip_amount = parseInt(value_bill) * 0.1;
            var total = parseInt(value_bill) + parseInt(tip_amount);
            var eachPerson = total / parseInt(people_amount);
            pResult.innerHTML = `Tip Amount $${tip_amount} <br><br>
                                Total Amount $${total}<br><br>
                                Each Person Owes $${eachPerson}<br><br>
                                Clear <a href="#" class="close"><i class="fas fa-times"></i></a>`;
            var clear = document.querySelector('.close');
            clear.addEventListener('click',function () {
                document.querySelector('#bill').value = '';
                document.querySelector('#people').value = '';
                document.querySelector('#amount').value = '';
                pResult.innerHTML = ''
            })

        } else {
            var tip_amount = parseInt(value_bill) * 0.02;
            var total = parseInt(value_bill) + parseInt(tip_amount);
            var eachPerson = total / parseInt(people_amount);
            pResult.innerHTML = `Tip Amount $${tip_amount} <br><br>
                                Total Amount $${total}<br><br>
                                Each Person Owes $${eachPerson}<br><br>
                                Clear <a href="#" class="close"><i class="fas fa-times"></i></a>`;
            var clear = document.querySelector('.close');
            clear.addEventListener('click',function () {
                document.querySelector('#bill').value = '';
                document.querySelector('#people').value = '';
                document.querySelector('#amount').value = '';
                pResult.innerHTML = ''
            })
        }

    }
});