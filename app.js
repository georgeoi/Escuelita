//variables
const formulario = document.querySelector("#agregar-gasto");
const gastoListado= document.querySelector("#gastos ul")
let presupuesto;

//clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos= [];
    }
}

class UI{
    insertarPresupuesto(valor){
        const {presupuesto , restante}= valor;
        document.querySelector("#total").textContent= presupuesto;
        document.querySelector("#restante").textContent= restante;
    }
}
const ui = new UI();

//eventos
eventListeners()
function eventListeners(){
    document.addEventListener("DOMContentLoaded", preguntarPresupuesto)
}

//funciones
function preguntarPresupuesto(){
    const presupuestoUsuario= prompt("cual es tu presupuesto?");
    // console.log(parseFloat(presupuestoUsuario));

    if(presupuestoUsuario==="" || presupuestoUsuario=== null || isNaN(presupuestoUsuario)|| presupuestoUsuario <= 0){
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);
    ui.insertarPresupuesto(presupuesto);
}