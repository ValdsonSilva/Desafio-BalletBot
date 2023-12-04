
let toggleState = false

// alterando estado do menu hamburguer
function handleToggle() {
    toggleState = !toggleState;
    const menu = document.querySelector('.menu-toggle')
    const navegacao = document.querySelector('.navegacao-cabecalho')

    if (toggleState){
        menu.classList.add('open')
        navegacao.classList.add('open')
        
    } else {
        menu.classList.remove('open')
        navegacao.classList.remove('open')
    }
}
