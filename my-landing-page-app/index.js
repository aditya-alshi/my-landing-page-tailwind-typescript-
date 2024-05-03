var sideBar = document.querySelector("#side--bar");
var menuButton = document.querySelector("#menu--button");
var rightContainer = document.querySelector("#right--container");
var signUpButton = document.querySelector("#sign--up--button");
var form = document.querySelector("#the--form");
var blurBackground = document.querySelector("#blur-backgroud");
var formWrapper = document.querySelector("#form--wrapper");
var formClosedButton = document.querySelector("#close--form--button");
// all form inputs 
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm--password");
var formSubmitButton = document.querySelector("#form--submit--button");
var formSubmitMessage = document.querySelector("#submiteed--message");
// all error messages 
var emailError = document.querySelector("#email--error");
var passWordError = document.querySelector("#password--error");
var passwordConfirmError = document.querySelector("#confirm--pass--error");
if (sideBar != null && menuButton != null &&
    rightContainer != null && signUpButton != null &&
    blurBackground != null && formWrapper != null &&
    formClosedButton != null &&
    form != null &&
    formSubmitButton != null &&
    formSubmitMessage != null &&
    nameInput != null &&
    emailInput != null &&
    passwordInput != null &&
    confirmPassword != null &&
    emailError != null &&
    passWordError != null &&
    passwordConfirmError != null) {
    menuButton.addEventListener("click", function () {
        rightContainer.classList.toggle("ml-80");
        sideBar.classList.toggle("-left-80");
        sideBar.classList.toggle("left-0");
    });
    signUpButton.addEventListener("click", function () {
        blurBackground.classList.toggle("hidden");
        formWrapper.classList.toggle("hidden");
    });
    blurBackground.addEventListener("click", function () {
        blurBackground.classList.toggle("hidden");
        formWrapper.classList.toggle("hidden");
        emailError.classList.remove("text-red-500");
        emailInput.classList.remove("border-green-500", "text-red-500", "border-red-500");
        formSubmitMessage.classList.add("opacity-0");
        passwordInput.classList.remove("border-green-500");
        passWordError.classList.remove("text-red-500");
        passwordInput.classList.remove("border-red-500");
        confirmPassword.classList.remove("border-green-500");
        passwordConfirmError.classList.remove("text-red-500");
        confirmPassword.classList.remove("border-red-500");
        form.reset();
    });
    formClosedButton.addEventListener("click", function () {
        blurBackground.classList.toggle("hidden");
        formWrapper.classList.toggle("hidden");
        emailError.classList.remove("text-red-500");
        emailInput.classList.remove("border-green-500", "text-red-500", "border-red-500");
        formSubmitMessage.classList.add("opacity-0");
        passwordInput.classList.remove("border-green-500");
        passWordError.classList.remove("text-red-500");
        passwordInput.classList.remove("border-red-500");
        confirmPassword.classList.remove("border-green-500");
        passwordConfirmError.classList.remove("text-red-500");
        confirmPassword.classList.remove("border-red-500");
        form.reset();
    });
    formSubmitButton.addEventListener("click", function () {
        console.log("submit is clicked");
        var validEmailResult = validEmail(emailInput, emailError);
        var validPasswordResult = validPassword(passwordInput, passWordError);
        var validConfirmPasswordResult = validConfirmPassword(confirmPassword, passwordConfirmError, passwordInput);
        if (validEmailResult && validPasswordResult && validConfirmPasswordResult) {
            formSubmitMessage.classList.remove("opacity-0");
            formSubmitButton.disabled = true;
            setTimeout(function () {
                formClosedButton.click();
            }, 2000);
        }
        else {
            formSubmitMessage.classList.add("opacity-0");
        }
    });
}
function validEmail(email, emailError) {
    var pattern = /.+@.+\.com/;
    if (email.value.trim().match(pattern)) {
        emailError.classList.remove("text-red-500");
        email.classList.remove("border-red-500");
        email.classList.add("border-green-500");
        return true;
    }
    else {
        email.classList.remove("border-green-500");
        email.classList.add("border-red-500");
        emailError.classList.add("text-red-500");
        return false;
    }
}
function validPassword(password, passwordErr) {
    if (password.value === "" || password.value.length < 8) {
        password.classList.remove("border-green-500");
        password.classList.add("border-red-500");
        passwordErr.classList.add("text-red-500");
        return false;
    }
    else {
        passwordErr.classList.remove("text-red-500");
        password.classList.remove("border-red-500");
        password.classList.add("border-green-500");
        return true;
    }
}
// if confirm password matches the password
// add green border to confirm password 
// else
// add red border as well ass highlight the error message
function validConfirmPassword(confirpass, confirmPassErr, password) {
    if (password.value === "" || confirpass.value === "" || confirpass.value !== password.value) {
        confirpass.classList.remove("border-green-500");
        confirpass.classList.add("border-red-500");
        confirmPassErr.classList.add("text-red-500");
        return false;
    }
    else {
        confirmPassErr.classList.remove("text-red-500");
        confirpass.classList.remove("border-red-500");
        confirpass.classList.add("border-green-500");
        return true;
    }
}
