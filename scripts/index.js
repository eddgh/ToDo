window.onload = () => {
    let email = document.getElementById("Email");
    let password = document.getElementById("Password");
    let Login = document.getElementById("Login");

    email.addEventListener("keyup", validateEmail);
    password.addEventListener("keyup", validatePassword);
    Login.addEventListener("submit", (event) => {
        event.preventDefault();
        let Email = validateEmail();
        let Password = validatePassword();
        if(Email !== null && Password !== null)
        {
            let entrada = {
                Email: Email,
                Password: Password,
            }
            console.log(JSON.stringify(entrada));
        }
    })
}