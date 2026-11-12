# TaskFlow - Görev ve Proje Yönetim Sistemi API

Node.js ve Express.js ile geliştirilmiş, REST API mantığında çalışan görev yönetim sistemidir. Node.js ile Backend Programlama eğitimi bitirme projesidir.

Geliştirici:TuğçeAkyıldız

## Özellikler

- Görev ekleme, listeleme, detay görüntüleme, güncelleme ve silme (CRUD)
- Routing ve controller yapısıyla düzenli klasör organizasyonu
- Tüm istekleri kaydeden Logger middleware
- Postman ile test edilmiştir

## Gereksinimler

- Node.js (v18 veya üzeri)
- npm (Node.js ile birlikte gelir)
- Postman (testler için, isteğe bağlı)

## Kurulum ve Çalıştırma

1. Projeyi indirin:

```
git clone https://github.com/tugceakyildiz41/taskflow-api.git
```

2. Proje klasörüne girin:

```
cd taskflow-api
```

3. Bağımlılıkları kurun:

```
npm install
```

4. Sunucuyu başlatın:

```
node server.js
```

5. Terminalde şu mesajı görmelisiniz:

```
Sunucu http://localhost:3000 adresinde çalışıyor
```

Sunucuyu durdurmak için terminalde `Ctrl + C` tuşlarına basın.

## API Endpoint Listesi

| İşlem | Yöntem | Adres |
|---|---|---|
| Görev ekle | POST | /tasks |
| Tüm görevleri listele | GET | /tasks |
| Görev detayı | GET | /tasks/:id |
| Görev güncelle | PUT | /tasks/:id |
| Görev sil | DELETE | /tasks/:id |

## Görev Veri Yapısı

```json
{
  "id": 1,
  "title": "Login sayfasını yaz",
  "description": "Kullanıcı girişi için form",
  "status": "pending",
  "priority": "high",
  "assignee": "musa",
  "createdAt": "2026-11-02T10:00:00.000Z"
}
```

- `title` zorunludur, diğer alanlar isteğe bağlıdır.
- `status` verilmezse `pending`, `priority` verilmezse `medium` olur.

## Örnek İstek

POST http://localhost:3000/tasks adresine, Body kısmında JSON olarak:

```json
{
  "title": "Veritabanı şemasını çiz",
  "priority": "medium",
  "assignee": "ayse"
}
```

## Proje Yapısı

```
taskflow-api/
├── controllers/
│   └── taskController.js
├── middleware/
│   └── logger.js
├── routes/
│   └── taskRoutes.js
├── test-screenshots/
├── server.js
├── package.json
└── README.md
```

## Test

CRUD işlemlerinin Postman testlerine ait ekran görüntüleri `test-screenshots` klasöründedir.

## Not

Görevler veritabanı yerine sunucu hafızasında tutulur. Sunucu kapatıldığında görevler silinir.