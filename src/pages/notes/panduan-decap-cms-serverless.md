---
templateKey: note-post
postType: post
slug: panduan-decap-cms-serverless
date: 2024-01-28T14:00:00.000Z
editDate: 2024-03-10T16:00:00.000Z
stage: 🌲 Evergreen
draft: false
featuredpost: false
tags:
  - cms
  - jamstack
  - netlify
seo:
  title: Panduan Decap CMS untuk Jamstack & Serverless
  image: /img/blog-redwood-hq.jpg
  description: Cara menguruskan kandungan Markdown dan media terus daripada repositori GitHub tanpa memerlukan pangkalan data SQL atau pelayan berbayar.
hero:
  title: Panduan Decap CMS untuk Jamstack
  description: Pengurusan kandungan Git-based moden tanpa pangkalan data tradisional, menggunakan GitHub sebagai storan sumber tunggal.
  image: /img/blog-redwood-hq.jpg
  size: Large
  position: Center Center
---

![Decap CMS Redwood](/img/blog-redwood-hq.jpg)

**Decap CMS** (dahulunya dikenali sebagai Netlify CMS) ialah sistem pengurusan kandungan (CMS) sumber terbuka berasaskan Git (*Git-based CMS*). Tidak seperti CMS tradisional seperti WordPress atau Drupal yang memerlukan pelayan PHP dan pangkalan data MySQL, Decap CMS beroperasi secara terus di atas Git repository anda.

Setiap kali anda menekan butang **Publish** di Decap CMS, ia mencipta sebuah `git commit` baru secara automatik dalam GitHub.

## Kelebihan Menggunakan Git-based CMS

1. **Kos Sifar (100% Percuma)**: Repositori awam atau peribadi GitHub adalah percuma, hosting di Netlify adalah percuma, dan tiada kos pangkalan data bulanan.
2. **Kesesuaian Versi Penuh (Audit Trail)**: Setiap perubahan teks direkodkan dalam sejarah Git commit. Anda boleh kembali ke mana-mana versi lama jika berlaku kesilapan.
3. **Keselamatan Tinggi**: Oleh kerana tiada pangkalan data SQL atau pelayan backend dinamik yang terdedah, risiko pencerobohan pangkalan data (seperti SQL Injection) tidak wujud.
4. **Keluaran Pantas**: Laman web dijana sebagai fail statik HTML/JS/CSS yang dihoskan pada CDN pantas di seluruh dunia.

---

## Struktur Konfigurasi: `config.yml`

Semua tetapan Decap CMS disimpan dalam satu fail iaitu `static/admin/config.yml`. Berikut adalah contoh struktur asas untuk menguruskan koleksi artikel:

```yaml
backend:
  name: git-gateway
  branch: main

media_folder: static/img
public_folder: /img

collections:
  - name: "notes"
    label: "Catatan (Notes)"
    folder: "src/pages/notes"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Template Key", name: "templateKey", widget: "hidden", default: "note-post" }
      - { label: "Tajuk", name: "title", widget: "string" }
      - { label: "Tarikh", name: "date", widget: "datetime" }
      - { label: "Badan Kandungan", name: "body", widget: "markdown" }
```

## Cara Pengesahan Identiti (Authentication)

Dengan menggunakan **Netlify Identity** bersama **Git Gateway**:

1. Aktifkan **Netlify Identity** di papan pemuka tapak Netlify anda.
2. Aktifkan perkhidmatan **Git Gateway** di bahagian *Settings > Identity > Services*.
3. Jemput emel anda sendiri melalui tab *Identity*.
4. Buka URL `/admin/` pada laman anda, log masuk, dan mulakan penerbitan kandungan serta-merta!

Gabungan Gatsby, Decap CMS, dan Netlify memberikan kuasa penerbitan moden yang sangat fleksibel dan pantas tanpa sebarang beban kos infrastruktur.
