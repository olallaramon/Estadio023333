// Obtener el contexto de dibujo del canvas
const canvas = document.getElementById("stadiumCanvas");
const ctx = canvas.getContext("2d");

// Función para dibujar el campo de fútbol
function drawFootballPitch() {
  ctx.fillStyle = "#34c924"; // Color verde para el césped
  ctx.fillRect(100, 100, 800, 600); // Dibujar el campo de fútbol
  
  // Líneas del campo
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 5;

  // Líneas de banda
  ctx.strokeRect(100, 100, 800, 600);

  // Línea central
  ctx.beginPath();
  ctx.moveTo(500, 100);
  ctx.lineTo(500, 700);
  ctx.stroke();

  // Círculo central
  ctx.beginPath();
  ctx.arc(500, 400, 50, 0, Math.PI * 2);
  ctx.stroke();

  // Área de penalti
  ctx.strokeRect(100, 250, 150, 300); // Área de penalti izquierda
  ctx.strokeRect(750, 250, 150, 300); // Área de penalti derecha

  // Puntos de penalti
  ctx.beginPath();
  ctx.arc(175, 400, 5, 0, Math.PI * 2); // Punto de penalti izquierdo
  ctx.arc(825, 400, 5, 0, Math.PI * 2); // Punto de penalti derecho
  ctx.fillStyle = "#fff";
  ctx.fill();
  
  // Marcas de esquina
  ctx.beginPath();
  ctx.arc(100, 100, 10, 0, Math.PI * 2); // Esquina izquierda superior
  ctx.arc(900, 100, 10, 0, Math.PI * 2); // Esquina derecha superior
  ctx.arc(100, 700, 10, 0, Math.PI * 2); // Esquina izquierda inferior
  ctx.arc(900, 700, 10, 0, Math.PI * 2); // Esquina derecha inferior
  ctx.fill();
}

// Función para dibujar las gradas
function drawStands() {
  ctx.fillStyle = "#333"; // Color gris para las gradas

  // Lado izquierdo
  ctx.fillRect(50, 100, 50, 600); 
  // Lado derecho
  ctx.fillRect(950, 100, 50, 600); 
  // Lado superior
  ctx.fillRect(100, 50, 800, 50); 
  // Lado inferior
  ctx.fillRect(100, 750, 800, 50); 
}

// Función para dibujar el techo
function drawRoof() {
  ctx.fillStyle = "#888";
  ctx.beginPath();
  ctx.moveTo(50, 100); // Esquina superior izquierda
  ctx.lineTo(950, 100); // Esquina superior derecha
  ctx.lineTo(900, 50); // Parte superior del techo
  ctx.lineTo(100, 50); // Parte superior del techo
  ctx.closePath();
  ctx.fill();
}

// Función para dibujar las torres de luz
function drawLightTowers() {
  ctx.fillStyle = "#ccc";
  
  // Torres de luz en las esquinas
  ctx.fillRect(50, 150, 20, 150);
  ctx.beginPath();
  ctx.arc(60, 150, 30, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillRect(930, 150, 20, 150);
  ctx.beginPath();
  ctx.arc(940, 150, 30, 0, Math.PI * 2);
  ctx.fill();
}

// Función para dibujar las pantallas
function drawScreens() {
  ctx.fillStyle = "#000";
  ctx.fillRect(300, 50, 400, 100); // Pantalla en la parte superior
  ctx.fillRect(300, 750, 400, 100); // Pantalla en la parte inferior
}

// Función para dibujar las entradas y túneles
function drawEntrances() {
  ctx.fillStyle = "#666";
  ctx.fillRect(200, 750, 100, 50); // Entrada inferior izquierda
  ctx.fillRect(700, 750, 100, 50); // Entrada inferior derecha
  ctx.fillRect(450, 400, 100, 50); // Entrada central (túnel de jugadores)
}

// Función para dibujar zonas VIP y prensa
function drawVIPandPress() {
  ctx.fillStyle = "#aaa";
  // Zonas VIP y prensa (parte superior)
  ctx.fillRect(100, 50, 200, 50); // Zona VIP izquierda
  ctx.fillRect(700, 50, 200, 50); // Zona VIP derecha
  ctx.fillStyle = "#bbb";
  ctx.fillRect(100, 50, 50, 50); // Zona de prensa izquierda
  ctx.fillRect(850, 50, 50, 50); // Zona de prensa derecha
}

// Función principal para dibujar todo el estadio
function drawStadium() {
  drawFootballPitch();
  drawStands();
  drawRoof();
  drawLightTowers();
  drawScreens();
  drawEntrances();
  drawVIPandPress();
}

// Llamar a la función para dibujar el estadio
drawStadium();
