---
templateKey: note-post
postType: post
slug: langkah-menukar-gambar-di-netlify-cms
date: 2024-03-10T10:00:00.000Z
editDate: 2024-03-18T16:00:00.000Z
stage: 🌿 Budding
draft: false
featuredpost: true
tags:
  - NetlifyCMS
  - gambar
  - media
seo:
  title: Langkah Menukar Gambar di Netlify CMS
  image: /img/blog-redwood-hq.jpg
  description: Panduan ringkas dan padat untuk memuat naik, mengurus dan menukar aset imej menggunakan panel pentadbir Decap CMS / Netlify CMS.
hero:
  title: Langkah Menukar Gambar di Netlify CMS
  description: Urus pustaka media anda dengan efisien terus melalui antaramuka Decap CMS tanpa perlu menulis kod manual atau membuka terminal.
  image: /img/blog-redwood-hq.jpg
  size: Large
  position: Center Center
---

![Pokok Besar Redwood](/img/blog-redwood-hq.jpg)

Salah satu kelebihan utama menggunakan **Netlify CMS** (kini dikenali sebagai **Decap CMS**) adalah keupayaannya membolehkan penulis menguruskan gambar dan media semudah menggunakan WordPress, tetapi dengan keselamatan dan kelajuan sistem fail berasaskan Git.

Berikut adalah langkah-langkah praktikal untuk memuat naik dan menukar gambar dalam artikel atau halaman anda.

## 1. Membuka Panel Pentadbir (Admin)

1. Buka laman web anda dan tambahkan `/admin/` di hujung URL (contohnya: `https://lamananda.com/admin/`).
2. Log masuk menggunakan akaun GitHub atau Netlify Identity anda.
3. Di panel sisi kiri, pilih koleksi yang ingin disunting, contohnya **Notes** atau **Work**.

## 2. Menukar Gambar Muka Depan (Featured / Hero Image)

Di dalam editor artikel:

1. Cari medan input bernama **Hero Image** atau **Featured Image**.
2. Jika sudah ada gambar sedia ada, anda akan melihat butang **Replace image** dan butang **Remove image**.
3. Klik pada butang **Replace image** untuk membuka tetingkap *Media Library*.
4. Anda boleh:
   - Memilih gambar yang sudah sedia ada dalam arkib media projek.
   - Atau klik **Upload new** untuk memuat naik fail imej baharu terus dari komputer anda (format JPG, PNG, atau WebP disyorkan).
5. Klik **Choose selected** untuk mengesahkan pilihan anda.

## 3. Menyelitkan Gambar di Dalam Teks Artikel (Markdown)

Untuk memasukkan gambar di tengah-tengah kandungan artikel:

- Klik ikon **Image** pada palet alat pemformatan teks di bahagian atas kotak penulisan Markdown.
- Pilih atau muat naik imej yang diingini, dan letakkan teks penerangan (*Alt text*) yang sesuai untuk tujuan SEO dan aksesibiliti pengguna.

## 4. Menyimpan dan Menerbitkan

Setelah selesai:
1. Klik butang **Save** di bahagian atas skrin.
2. Netlify CMS akan membuat satu *commit* secara automatik ke dalam repositori GitHub anda.
3. Netlify akan mengesan perubahan tersebut dan memulakan proses binaan (*build process*) baharu. Dalam masa 1-2 minit, imej baharu anda sudah bersiaran secara langsung di internet!
