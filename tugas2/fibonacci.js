function deretFibonacci(jumlah) {
    let deret = [0, 1];
    for (let i = 2; i < jumlah; i++) {
        deret[i] = deret[i - 1] + deret[i - 2];
    }
    return deret;
}

let banyak = 18;
console.log(deretFibonacci(banyak));