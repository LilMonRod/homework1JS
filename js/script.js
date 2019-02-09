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
    }
}
formu.addEventListener('submit', getData);
})();