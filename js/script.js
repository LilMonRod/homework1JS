/* 
    IFE (Immediately Invoked Function Expression) is used
Named functions are used on event handler
    DOM is created programmatically for the table and total sections
    Event listeners are added programmatically using JavaScript DOM API
    Data is saved on an Array and manipulated using Array methods
    Each bill is saved as an Object
*/
(function(){
const formu = document.getElementById('form-container');
const bills = [];

function getData(event) {
    event.preventDefault();
    const dataFormType = event.target[3].value;
    const dataFormDate = event.target[2].value;
    const dataFormAmount = event.target[1].value;
    const dataFormName = event.target[0].value;
    if (dataFormType === "") {
        alert('please, fill in all the fields');
    } else
    if (dataFormDate === "") {
        alert('please, fill in all the fields');
    } else
    if (dataFormAmount === "") {
        alert('please, fill in all the fields');
    } else
    if (dataFormName === "") {
        alert('please, fill in all the fields');
    } else {
        const keys = new Object();
        keys['name'] = dataFormName;
        keys['amount'] = dataFormAmount;
        keys['date'] = dataFormDate;
        keys['type'] = dataFormType;
        bills.push(keys);
        createRow(keys);
        formu.reset();
    }
    function createRow(data) {
        console.log(data);
        const containerBills = document.getElementById('container-new-bills');
        const newRow = document.createElement('tr');
        const newTD = document.createElement('td');
        newTD.innerText = data.name;
        newRow.appendChild(newTD);
        const newTD1 = document.createElement('td');
        newTD1.innerText = data.type;
        newRow.appendChild(newTD1);
        const newTD2 = document.createElement('td');
        newTD2.innerText = data.date;
        newRow.appendChild(newTD2);
        const newTD3 = document.createElement('td');
        newTD3.innerText = data.amount;
        newRow.appendChild(newTD3);

        containerBills.appendChild(newRow);
        substraction();
    }
    function substraction() {
        let substractionA = 0;
        let substractionB = 0;
        let substractionC = 0;

        const containerTotalA = document.getElementById('totalA');
        const containerTotalB = document.getElementById('totalB');
        const containerTotalC = document.getElementById('totalC');

        for (e of bills) {
            if (e.type == 'A') {
                substractionA = parseInt(e.amount) + substractionA;
            } else if (e.type == 'B') {
                substractionB = parseInt(e.amount) + substractionB;
            } else if (e.type == 'C') {
                substractionC = parseInt(e.amount) + substractionC;
            }
        }
        containerTotalA.innerHTML = '';
        containerTotalB.innerHTML = '';
        containerTotalC.innerHTML = '';
        containerTotalA.innerHTML = substractionA;
        containerTotalB.innerHTML = substractionB;
        containerTotalC.innerHTML = substractionC;
    }
    
    const columnName  = document.getElementById('column-name');
    const columnType  = document.getElementById('column-type');
    const columnAmount  = document.getElementById('column-amount');

    columnName.addEventListener('click', function () {
        bills.sort(dynamicSort("name"));
    });
    columnType.addEventListener('click', function () {
        bills.sort(dynamicSort("type"));
    });
    columnAmount.addEventListener('click', function () {
        bills.sort(dynamicSort("amount"));
    });
    
    function dynamicSort(property) {
        let sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            console.log(sortOrder);            
            return result * sortOrder;          
        }
    }

}
formu.addEventListener('submit', getData);
})();