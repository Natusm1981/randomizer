function randomizer(minNumber, maxNumber, precision){
    if(precision > 20 || precision < 0 )
        throw new Error("Precisão deve ser um número inteiro entre 0 e 20")


    try{
        return  ( minNumber + Math.random()*(maxNumber)).toFixed(precision)
    }
    catch(err){
        console.error('Algum parametro veio errado', err)

    }
}
    

export{
    randomizer
}