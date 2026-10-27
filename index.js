const searchInput = document.querySelector("#search");
const container = document.querySelector(".container");
const body = document.querySelector(".main");
const loader = document.querySelector(".loader");
const formContainer = document.querySelector(".form-container");
const title = document.querySelector(".title");

// Los paises descargados desde la api se guardan en el array de countries
// La api deberia pedirse solo una vez
// Usar este array para crear el filtrado

const API_URL = "https://countriesnow.space/api/v0.1/countries/capital";

let countries = [];

const WEATHER_API_KEY = "9c603e1327e37f2f1541d6c522477bdc";

const obtenerClima = async (ciudad) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${WEATHER_API_KEY}&units=metric&lang=es`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const climaElement = document.querySelector("#clima");
      if (climaElement) {
        climaElement.innerHTML = `
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="clima" style="vertical-align: middle; width: 40px;">
          ${data.weather[0].description} | ${data.main.temp} °C
        `;
      }
    } else {
      document.querySelector("#clima").textContent = "Clima no disponible";
    }
  } catch (error) {
    console.log("Error al obtener el clima:", error);
  }
};

const getCountries = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // CountriesNow devuelve los datos dentro de la propiedad "data"
    // Cada país tiene { name: "...", capital: "..." }
    countries = data.data;

    console.log("¡Países descargados!", countries);
    console.log("Total de países cargados:", countries.length);
  } catch (error) {
    console.log("Error al cargar los países:", error);
  }
};
getCountries();

searchInput.addEventListener("input", (e) => {
  const textoBuscado = searchInput.value.toLowerCase().trim();

  if (textoBuscado === "") {
    container.innerHTML = "";
    return;
  }

  const paisesFiltrados = countries.filter((pais) =>
    pais.name.toLowerCase().includes(textoBuscado),
  );

  mostrarPaises(paisesFiltrados);
});

// Mostrar Paises en el DOM

const mostrarPaises = (paises) => {
  container.innerHTML = "";

  // Si hay más de 10 países
  if (paises.length > 10) {
    container.innerHTML = `<p class="mensaje">Demasiados países, especifica mejor tu búsqueda</p>`;
    return;
  }

  // Si hay exactamente un pais

  if (paises.length === 1) {
    const pais = paises[0];
    const banderaUrl = `https://flagcdn.com/w320/${pais.iso2.toLowerCase()}.png`;

    container.innerHTML = `
      <div class="detalle-pais">
        <img src="${banderaUrl}" alt="Bandera de ${pais.name}">
        <div class="info-pais">
          <h2>${pais.name}</h2>
          <p><strong>Capital:</strong> ${pais.capital}</p>
          <p><strong>Región:</strong> ${pais.region || "No disponible"}</p>
          <p class="clima" id="clima">Cargando clima...</p>
        </div>
      </div>
    `;
    // (Pronto conectaremos la API del clima aquí)

    obtenerClima(pais.capital);
    return;
  }

  // Si hay entre 2 y 10, muestra la lista de tarjetas
  const listaHTML = paises
    .map((pais) => {
      const banderaUrl = `https://flagcdn.com/w320/${pais.iso2.toLowerCase()}.png`;
      return `
      <div class="tarjeta-pais">
        <img src="${banderaUrl}" alt="Bandera de ${pais.name}">
        <h2>${pais.name}</h2>
      </div>
    `;
    })
    .join("");

  container.innerHTML = listaHTML;
};
