# 🚀 Backend Template Generator

A CLI tool that generates a modular backend project structure with Express + TypeScript in seconds. Say goodbye to manual folder setup and start coding immediately!

## 📌 Features
✅ **Modular Folder Structure**: Follows the Route → Controller → Service → Repository pattern.
✅ **Express + TypeScript Support**: Ensures scalability and maintainability.
✅ **Automatic Dependency Installation**: Includes Express, Cors, Helmet, Dotenv, and more.
✅ **Easy to Use**: Create a complete backend project with a single command.
✅ **Customizable**: Modify and expand as needed for different use cases.

---

## 🚀 Installation

### **1️⃣ Clone the Project and Add to PATH**

```bash
cd C:\
git clone https://github.com/your-username/backend-template-generator.git bgen
```

Then, add **C:\bgen** to your system's **Path** variable.

Windows:
- Open "Environment Variables"
- Under "System Variables," find **Path** and add **C:\bgen**
- Restart your PC or reopen the terminal

### **2️⃣ Define the `bgen` Command**

To use the command globally, follow these steps:

```bash
echo "alias bgen='node C:/bgen/backend-template-generator.js'" >> ~/.bashrc
```

For Linux/Mac, restart the terminal or run:
```bash
source ~/.bashrc
```

For Windows, create a `bgen.bat` file inside **C:\bgen** and add:
```bat
@echo off
node C:\bgen\backend-template-generator.js %*
```

---

## 🎯 Usage

To create a new backend project, simply run:

```bash
bgen my-backend-project
```

🚀 **This will generate the following project structure:**

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

Then, install dependencies and start development:
```bash
cd my-backend-project
npm install
npm run dev
```

🔥 **Your backend is ready!** 🎉

---

## 📌 Future Enhancements
✅ **Automatic Authentication Setup (JWT/OAuth)**
✅ **Rate Limiting, Logging, and Caching Integration**
✅ **Microservices-Friendly Architecture Enhancements**
✅ **Docker & CI/CD Pipeline Automation**

💡 **Feel free to fork and contribute to improve this tool!**

🚀 **Happy Coding!** 😎

