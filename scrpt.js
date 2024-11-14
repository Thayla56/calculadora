function calcularCombinações() {
    const numElementos = parseInt(document.getElementById('num-elementos').value);
    const numCombinacoes = parseInt(document.getElementById('num-combinacoes').value);
    const resultado = combinações(numElementos, numCombinacoes);
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}

function combinações(n, k) {
    if (k > n) return 0;
    let resultado = 1;
    for (let i = 1; i <= k; i++) {
        resultado = resultado * (n - i + 1) / i;
    }
    return resultado;
}