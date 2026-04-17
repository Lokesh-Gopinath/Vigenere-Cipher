const tabulaRecta = [
    "z a r i e l b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9".split(" "),
    "a r i e l b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z".split(" "),
    "r i e l b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a".split(" "),
    "i e l b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r".split(" "),
    "e l b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i".split(" "),
    "l b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e".split(" "),
    "b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l".split(" "),
    "c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b".split(" "),
    "d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c".split(" "),
    "f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d".split(" "),
    "g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f".split(" "),
    "h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g".split(" "),
    "j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h".split(" "),
    "k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j".split(" "),
    "m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k".split(" "),
    "n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m".split(" "),
    "o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n".split(" "),
    "p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o".split(" "),
    "q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p".split(" "),
    "s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q".split(" "),
    "t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s".split(" "),
    "u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t".split(" "),
    "v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u".split(" "),
    "w x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u v".split(" "),
    "x y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u v w".split(" "),
    "y + - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u v w x".split(" "),
    "+ - * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u v w x y".split(" "),
    "- * % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u v w x y +".split(" "),
    "* % @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u v w x y + -".split(" "),
    "% @ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u v w x y + - *".split(" "),
    "@ 0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u v w x y + - * %".split(" "),
    "0 1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u v w x y + - * % @".split(" "),
    "1 2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u v w x y + - * % @ 0".split(" "),
    "2 3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1".split(" "),
    "3 4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2".split(" "),
    "4 5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3".split(" "),
    "5 6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4".split(" "),
    "6 7 8 9 z a r i e l b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5".split(" "),
    "7 8 9 z a r i e l b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6".split(" "),
    "8 9 z a r i e l b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7".split(" "),
    "9 z a r i e l b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8".split(" ")
];

function getKeyStream(text, key) {
    let keystream = '';
    while (keystream.length < text.length) {
        keystream += key;
    }
    return keystream.substring(0, text.length);
}

function encrypt(text, key) {
    const keystream = getKeyStream(text, key);
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let c = text[i];

        if (c === ' ') {
            result += c;
            continue;
        }

        const col = tabulaRecta[0].indexOf(c);
        if (col === -1) {
            result += c;
            continue;
        }

        const row = tabulaRecta.findIndex(r => r[0] === keystream[i]);
        if (row === -1) {
            result += c;
            continue;
        }

        let out = tabulaRecta[row][col];

        if (i % 2 !== 0 && /[a-z]/.test(out)) {
            out = out.toUpperCase();
        }

        result += out;
    }

    return result;
}

function decrypt(text, key) {
    const keystream = getKeyStream(text, key);
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let c = text[i];

        if (c === ' ') {
            result += c;
            continue;
        }

        c = c.toLowerCase();

        const row = tabulaRecta.findIndex(r => r[0] === keystream[i]);
        if (row === -1) {
            result += c;
            continue;
        }

        const col = tabulaRecta[row].indexOf(c);
        if (col === -1) {
            result += c;
            continue;
        }

        result += tabulaRecta[0][col];
    }

    return result;
}

module.exports = { encrypt, decrypt };