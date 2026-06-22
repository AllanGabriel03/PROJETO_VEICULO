const calculaSeguro = (objVeiculo) => {
    let valorSeguro = ''

    valorSeguro = objVeiculo.preco * 1.1

    return valorSeguro

    console.log(valorSeguro)
}

const calculaIpva = (objVeiculo) => {
    let valorIpva = ''

    if(objVeiculo.ano > 20){
        valorIpva = 'isento'
    }else if(objVeiculo.combustivel == 1){
        valorIpva = objVeiculo.preco * 1.2
    }else if(objVeiculo.combustivel == 2){
        valorIpva = objVeiculo.preco * 1.15
    }else if(objVeiculo.combustivel == 3){
        valorIpva = objVeiculo.preco * 1.1
    }else if(objVeiculo.combustivel == 4){
        valorIpva = objVeiculo.preco * 1.08
    }else{
        valorIpva = objVeiculo.preco * 1.02
    }

    return valorIpva

    console.log(valorIpva)
}

export {calculaIpva, calculaSeguro}