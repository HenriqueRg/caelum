;(function(){
    const btns = document.querySelectorAll('.opcoesDoCartao-remove')
    

    for(let i=0 ; i < btns.length; i++){
        btns[i].addEventListener('click', function(){
            const cartao = btns[i].parentNode.parentNode
            cartao.classList.add("cartao--some")
            cartao.addEventListener('transitionend', function(){
                cartao.remove()
            })
        })
        
    }
    const cartoes = document.querySelectorAll(".cartao")

    for(let j = 0; j < cartoes.length; j++){
        const cartao = cartoes[j]

        cartao.addEventListener("change", function mudaCor(event){
            const elementoSelecionado = event.target
            const isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo')
            if(isRadioTipo) {
                cartao.style.backgroundColor = elementoSelecionado.value
            }
        })
        cartao.addEventListener("focusin",()=> {
            cartao.classList.add("cartao--focado")
        })
        cartao.addEventListener("focusout", ()=> {
            cartao.classList.remove("cartao--focado")
        })
        
        
    }
    
})()
