# backend_template_generator_v.0.1
backend proje dosyalarını otomatik oluşturmak için araç

# 🚀 Backend Template Generator

Backend projeleri başlatırken sıfırdan dosya yapısı oluşturmakla uğraşmamak için geliştirilen **Backend Template Generator** ile tek komutla hazır bir backend iskeleti oluşturabilirsiniz. Bu araç, Express + TypeScript altyapısıyla çalışan, modüler bir backend template oluşturur.

## 📌 Özellikler
✅ **Modüler Klasör Yapısı:** Route, Controller, Service, Repository mantığına göre organize edilmiş.
✅ **Express + TypeScript Desteği:** Modern ve ölçeklenebilir bir backend iskeleti.
✅ **Otomatik Bağımlılık Kurulumu:** Express, Cors, Helmet, Dotenv gibi temel bağımlılıklar otomatik eklenir.
✅ **Kolay Kullanım:** Tek komut ile proje oluşturma.
✅ **Özelleştirilebilir Yapı:** İçeriği dilediğiniz gibi değiştirebilir, yeni özellikler ekleyebilirsiniz.

---

## 🚀 Kurulum

### **1️⃣ Projeyi Klonlayın ve PATH’e Ekleyin**

```bash
cd C:\
git clone https://github.com/kullanici-adiniz/backend-template-generator.git bgen
```

Daha sonra, ortam değişkenlerine **C:\bgen** yolunu ekleyin.

Windows için:
- "Ortam Değişkenleri"ni açın.
- "Sistem Değişkenleri" sekmesinde **Path** seçeneğini bulun ve **C:\bgen** ekleyin.
- Bilgisayarı yeniden başlatın veya terminali kapatıp açın.


### **2️⃣ bgen Komutunu Tanımlayın**

Komutu her yerden kullanmak için şu işlemi yapın:

```bash
echo "alias bgen='node C:/bgen/backend-template-generator.js'" >> ~/.bashrc
```

Linux/Mac için terminali yeniden başlatın veya şu komutu çalıştırın:
```bash
source ~/.bashrc
```

Windows için **C:\bgen** klasörüne `bgen.bat` dosyası oluşturun ve içine şunu yazın:
```bat
@echo off
node C:\bgen\backend-template-generator.js %*
```

---

## 🎯 Kullanım

Yeni bir backend projesi oluşturmak için aşağıdaki komutu çalıştırabilirsiniz:

```bash
bgen my-backend-project
```

🚀 **Bu işlem sonucunda aşağıdaki dosya yapısı otomatik olarak oluşturulacaktır:**

```
my-backend-project/
│── src/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── tests/
│   ├── utils/
│   ├── app.ts
│   ├── server.ts
│── .env
│── package.json
│── README.md
│── .gitignore
```

Daha sonra bağımlılıkları yüklemek için:
```bash
cd my-backend-project
npm install
npm run dev
```

🔥 **Ve backend’iniz hazır!** 🎉

---

## 📌 Gelecekteki Geliştirmeler
✅ **Otomatik Authentication (JWT/OAuth) Entegrasyonu**
✅ **Rate Limiting, Logging ve Cache Mekanizmalarının Dahil Edilmesi**
✅ **Mikroservis Mimarisi için Modüler Çözümler**
✅ **Dockerfile ve CI/CD Pipeline Otomasyonu**

💡 **Siz de projeyi fork’layarak geliştirmeye katkı sağlayabilirsiniz!**

🚀 **Happy Coding!** 😎

