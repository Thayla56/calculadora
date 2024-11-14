function calcularCombinações() {
    const n = parseInt(document.getElementById('n').value);
    const k = parseInt(document.getElementById('k').value);
    const resultado = combinações(n, k);
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