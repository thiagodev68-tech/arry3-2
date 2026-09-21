let contatos=[];
function cadastrar(){///begin
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    //json
    let contato =
    {

         nome:nome,
         telefone:telefone
    }
    //adicionar o jeto com dados com os dados
contatos.push(contato);
listar();
document.getElementById("nome").vale="";
document.getElementById("telefone").value= ""


}//end
function listar(){
let lista = document.getElementById("lista");
lista.innerHTML = "";
//percorrer nosso array para catar item a item
contatos.forEach(function(contato){
    let item = document.createElement("li");
    item.textContent = contato.nome + " - " + contato.telefone;
    lista.appendChild(item);
})
}