export const getUser = () =>
  JSON.parse(localStorage.getItem("@userLogado")) || [];
export const setUser = (userLogado) =>
  localStorage.setItem("@userLogado", JSON.stringify(userLogado));

export const getDados = () =>
  JSON.parse(localStorage.getItem("@usuarios")) || [];
export const setDados = (usuarios) =>
  localStorage.setItem("@usuarios", JSON.stringify(usuarios));

export const verificaToken = () => {
  const urlAtual = window.location.href.split(".html");
  const paginaCompleta = urlAtual[0].split("/");
  const nomeDaPaginaAtual = paginaCompleta[paginaCompleta.length - 1];

  if (nomeDaPaginaAtual == "index" || nomeDaPaginaAtual == "cadastro") {
    console.log('');
  } else {
    try {
      const temToken = getUser()[0].token;

      if (temToken == [] || temToken == null) {
        window.location.href = "../../index.html";
      }
    } catch (e) {
      window.location.href = "../../index.html";
    }
  }
};


verificaToken()