const calculaSeguro = (objVeiculo) => {
    let valorSeguro = ''

    valorSeguro = objVeiculo.valor * 0.1

    return valorSeguro

    
}

const calculaIpva = (objVeiculo) => {
    let valorIpva = ''
    let anodoVeiculo = 2026 - objVeiculo.ano

    if(anodoVeiculo > 20){
        valorIpva = 'isento'
    }else if(objVeiculo.combustivel == 1){
        valorIpva = objVeiculo.valor * 0.2
    }else if(objVeiculo.combustivel == 2){
        valorIpva = objVeiculo.valor * 0.15
    }else if(objVeiculo.combustivel == 3){
        valorIpva = objVeiculo.valor * 0.1
    }else if(objVeiculo.combustivel == 4){
        valorIpva = objVeiculo.valor * 0.08
    }else{
        valorIpva = objVeiculo.valor * 0.02
    }

    return valorIpva

    
}

export {calculaIpva, calculaSeguro}