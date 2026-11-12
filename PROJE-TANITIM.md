# TaskFlow Proje Tanıtım Dokümanı

**Proje:** Görev ve Proje Yönetim Sistemi API Geliştirme Projesi
**Eğitim:** Node.js ile Backend Programlama
**Geliştirici:** Tuğçe Akyıldız

## 1. Projenin Amacı

Bu proje, eğitim süresince edinilen Node.js ve Express.js bilgilerini uygulamalı olarak göstermek amacıyla geliştirilmiştir. Amaç, gerçek hayatta kullanılabilecek bir görev yönetim sistemi için REST API tasarlamak ve çalışır hale getirmektir.

## 2. Senaryo

Bir yazılım şirketi, ekip içindeki görevleri ve çalışanların sorumluluklarını takip etmek istemektedir. TaskFlow API; görevlerin oluşturulmasını, çalışanlara atanmasını, durumlarının takip edilmesini ve önceliklendirilmesini sağlar. Sistem tamamen REST API mantığında çalışır ve istekler Postman gibi araçlarla yapılır.

## 3. Sistem Özellikleri

- **Görev ekleme:** Yeni görev oluşturulur. Başlık zorunludur.
- **Görev listeleme:** Tüm görevler görüntülenir.
- **Görev detayı:** Belirli bir görev numarasıyla görüntülenir.
- **Görev güncelleme:** Görevin durumu, önceliği, atanan kişisi gibi alanlar değiştirilir.
- **Görev silme:** Görev sistemden kaldırılır.
- **Durum yönetimi:** Her görevin bir durumu vardır (pending, in-progress, completed).
- **Öncelik yönetimi:** Her görevin bir önceliği vardır (low, medium, high).
- **Görev atama:** Her görev bir çalışana atanabilir (assignee).
- **Logger:** Sunucuya gelen her istek, yöntemi, adresi ve zaman damgasıyla konsola kaydedilir.

## 4. Veri Modeli

| Alan | Açıklama |
|---|---|
| id | Görevin otomatik verilen numarası |
| title | Görev başlığı (zorunlu) |
| description | Görev açıklaması |
| status | Görev durumu (varsayılan: pending) |
| priority | Görev önceliği (varsayılan: medium) |
| assignee | Görevin atandığı çalışan |
| createdAt | Oluşturulma zamanı (otomatik) |

## 5. API Mimarisi ve Endpoint Listesi

| İşlem | Yöntem | Adres | Başarılı Cevap |
|---|---|---|---|
| Görev ekle | POST | /tasks | 201 Created |
| Tüm görevleri listele | GET | /tasks | 200 OK |
| Görev detayı | GET | /tasks/:id | 200 OK |
| Görev güncelle | PUT | /tasks/:id | 200 OK |
| Görev sil | DELETE | /tasks/:id | 200 OK |

Hatalı durumlarda API uygun durum kodlarıyla cevap verir: başlık eksikse 400, görev bulunamazsa 404.

## 6. Kullanılan Teknolojiler ve Yapı

- **Node.js:** Sunucu çalışma ortamı
- **Express.js:** Sunucu ve routing altyapısı
- **Postman:** API testleri

Proje üç katmana ayrılmıştır:

- `routes/`: Adresler ve yöntemler burada tanımlanır.
- `controllers/`: Her adresin iş mantığı burada yazılır.
- `middleware/`: İsteklerin kaydedildiği Logger burada bulunur.

## 7. Test Süreci

Beş CRUD işleminin tamamı Postman ile test edilmiştir. Ekleme, listeleme, detay, güncelleme ve silme isteklerinin doğru durum kodlarıyla çalıştığını gösteren ekran görüntüleri `test-screenshots` klasöründedir. Logger çıktısının görüntüsü de aynı klasördedir.

## 8. Sınırlılıklar

Görevler veritabanı yerine sunucu hafızasında tutulur. Bu nedenle sunucu kapatıldığında veriler silinir. Filtreleme, arama, validation ve raporlama gibi isteğe bağlı özellikler bu sürümde yer almamaktadır.