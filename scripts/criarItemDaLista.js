import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemdaLista () {
    
    if (inputItem.value === "") {
        alert("Por favor, insira um item na lista.");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container"); 
    const checkboxItemDaLista = document.createElement("input");
    checkboxItemDaLista.type = "checkbox";
    checkboxItemDaLista.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    checkboxItemDaLista.addEventListener("click", function () {
        if(checkboxItemDaLista.checked){
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    })    

    containerItemDaLista.appendChild(checkboxItemDaLista);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);
    const dataCompleta = gerarDiaDaSemana();


    const itemData = document.createElement("p");
    itemData.classList.add("texto-data");
    itemData.innerHTML = dataCompleta;
   
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}