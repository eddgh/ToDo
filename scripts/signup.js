window.onload = () => {
    let name = document.getElementById("Name");
    let nickname = document.getElementById("Nickname");
    let email = document.getElementById("Email");
    let password = document.getElementById("Password");
    let repeatPassword  = document.getElementById("RepeatPassword");
    let Register = document.getElementById("Register");

    name.addEventListener("keyup", validateName);
    nickname.addEventListener("keyup", validateNickname);
    email.addEventListener("keyup", validateEmail);
    password.addEventListener("keyup", validatePassword);
    repeatPassword.addEventListener("keyup", validateRepeatPassword);
    Register.addEventListener("submit", (event) => {
        event.preventDefault();
        let Name = validateName();
        let Nickname = validateNickname();
        let Email = validateEmail();
        let Password = validatePassword();
        let RepeatPassword = validateRepeatPassword();
        if(Name !== null && Nickname !== null && Email !== null && Password !== null && RepeatPassword !== null)
        {
            let nomeCompleto = Name.trim().replace(" ",'1').split("1");
            let entrada = {
                firstName: nomeCompleto[0],
                lastName: nomeCompleto[1],
                email: Email,
                password: Password,
            }
            fetch("https://ctd-todo-api.herokuapp.com/v1/users",{
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