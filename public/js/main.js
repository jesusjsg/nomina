import { getDatatable } from "./components/datatable.js";
import { autocompleteCliente, autocompleteConductor, autocompleteMunicipio, autocompletePlaca } from "./components/autocomplete.js";
import { AJAX_TABLES, AJAX_AUTOCOMPLETE } from "./apiAjax.js";
import { alertHandler ,alertSimple } from "./alertMessages.js";
import { getWeekends } from "./weekends.js";
import { Row } from "./components/Row.js";

const forms = document.querySelectorAll('.form-ajax')

// table elements
const tableViaje = document.querySelector('#table-viaje')
const tableConductor = document.querySelector('#table-conductor')
const tableUsuario = document.querySelector('#table-usuario')
const tableGeneral = document.querySelector('#table-general')
const tableVehiculo = document.querySelector('#table-vehiculo')
const tableRuta = document.querySelector('#table-ruta')

// autocomplete municipio elements
const origen = document.querySelector('#origen')
const origenCode = document.querySelector('#codigo-origen')
const destino = document.querySelector('#destino')
const destinoCode = document.querySelector('#codigo-destino')

//autocomplete conductor elements
const conductor = document.querySelector('#nombre-conductor')
const conductorCode = document.querySelector('#ficha-conductor')
const vehiculo = document.querySelector('#placa-vehiculo')

// autocomplete cliente elements
const cliente = document.querySelector('#cliente')
const clienteCode = document.querySelector('#codigo-cliente')

//date elements
const startDate = document.querySelector('#fecha-inicio')
const endDate = document.querySelector('#fecha-cierre')
const countSaturdays = document.querySelector('#cantidad-sabados')
const countSundays = document.querySelector('#cantidad-domingos')

// movements elements
const movementsButton = document.querySelector('#add-row')
const rowsContainer = document.querySelector('#add-movements')
let numberMovements = 1
let listLength = 1



function main(){
    alertHandler(forms) // handle alert messages
    renderTables()
    renderAutocomplete()

    startDate?.addEventListener('change', calculateWeekends)
    endDate?.addEventListener('change', calculateWeekends)
    movementsButton?.addEventListener('click', renderRows)
}

function renderTables(){ // render all tables
    initConductorTable()
    initUsuarioTable()
    initGeneralTable()
    initVehiculoTable()
    initRutaTable()
    initViajeTable()
}

function renderAutocomplete(){

    autocompletePlaca(vehiculo, AJAX_AUTOCOMPLETE.placaVehiculo)
    autocompleteConductor(conductor, AJAX_AUTOCOMPLETE.conductor, conductorCode, vehiculo)

    autocompleteMunicipio({
        inputName: origen,
        ajaxUrl: AJAX_AUTOCOMPLETE.municipio,
        hiddenInput: origenCode,
    })

    autocompleteMunicipio({
        inputName: destino,
        ajaxUrl: AJAX_AUTOCOMPLETE.municipio,
        hiddenInput: destinoCode,
    })

    autocompleteCliente({
        inputName: cliente,
        ajaxUrl: AJAX_AUTOCOMPLETE.cliente,
        hiddenInput: clienteCode,
    })
}

function renderRows(){
    const newRow = Row(listLength++, numberMovements++)
    rowsContainer.insertAdjacentHTML('beforeend', newRow)

    const deleteRowButton = document.querySelector(`#delete-row-${numberMovements - 1}`)
    deleteRowButton?.addEventListener('click', deleteRow)
}

function deleteRow(event){
    const row = event.target.closest('.movements')
    row.remove()
    updateRow()
    listLength--
}

function updateRow(){
    const rows = document.querySelectorAll('.movements .row')
    rows.forEach((row, index) => {
        const badgeCount = row.querySelector('.badge')
        badgeCount.textContent = `N° ${index + 1}`
    })
}

function calculateWeekends(){
    const start = dayjs(startDate.value)
    const end = dayjs(endDate.value)

    if(start & end){
        if(start.isBefore(end) || start.isSame(end)){
            const weekends = getWeekends({
                startDate: start,
                endDate: end,
            })

            const totalSaturdays = weekends.filter(date => dayjs(date).day() === 6).length

            const totalSundays = weekends.filter(date => dayjs(date).day() === 0).length

            countSaturdays.value = totalSaturdays
            countSundays.value = totalSundays
        }else{
            const alertInfo = {
                type: 'simple',
                icon: 'error',
                title: 'Ocurrió un error',
                text: 'La fecha de inicio debe ser anterior a la fecha de cierre.'
            }
            alertSimple(alertInfo)
        }
    }
}

function initConductorTable(){
    getDatatable(tableConductor, AJAX_TABLES.conductor, [ // conductor table
        {'data': 'id_conductor'},
        {'data': 'nombre_conductor'},
        {'data': 'cedula_conductor'},
        {'data': 'telefono_conductor'},
        {'data': 'id_vehiculo'},
        {'data': 'tipo_nomina'},
        {'data': 'opciones', 'className': 'dt-center'}
    ])
}

function initUsuarioTable(){
    getDatatable(tableUsuario, AJAX_TABLES.usuario, [ // usuario table
        {'data': 'nombre_apellido'},
        {'data': 'nombre_usuario'},
        {'data': 'nombre_rol', 'className':'dt-center'},
        {'data': 'opciones', 'className':'dt-center'},
    ])
}

function initGeneralTable(){
    getDatatable(tableGeneral, AJAX_TABLES.general, [ // general table
        {'data': 'id_registro'},
        {'data': 'id_entidad'},
        {'data': 'descripcion1'},
        {'data': 'descripcion2'},
        {'data': 'descripcion3'},
        {'data': 'valor', 'className':'dt-right'},
        {'data': 'opciones', 'className':'dt-center'}
    ])
}

function initVehiculoTable(){
    getDatatable(tableVehiculo, AJAX_TABLES.vehiculo, [ // vehiculo table
        {'data': 'id_vehiculo'},
        {'data': 'tipo_vehiculo'},
        {'data': 'propiedad'},
        {'data': 'marca'},
        {'data': 'uso'},
        {'data': 'estatus_vehiculo', 'className': 'dt-center'},
        {'data': 'opciones', 'className': 'dt-center'}
    ])
}

function initRutaTable(){
    getDatatable(tableRuta, AJAX_TABLES.ruta, [ // ruta table
        {'data': 'id_ruta'},
        {'data': 'nombre_ruta'},
        {'data': 'origen'},
        {'data': 'destino'},
        {'data': 'kilometros'},
        {'data': 'opciones', 'className': 'dt-center'}
    ])
}

function initViajeTable(){
    getDatatable(tableViaje, AJAX_TABLES.viaje, [
        {'data': 'id_conductor'},
        {'data': 'id_vehiculo'},
        {'data': 'id_tipo_operacion'},
        {'data': 'id_tipo_carga'},
        {'data': 'aviso'},
        {'data': 'id_cliente'},
        {'data': 'nombre_ruta'},
        {'data': 'fecha_inicio'},
        {'data': 'fecha_cierre'},
        {'data': 'sabados'},
        {'data': 'domingos'},
        {'data': 'feriados'},
        {'data': 'monto_usd'},
        {'data': 'monto_ves'},
        {'data': 'total_kilometros'},
        {'data': 'opciones', 'className': 'dt-center'}
    ])
}

document.addEventListener('DOMContentLoaded', main)