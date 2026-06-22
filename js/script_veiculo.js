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
        divResultado.innerHTML += `<div class='item-veiculo'>${i + 1} - ${elem.marca} ${elem.modelo} ${elem.placa} ${elem.ano} ${elem.valor} ${elem.combustivel} </div>`
    })
}