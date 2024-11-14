function calcularCombinações() {
    const n = parseInt(document.getElementById('n').value);
    const p = parseInt(document.getElementById('p').value);
    const combinacoes = calcularCombinaçõesRecursivas(n, p);
    document.getElementById('resultado').innerText = `Número de combinações: ${combinacoes}`;
}

function calcularCombinaçõesRecursivas(n, p) {
    if (p === 0) return 1;
    if (n === p) return 1;
    return calcularCombinaçõesRecursivas(n - 1, p - 1) + calcularCombinaçõesRecursivas(n - 1, p);
}