function mensagemGabriel () {
    const promiseMensagemGabriel = new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('Bebam água!!');
        resolve();
        }, 0);
    });
}

function mensagemRafael (){
    console.log('Bora para cima!!!')
}
mensagemGabriel().then(mensagemRafael);
//mensagemRafael();
