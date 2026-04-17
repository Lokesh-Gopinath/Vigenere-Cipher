# 🔐 Vigenère Cipher (Web + CLI)

A multi-interface implementation of the **Vigenère Cipher** using a custom alphabet, supporting both **encryption and decryption** via:

* 🌐 Browser UI
* 💻 Command Line Interface (CLI)

---

## 🚀 Features

* 🔒 Encrypt & Decrypt modes
* 🔁 Automatic keystream generation
* 🧩 Custom tabula recta (non-standard alphabet)
* 🔤 Extended character support:

  * `a–z`
  * `0–9`
  * `+ - * % @`
* 🔠 Alternating uppercase transformation (custom rule)
* 💻 CLI tool with argument parsing
* 📦 Modular code structure (shared logic)

---

## 🧠 How It Works

### 1. Tabula Recta

Instead of a standard alphabet, this project uses a **custom-ordered character set**:

```
z a r i e l b c d f g h j k m n o p q s t u v w x y + - * % @ 0 1 2 3 4 5 6 7 8 9
```

Each row is a shifted version of the previous one, forming a substitution matrix.

---

### 2. Encryption

* Locate plaintext character in first row
* Locate keystream character row
* Output intersection character

---

### 3. Decryption

* Locate row using keystream
* Find ciphertext character in that row
* Map back to first row

---

### 4. Custom Rule

* Every **odd-indexed character** is converted to uppercase (if alphabetic)

---

## 🌐 Web Usage

1. Open `index.html`
2. Enter:

   * Plaintext / Ciphertext
   * Keystream
3. Choose mode (Encrypt / Decrypt)
4. Click **Run**

---

## 💻 CLI Usage

### ▶️ Run directly

```bash
node cli.js encrypt -t "hello123" -k "key"
node cli.js decrypt -t "..." -k "key"
```

---

### ⚡ Global command (after linking)

```bash
vigenere encrypt -t "hello123" -k "key"
vigenere decrypt -t "..." -k "key"
```

---

### 🧾 Help command

```bash
vigenere --help
```

---

### 📌 Options

| Flag         | Description       |
| ------------ | ----------------- |
| `-t, --text` | Input text        |
| `-k, --key`  | Encryption key    |
| `-h, --help` | Show help message |

---

## ⚙️ Project Structure

```
.
├── index.html    # Web UI
├── styles.css    # Styling
├── script.js     # Browser logic
├── cipher.js     # Core encryption/decryption logic
├── cli.js        # CLI interface
├── package.json
```

---

## ▶️ Setup (CLI)

```bash
npm install
npm link
```

---

## 📌 Versioning

* `v0.0.1` → Web version
* `v0.1.0` → CLI support (current)
* `v0.2.0` → CLI improvements (planned)
* `v1.0.0` → API + full system

---

## 🚧 Future Improvements

* 🌐 REST API (Express)
* 📁 File input support for CLI
* 🧪 Cryptanalysis tools
* 🔧 Custom alphabet input
* 📊 Visualization of tabula recta

---

## ⚠️ Disclaimer

This project is for **educational purposes only**.

The Vigenère Cipher is **not secure** by modern cryptographic standards and should not be used for real-world security.

---

## 📌 What This Project Demonstrates

* Classical cryptography concepts
* Algorithm design & customization
* Multi-interface architecture (Web + CLI)
* Modular and reusable code structure

---
