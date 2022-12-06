import {
  getUser,
  getDados,
  setDados,
  setUser,
} from "./localStorage";

const form = document.querySelector("form");

  let user = getUser();

  let email = document.getElementById('email');
  email.value = user[0].email;

  let nome = document.getElementById("nome");
  nome.value = user[0].nome;

form.addEventListener("submit", EditeUser);

  function EditeUser(e){
    e.preventDefault();

    if (!e.target[2].value == "") {

     if(e.target[2].value != user[0].senha) return alert("Senha antiga incorreta");
    }

    const userLogado = {
      id: user[0].id,
      nome: e.target[0].value,
      email: e.target[1].value,
      senha: e.target[2].value == '' ? user[0].senha : e.target[3].value,
      token: user[0].token,
    };

    setUser([userLogado])
    atualizarDados([userLogado]);
    document.location.reload()
    alert("Usuário editado com sucesso!");
  };

  function atualizarDados(dados) {
    let dadosUser = getDados();

    delete dados[0].token;

    // let index = dados.findIndex((dado) => dado.id === user[0].id);
    let index = dados[0].id - 1;

    dadosUser[index] = dados[0];

    setDados(dadosUser);
  }