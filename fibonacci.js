

function fibs(n) {
    let fibseq = [0, 1]
    if (n === 1) {
        return [0];
    } else if (n===2) {
        return [0, 1]
    }
    let sum;
    let nMinus1 = 1;
    let nMinus2 = 0;
    for (let i = 3; i<=n; i++) {
        sum = nMinus1 + nMinus2;
        nMinus2 = nMinus1;
        nMinus1 = sum;
        fibseq.push(sum);
    }
    return fibseq
}


function fibsRec(n) {
    if (n === 1) {
        return [0];
    } else if (n ===2 ) {
        return [0, 1];
    }
    else {
        arrayPrev = fibsRec(n-1);
        return [...arrayPrev, arrayPrev.at(-1) + arrayPrev.at(-2)]; 
    }
}