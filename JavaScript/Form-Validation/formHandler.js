let registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(eventObj){
    eventObj.preventDefault();
    console.dir(eventObj.target);
    let formInputs = eventObj.target
    console.log(formInputs);
}