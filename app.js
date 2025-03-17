let listaDeAmigos = [];
let lista = document.getElementById('listaAmigos');
let inputNombre = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

function agregarAmigo() {
    let nombreAmigo = inputNombre.value.trim();

    if (nombreAmigo === '') {
        alert('Ingrese el nombre del amigo.');
        return;
    }

    if (listaDeAmigos.includes(nombreAmigo)) {
        alert('El amigo ya fue agregado.');
        return;
    }

    listaDeAmigos.push(nombreAmigo);
    actualizarLista();
    inputNombre.value = '';
}

function actualizarLista() {
    lista.innerHTML = '';

    listaDeAmigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Agregue al menos un amigo para el sorteo.');
        return;
    }

    let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

function limpiarLista() {
    listaDeAmigos = [];
    actualizarLista();
    resultado.innerHTML = '';
}
