const addInfo = document.querySelector('.addInfo');
const confirmInfo = document.querySelector('.confirmIfo');
const ItemForExit = document.querySelector('.exitInfo');
let lista = [];

function incluirItem() {
    const info = addInfo.value;
    info == ""? alert("Nenhuma informação encontrada") : lista.push(info);
    criarLista(lista);
    addInfo.value = "";
}

function criarLista(lista) {
    let elemento = "";
    for (var i = 0; i < lista.length; i++) {
        elemento += "<div class = 'list-items'> <input type='checkbox' class = 'check' id = 'check" + [i] + "'> <label for = 'check" + [i] + "' class= 'item-da-lista'>" + lista[i] + "</label> </div>";
    }

    var printTela = document.querySelector('#lista-print');
    printTela.innerHTML = elemento;
};

function excluirItem(lista) {
    let itemExit = ItemForExit.value;
    let indiceLista = lista.indexOf(itemExit);
    itemExit == "" || !lista.includes(itemExit) ? alert("Item não encontrado, ou não escrito corretamente") : lista.splice(indiceLista, 1);
    criarLista(lista);
    ItemForExit.value = "";
}