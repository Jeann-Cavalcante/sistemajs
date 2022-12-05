import { getDados, setUser } from "./localStorage";
const form = document.querySelector("form");
let usuarios = getDados();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const email = e.target[0].value;
  const senha = e.target[1].value;

  const verificaEmail = usuarios.find((usuario) => usuario.email === email);
  const verificaSenha = usuarios.find((usuario) => usuario.senha === senha);

  if (verificaEmail && verificaSenha) {
    const user = usuarios.find((usuario) => usuario.email === email);
    console.log(user);
    gerandoUser(user);
    window.location.href = "./src/pages/home.html";
  } else {
    alert("Login invalido");
  }
})

function gerandoUser(user){
  const token =
    Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);

  const userLogado = [{ ...user, token: token }];
  setUser(userLogado);
};

console.log(getDados());
