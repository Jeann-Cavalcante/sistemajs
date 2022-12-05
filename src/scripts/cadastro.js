import { getDados, setDados } from "./localStorage";

let usuarios = getDados();

const form = document.querySelector("form");

form.addEventListener("submit", cadastrarDados);

function cadastrarDados(e) {
  e.preventDefault();

  const cadastro = {
    id: getDados().length + 1,
    nome: e.target[0].value,
    email: e.target[1].value,
    senha: e.target[2].value,
  };

  const validaSenha = e.target[3].value;
  const emailExiste = usuarios.find((usuario) => usuario.email === cadastro.email);

  if (cadastro.senha != validaSenha) {
    alert('A confirmação de senha não confere com a senha digitada'); 
  } else if (emailExiste) { 
    console.log(emailExiste.email);
    alert("E-mail já cadastrado");
  }else {
    usuarios.push(cadastro);
    console.log(usuarios);
    setDados()
    e.target.reset();
    alert('usuario  cadastrados com sucesso'); 
    window.location.href = "../../index.html";
  }

  console.log(usuarios);
}