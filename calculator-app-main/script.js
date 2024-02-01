const numers = document.querySelectorAll('#numers')
const header = document.querySelector('.header')
const body = document.querySelector('body')
const tela = document.querySelector('.bg-tela')
const teclas = document.querySelectorAll('.tecla')
const containerTeclas = document.querySelector('.buttons-bg')
const thema = document.querySelector('.thema')
const btns = document.querySelector('.btns')
const calc = document.querySelector('.bg-calc');
const del = document.querySelector('.del');
const reset = document.querySelector('.reset');
const igual = document.querySelector('.igual');



function removerClasse(){
  body.className = '';
  tela.className = '';
  containerTeclas.className = ''
  thema.className = '';
  calc.className = '';


}



function mostrarTemaLigth(tema){
  if(tema === '1'){
    removerClasse()
    teclas.forEach(tecla => tecla.classList.remove('bg-ligth-4','bg-gray-4'))
    teclas.forEach(tecla => tecla.classList.add('bg-dark-3'))
    
    reset.classList.remove('bg-ligth-green','bg-gray')
    del.classList.remove( 'bg-ligth-green','bg-gray')
    igual.classList.remove('bg-ligth-orage','bg-gray-red')

    numers.forEach(numer =>  numer.classList.remove("color-ligth-1","color-gray-1"))
    numers.forEach(numer =>  numer.classList.add("color-dark-1"))
    
    calc.classList.add("color-dark-1")
    header.classList.add("color-dark-1")
    thema.classList.add('color-dark-1')
    tela.classList.add('bg-dark-2')
    body.classList.add('bg-dark-1')
    containerTeclas.classList.add('bg-dark-2')
    reset.classList.add('bg-dark-4')
    del.classList.add('bg-dark-4')
    igual.classList.add('bg-dark-green')
    
  }
  if(tema === '2'){
    removerClasse()
    // teclas.forEach(tecla => tecla.classList.remove('bg-gray-4','bg-tecla-ligth'))
    // teclas.forEach(tecla => tecla.classList.add('bg-ligth-1'))
    teclas.forEach(tecla => tecla.classList.add('bg-ligth-4'))
    
    reset.classList.remove('bg-dark-4','bg-gray')
    del.classList.remove('bg-dark-4','bg-gray')
    igual.classList.remove('bg-dark-green','bg-gray-red')

    calc.classList.add('color-ligth-1')
    
    numers.forEach(numer =>  numer.classList.remove("color-gray-1","color-dark-1"))
    numers.forEach(numer =>  numer.classList.add("color-ligth-1"))
   
    reset.classList.add('bg-ligth-green')
    del.classList.add('bg-ligth-green')
    igual.classList.add('bg-ligth-orage')

    header.classList.add("color-ligth-1")
    tela.classList.add("bg-ligth-2")
    thema.classList.add('color-ligth-1')
    body.classList.add("bg-ligth-1")
    containerTeclas.classList.add('bg-ligth-3')
  }
  if(tema === '3'){
    removerClasse()
    teclas.forEach(tecla => tecla.classList.remove('bg-dark-3'))
    teclas.forEach(tecla => tecla.classList.add('bg-gray-4'))
    header.classList.add("color-gray-1")
    
    reset.classList.remove('bg-ligth-green','bg-dark-4','bg-ligth-4')
    del.classList.remove( 'bg-ligth-green','bg-dark-4','bg-ligth-4')
    igual.classList.remove('bg-ligth-orage','bg-gray-red','bg-ligth-orage','bg-ligth-4')
    
    numers.forEach(numer =>  numer.classList.remove("color-dark-1","color-ligth-1"))
    numers.forEach(numer =>  numer.classList.add("color-gray-1"))

  
    calc.classList.add("color-gray-1")
    thema.classList.add("color-gray-1")
    btns.classList.add('bg-gray-2')
    tela.classList.add('bg-gray-2')
    body.classList.add("bg-gray-1")
    containerTeclas.classList.add('bg-gray-2')
    
    reset.classList.add('bg-gray')
    del.classList.add('bg-gray')
    igual.classList.add('bg-gray-red')
    
  }
}

numers.forEach(num => {
  num.addEventListener('click', () => {
    const tema = num.textContent
    
    mostrarTemaLigth(tema)
    
  })
})