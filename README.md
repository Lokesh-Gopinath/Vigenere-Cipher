# 🔐 Vigenère Cipher (Custom Alphabet)

A browser-based implementation of the **Vigenère cipher** with a custom alphabet and support for both **encryption and decryption**.

This project explores classical cryptography concepts while extending them with non-standard design choices such as a custom tabula recta and modified output behavior.

---

## 🚀 Features

* 🔒 **Encryption & Decryption modes**
* 🔁 Automatic keystream repetition
* 🧩 Custom **tabula recta (shift table)**
* 🔤 Extended alphabet:

  * Lowercase letters (`a–z`)
  * Numbers (`0–9`)
  * Special symbols (`+ - * % @`)
* 🔠 Alternating uppercase transformation (custom rule)
* 💻 Simple and clean browser interface

---

## 📸 Usage

1. Enter your **plaintext** (or ciphertext in decrypt mode)
2. Enter a **keystream**
3. Select mode:

   * `Encrypt`
   * `Decrypt`
4. Click **Run**
5. View result instantly

---

## 🧠 How It Works

### 1. Tabula Recta

Instead of the standard alphabet, this implementation uses a **custom-ordered character set**:

```
z a r i e l b c d ...
```

* Includes letters, digits, and symbols
* Each row is a shifted version of the previous one
* Forms a substitution matrix for encryption/decryption

---

### 2. Encryption

For each character:

1. Find its column index in the first row
2. Find the row corresponding to the keystream character
3. Select the intersecting character

---

### 3. Decryption

The reverse process:

1. Locate the row using the keystream character
2. Find the ciphertext character in that row
3. Map back to the first row to recover plaintext

---

### 4. Custom Behavior

This implementation introduces a non-standard rule:

* Every **odd-indexed character** is converted to uppercase (if alphabetic)

During decryption:

* All input is normalized to lowercase to ensure correctness

---

## ⚠️ Limitations

* ❌ Not cryptographically secure (educational purpose only)
* ❌ Vulnerable to classical attacks:

  * Frequency analysis
  * Kasiski examination
* ❌ No preservation of original casing

---

## ▶️ Running the Project

No setup required.

```bash
open index.html
```

Or simply double-click `index.html` to open in your browser.

---

## ⚙️ Project Structure

```
.
├── index.html   # UI structure
├── script.js    # Encryption & decryption logic
├── styles.css   # Styling
```

---

## 🚧 Future Improvements

* Add **CLI version** (Node.js / Rust)
* Build a **REST API**
* Visualize the **tabula recta dynamically**
* Allow **custom alphabet input**
* Add **cryptanalysis tools** (frequency analysis)

---

## 📌 What This Project Demonstrates

* Classical cryptography concepts (Vigenère cipher)
* Algorithm adaptation with custom rules
* Bidirectional transformation (encryption/decryption)
* Frontend + logic integration

---

## 📜 Disclaimer

This project is intended for **educational purposes only** and should not be used for real-world security.

---
