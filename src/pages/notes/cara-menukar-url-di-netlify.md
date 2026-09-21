---
templateKey: note-post
postType: post
slug: cara-menukar-url-di-netlify
date: 2024-03-15T10:00:00.000Z
editDate: 2024-03-20T14:30:00.000Z
stage: 🌲 Evergreen
draft: false
featuredpost: true
tags:
  - netlify
  - webdev
  - hosting
seo:
  title: Cara Menukar URL di Netlify
  image: /img/blog-forest-trail.jpg
  description: Panduan langkah demi langkah cara menukar nama subdomain lalai Netlify dan menyambungkan nama domain kustom anda dengan selamat dan pantas.
hero:
  title: Cara Menukar URL di Netlify
  description: Panduan praktikal menukar nama tapak percuma Netlify (.netlify.app) dan menghubungkan domain tersendiri dengan konfigurasi DNS lengkap.
  image: /img/blog-forest-trail.jpg
  size: Large
  position: Center Center
---

![Laluan Hutan Netlify](/img/blog-forest-trail.jpg)

Bila mula-mula deploy projek ke Netlify, sistem secara automatik akan berikan nama rawak seperti `magical-cupcake-12345.netlify.app`. Walaupun ia berfungsi serta-merta, sudah tentu kita nak nama URL yang lebih profesional, kemas, dan mudah diingati oleh pelawat.

Dalam artikel ini, kita akan lihat dua kaedah utama: menukar nama subdomain percuma Netlify, dan menghubungkan nama domain kustom anda sendiri.

## 1. Menukar Subdomain Percuma Netlify (.netlify.app)

Ini langkah paling mudah dan percuma sepenuhnya sekiranya anda belum membeli nama domain kustom:

1. **Log Masuk ke Dashboard**: Buka [Netlify](https://app.netlify.com/) dan pilih projek/tapak laman web anda.
2. **Pergi ke Tetapan**: Klik pada tab **Site configuration** (atau *Site settings*).
3. **Pilih General > Site details**: Di bahagian atas, anda akan melihat nama laman web semasa.
4. **Klik Change site name**: Masukkan nama baharu yang anda ingini (contohnya: `belantara-portfolio`).
5. **Simpan**: Klik butang **Save**. Jika nama tersebut belum diambil oleh pengguna lain, URL tapak anda akan berubah secara serta-merta ke `https://belantara-portfolio.netlify.app`!

> [!TIP]
> Semua pautan lama anda akan terputus jika anda menukar nama subdomain, jadi pastikan anda mengemas kini pautan di media sosial atau profil GitHub anda.

---

## 2. Menyambungkan Nama Domain Kustom (Custom Domain)

Jika anda sudah membeli domain sendiri (seperti `projekanda.com` atau `karya.my`):

1. Masuk ke **Site configuration** > **Domain management**.
2. Klik butang **Add a domain** (atau *Add custom domain*).
3. Taip nama domain anda dan klik **Verify**.
4. Netlify akan memberikan dua pilihan konfigurasi DNS:
   - **Netlify DNS (Disyorkan)**: Tukar *Nameservers* di pendaftar domain anda ke nameserver Netlify. Sijil SSL Let's Encrypt akan diuruskan secara automatik sepenuhnya.
   - **External DNS**: Kekalkan DNS provider anda dan tambah rekod **A** (`75.2.60.5`) dan rekod **CNAME** (`your-site.netlify.app`).

## 3. Menetapkan Redirects Automatik

Jika anda ada pautan halaman lama yang ingin dihalakan ke URL baharu tanpa menyebabkan ralat 404, cukup dengan mencipta fail `_redirects` dalam folder `static/`:

```text
/pautan-lama    /pautan-baru    301!
/blog/*         /notes/:splat   301
```

Netlify akan membaca fail ini secara automatik semasa setiap kali sesi binaan dijalankan. Sangat mudah dan pantas!
