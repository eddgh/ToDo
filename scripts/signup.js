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
            let entrada = {
                Name: Name,
                Nickname: Nickname,
                Email: Email,
                Password: Password,
                RepeatPassword, RepeatPassword
            }
            console.log(JSON.stringify(entrada));
        }
    })
}