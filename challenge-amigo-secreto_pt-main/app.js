var amigos = [];

function adicionarAmigo() {
    var inputNome = document.getElementById('amigo');
    var nome = inputNome.value.trim();

    if (nome && amigos.indexOf(nome) === -1) {
        amigos.push(nome);

        var li = document.createElement('li');
        li.textContent = nome;
        document.getElementById('listaAmigos').appendChild(li);

        inputNome.value = '';
    } else {
        alert("Por favor, insira um nome válido ou um nome não existente.");
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    var amigosSorteados = amigos.slice(); // Faz uma cópia da lista
    amigosSorteados = amigosSorteados.sort(function() {
        return Math.random() - 0.5;
    });

    var resultadoSorteio = [];

    for (var i = 0; i < amigos.length; i++) {
        var amigo = amigos[i];
        var amigoSorteado = amigosSorteados[i];

        if (amigo === amigoSorteado) {
            // Se for, troca com o próximo amigo na lista (circularmente)
            var temp = amigosSorteados[i];
            amigosSorteados[i] = amigosSorteados[(i + 1) % amigos.length];
            amigosSorteados[(i + 1) % amigos.length] = temp;
        }

        resultadoSorteio.push(amigo + " tirou " + amigosSorteados[i]);
    }

    console.log("Resultado do sorteio:");
    resultadoSorteio.forEach(function(resultado) {
        console.log(resultado);
    });

    var usuario = amigos[0];
    var amigoSorteado = amigosSorteados[amigos.indexOf(usuario)];

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
    var li = document.createElement('li');
    li.textContent = usuario + ', seu amigo secreto é ' + amigoSorteado;
    resultadoElement.appendChild(li);
}

