export const getUser = () =>
  JSON.parse(localStorage.getItem("@userLogado")) || [];
export const setUser = (userLogado) =>
  localStorage.setItem("@userLogado", JSON.stringify(userLogado));

export const getDados = () =>
  JSON.parse(localStorage.getItem("@usuarios")) || [];
export const setDados = (usuarios) =>
  localStorage.setItem("@usuarios", JSON.stringify(usuarios));

  console.log(getUser());

export const verificaToken = () => {
  const urlAtual = window.location.href.split(".html");
  const paginaCompleta = urlAtual[0].split("/");
  const nomeDaPaginaAtual = paginaCompleta[paginaCompleta.length - 1];
  console.log(nomeDaPaginaAtual);

  if (nomeDaPaginaAtual == "index" || nomeDaPaginaAtual == "cadastro") {
    console.log("Inclui");
  } else {
    try {
      console.log(getUser());
      const temToken = getUser()[0].token;
      console.log(!!temToken);

      if (temToken == [] || temToken == null) {
        window.location.href = "../../index.html";
      }
    } catch (e) {
      window.location.href = "../../index.html";
    }
  }
};


verificaToken()