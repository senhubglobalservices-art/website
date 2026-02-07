const defaultImage = "assets/images/products/default.png";

const products = [
  { name: "Kit Arduino Uno", price: "30 000 FCFA", image: "assets/images/products/arduino-uno.png", description: "Robotlinking Kit de Démarrage d'Apprentissage Automatique Compact et Amélioré DIY, Compatible avec l'IDE Arduino" },
  { name: "Kit Robot Voiture", price: "25 000 FCFA", image: "assets/images/products/kit-robot-voiture.png", description: "Kit de châssis de voiture Robot intelligent 4WD pour CH340 Uno R3 avec câble USB pour Arduino avec Module ultrasonique pour Kit de démarrage d'entraînement" },
  { name: "Module Haut-parleurs", price: "4 000 FCFA", image: "assets/images/products/module-haut-parleur.png" },
  { name: "Module DC Courant Continu", price: "2 500 FCFA", image: "assets/images/products/module-dc-courant-continu.png", description: "Moteur DC pour jouets/hobbies Makerfabs taille 130 avec tension de fonctionnement recommandée de 3V pour moteurs à engrenages en plastique A64" },
  { name: "PCB", price: "2 500 FCFA", image: "assets/images/products/pcb.png" },
  { name: "Kit Maison Intelligente", price: "50 000 FCFA", image: "assets/images/products/kit-maison-intelligente.png", description: "Kit de base intelligente d'expérimentation, Kit de maison, un ensemble complet de matériel de programmation" },
  { name: "Capteur Débit d'Eau", price: "3 500 FCFA", image: "assets/images/products/capteur-debit-eau.png", description: "Nouveau 1Pc G1/2 1-30L/Min DC5V Capteur de Débit D'eau Débitmètre Hall Capteur de Débit D'eau Commande de Commutateur" },
  { name: "Module GSM SIM900", price: "7 500 FCFA", image: "assets/images/products/module-gsm-sim-900.png", description: "Module SIM900 4 fréquences \ carte de développement \ GSM \ GPRS \ SMS \ données sans fil super TC35I" },
  { name: "ESP32", price: "5 000 FCFA", image: "assets/images/products/esp32.png", description: "Nouvelle Carte de Développement ESP32 USB Type-C CH340C WiFi+Bluetooth Double-Cœur à Très Basse Consommation ESP32-DE ESP-WROOM-32 ESP-32S" },
  { name: "Module Bluetooth HC05", price: "4 000 FCFA", image: "assets/images/products/module-bluetooth-hc05.png", description: "Module série sans fil Bluetooth 6 broches HC-05 HC05" },
  { name: "Capteur de mouvement PIR", price: "2 500 FCFA", image: "assets/images/products/capteur-mouvement-pir.png", description: "Module capteur pyroélectrique PIR HC SR501 Capteur infrarouge humain Capteur de mouvement HC-SR501" },
  { name: "Ecran LCD I2C 2004", price: "3 500 FCFA", image: "assets/images/products/ecran-lcd-i2c-2004.png", description: "LCD2004+I2C 2004 20x4 2004A Écran bleu/vert HD44780 LCD à caractères avec module adaptateur d'interface série IIC/I2C pour Arduino" },
  { name: "Relais 1 Canal", price: "2 500 FCFA", image: "assets/images/products/relais-1-canal.png", description: "Un module relais 1 canal 5 V/12 V avec optocoupleur prenant en charge les déclencheurs de niveau haut et bas" },
  { name: "Relais 2 Canaux", price: "3 000 FCFA", image: "assets/images/products/relais-2-canaux.png", description: "Module relais 2 canaux 5 V, 12 V, 24 V avec isolation par optocoupleur prenant en charge les déclencheurs haut et bas" },
  { name: "Relais 4 Canaux", price: "4 000 FCFA", image: "assets/images/products/relais-4-canaux.png", description: "Module relais 4 canaux 5 V, 12 V, 24 V avec optocoupleur Prise en charge des déclencheurs de niveau haut et bas" },
  { name: "Moteur DC", price: "2 000 FCFA", image: "assets/images/products/moteur-dc.png", description: "Module moteur Tscinbuny TT Robot Voiture intelligente Moteur à engrenages à double arbre Moteur à engrenages Boîtier de vitesses Moteur pour Arduino DIY Robot voiture intelligent" },
  { name: "Nema 17", price: "15 000 FCFA" },
  { name: "Nema 23", price: "17 000 FCFA" },
  { name: "Pompe à Eau 12V", price: "10 000 FCFA" },
  { name: "Driver L293D", price: "3 000 FCFA" },
  { name: "Serrure électronique", price: "10 000 FCFA" },
  { name: "BME 280", price: "3 000 FCFA" },
  { name: "BMP 208", price: "3 000 FCFA" },
  { name: "Capteur de Courant ZMPT 101B", price: "2 500 FCFA", image: "assets/images/products/capteur-courant-zmtp101b.png", description: "ZMPT101B Capteur de tension de sortie CA du module transformateur de tension monophasé actif pour Arduino Mega Zmpt101b 2 mA" },
  { name: "Capteur de Température MXL90614", price: "7 000 FCFA", image: "assets/images/products/capteur-temperature-mxl90614.png", description: "GY-906 MLX90614 MLX90614ESF Module de capteur de température infrarouge sans contact Interface IIC Capteur IR compatible" },
  { name: "Capteur de Lumière", price: "2 000 FCFA", image: "assets/images/products/capteur-lumiere.png", description: "Module capteur photorésistif Détection de lumière Kit de détection de lumière à 3 fils" },
  { name: "Capteur de Tension Continu", price: "2 500 FCFA", image: "assets/images/products/capteur-tension-continu.png", description: "Capteur de tension CC 0-25 V Compatible avec Arduino, Raspberry Pi et ESP32" },
  { name: "Carte Arduino Uno", price: "7 000 FCFA", image: "assets/images/products/carte-arduino-uno.png", description: "Module de carte de développement haute qualité R3 atmega328p-pu ATmega16U2 CH340 UNOs R3 DIP Starter Kit arduin0 cartes atmega328p" },
  { name: "Max30102", price: "3 000 FCFA", image: "assets/images/products/max30102.png", description: "MAX30102 Module capteur d'oxygène sanguin et de fréquence cardiaque Détection du pouls et des battements cardiaques au poignet Carte de développement électronique" },
  { name: "Carte Arduino Mega", price: "12 000 FCFA", image: "assets/images/products/carte-arduino-mega.png", description: "Carte de développement améliorée MEGA2560 R3 Cartes à microcontrôleur MEGA2560 R3 Compatible avec Ard Uino IDE" },
  { name: "Relais 8 Cannaux", price: "8 000 FCFA", image: "assets/images/products/relais-8-canaux.png", description: "Module relais 8 canaux avec optocoupleur. Sortie relais Module relais 8 voies" },
  { name: "Ventilateur 5V", price: "2 000 FCFA", image: "assets/images/products/ventilateur-5v.png", description: "Ventilateur de refroidissement silencieux 8010 5 V CC, efficace, fiable et compact, pour mini-serveurs PC et appareils industriels" },
  { name: "Ventilateur 12V", price: "2 500 FCFA", image: "assets/images/products/ventilateur-12v.png", description: "Ventilateur de refroidissement silencieux 8010 12 V CC, efficace, fiable et compact, pour mini-serveurs PC et appareils industriels" },
  { name: "Power Supply", price: "2 000 FCFA", image: "assets/images/products/power-supply.png", description: "Module d'alimentation pour carte d'essai MB102 2 voies 3,3 V 5 V MB-102 Carte d'essai sans soudure" },
  { name: "Module GPS Neo6M", price: "7 000 FCFA", image: "assets/images/products/module-gps-neo6m.png", description: "GY-NEO6MV2 Module contrôleur de vol GPS NEO-6M 3V-5V Antenne céramique ultra puissante EEPROM APM 2.5 Produit Circuits intégrés" },
  { name: "Module LoRa32", price: "40 000 FCFA", image: "assets/images/products/module-lora32.png", description: "LILYGO Meshtastic T-Beam V1.2 ESP32 LoRa GPS WiFi Bluetooth carte de développement" },
  { name: "Carte BMS 3S", price: "3 500 FCFA", image: "assets/images/products/carte-bms-3s.png", description: "3S 60A BMS 12V 18650 Carte de protection pour chargeur de batterie lithium-ion 11,1V 12,6V/14,8V 16,8V Amélioration de l'équilibre" },
  { name: "Ecran LCD I2C 1602", price: "2 500 FCFA", image: "assets/images/products/ecran-lcd-i2c-1602.png", description: "Module d'affichage LCD1602 I2C Écran bleu-vert 5 V PCF8574 Plaque adaptatrice IIC 1602A avec rétroéclairage C158" },
  { name: "Servomoteur MG995", price: "3 500 FCFA", image: "assets/images/products/servomoteur-mg995.png", description: "MG995 Servomoteur numérique à engrenages métalliques pour hélicoptère, bateau et voiture RC Futaba JR, 180/360 degrés" },
  { name: "Pulse Sensor", price: "3 000 FCFA" },
  { name: "Servomoteur SG90", price: "2 500 FCFA" },
  { name: "Ecran OLED", price: "3 500 FCFA" },
  { name: "Breadbord", price: "2 000 FCFA" },
  { name: "Module Lora RFM95w", price: "6 500 FCFA" },
  { name: "Module RFID", price: "2 500 FCFA" },
  { name: "Boite à fils en U", price: "2 500 FCFA" },
  { name: "Horloges RTC", price: "2 500 FCFA" },
  { name: "Keypad", price: "1 500 FCFA" },
  { name: "Max31865", price: "3 000 FCFA" },
  { name: "Capteur Humidité du Sol Capacitif", price: "3 000 FCFA" },
  { name: "Abaisseur de Tension", price: "2 500 FCFA" },
  { name: "DHT22", price: "3 500 FCFA" },
  { name: "Pompe à Eau 5V", price: "3 000 FCFA" },
  { name: "Module Suiveur de Ligne", price: "1 500 FCFA" },
  { name: "Jumper Male Male 30CM", price: "1 500 FCFA" },
  { name: "Jumper Male Female 30CM", price: "1 500 FCFA" },
  { name: "Jumper Female Female 30CM", price: "1 500 FCFA" },
  { name: "Jumper Male Male 20CM", price: "1 500 FCFA" },
  { name: "Jumper Male Female 20CM", price: "1 500 FCFA" },
  { name: "Jumper Female Female 20CM", price: "1 500 FCFA" },
  { name: "Kit de Résistance 500pcs", price: "5 000 FCFA" },
  { name: "Tuyau Pompe 5V 50M", price: "1 000 FCFA" },
  { name: "Relais DC", price: "2 500 FCFA" },
  { name: "Module Haut-parleurs ", price: "3 000 FCFA" },
  { name: "Capteur de Pluie", price: "3 000 FCFA" },
  { name: "Arduino WIFI", price: "12 000 FCFA" },
  { name: "Capteur de Température Corporelle Humaine de Haute Précision (CJMCU-30205)", price: "10 000 FCFA" },
  { name: "Moteur BTS7960", price: "4 000 FCFA" },
  { name: "Alimentation 9V", price: "2 500 FCFA" },
  { name: "Alimentation 12V", price: "2 500 FCFA" },
  { name: "Capteur PH", price: "27 000 FCFA" },
  { name: "Electrovan DC 24V", price: "15 000 FCFA" },
  { name: "Electrovan DC 12V", price: "5 000 FCFA" },
  { name: "Kit Capteurs", price: "30 000 FCFA" },
  { name: "Ethernet W5100", price: "8 000 FCFA" },
  { name: "Kit Capteurs de Gaz", price: "12 000 FCFA" },
  { name: "Capteur de Température DS18B20", price: "3 000 FCFA" },
  { name: "Capteur Ultrason JSN-SR04T", price: "4 000 FCFA" },
  { name: "DHT11", price: "2 500 FCFA" },
  { name: "Capteur Ultrason HC-SR04", price: "2 000 FCFA" },
  { name: "MPU6050", price: "3 000 FCFA" },
  { name: "Capteur Humidité du Sol", price: "2 500 FCFA" },
  { name: "USB Host Shield", price: "7 000 FCFA" },
  { name: "Module NFR 24L01", price: "4 000 FCFA" },
  { name: "Kit ESP32", price: "15 000 FCFA" },
  { name: "Kit Drone Educatif", price: "60 000 FCFA" },
  { name: "Micro Steeper Motor Driver", price: "8 000 FCFA" },
  { name: "Moteur Pas à Pas", price: "3 000 FCFA" },
  { name: "Driver Moteur DRV8825", price: "2 500 FCFA" },
  { name: "Driver Moteur A4998", price: "2 500 FCFA" },
  { name: "Carte Extension Arduino Nano", price: "3 000 FCFA" },
  { name: "Soudure par Point", price: "60 000 FCFA" },
  { name: "Capteur NPK", price: "40 000 FCFA" },
  { name: "Arduino nano", price: "5 000 FCFA" },
  { name: "Potentiomètre", price: "1 500 FCFA" },
  { name: "Module RF433 MHZ", price: "3 000 FCFA" },
  { name: "Cable 10PIN", price: "1 500 FCFA" },
  { name: "Cable 8PIN ", price: "1 250 FCFA" },
  { name: "Cable 6PIN ", price: "1 000 FCFA" },
  { name: "Ecran TFT", price: "12 000 FCFA" },
  { name: "Capteur de Courant ACS712 30A", price: "2 500 FCFA" },
  { name: "Capteur de Courant ACS712 10A", price: "2 500 FCFA" },
  { name: "Capteur de Courant ACS712 5A", price: "2 500 FCFA" },
  { name: "Kit LED 500pcs", price: "4 000 FCFA" },
  { name: "Adaptateur XBee", price: "3 000 FCFA" },
  { name: "ESP8266-01S", price: "3 500 FCFA" },
  { name: "Mini Braidboard", price: "1 500 FCFA" },
  { name: "Cable ESP32 USB", price: "1 500 FCFA" },
  { name: "Cable ESP32 Type C", price: "1 500 FCFA" },
  { name: "Kit de Soudure", price: "13 000 FCFA" },
  { name: "Module RS-485", price: "2 500 FCFA" },
  { name: "Kit Carcasse", price: "10 000 FCFA", image: "assets/images/products/kit-carcasse.png", description: "Kits de châssis de voiture intelligente Robot 4/2WD avec encodeur de vitesse pour Arduino 51 M26 Kit de voiture intelligente Robot éducatif bricolage pour enfants étudiants" }
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

  pageItems.forEach((p, index) => {
  const realIndex = products.indexOf(p);

  productList.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card h-100 shadow-sm text-center p-3"
           onclick="openProductByIndex(${realIndex})">
        <img src="${p.image || defaultImage}" class="img-fluid mb-2">
        <h6 class="fw-bold">${p.name}</h6>
        <p class="text-primary fw-semibold">${p.price || "Prix sur demande"}</p>
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
        <a class="page-link" href="#products" onclick="goToPage(${i})">${i}</a>
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


function openProductByIndex(index) {
  const product = products[index];

  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalPrice").textContent =
    product.price || "Prix sur demande";
  document.getElementById("modalDescription").textContent =
    product.description || "Description non disponible.";
  document.getElementById("modalImage").src =
    product.image || defaultImage;

  const message = `Bonjour, je souhaite commander : ${product.name}`;
  document.getElementById("whatsappLink").href =
    `https://wa.me/221772071334?text=${encodeURIComponent(message)}`;

  new bootstrap.Modal(
    document.getElementById("productModal")
  ).show();
}