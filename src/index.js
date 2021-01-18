function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function askUSerDetails() {
    let name = prompt("What is your name?");
    let emailAdress = prompt("What is your email address?");

    if (validateEmail(emailAdress)) {
        alert(`Thanks ${name}! We will keep you posted on the updates`);
    } else {
        alert(
            `Hmmm ${name}, unfortunately it seems that your email is incorect`
        );
    }
}

let getUserInput = document.querySelector("button");
getUserInput.addEventListener("click", askUSerDetails);