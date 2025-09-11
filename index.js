import { criarItemdaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
const addButton = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");


addButton.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemdaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
    
})

verificarListaVazia(listaDeCompras);