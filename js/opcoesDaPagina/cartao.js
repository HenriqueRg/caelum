;(function(){
    const btn = document.querySelector('.opcoesDoCartao-remove')

    function removeCartao(){
        const cartao = btn.parentNode.parentNode
        cartao.classList.add('cartao--some')
        cartao.addEventListener("transitionend",function(){
            cartao.remove()
        })
    }
    btn.onclick = removeCartao
})()
