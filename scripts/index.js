if(localStorage.getItem("token") !== null){
    window.location="/tarefas.html"
}

window.onload = () => {
    let email = document.getElementById("Email");
    let password = document.getElementById("Password");
    let Login = document.getElementById("Login");

    let clearErrorApi = () => {
        let ErrorApi = document.getElementById("ErrorAPI");
        ErrorApi.innerText = "";
    }

    email.addEventListener("keyup", validateEmail);
    email.addEventListener("focus", clearErrorApi);
    password.addEventListener("keyup", validatePassword);
    password.addEventListener("focus", clearErrorApi);
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
}