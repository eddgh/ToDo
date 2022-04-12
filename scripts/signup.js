if(localStorage.getItem("token") !== null){
    window.location="/tarefas.html"
}

window.addEventListener('load', (event) => {
    let name = document.getElementById("Name");
    let nickname = document.getElementById("Nickname");
    let email = document.getElementById("Email");
    let password = document.getElementById("Password");
    let repeatPassword  = document.getElementById("RepeatPassword");
    let Register = document.getElementById("Register");

    let clearErrorApi = () => {
        let ErrorApi = document.getElementById("ErrorAPI");
        ErrorApi.innerText = "";
    }

    name.addEventListener("keyup", validateName);
    name.addEventListener("focus", clearErrorApi);
    nickname.addEventListener("keyup", validateNickname);
    nickname.addEventListener("focus", clearErrorApi);
    email.addEventListener("keyup", validateEmail);
    email.addEventListener("focus", clearErrorApi);
    password.addEventListener("keyup", validatePassword);
    password.addEventListener("focus", clearErrorApi);
    repeatPassword.addEventListener("keyup", validateRepeatPassword);
    repeatPassword.addEventListener("focus", clearErrorApi);
    Register.addEventListener("submit", (event) => {
        event.preventDefault();
        let Name = validateName();
        let Nickname = validateNickname();
        let Email = validateEmail();
        let Password = validatePassword();
        let RepeatPassword = validateRepeatPassword();
        clearErrorApi();
        if(Name !== null && Nickname !== null && Email !== null && Password !== null && RepeatPassword !== null)
        {
            let nomeCompleto = Name.trim().replace(" ",'1').split("1");
            let entrada = {
                firstName: nomeCompleto[0],
                lastName: nomeCompleto[1],
                email: Email,
                password: Password,
            }
            chamadaApi("users", "POST", entrada, null)
            .then(obj=> {
                localStorage.setItem("token", obj.jwt);
                return obj;
            })
            .then((obj)=>{
                if(localStorage.getItem("token") != "undefined")
                {
                    window.location="/tarefas.html"
                }
                else {
                    let ErrorApi = document.getElementById("ErrorAPI");
                    ErrorApi.innerText = erros[obj];
                }
            })
            .catch(error=>console.log(error));
        }
    })
});