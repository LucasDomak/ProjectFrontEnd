
function somar(num1,num2) {
    let soma = num1 + num2
    return soma
}


function listaUsuarios() {
    let lista ="\n"+  ['Guto','Lucas','Aleki']
    return lista
}

function exibirResultado() {
    let resutlado = somar(50,20)
    let conteudo = `<h5>${resutlado}</h5>` 
    document.querySelector('#div2').innerHTML += conteudo
}



function exibirListaUsuario() {
    document.querySelector("#div2").innerHTML += `<h4 class="lista"/> ${listaUsuarios()}</h4>`
    document. getElementsByClassName("lista").style= "#f00"
}
