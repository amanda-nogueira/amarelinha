let card = ['↖️', '↗️', '↙️', '↘️', '🚫'];

function sortear(){    
    let sup1 = card[Math.floor(Math.random() * 5)]
    let cor;
    let cartaCor;

    if(sup1 === `↖️`){
        cor = "#FF0000"; // Cor do texto (vermelho)
        cartaCor = "#eb190a"; // Cor da carta (vermelho claro)
    }else if (sup1 === `↗️`){
        cor = "#0000FF"; // Cor do texto (azul)
        cartaCor = "#87ceeb"; // Cor da carta (azul claro)
    }else if (sup1 === `↙️`){
        cor = '#008000'; // Cor do texto (verde)
        cartaCor = '#CCFFCC'; // Cor da carta (verde claro)
    }else if (sup1 === `↘️`){
        cor = '#FFFF00'; // Cor do texto (amarelo)
        cartaCor = '#FFFFCC'; // Cor da carta (amarelo claro)
    }else if (sup1 === `🚫`){
        cor = '#000'; // Cor do texto (preto)
        cartaCor = '#FFF'; // Cor da carta (branco)
    }

    // Altera o conteúdo dos cantos e centro
    document.getElementById('supEsq').innerHTML = `<div style="color:${cor}">${sup1}</div>`;
    document.getElementById('infDir').innerHTML = `<div style="color:${cor}">${sup1}</div>`;
    
    let cc = document.getElementById('centro');
    if(sup1 === '↖️'){
        cc.innerHTML = `<img src="img/maoEsq.png" alt="Mão esquerda">`;
    }else if(sup1 === '↗️'){
        cc.innerHTML = `<img src="img/maoDir.png" alt="Mão direita">`;
    }else if(sup1 === '↙️'){
        cc.innerHTML = `<img src="img/peEsq.png" alt="Pé esquerdo">`;
    }else if(sup1 === '↘️'){
        cc.innerHTML = `<img src="img/peDir.png" alt="Pé direito">`;
    }else if(sup1 === '🚫'){
        cc.innerHTML = `<img src="img/bloqueio.png" alt="Bloqueio">`;
    }

    document.querySelector('.carta').style.backgroundColor = cartaCor;
}
