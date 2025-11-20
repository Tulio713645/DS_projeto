const btnAdm = document.querySelector("#adm")
const btnAgro = document.querySelector("#agro")
const btnRdc = document.querySelector("#rdc")
const btnDs = document.querySelector("#ds")

const pMensagem = document.querySelector("#mensagem")

function bostoes() {
    alert("ERRO")
    pMensagem.innerHTML = ""
}
function ds() {
    pMensagem.innerHTML = "VEM PARA DS"
}

btnAdm.addEventListener("click", bostoes)
btnAgro.addEventListener("click", bostoes)
btnRdc.addEventListener("click", bostoes)
btnDs.addEventListener("click", ds)