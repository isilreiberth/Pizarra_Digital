/////VARIABLES/////
var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
var botonlimpiar = document.getElementById("botonBorrar");

dibujarLinea("lime", x - 1, y - 1, x + 1, y + 1, papel);

/////EVENTOS/////
botonlimpiar.addEventListener("click", borrarLienzo);
document.addEventListener("mousedown", mousePresionado);
document.addEventListener("mouseup", mouseReposo);
document.addEventListener("mousemove", mouseMovimiento);
console.log(teclas);

var click = false;

/////FUNCIONES/////

function mousePresionado(evento) {
  console.log(evento);
  click = true;
}

function mouseReposo(evento) {
  console.log(evento);
  click = false;
}

function mouseMovimiento(dibujar) {
  var colorTrazo = document.getElementById("colorPincel").value;
  console.log(dibujar);
  if (click == true) {
    xi = dibujar.offsetX - 3;
    yi = dibujar.offsetY + 3;
    xf = dibujar.offsetX;
    yf = dibujar.offsetY;
    dibujarLinea(colorTrazo, xi, yi, xf, yf, papel);
  }
}

function borrarLienzo() {
  cuadrito.width = cuadrito.width;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  var colorTrazo = document.getElementById("colorFlechas").value;
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorTrazo, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorTrazo, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorTrazo, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorTrazo, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
  }
}

// /////FUNCIONES OTRA FORMA/////
// function mouseReposo(evento)
// {
//     estado = false;
// }

// function mousePresionado(evento)
// {
//     var colorTrazo = document.getElementById('colorPincel').value;
//     estado = true;
//     dibujarLinea(colorTrazo, evento.layerX-1, evento.layerY-1, evento.layerX+1, evento.layerY+1, papel);
// }

// function mueveMouse(evento)
// {
//     //var colorTrazo = document.getElementById('colorPincel').value;
//     if (evento.toElement.id == 'area_de_dibujo' && estado == true)
//     {
//        dibujarLinea(colorTrazo, xm, ym, evento.layerX, evento.layerY, papel);
//        xm = evento.layerX;
//        ym = evento.layerY;
//     }
// }

// function mouseMovimiento(evento)
// {
//     var colorTrazo = document.getElementById('colorPincel').value;
//     if (evento.toElement.id == 'area_de_dibujo' && estado == true)
//     {
//         dibujarLinea(colorTrazo, xm, ym, evento.layerX, evento.layerY, papel);
//         xm = evento.layerX;
//         ym = evento.layerY;
//     }
// }

//// Ejemplo Usando Casos  ////////

// function dibujarTeclado(evento)
// {
//     var colorcito = 'blue';
//     switch (evento.keyCode) {
//         case teclas.UP:
//             console.log('Vamos Pa Arriba');
//             break;
//         case teclas.DOWN:
//             console.log('Vamos Pa Abajo');
//             break;
//         case teclas.LEFT:
//             console.log('Vamos Pa Izquierda');
//             break;
//         case teclas.RIGHT:
//             console.log('Vamos Pa Derecha');
//             break;
//             default:
//             console.log('Otra Tecla');
//             break;
//     }

//////   EJEMPLO USANDO IF //////////////

// if(evento.keyCode == teclas.UP)
// {
//     console.log('Vamos Pa Arriba');
// }
// if(evento.keyCode == teclas.DOWN)
// {
//     console.log('Vamos Pa Abajo');
// }
// if(evento.keyCode == teclas.LEFT)
// {
//     console.log('Vamos Pa Izquierda');
// }
// if(evento.keyCode == teclas.RIGHT)
// {
//     console.log('Vamos Pa Derecha');
// }
