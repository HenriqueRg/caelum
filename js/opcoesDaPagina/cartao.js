
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
