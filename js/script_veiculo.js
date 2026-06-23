import { calculaSeguro } from "./script_calculo.js"
import { calculaIpva } from "./script_calculo.js"

const veiculos = []

const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

formDados.addEventListener('submit', (evt) =>{

    evt.preventDefault()

    const form_num = new FormData(formDados)

    const veiculo = {
        marca: form_num.get('marca'),
        modelo: form_num.get('modelo'),
        placa: form_num.get('placa'),
        ano: form_num.get('ano'),
        valor: form_num.get('valor'),
        combustivel: form_num.get('combustivel')
    }

    addVeiculo(veiculo)
    listVeiculo()
})


const addVeiculo = (objVeiculo) => {
    veiculos.push(objVeiculo)
}


const listVeiculo = () => {
    

    divResultado.innerHTML = ""

    veiculos.forEach((elem, i) =>{
        const seguro = calculaSeguro(elem)
        const ipva = calculaIpva(elem)
        /*var combustivel
        if(elem.combustivel = 1){
            combustivel = "gasolina"
        }else if(elem.combustivel = 2){
            combustivel = "etanol"
        }else if(elem.combustivel = 3){
            combustivel = "biocombustíveis"
        }else if(elem.combustivel = 4){
            combustivel = "híbrido"
        }else{
            combustivel = "elétrico"
        }*/
        divResultado.innerHTML += `<div class='item-veiculo'>${i + 1} - Marca: ${elem.marca}, Modelo: ${elem.modelo}, Placa: ${elem.placa}, Ano: ${elem.ano}, Valor: ${elem.valor}, ${elem.combustivel}, Valor do seguro: ${seguro}, Valor do ipva: ${ipva} </div>`
    })
}