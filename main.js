const canvas = document.getElementById("TETRIS");
const context = canvas.getContext("2d");

// width 250px terreno de juego y 150px de menu
canvas.height = 500;
canvas.width = 400;

// limites del terreno de juego 
let gameSize = canvas.width * 0.625;
let sidebarSize = (canvas.width * 0.375) / 2;
// cuadricula para hacer interfaz
let sidebarSpacing = sidebarSize / 5;
let minoHeight = canvas.height / 20;

// linea izquierda del terreno de juego
context.beginPath();
context.moveTo(sidebarSize, 0);
context.lineTo(sidebarSize, canvas.height);

// linea derecha del terreno de juego
context.moveTo(gameSize + sidebarSize, 0);
context.lineTo(gameSize + sidebarSize, canvas.height);

// lineas verticales de la cuadricula de la barra de la izquierda
for (let i = 1; i < 5; i++) {
	context.moveTo(sidebarSpacing * i, 0);
	context.lineTo(sidebarSpacing * i, canvas.height);	
}

// lineas horizontales de la cuadricula
for (let i = 1; i < 20; i++) {
	context.moveTo(0, minoHeight * i);
	context.lineTo(canvas.width, minoHeight * i);
}

// dibujar la linea
context.stroke();