// Variável para armazenar os amigos
var amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    var inputNome = document.getElementById('amigo');
    var nome = inputNome.value.trim();

    // Verifica se o nome não está vazio
    if (nome && amigos.indexOf(nome) === -1) {
        amigos.push(nome);

        // Cria o item da lista no HTML
        var li = document.createElement('li');
        li.textContent = nome;
        document.getElementById('listaAmigos').appendChild(li);

        // Limpa o campo de input após adicionar o nome
        inputNome.value = '';
    } else {
        alert("Por favor, insira um nome válido ou um nome não existente.");
    }
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    // Embaralha a lista de amigos
    var amigosSorteados = amigos.slice(); // Faz uma cópia da lista
    amigosSorteados = amigosSorteados.sort(function() {
        return Math.random() - 0.5;
    });

    // Garantir que ninguém se sorteie para si mesmo
    var resultadoSorteio = [];

    for (var i = 0; i < amigos.length; i++) {
        var amigo = amigos[i];
        var amigoSorteado = amigosSorteados[i];

        // Verifica se o amigo sorteado é o próprio
        if (amigo === amigoSorteado) {
            // Se for, troca com o próximo amigo na lista (circularmente)
            var temp = amigosSorteados[i];
            amigosSorteados[i] = amigosSorteados[(i + 1) % amigos.length];
            amigosSorteados[(i + 1) % amigos.length] = temp;
        }

        resultadoSorteio.push(amigo + " tirou " + amigosSorteados[i]);
    }

    // Exibe no console as associações de amigos secretos
    console.log("Resultado do sorteio:");
    resultadoSorteio.forEach(function(resultado) {
        console.log(resultado);
    });

    // Assumimos que o primeiro nome da lista é o "usuário"
    var usuario = amigos[0];
    var amigoSorteado = amigosSorteados[amigos.indexOf(usuario)];

    // Exibe apenas a quem o "usuário" foi sorteado na tela
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ''; // Limpa o resultado anterior
    var li = document.createElement('li');
    li.textContent = usuario + ', seu amigo secreto é ' + amigoSorteado;
    resultadoElement.appendChild(li);
}

