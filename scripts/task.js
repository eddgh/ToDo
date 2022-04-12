window.addEventListener('load', (event) => {
    let pNome = document.getElementById('ExibirNome');
    chamadaApi('users/getme','GET', null, {'authorization': localStorage.getItem('token')})
    .then(obj=>{
        let nomeCompleto = `${obj.firstName} ${obj.lastName}`;
        pNome.innerText = nomeCompleto;
    })

    chamadaApi('tasks', 'GET', null, {'authorization': localStorage.getItem('token')})
    .then(obj=>{
        console.log(obj);
    })
})