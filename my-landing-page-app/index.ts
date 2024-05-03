const sideBar = document.querySelector<HTMLElement>("#side--bar");
const menuButton = document.querySelector<HTMLDivElement>("#menu--button");
const rightContainer = document.querySelector<HTMLDivElement>("#right--container");
const signUpButton = document.querySelector<HTMLButtonElement>("#sign--up--button");

const form = document.querySelector<HTMLFormElement>("#the--form");
const blurBackground = document.querySelector<HTMLDivElement>("#blur-backgroud");
const formWrapper = document.querySelector<HTMLDivElement>("#form--wrapper");
const formClosedButton = document.querySelector<HTMLDivElement>("#close--form--button");

// all form inputs 
const nameInput = document.querySelector<HTMLInputElement>("#name");
const emailInput = document.querySelector<HTMLInputElement>("#email");
const passwordInput = document.querySelector<HTMLInputElement>("#password");
const confirmPassword = document.querySelector<HTMLInputElement>("#confirm--password");
const formSubmitButton = document.querySelector<HTMLButtonElement>("#form--submit--button");
const formSubmitMessage = document.querySelector<HTMLParagraphElement>("#submiteed--message");

// all error messages 
const emailError = document.querySelector<HTMLParagraphElement>("#email--error");
const passWordError = document.querySelector<HTMLParagraphElement>("#password--error");
const passwordConfirmError = document.querySelector<HTMLParagraphElement>("#confirm--pass--error");

if (
    sideBar != null && menuButton != null &&
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
    passwordConfirmError != null

) {
    menuButton.addEventListener("click", () => {
        rightContainer.classList.toggle("ml-80")
        sideBar.classList.toggle("-left-80");
        sideBar.classList.toggle("left-0");
    });

    signUpButton.addEventListener("click", () => {
        blurBackground.classList.toggle("hidden");
        formWrapper.classList.toggle("hidden");
    })

    blurBackground.addEventListener("click", () => {
        blurBackground.classList.toggle("hidden");
        formWrapper.classList.toggle("hidden");

        emailError.classList.remove("text-red-500")
        emailInput.classList.remove("border-green-500", "text-red-500", "border-red-500")

        formSubmitMessage.classList.add("opacity-0");

        passwordInput.classList.remove("border-green-500")
        passWordError.classList.remove("text-red-500")
        passwordInput.classList.remove("border-red-500")

        confirmPassword.classList.remove("border-green-500")
        passwordConfirmError.classList.remove("text-red-500")
        confirmPassword.classList.remove("border-red-500")

        form.reset()
    })
    
    formClosedButton.addEventListener("click", () => {
        blurBackground.classList.toggle("hidden");
        formWrapper.classList.toggle("hidden");

        emailError.classList.remove("text-red-500")
        emailInput.classList.remove("border-green-500", "text-red-500", "border-red-500")

        formSubmitMessage.classList.add("opacity-0");

        passwordInput.classList.remove("border-green-500")
        passWordError.classList.remove("text-red-500")
        passwordInput.classList.remove("border-red-500")

        confirmPassword.classList.remove("border-green-500")
        passwordConfirmError.classList.remove("text-red-500")
        confirmPassword.classList.remove("border-red-500")

        form.reset()
    })
    
    formSubmitButton.addEventListener("click", ()=>{
        console.log("submit is clicked");

        const validEmailResult = validEmail(emailInput, emailError);
        const validPasswordResult = validPassword(passwordInput, passWordError);
        const validConfirmPasswordResult = validConfirmPassword(confirmPassword, passwordConfirmError,passwordInput)

        if(validEmailResult && validPasswordResult && validConfirmPasswordResult){
            formSubmitMessage.classList.remove("opacity-0")
            formSubmitButton.disabled = true;
            setTimeout(() => {
                formClosedButton.click();
            }, 2000);
        }else{
            formSubmitMessage.classList.add("opacity-0");
        }
    })

}

function validEmail(email: HTMLInputElement, emailError: HTMLParagraphElement): boolean {
    let pattern = /.+@.+\.com/
    if(email.value.trim().match(pattern)){
        emailError.classList.remove("text-red-500")
        email.classList.remove("border-red-500")
        email.classList.add("border-green-500")
        return true
    }else{
        email.classList.remove("border-green-500")
        email.classList.add("border-red-500")
        emailError.classList.add("text-red-500")
        return false
    }
}

function validPassword(password: HTMLInputElement, passwordErr: HTMLParagraphElement): boolean{
    if(password.value === "" || password.value.length < 8){
        password.classList.remove("border-green-500")
        password.classList.add("border-red-500")
        passwordErr.classList.add("text-red-500")
        return false
    }else{
        passwordErr.classList.remove("text-red-500")
        password.classList.remove("border-red-500")
        password.classList.add("border-green-500")
        return true
    }
}

// if confirm password matches the password
// add green border to confirm password 
// else
// add red border as well ass highlight the error message
function validConfirmPassword(confirpass: HTMLInputElement, confirmPassErr: HTMLParagraphElement, password: HTMLInputElement): boolean{
    
    if( password.value === "" || confirpass.value === "" || confirpass.value !== password.value){
        confirpass.classList.remove("border-green-500")
        confirpass.classList.add("border-red-500")
        confirmPassErr.classList.add("text-red-500")
        return false
    }else{
        confirmPassErr.classList.remove("text-red-500")
        confirpass.classList.remove("border-red-500")
        confirpass.classList.add("border-green-500")
        return true

    }
}
