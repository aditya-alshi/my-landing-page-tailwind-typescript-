
// name Input
const nameInputUserName = document.querySelector<HTMLInputElement>("#name");


if(nameInputUserName != null){
    nameInputUserName.addEventListener("input", (e)=>{
        if(nameInputUserName.validity.valueMissing){
            nameInputUserName.setCustomValidity("Provide Your Name");
        }
    })
}
const email = document.getElementById("email") as HTMLInputElement;

if(email !== null){

    email.addEventListener("input", (event) => {
      if (email.validity.typeMismatch) {
        email.setCustomValidity("kon kehta hai yeh sahi hai");
      } else {
        email.setCustomValidity("");
      }
    });
}