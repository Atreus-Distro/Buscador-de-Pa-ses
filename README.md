# 🌎 Buscador de Países

> Una aplicación web interactiva que permite buscar países en tiempo real y consultar el clima actual de su capital. 

## 🚀 Demo en vivo
Puedes probar la aplicación funcionando al 100% aquí:
👉 **[Ver el Buscador de Países](https://atreus-distro.github.io/Buscador-de-Pa-ses/)**

---

## 🛠️ Tecnologías Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

- **JavaScript (Vanilla):** Uso de `fetch`, `async/await` y manipulación del DOM.
- **Métodos de Array:** Uso intensivo de `.filter()` y `.map()`.
- **APIs Externas:**
  - [CountriesNow](https://countriesnow.space/) (Alternativa a REST Countries para evitar bloqueos de API Key).
  - [OpenWeatherMap](https://openweathermap.org/) (Para los datos climáticos).
  - [FlagCDN](https://flagcdn.com/) (Para las imágenes de las banderas).

---

## ✨ Características

- [x] **Búsqueda en tiempo real:** El filtrado se ejecuta instantáneamente al escribir.
- [x] **Consumo optimizado:** La lista de países se descarga una sola vez y se filtra localmente.
- [x] **Vistas dinámicas:**
  - Si hay más de 10 países: muestra un mensaje de advertencia.
  - Si hay entre 2 y 10: muestra una cuadrícula con las banderas y nombres.
  - Si hay 1 solo: muestra una tarjeta de detalle con capital, región y clima.
- [x] **API del Clima:** Muestra la temperatura actual y un ícono representativo del clima de la capital del país buscado.
- [x] **Diseño Responsive:** Adaptable a dispositivos móviles y de escritorio.
- [x] **Fondo personalizado:** Diseño con degradado azul e imágenes ilustrativas.

---

## ⚙️ Cómo correr el proyecto en local

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en tu navegador (puedes usar la extensión **Live Server** de VS Code para una mejor experiencia).
3. ¡Listo! No necesitas instalar dependencias ni encender ningún servidor backend.

*(Nota: Para que la API del clima funcione, el archivo `index.js` ya incluye una API Key pública de OpenWeatherMap. Si la llave llega a su límite de peticiones, puedes crear una gratis en su página web y reemplazarla en la variable `WEATHER_API_KEY`).*

---

## 👨‍💻 Autor

**Atreus-Distro**
- GitHub: [@Atreus-Distro](https://github.com/Atreus-Distro)
