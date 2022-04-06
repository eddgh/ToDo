let RemoveInputError  = (input) => {
    if(input.classList.contains("error"))
    {
        input.classList.remove("error");
    }
}
let InputError  = (input) => {
    input.classList.add("error");
}
let validateName = () => {
    let regexp = /^[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ ]+$/i
    let Name = document.getElementById("Name");
    RemoveInputError(Name);
    
    let ErrorName = document.getElementById("ErrorName");
    ErrorName.innerText = "";

    if(Name.value === ""){
        ErrorName.innerText = "Campo obrigatorio!";
        InputError(Name);
        return null;
    }
    else if(Name.value.trim().split(" ").length < 2)
    {
        ErrorName.innerText = "O nome precisar se maior ou igual a duas palavras";
        InputError(Name);
        return null;
    }
    else if(!Name.value.match(regexp)){
        ErrorName.innerText = "Caracteres invalidos!";
        InputError(Name);
        return null;
    }
    return Name.value;
}
let validateNickname = () => {
    let regexp = /^[A-Z0-9_.]+$/i
    let Nickname = document.getElementById("Nickname");
    RemoveInputError(Nickname);

    let ErrorNickname = document.getElementById("ErrorNickname");
    ErrorNickname.innerText = "";

    if(Nickname.value === "")
    {
        ErrorNickname.innerText = "Campo obrigatorio!";
        InputError(Nickname);
        return null;
    }
    else if(!Nickname.value.match(regexp)){
        ErrorNickname.innerText = "Apelido invalido!";
        InputError(Nickname);
        return null;
    }
    return Nickname.value;
}
let validateEmail = () => {
    let Email = document.getElementById("Email");
    RemoveInputError(Email);
    
    let ErrorEmail = document.getElementById("ErrorEmail");
    ErrorEmail.innerText = "";
    
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (Email.value === "")
    {
        ErrorEmail.innerText = "Campo obrigatorio!";
        InputError(Email);
        return null;
    }
    else if(!Email.value.match(regexp)){
        ErrorEmail.innerText = "Email invalido!";
        InputError(Email);
        return null;
    }
    return Email.value;
}
let validatePassword = () => {
    let Password = document.getElementById("Password");
    RemoveInputError(Password);
    
    let ErrorPassword = document.getElementById("ErrorPassword")
    ErrorPassword.innerText = "";
    
    if (Password.value === ""){
        ErrorPassword.innerText = "Campo obrigatorio!";
        InputError(Password);
        return null;
    }
    else if(Password.value.length < 12)
    {
        ErrorPassword.innerText = "Senha muito curta!";
        InputError(Password);
        return null;
    }
    return Password.value;
}
let validateRepeatPassword = () => {
    let Password = document.getElementById("Password");
    let RepeatPassword  = document.getElementById("RepeatPassword");
    RemoveInputError(RepeatPassword);
    
    let ErrorPassword = document.getElementById("ErrorRepeatPassword")
    ErrorPassword.innerText = "";
    
    if(Password.value === ""){
        ErrorPassword.innerText = "Campo Obrigatorio";
        InputError(RepeatPassword);
        return null;
    }
    else if (Password.value !== RepeatPassword.value){
        ErrorPassword.innerText = "Senhas não são iguais";
        InputError(RepeatPassword);
        return null;
    }
    return RepeatPassword.value;
}

let erros = {
    "El usuario ya se encuentra registrado": "O usuário já se encontra registrado!",
    "Alguno de los datos requeridos está incompleto":"Alguns dados estão incompletos!",
    "Error del servidor": "Erro do servidor!",
    "Contraseña incorrecta": "Senha está errada!",
    "El usuario no existe": "O usuário não existe!",
}