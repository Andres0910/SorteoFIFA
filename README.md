

# 🏆 **Simulador de Sorteo FIFA World Cup**

Sistema web completo (Frontend + Backend) que simula el sorteo de grupos para una Copa del Mundo FIFA.
Incluye API REST, base de datos poblada con selecciones nacionales y un frontend que consume los servicios.

---

# 📌 **Características principales**

* Backend desarrollado con **Node.js + Express + MongoDB**.
* Base de datos con **32 selecciones** (script de seed incluido).
* Frontend en **HTML + CSS + JavaScript (sin frameworks)**.
* Comunicación asíncrona mediante **fetch + async/await**.
* CRUD completo de equipos (GET, POST, PUT, DELETE).
* Endpoint para **simular el sorteo de grupos**.
* Diseño responsive con **Bootstrap**.

---

# 🚀 **Instalación y ejecución del Backend**

### ✅ **1. Clonar el repositorio**

```sh
git clone https://github.com/tu_usuario/simulador-sorteo-fifa.git
cd SorteoFIFA/backendsorteo
```

### ✅ **2. Instalar dependencias**

```sh
npm install
```

### ✅ **3. Configurar variables de entorno**

Crear un archivo **.env** en la carpeta `backendsorteo/`:

```
MONGO_URI=mongodb+srv://Username2024:macias1234@clusterpoke.ndj2yqj.mongodb.net/
PORT=4000
```

### ✅ **4. Poblar la base de datos con los 32 equipos**

```sh
node db/db.js
```

### Resultado:

✔ MongoDB conectado
✔ Colección Team limpiada
✔ 32 equipos insertados

### ✅ **5. Ejecutar el servidor**

```sh
npm start
```

El backend se ejecutará en:

```
http://localhost:4000
```

---

# 📡 **Descripción de las rutas de la API**

---

# 📁 **/api/teams – CRUD de Equipos**

## 🔹 **GET /api/teams**

Obtiene todos los equipos registrados.

**Respuesta ejemplo:**

```json
[
  {
    "_id": "654af361c2b4f2",
    "name": "Argentina",
    "confederation": "CONMEBOL",
    "ranking": 1
  }
]
```

---

## 🔹 **POST /api/teams**

Crea un nuevo equipo.

**Body JSON:**

```json
{
  "name": "Chile",
  "confederation": "CONMEBOL",
  "ranking": 35
}
```

---

## 🔹 **PUT /api/teams/:id**

Actualiza un equipo por ID.

---

## 🔹 **DELETE /api/teams/:id**

Elimina un equipo por ID.

---

# 🎲 **/api/draw – Simulación del sorteo**

## 🔹 **GET /api/draw**

Realiza el sorteo de grupos y devuelve 8 grupos (A–H), cada uno con 4 equipos.

**Ejemplo de respuesta:**

```json
{
  "groups": {
    "A": [ ...4 equipos ],
    "B": [ ...4 equipos ],
    "C": [ ...4 equipos ],
    "D": [ ...4 equipos ],
    "E": [ ...4 equipos ],
    "F": [ ...4 equipos ],
    "G": [ ...4 equipos ],
    "H": [ ...4 equipos ]
  }
}

```
# 🌐 **Frontend**

El cliente web se encuentra en la carpeta:

```
/frontendsorteo
```

E incluye:

* HTML5 (estructuras de paneles, formularios, tablas y resultados del sorteo)
* CSS y Bootstrap
* JavaScript con:
  ✔ fetch + async/await
  ✔ CRUD completo
  ✔ visualización del sorteo
  ✔ manipulación del DOM



# 🛠 **Tecnologías utilizadas**

* Node.js
* Express
* MongoDB + Mongoose
* HTML5
* CSS3
* Bootstrap 5
* JavaScript (Vanilla)



# 📄 **Licencia**

Este proyecto es de uso académico y libre para fines educativos.


