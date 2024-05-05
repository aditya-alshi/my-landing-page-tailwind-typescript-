// name Input
var nameInputUserName = document.querySelector("#name");
if (nameInputUserName != null) {
    nameInputUserName.addEventListener("input", function (e) {
        if (nameInputUserName.validity.valueMissing) {
            nameInputUserName.setCustomValidity("Provide Your Name");
        }
    });
}
var email = document.getElementById("email");
if (email !== null) {
    email.addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("kon kehta hai yeh sahi hai");
        }
        else {
            email.setCustomValidity("");
        }
    });
}
