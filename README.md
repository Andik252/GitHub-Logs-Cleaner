# GitHub Actions Log Deleter

## Deskripsi
Skrip ini memungkinkan Anda untuk menghapus semua log dari GitHub Actions di repositori Anda dengan mudah menggunakan Node.js.

## Cara Instalasi

**Sebelum memulai, pastikan Anda telah membuat Personal Access Token di 
Halaman. [GitHub token](https://github.com/settings/tokens)**

1. **Install Node.js dan Git**:
   ```bash
   sudo apt install -y nodejs git
   ```

2. **Clone repositori ini**:
   ```bash
   git clone https://github.com/Andik252/Github-Actions-Cleaner.git
   ```

3. **Masuk ke folder repositori dan install dependensi**:
   ```bash
   cd Github-Actions-Cleaner && npm install axios
   ```

4. **Edit file `deleteTokens.js`**:
   ```bash
   nano deleteTokens.js
   ```
   
   - Ganti nilai `owner` dengan username atau organisasi Anda.
   - Ganti nilai `repo` dengan nama repositori Anda.
   - Ganti nilai `token` dengan Personal Access Token yang telah Anda buat.

   Edit bagian ini dalam file:
   ```javascript
   const owner = 'USERNAME'; // Ganti dengan username atau organisasi Anda
   const repo = 'REPO_NAME'; // Ganti dengan nama repositori Anda
   const token = 'YOUR_PERSONAL_ACCESS_TOKEN'; // Ganti dengan token akses pribadi Anda



   ```
   Simpan file dengan perintah `Ctrl + x`, lalu `y`, dan `Enter`.

5. **Jalankan program**:
   ```bash
   node deleteTokens.js
   ```

## Catatan Penting
- **Hati-hati dengan Penghapusan**: Skrip ini akan menghapus log untuk semua workflow runs yang ada. Pastikan Anda benar-benar ingin melakukannya.
- **Rate Limiting**: Perhatikan batasan laju API GitHub jika Anda memiliki banyak log untuk dihapus.
- **Error Handling**: Pastikan untuk memeriksa output log untuk mengidentifikasi setiap kesalahan yang mungkin terjadi selama proses penghapusan.
