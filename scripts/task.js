window.addEventListener('load', (event) => {

    let adicionarElemento = (target, nome, date, terminado) => {
        let tarefa = document.createElement("div");
        tarefa.classList.add("tarefa");
        let done = document.createElement("div");
        done.classList.add("not-done");
        tarefa.appendChild(done);
        let descricao = document.createElement("div");
        descricao.classList.add("descricao");
        let name = document.createElement("p");
        name.classList.add("nome");
        let nameTexto = document.createTextNode(nome);
        name.appendChild(nameTexto);
        descricao.appendChild(name);
        let data = document.createElement("p");
        let dataTexto = document.createTextNode(`Criada em: ${date}`);
        data.appendChild(dataTexto);
        descricao.appendChild(data);
        tarefa.appendChild(descricao);
        target.appendChild(tarefa);
    }
    let pNome = document.getElementById('ExibirNome');
    chamadaApi('users/getme','GET', null, {'authorization': localStorage.getItem('token')})
    .then(obj=>{
        let nomeCompleto = `${obj.firstName} ${obj.lastName}`;
        pNome.innerText = nomeCompleto;
    })

    chamadaApi('tasks', 'GET', null, {'authorization': localStorage.getItem('token')})
    .then(obj=>{
        let completo = [];
        let naocompleto = [];
        obj.forEach(element => {
            if(element.completed === true)
            {
                completo.push(element);
            }
            else
            {
                naocompleto.push(element);
            }
        });
        let listaTerminado = document.getElementById("terminado");
        listaTerminado.innerHTML = "";
        completo.forEach(element => {
            adicionarElemento(listaTerminado, element.description, new Date(element.createdAt).toLocaleDateString("pt-BR"), element.completed);
        })
        let listaNaoTerminado =document.getElementById("naoTerminado");
        listaNaoTerminado.innerHTML = "";
        naocompleto.forEach(element => {
            adicionarElemento(listaNaoTerminado, element.description, new Date(element.createdAt).toLocaleDateString("pt-BR"), element.completed);
        })
    })

    let novaTarefa = document.getElementById("NovaTarefa");
    novaTarefa.addEventListener("submit", (event) => {
        event.preventDefault();
        let descricao = document.getElementById("descricao");
        let data = {
            'description': descricao.value,
            'completed': false
        }
        chamadaApi("tasks","POST", data, {'authorization': localStorage.getItem('token')})
        .then((obj)=>{
            console.log(obj);
        })
    })
})