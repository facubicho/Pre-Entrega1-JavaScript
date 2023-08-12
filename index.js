let cantidadAprobados = 0;
let cantidadReprobados = 0;
let flag = false;
let promedio = 0;
let cargado = 0;

do {
    let seleccion = parseInt(prompt("Ingrese opción \n 1-Cargar Datos \n 2-Promedio \n 3-Salir"));

    switch (seleccion) {
        case 1:
            if (cargado == 0) {
                promedio = cargarDatos(cantidadAprobados, cantidadReprobados);
                cargado++;
            } else {

                let limpia;
                do {
                    limpia = prompt("Existen datos cargados, desea limpiar? (S/N)").toUpperCase();
                } while (limpia !== "S" && limpia !== "N");

                if (limpia === "S") {
                    cargado = 0;
                    promedio = 0;
                    alert("Se limpiaron datos!");
                }
            }
            break;

        case 2:
            alert("Promedio Notas : " + promedio);
            break;

        case 3:
            alert("¡Adiós!");
            flag = true;
            break;

        default:
            alert("Ingrese un valor válido");
            break;
    }
} while (!flag);




function cargarDatos(cantidadAprobados, cantidadReprobados) {
    let flag = true;
    let i = 0;
    let total = 0;
    let promedio = 0;

    do {
        i++;
        let nota;

        do {
            nota = Number(prompt("Ingrese nota n° " + i));
        } while (isNaN(nota) || nota < 1 || nota > 10);

        if (nota >= 6) {
            cantidadAprobados++;
        } else {
            cantidadReprobados++;
        }

        total = total + nota;

        let seguirCarga;
        do {
            seguirCarga = prompt("Seguir cargando datos? (S/N)").toUpperCase();
        } while (seguirCarga !== "S" && seguirCarga !== "N");

        if (seguirCarga === "N") {
            promedio = total / i;
            flag = false;
        }

    } while (flag);

    alert("Cantidad total de alumnos aprobados: " + cantidadAprobados);

    alert("Cantidad total de alumnos reprobados: " + cantidadReprobados);

    return promedio;
}




