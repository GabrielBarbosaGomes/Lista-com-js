const addInfo = document.querySelector('.addInfo');
const confirmInfo = document.querySelector('.confirmIfo');
const ItemForExit = document.querySelector('.exitInfo');
// let lista = [];

function incluirItem() {
    const info = addInfo.value;
    if (info == "") {
        alert("Nenhuma informação encontrada");
        return;
    }
    criarLista(info);
    addInfo.value = "";
}

function criarLista(info) {
    // let elemento = "";
    // for (var i = 0; i < lista.length; i++) {
    //     elemento += "<div class = 'list-items'> <input type='checkbox' class = 'check' id = 'check" + [i] + "'> <label for = 'check" + [i] + "' class= 'item-da-lista'>" + lista[i] + "</label> </div>";
    // }
    var checkId = Math.random().toString(36).split('.')[1];

    var item = document.createElement('div');
    item.className = "list-items";
    var check = document.createElement('input');
    check.type = "checkbox";
    check.className = "check";
    check.id = checkId;
    var label = document.createElement('label');
    label.className = "item-da-lista";
    label.innerText = info;
    label.setAttribute('for', checkId); //primeiro parametro = atributo criado, segundo parametro = valor do atributo

    item.appendChild(check);
    item.appendChild(label);

    var printTela = document.querySelector('#lista-print');
    printTela.appendChild(item);
};

// function excluirItem(lista) {
//     let itemExit = ItemForExit.value;
//     let indiceLista = lista.indexOf(itemExit);
//     itemExit == "" || !lista.includes(itemExit) ? alert("Item não encontrado, ou não escrito corretamente") : lista.splice(indiceLista, 1);
//     criarLista(lista);
//     ItemForExit.value = "";
// }

function excluirItem() {
    var items = document.querySelectorAll('input[type="checkbox"]:checked');
    if (items == null || items.length == 0) {
        alert("não existe nenhum item marcado");
        return;
    }
    for (let item of items) {
        item.parentElement.remove();
    }

}