// const sideBar = document.querySelector<HTMLElement>("#side--bar");
// const menuButton = document.querySelector<HTMLDivElement>("#menu--button");
// const rightContainer = document.querySelector<HTMLDivElement>("#right--container");
// const signUpButton = document.querySelector<HTMLButtonElement>("#sign--up--button");

// const form = document.querySelector<HTMLFormElement>("#the--form");
// const blurBackground = document.querySelector<HTMLDivElement>("#blur-backgroud");
// const formWrapper = document.querySelector<HTMLDivElement>("#form--wrapper");
// const formClosedButton = document.querySelector<HTMLDivElement>("#close--form--button");

// // all form inputs 
// const nameInput = document.querySelector<HTMLInputElement>("#name");
// const emailInput = document.querySelector<HTMLInputElement>("#email");
// const passwordInput = document.querySelector<HTMLInputElement>("#password");
// const confirmPassword = document.querySelector<HTMLInputElement>("#confirm--password");
// const formSubmitButton = document.querySelector<HTMLButtonElement>("#form--submit--button");
// const formSubmitMessage = document.querySelector<HTMLElement>("#submiteed--message");

// // all error messages 
// const emailError = document.querySelector<HTMLParagraphElement>("#email--error");
// const passWordError = document.querySelector<HTMLParagraphElement>("#password--error");
// const passwordConfirmError = document.querySelector<HTMLParagraphElement>("#confirm--pass--error");

type theHtmlElements = HTMLInputElement | HTMLElement | HTMLFormElement | null;

interface ElementIds {
    [ids: string]: theHtmlElements
}


const elementsIds: ElementIds = {
    sideBar: document.querySelector<HTMLElement>("#side--bar"),
    menuButton: document.querySelector<HTMLElement>("#menu--button"),
    rightContainer: document.querySelector<HTMLElement>("#right--container"),
    signUpButton: document.querySelector<HTMLElement>("#sign--up--button"),
    form: document.querySelector<HTMLFormElement>("#the--form"),
    blurBackground: document.querySelector<HTMLElement>("#blur-backgroud"),
    formWrapper: document.querySelector<HTMLElement>("#form--wrapper"),
    formClosedButton: document.querySelector<HTMLElement>("#close--form--button"),
    nameInput: document.querySelector<HTMLInputElement>("#name"),
    emailInput: document.querySelector<HTMLInputElement>("#email"),
    passwordInput: document.querySelector<HTMLInputElement>("#password"),
    confirmPassword: document.querySelector<HTMLInputElement>("#confirm--password"),
    formSubmitButton: document.querySelector<HTMLElement>("#form--submit--button"),
    formSubmitMessage: document.querySelector<HTMLElement>("#submiteed--message"),
    emailError: document.querySelector<HTMLElement>("#email--error"),
    passWordError: document.querySelector<HTMLElement>("#password--error"),
    passwordConfirmError: document.querySelector<HTMLElement>("#confirm--pass--error")
}

const {
    sideBar,
    menuButton,
    rightContainer,
    signUpButton,
    form,
    blurBackground,
    formWrapper,
    formClosedButton,
    nameInput,
    emailInput,
    passwordInput,
    confirmPassword,
    formSubmitButton,
    formSubmitMessage,
    emailError,
    passWordError,
    passwordConfirmError
} = elementsIds;


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
    });

    blurBackground.addEventListener("click", () => {
        resetTheForm(elementsIds);
    });


    formClosedButton.addEventListener("click", () => {
        resetTheForm(elementsIds)
    });

    formSubmitButton.addEventListener("click", () => {
        console.log("submit is clicked");


        const validEmailResult = validEmail(emailInput as HTMLInputElement, (emailError));
        const validPasswordResult = validPassword(passwordInput as HTMLInputElement, passWordError);
        const validConfirmPasswordResult = validConfirmPassword(confirmPassword as HTMLInputElement, passwordConfirmError, passwordInput as HTMLInputElement);

        if (validEmailResult && validPasswordResult && validConfirmPasswordResult) {
            formSubmitMessage.classList.remove("opacity-0");
            (formSubmitButton as HTMLFormElement).disabled = true;
            setTimeout(() => {
                formClosedButton.click();
            }, 2000);
        } else {
            formSubmitMessage.classList.add("opacity-0");
        }
    })

}

function validEmail(email: HTMLInputElement, emailError: HTMLElement): boolean {
    let pattern = /.+@.+\.com/
    if (email.value.trim().match(pattern)) {
        valid(email, emailError)
        return true
    } else {
        invalid(email, emailError)
        return false
    }
}

function validPassword(password: HTMLInputElement, passwordErr: HTMLElement): boolean {
    if (password.value === "" || password.value.length < 8) {
        invalid(password, passwordErr)
        return false
    } else {
        valid(password, passwordErr)
        return true
    }
}

// if confirm password matches the password
// add green border to confirm password 
// else
// add red border as well ass highlight the error message

function validConfirmPassword(confirpass: HTMLInputElement, confirmPassErr: HTMLElement, password: HTMLInputElement): boolean {
    
    if (password.value === "" || confirpass.value === "" || confirpass.value !== password.value) {
        invalid(confirpass, confirmPassErr);
        return false
    } else {
        valid(confirpass, confirmPassErr);
        return true

    }
}

function valid(inputElement: HTMLInputElement, errorMessage: HTMLElement): void {
    errorMessage.classList.remove("text-red-500");
    inputElement.classList.remove("border-red-500");
    inputElement.classList.add("border-green-500");
}

function invalid(inputElement: HTMLInputElement, errorMessage: HTMLElement): void {
    inputElement.classList.remove("border-green-500")
    inputElement.classList.add("border-red-500")
    errorMessage.classList.add("text-red-500")
}


// reset logic
// since all the type narrowing is done before calling this function it is safe to assert types using 'as' keyword
function resetTheForm({
    blurBackground,
    formWrapper,
    emailError,
    emailInput,
    formSubmitMessage,
    passwordInput,
    passWordError,
    confirmPassword,
    passwordConfirmError,
    form }: ElementIds): void {
        
        (blurBackground as HTMLElement).classList.toggle("hidden");
        (formWrapper as HTMLElement).classList.toggle("hidden");
        
        (emailError as HTMLElement).classList.remove("text-red-500");
       
        (emailInput as HTMLInputElement).classList.remove("border-green-500", "text-red-500", "border-red-500");
        
        (formSubmitMessage as HTMLElement).classList.add("opacity-0");
        
        (passwordInput as HTMLInputElement).classList.remove("border-green-500", "border-red-500");
        (passWordError as HTMLElement).classList.remove("text-red-500");
        
        (confirmPassword as HTMLInputElement).classList.remove("border-green-500", "border-red-500");
        (passwordConfirmError as HTMLElement).classList.remove("text-red-500");
        // confirmPassword.classList.remove("border-red-500");
        
        (form as HTMLFormElement).reset()
        
    }
  