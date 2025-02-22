// Define the tabula recta as a 2D array
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

// Encryption function
function encrypt(plaintext, keystream) {
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
        const c = plaintext[i];
        if (c === ' ') {
            ciphertext += c; // Preserve spaces
        } else {
            // Find the position of the plaintext character in the first row
            const plainIndex = tabulaRecta[0].indexOf(c);
            if (plainIndex === -1) {
                ciphertext += c; // Character not in alphabet, keep unchanged
                continue;
            }

            // Find the row for the keystream character
            const keyChar = keystream[i];
            let keyRow = -1;
            for (let r = 0; r < tabulaRecta.length; r++) {
                if (tabulaRecta[r][0] === keyChar) {
                    keyRow = r;
                    break;
                }
            }

            if (keyRow === -1) {
                ciphertext += c; // Key character not in alphabet, keep plaintext char unchanged
                continue;
            }

            // Get the encrypted character
            let encryptedChar = tabulaRecta[keyRow][plainIndex];
            // Convert odd-indexed characters to uppercase if they are letters
            if (i % 2 !== 0 && /[a-z]/.test(encryptedChar)) {
                encryptedChar = encryptedChar.toUpperCase();
            }
            ciphertext += encryptedChar;
        }
    }
    return ciphertext;
}

// Form submission handler
document.getElementById('cipherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const plaintext = document.getElementById('plaintext').value.toLowerCase();
    const keystreamInput = document.getElementById('keystream').value.toLowerCase();

    // Adjust keystream to match plaintext length
    let keystream = '';
    while (keystream.length < plaintext.length) {
        keystream += keystreamInput;
    }
    keystream = keystream.substring(0, plaintext.length);

    // Encrypt and display the result
    const ciphertext = encrypt(plaintext, keystream);
    document.getElementById('ciphertext').textContent = ciphertext;
});
