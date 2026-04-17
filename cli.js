#!/usr/bin/env node

const { encrypt, decrypt } = require('./cipher');

const args = process.argv.slice(2);

function getArg(flag) {
    const index = args.indexOf(flag);
    return index !== -1 ? args[index + 1] : null;
}

if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Vigenere CLI

Usage:
  vigenere encrypt -t "text" -k "key"
  vigenere decrypt -t "text" -k "key"

Options:
  -t, --text     Input text
  -k, --key      Encryption key
  -h, --help     Show this help message

Examples:
  vigenere encrypt -t "hello123" -k "key"
  vigenere decrypt -t "abc123" -k "key"
`);
    process.exit(0);
}

const command = args[0];
const text = getArg('-t') || getArg('--text');
const key = getArg('-k') || getArg('--key');

if (!command || !text || !key) {
    console.log(`
Usage:
  encrypt -t "text" -k "key"
  decrypt -t "text" -k "key"
`);
    process.exit(1);
}

let result;

if (command === 'encrypt') {
    result = encrypt(text.toLowerCase(), key.toLowerCase());
} else if (command === 'decrypt') {
    result = decrypt(text.toLowerCase(), key.toLowerCase());
} else {
    console.log("Invalid command. Use 'encrypt' or 'decrypt'.");
    process.exit(1);
}

console.log("\nResult:");
console.log(result);