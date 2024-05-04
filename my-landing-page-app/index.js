// const sideBar = document.querySelector<HTMLElement>("#side--bar");
// const menuButton = document.querySelector<HTMLDivElement>("#menu--button");
// const rightContainer = document.querySelector<HTMLDivElement>("#right--container");
// const signUpButton = document.querySelector<HTMLButtonElement>("#sign--up--button");
var elementsIds = {
    sideBar: document.querySelector("#side--bar"),
    menuButton: document.querySelector("#menu--button"),
    rightContainer: document.querySelector("#right--container"),
    signUpButton: document.querySelector("#sign--up--button"),
    form: document.querySelector("#the--form"),
    blurBackground: document.querySelector("#blur-backgroud"),
    formWrapper: document.querySelector("#form--wrapper"),
    formClosedButton: document.querySelector("#close--form--button"),
    nameInput: document.querySelector("#name"),
    emailInput: document.querySelector("#email"),
    passwordInput: document.querySelector("#password"),
    confirmPassword: document.querySelector("#confirm--password"),
    formSubmitButton: document.querySelector("#form--submit--button"),
    formSubmitMessage: document.querySelector("#submiteed--message"),
    emailError: document.querySelector("#email--error"),
    passWordError: document.querySelector("#password--error"),
    passwordConfirmError: document.querySelector("#confirm--pass--error")
};
var sideBar = elementsIds.sideBar, menuButton = elementsIds.menuButton, rightContainer = elementsIds.rightContainer, signUpButton = elementsIds.signUpButton, form = elementsIds.form, blurBackground = elementsIds.blurBackground, formWrapper = elementsIds.formWrapper, formClosedButton = elementsIds.formClosedButton, nameInput = elementsIds.nameInput, emailInput = elementsIds.emailInput, passwordInput = elementsIds.passwordInput, confirmPassword = elementsIds.confirmPassword, formSubmitButton = elementsIds.formSubmitButton, formSubmitMessage = elementsIds.formSubmitMessage, emailError = elementsIds.emailError, passWordError = elementsIds.passWordError, passwordConfirmError = elementsIds.passwordConfirmError;
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
        blurBackground.classList.remove("hidden");
        formWrapper.classList.remove("hidden");
    });
    blurBackground.addEventListener("click", function () {
        resetTheForm(elementsIds);
    });
    formClosedButton.addEventListener("click", function () {
        resetTheForm(elementsIds);
    });
    formSubmitButton.addEventListener("click", function (e) {
        e.preventDefault();
        var validEmailResult = validEmail(emailInput, (emailError));
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
        valid(email, emailError);
        return true;
    }
    else {
        invalid(email, emailError);
        return false;
    }
}
function validPassword(password, passwordErr) {
    if (password.value === "" || password.value.length < 8) {
        invalid(password, passwordErr);
        return false;
    }
    else {
        valid(password, passwordErr);
        return true;
    }
}
// if confirm password matches the password
// add green border to confirm password 
// else
// add red border as well ass highlight the error message
function validConfirmPassword(confirpass, confirmPassErr, password) {
    if (password.value === "" || confirpass.value === "" || confirpass.value !== password.value) {
        invalid(confirpass, confirmPassErr);
        return false;
    }
    else {
        valid(confirpass, confirmPassErr);
        return true;
    }
}
function valid(inputElement, errorMessage) {
    errorMessage.classList.remove("text-red-500");
    inputElement.classList.remove("border-red-500");
    inputElement.classList.add("border-green-500");
}
function invalid(inputElement, errorMessage) {
    inputElement.classList.remove("border-green-500");
    inputElement.classList.add("border-red-500");
    errorMessage.classList.add("text-red-500");
}
// reset logic
// since all the type narrowing is done before calling this function it is safe to assert types using 'as' keyword
function resetTheForm(_a) {
    var blurBackground = _a.blurBackground, formWrapper = _a.formWrapper, emailError = _a.emailError, emailInput = _a.emailInput, formSubmitMessage = _a.formSubmitMessage, passwordInput = _a.passwordInput, passWordError = _a.passWordError, confirmPassword = _a.confirmPassword, passwordConfirmError = _a.passwordConfirmError, form = _a.form;
    blurBackground.classList.add("hidden");
    formWrapper.classList.add("hidden");
    emailError.classList.remove("text-red-500");
    emailInput.classList.remove("border-green-500", "text-red-500", "border-red-500");
    formSubmitMessage.classList.add("opacity-0");
    passwordInput.classList.remove("border-green-500", "border-red-500");
    passWordError.classList.remove("text-red-500");
    confirmPassword.classList.remove("border-green-500", "border-red-500");
    passwordConfirmError.classList.remove("text-red-500");
    // confirmPassword.classList.remove("border-red-500");
    form.reset();
}
