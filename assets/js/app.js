const products = [
  { name: "Kit Arduino Uno", price: "30 000 FCFA", image: "assets/images/products/arduino-uno.png" },
  { name: "Kit Robot Voiture", price: "25 000 FCFA", image: "assets/images/products/kit-robot-voiture.png" },
  { name: "Module Haut-parleurs", price: "4 000 FCFA", image: "assets/images/products/module-haut-parleur.png" },
  { name: "Module DC Courant Continu", price: "2 500 FCFA", image: "assets/images/products/module-dc-courant-continu.png" },
  { name: "PCB", price: "2 500 FCFA", image: "assets/images/products/pcb.png" },
  { name: "Kit Maison Intelligente", price: "50 000 FCFA", image: "assets/images/products/kit-maison-intelligente.png" },
  { name: "Capteur Débit d'Eau", price: "3 500 FCFA", image: "assets/images/products/capteur-debit-eau.PNG" },
  { name: "Module GSM SIM900", price: "7 500 FCFA", image: "assets/images/products/module-gsm-sim-900.PNG" },
  { name: "ESP32", price: "Description du produit 8" },
  { name: "Module Bluetooth HC05", price: "Description du produit 9" },
  { name: "Capteur de mouvement PIR", price: "Description du produit 9" },
  { name: "Ecran LCD I2C 2004", price: "Description du produit 10" },
  { name: "Relais 1 Canal", price: "Description du produit 11" },
  { name: "Relais 2 Cannaux", price: "Description du produit 12" },
  { name: "Relais 4 Cannaux", price: "Description du produit 1" },
  { name: "Moteur DC", price: "Description du produit 2" },
  { name: "Nema 17", price: "Description du produit 3" },
  { name: "Nema 23", price: "Description du produit 4" },
  { name: "Pompe à Eau 12V", price: "Description du produit 5" },
  { name: "Driver L293D", price: "Description du produit 6" },
  { name: "Serrure électronique", price: "Description du produit 7" },
  { name: "BME 280", price: "Description du produit 8" },
  { name: "BMP 208", price: "Description du produit 9" },
  { name: "Capteur de Courant ZMPT 101B", price: "Description du produit 10" },
  { name: "Capteur de Température Corporelle MXL90614", price: "Description du produit 11" },
  { name: "Capteur de Lumière", price: "Description du produit 12" },
  { name: "Capteur de Tension Continu", price: "Description du produit 1" },
  { name: "Carte Arduino Uno", price: "Description du produit 2" },
  { name: "Max30102", price: "Description du produit 3" },
  { name: "Carte Arduino Mega", price: "Description du produit 4" },
  { name: "Relais 8 Cannaux", price: "Description du produit 5" },
  { name: "Ventilateur 5V", price: "Description du produit 6" },
  { name: "Ventilateur 12V", price: "Description du produit 7" },
  { name: "Power Supply", price: "Description du produit 8" },
  { name: "Module GPS Neo6M", price: "Description du produit 9" },
  { name: "Module LoRa32", price: "Description du produit 10" },
  { name: "Carte BMS 3S", price: "Description du produit 11" },
  { name: "Ecran LCD I2C 1602", price: "Description du produit 12" },
  { name: "Cerveau Moteur MG995", price: "Description du produit 1" },
  { name: "Pulse Sensor", price: "Description du produit 2" },
  { name: "Cerveau Moteur SG90", price: "Description du produit 3" },
  { name: "Ecran OLED", price: "Description du produit 4" },
  { name: "Breadbord", price: "Description du produit 5" },
  { name: "Module Lora RFM95w", price: "Description du produit 6" },
  { name: "Module RFID", price: "Description du produit 7" },
  { name: "Boite à fils en U", price: "Description du produit 8" },
  { name: "Horloges RTC", price: "Description du produit 9" },
  { name: "Keypad", price: "Description du produit 10" },
  { name: "Max31865", price: "Description du produit 11" },
  { name: "Capteur Humidité du Sol Capacitif", price: "Description du produit 12" },
  { name: "Abaisseur de Tension", price: "Description du produit 1" },
  { name: "DHT22", price: "Description du produit 2" },
  { name: "Pompe à Eau 12V", price: "Description du produit 3" },
  { name: "Module Suiveur de Ligne", price: "Description du produit 4" },
  { name: "Jumper Male Male 30CM", price: "Description du produit 5" },
  { name: "Jumper Male Female 30CM", price: "Description du produit 6" },
  { name: "Jumper Female Female 30CM", price: "Description du produit 7" },
  { name: "Jumper Male Male 20CM", price: "Description du produit 8" },
  { name: "Jumper Male Female 20CM", price: "Description du produit 9" },
  { name: "Jumper Female Female 20CM", price: "Description du produit 10" },
  { name: "Kit de Résistance 500pcs", price: "Description du produit 11" },
  { name: "Tuyau Pompe 5V 50M", price: "Description du produit 12" },
  { name: "Relais DC", price: "Description du produit 12" },
  { name: "Module Haut-parleurs ", price: "Description du produit 1" },
  { name: "Capteur de Pluie", price: "Description du produit 2" },
  { name: "Arduino WIFI", price: "Description du produit 3" },
  { name: "Capteur de Température Corporelle Humaine de Haute Précision (CJMCU-30205)", price: "Description du produit 4" },
  { name: "Moteur BTS7960", price: "Description du produit 5" },
  { name: "Alimentation 9V", price: "Description du produit 6" },
  { name: "Alimentation 12V", price: "Description du produit 7" },
  { name: "Capteur PH", price: "Description du produit 7" },
  { name: "Electrovan DC 24V", price: "Description du produit 8" },
  { name: "Electrovan DC 12V", price: "Description du produit 9" },
  { name: "Kit Capteurs", price: "Description du produit 10" },
  { name: "Ethernet W5100", price: "Description du produit 11" },
  { name: "Kit Capteurs de Gaz", price: "Description du produit 12" },
  { name: "Capteur de Température DS18B20", price: "Description du produit 1" },
  { name: "Capteur Ultrason JSN-SR04T", price: "Description du produit 2" },
  { name: "DHT11", price: "Description du produit 2" },
  { name: "Capteur Ultrason HC-SR04", price: "Description du produit 2" },
  { name: "MPU6050", price: "Description du produit 3" },
  { name: "Capteur Humidité du Sol", price: "Description du produit 4" },
  { name: "USB Host Shield", price: "Description du produit 5" },
  { name: "Module NFR 24L01", price: "Description du produit 6" },
  { name: "Kit ESP32", price: "Description du produit 7" },
  { name: "Kit Drone Educatif", price: "Description du produit 8" },
  { name: "Micro Steeper Motor Driver", price: "Description du produit 9" },
  { name: "Moteur Pas à Pas", price: "Description du produit 10" },
  { name: "Driver Moteur DRV8825", price: "Description du produit 11" },
  { name: "Driver Moteur A4998", price: "Description du produit 12" },
  { name: "Carte Extension Arduino Nano", price: "Description du produit 1" },
  { name: "Soudure par Point", price: "Description du produit 2" },
  { name: "Capteur NPK", price: "Description du produit 3" },
  { name: "Arduino nano", price: "Description du produit 4" },
  { name: "Potentiomètre", price: "Description du produit 5" },
  { name: "Module RF433 MHZ", price: "Description du produit 6" },
  { name: "Cable 10PIN", price: "Description du produit 7" },
  { name: "Cable 8PIN ", price: "Description du produit 8" },
  { name: "Cable 6PIN ", price: "Description du produit 9" },
  { name: "Ecran TFT", price: "Description du produit 10" },
  { name: "Capteur de Courant ACS712 30A", price: "Description du produit 11" },
  { name: "Capteur de Courant ACS712 10A", price: "Description du produit 12" },
  { name: "Capteur de Courant ACS712 5A", price: "Description du produit 1" },
  { name: "Kit LED 500pcs", price: "Description du produit 2" },
  { name: "Adaptateur XBee", price: "Description du produit 3" },
  { name: "ESP8266-01S", price: "Description du produit 4" },
  { name: "Mini Braidboard", price: "Description du produit 5" },
  { name: "Cable ESP32 USB", price: "Description du produit 6" },
  { name: "Cable ESP32 Type C", price: "Description du produit 7" },
  { name: "Kit de Soudure", price: "Description du produit 8" },
  { name: "Module RS-485", price: "Description du produit 9" },
  { name: "Kit Carcasse", price: "Description du produit 10" }
];

const productsPerPage = 8;
let currentPage = 1;
let filtered = [...products];

const productList = document.getElementById("productList");
const pagination = document.getElementById("pagination");

function renderProducts() {
  productList.innerHTML = "";
  const start = (currentPage - 1) * productsPerPage;
  const pageItems = filtered.slice(start, start + productsPerPage);

  pageItems.forEach(p => {
    productList.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100 shadow-sm text-center p-3">
          <img src="${p.image}" class="img-fluid mb-2" alt="${p.name}">
          <h6 class="fw-bold">${p.name}</h6>
          <p class="text-primary fw-semibold">${p.price}</p>
        </div>
      </div>
    `;
  });

  renderPagination();
}

function renderPagination() {
  pagination.innerHTML = "";
  const pages = Math.ceil(filtered.length / productsPerPage);

  for (let i = 1; i <= pages; i++) {
    pagination.innerHTML += `
      <li class="page-item ${i === currentPage ? "active" : ""}">
        <a class="page-link" href="#" onclick="goToPage(${i})">${i}</a>
      </li>
    `;
  }
}

function goToPage(page) {
  currentPage = page;
  renderProducts();
}

document.getElementById("searchInput").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  filtered = products.filter(p => p.name.toLowerCase().includes(value));
  currentPage = 1;
  renderProducts();
});

renderProducts();
