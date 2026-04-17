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

function encrypt(plaintext, keystream) {
    let ciphertext = '';

    for (let i = 0; i < plaintext.length; i++) {
        const c = plaintext[i];

        if (c === ' ') {
            ciphertext += c;
            continue;
        }

        const plainIndex = tabulaRecta[0].indexOf(c);
        if (plainIndex === -1) {
            ciphertext += c;
            continue;
        }

        const keyChar = keystream[i];

        let keyRow = -1;
        for (let r = 0; r < tabulaRecta.length; r++) {
            if (tabulaRecta[r][0] === keyChar) {
                keyRow = r;
                break;
            }
        }

        if (keyRow === -1) {
            ciphertext += c;
            continue;
        }

        let encryptedChar = tabulaRecta[keyRow][plainIndex];

        if (i % 2 !== 0 && /[a-z]/.test(encryptedChar)) {
            encryptedChar = encryptedChar.toUpperCase();
        }

        ciphertext += encryptedChar;
    }

    return ciphertext;
}

function decrypt(ciphertext, keystream) {
    let plaintext = '';

    for (let i = 0; i < ciphertext.length; i++) {
        let c = ciphertext[i];

        if (c === ' ') {
            plaintext += c;
            continue;
        }

        c = c.toLowerCase();

        const keyChar = keystream[i];

        let keyRow = -1;
        for (let r = 0; r < tabulaRecta.length; r++) {
            if (tabulaRecta[r][0] === keyChar) {
                keyRow = r;
                break;
            }
        }

        if (keyRow === -1) {
            plaintext += c;
            continue;
        }

        const colIndex = tabulaRecta[keyRow].indexOf(c);

        if (colIndex === -1) {
            plaintext += c;
            continue;
        }

        plaintext += tabulaRecta[0][colIndex];
    }

    return plaintext;
}

document.getElementById('mode').addEventListener('change', function () {
    const label = document.getElementById('textLabel');
    label.textContent = this.value === 'encrypt' ? 'Plaintext' : 'Ciphertext';
});

document.getElementById('cipherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputText = document.getElementById('plaintext').value.toLowerCase();
    const keystreamInput = document.getElementById('keystream').value.toLowerCase();
    const mode = document.getElementById('mode').value;

    let keystream = '';
    while (keystream.length < inputText.length) {
        keystream += keystreamInput;
    }
    keystream = keystream.substring(0, inputText.length);

    const result = mode === "encrypt"
        ? encrypt(inputText, keystream)
        : decrypt(inputText, keystream);

    document.getElementById('ciphertext').textContent = result;
});
