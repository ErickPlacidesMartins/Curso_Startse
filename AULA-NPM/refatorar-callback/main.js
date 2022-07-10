function mensagemGabriel (callback) {
    setTimeout(()=>{
        console.log('Bebam água!!');
        callback();
    }, 0);
}

function mensagemRafael (){
    console.log('Bora para cima!!!')
}
mensagemGabriel(mensagemRafael);
//mensagemRafael()