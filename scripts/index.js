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
                email: Email,
                password: Password,
            }
            fetch("https://ctd-todo-api.herokuapp.com/v1/users/login",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(entrada)
            })
            .then(response=>response.json())
            .then(obj=> console.log(obj))
            .catch(error=>console.log(error));
        }
    })
}