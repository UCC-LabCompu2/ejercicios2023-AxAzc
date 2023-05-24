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


function conversorUnidades(id, valor) {

    if (isNaN(valor)) {
        alert("Debe introducir un número");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_yarda.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
    } else if (id == "metro") {
        document.lasUnidades.unid_yarda.value = valor * 1.0936;
        document.lasUnidades.unid_pulgada.value = valor * 39.3701;
        document.lasUnidades.unid_pie.value = valor * 3.2808;

    } else if (id == "yarda") {
        document.lasUnidades.unid_metro.value = valor * 0.9144;
        document.lasUnidades.unid_pulgada.value = valor * 36;
        document.lasUnidades.unid_pie.value = valor * 3;

    } else if (id == "pulgada") {
        document.lasUnidades.unid_metro.value = valor * 0.0254;
        document.lasUnidades.unid_yarda.value = valor * 0.0278;
        document.lasUnidades.unid_pie.value = valor * 0.0833;

    } else if (id == "pie") {
        document.lasUnidades.unid_metro.value = valor * 0.3048;
        document.lasUnidades.unid_yarda.value = valor * 0.3333;
        document.lasUnidades.unid_pulgada.value = valor * 12;

    }

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