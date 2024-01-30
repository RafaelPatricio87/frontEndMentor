const numers = document.querySelectorAll('#numers')
const header = document.querySelector('.header')
const body = document.querySelector('body')
const tela = document.querySelector('.bg-tela')
const teclas = document.querySelectorAll('.tecla')
const containerTeclas = document.querySelector('.buttons-bg')
const thema = document.querySelector('.thema')
const btns = document.querySelector('.btns')
const calc = document.querySelector('.bg-calc');



function removerClasse(){
  body.className = '';
  tela.className = '';
  containerTeclas.className = ''
  thema.className = '';
  calc.className = '';

}



function mostrarTemaLigth(tema){
  if(tema === 'um'){
    removerClasse()
    teclas.forEach(tecla => tecla.classList.remove('bg-gray-4','bg-tecla-ligth'))
    teclas.forEach(tecla => tecla.classList.add('bg-dark-3'))
    calc.classList.add("color-dark-1")
    
    header.classList.add("color-dark-1")
    thema.classList.add('color-dark-1')
    tela.classList.add('bg-dark-2')
    body.classList.add('bg-dark-1')
    containerTeclas.classList.add('bg-dark-2')
    
  }
  if(tema === 'dois'){
    removerClasse()
    teclas.forEach(tecla => tecla.classList.remove('bg-tecla-dark','bg-tecla-gray'))
    calc.classList.add('color-ligth-1')
   

    teclas.forEach(tecla => tecla.classList.add('bg-ligth-4'))
    header.classList.add("color-ligth-1")
    tela.classList.add("bg-ligth-2")
    thema.classList.add('color-ligth-1')
    body.classList.add("bg-ligth-1")
    containerTeclas.classList.add('bg-ligth-3')
  }
  if(tema === 'tres'){
    removerClasse()
    teclas.forEach(tecla => tecla.classList.remove('bg-tecla-dark','bg-tecla-ligth'))
    teclas.forEach(tecla => tecla.classList.add('bg-gray-4'))
    header.classList.add("color-gray-1")
   

    calc.classList.add("color-gray-1")
    thema.classList.add("color-gray-1")
    btns.classList.add('bg-gray-2')
    tela.classList.add('bg-gray-2')
    body.classList.add("bg-gray-1")
    containerTeclas.classList.add('bg-gray-2')

    
  }
}

numers.forEach(num => {
  num.addEventListener('click', () => {
    const tema = num.classList.value
    mostrarTemaLigth(tema)
    
  })
})