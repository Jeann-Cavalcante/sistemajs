const iframe = document.querySelector("iframe");
const baseUrl = "https://app.powerbi.com/view?r=";

const urlParams = new URLSearchParams(window.location.search);

const url = `${baseUrl}${urlParams.get("dash")}`;

iframe.src = url;


