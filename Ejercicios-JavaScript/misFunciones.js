/**
 * Descripción
 * @method conversorUnidades
 * Realiza un conversor de unidades de longitud. El programa pedirá al usuario
 * una cantidad de metros y mostrará su equivalente en las otras unidades de
 * longitud (pulgadas, pies, yardas y millas).
 * @param {string} id - id del campo de texto que se ha modificado
 * @param {number} valor - valor del campo de texto que se ha modificado
 * @return Cambia los valores de los campos de texto de las unidades
 */


conversorUnidades = (id, valor) => {
    let met, pul, pie, yar;
    if (valor.includes(",")) {
        valor = valor.replace(",", ".")
    }
    if (isNaN(valor)) {
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    } else if (id === "metro") {
        met = valor;
        pul = valor * 39.37;
        pie = valor * 3.280;
        yar = valor * 1.093;
    } else if (id === "pulgada") {
        met = valor / 39.37;
        pul = valor;
        pie = valor * 0.083;
        yar = valor * 0.027;
    } else if (id === "pie") {
        met = valor / 3.280;
        pul = valor * 12;
        pie = valor;
        yar = valor * 0.333;
    } else if (id === "yarda") {
        met = valor / 1.093;
        pul = valor * 36;
        pie = valor * 3;
        yar = valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(met * 100) / 100;
    document.lasUnidades.unid_pulgada.value = Math.round(pul * 100) / 100;
    document.lasUnidades.unid_pie.value = Math.round(pie * 100) / 100;
    document.lasUnidades.unid_yarda.value = Math.round(yar * 100) / 100;
}

/**
 * Convierte los grados a radianes o viceversa
 * @method convertirGR
 * @param {string} id - id del campo de texto que se ha modificado
 * @return Cambia los valores de los campos de texto de las unidades
 */




function convertirGR(id) {
    if (id == "grados") {
        document.getElementById("radianes").value = document.getElementById("grados").value * (Math.PI / 180);
    } else if (id == "radianes") {
        document.getElementById("grados").value = document.getElementById("radianes").value * (180 / Math.PI);
    }

}


/**
 * Oculta o muestra el div de las unidades
 * @method mostrar_ocultar
 * @param {string} valor - valor del campo de texto que se ha modificado
 * @return Cambia los valores de los campos de texto de las unidades
 */


function mostrar_ocultar(valor) {

    if (valor == "val_mostrar") {
        document.getElementsByName("unDiv")[0].style.display = "block";
    } else if (valor == "val_ocultar") {
        document.getElementsByName("unDiv")[0].style.display = "none";
    }
}

/**
 * Calcula la suma de dos números
 * @method calcularSuma
 * @return Cambia el valor del campo de texto de la suma
 */
function calcularSuma() {
    var num1, num2;

    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
}

/**
 * Calcula la resta de dos números
 * @method calcularResta
 * @return Cambia el valor del campo de texto de la resta
 */
function calcuarResta() {
    var num1, num2;

    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = num1 - num2;
}

/**
 * Calcula la multiplicación de dos números
 * @method calcularMultiplicacion
 * @return Cambia el valor del campo de texto de la multiplicación
 */
function calcularMultiplicacion() {
    var num1, num2;

    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML = num1 * num2;
}

/**
 * Calcula la división de dos números
 * @method calcularDivision
 * @return Cambia el valor del campo de texto de la división
 * @throws {Error} Si el divisor es 0
 * @throws {Error} Si el divisor no es un número
 * @throws {Error} Si el dividendo no es un número
 */

function calcularDivision() {
    var num1, num2;


    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML = num1 / num2;
    if (isNaN(num1)) {
        throw new Error("El dividendo no es un número");
    }
    if (isNaN(num2)) {
        throw new Error("El divisor no es un número");
    }
    if (num2 === 0) {
        throw new Error("El divisor no puede ser 0");
    }
}

/**
 * Carga los datos para la segunda web
 * @method cargarWeb
 * @return Carga los datos para la segunda web
 */
function cargarWeb() {
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

/**
 * Devuelve los datos de la primera web
 * @method cargarResultado
 * @return Devuelve los datos de la primera web
 */

function cargarResultado() {
    var urlComp, cant, unidad;
    urlComp = window.location.href.split("/")[5];
    cant = urlComp.split("#")[1];
    unidad = urlComp.split("#")[2];

    document.getElementById("dist").value = cant + " " + unidad;

    console.log(urlComp);
}


function guardaEnLocal() {
    let distancia, unidades;
    distancia = document.getElementById("distancia").value;
    unidades = document.getElementsByName("unidades")[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidades);
    window.open("2_web.html");
}

function cargarDeLocal() {
    let distancia, unidades;
    distancia = localStorage.getItem("distanciaLS");
    unidades = localStorage.getItem("unidadesLS");
    document.getElementById("dist").value = distancia + " " + unidades;
}


function dibujarCircCua() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var xmax = canvas.width
    var ymax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0 + margen, ymax - margen - 40, 40, 40)

    ctx.arc(xmax / 2, ymax / 2, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}


var bandera;

function dibujar(e) {
    var canvas = document.getElementById("a_dibujar");
    var ctx = canvas.getContext("2d");

    var posx = e.clientX;
    var posy = e.clientY;
    console.log(posx, posy);

    canvas.onmousedown = function () {
        bandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };
    if (bandera) {
        ctx.fillRect(posx, posy, 5, 5);
        ctx.fill();
    }

}


function borrar() {
    var canvas = document.getElementById("a_dibujar");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function dibujarCuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    for (var i = 0; i < canvas.height; i += 20) {
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.strokeStyle = "grey";
        ctx.stroke();
    }
    ctx.closePath();

    ctx.beginPath();
    for (var i = 0; i < canvas.width; i += 20) {
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.strokeStyle = "grey";
        ctx.stroke();
    }
    ctx.closePath();

    //eje x
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.closePath();

    //eje y
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.closePath();


}


let closeDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.close();
}

let openDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}

let dibujarImagen = (posX, posY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    console.log(posX, posY);
    const img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;


    img.onload = function () {
        var width = this.naturalWidth;
        var height = this.naturalHeight;
        console.log(width, height);

        if (posY < 0 || posX < 0) {
            openDialog();
        } else if (canvas.width - width < posX || canvas.height - height < posY) {
            openDialog();
        } else {
            ctx.drawImage(img, posX, posY);
        }
    }
}