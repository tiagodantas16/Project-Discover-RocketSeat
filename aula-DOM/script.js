//  getElementById()

/* const elemnent = document.getElementById('blog-title')

console.log(elemnent) */

//  getElementsByClassName()

/* const elemnent = document.getElementsByClassName('one')

console.log(elemnent) */

//  getElementsByTagName()

/* const elemnent = document.getElementsByTagName('h1')

console.log(elemnent) */

//  querySelector()

/* const elemnent = document.querySelector('[src]')

console.log(elemnent) */

//  querySelectorAll()

/* const elemnent = document.querySelectorAll('.one')

console.log(elemnent) */


//  Manupulando conteudo
//  textContent

/* const elemnent = document.querySelector('h1')

elemnent.textContent = 'Olá Devs!'

console.log(elemnent.textContent) */

//  Manupulando conteudo
//  innerText

/* const element = document.querySelector('h1')

element.innerText = "Olá Dev!" */

//  Manupulando conteudo
//  innerHTML

/* const element = document.querySelector('h1')

element.innerHTML = "Olá Dev! <small>!!!</small>" */

//  Manupulando conteudo
//  value

/* const element = document.querySelector('input')

console.log(element.value)
element.value = "outro valor" */

//  Manupulando conteudo
//  Atributos

/* const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

header.setAttribute('class', 'bg')

console.log(headerID)

console.log(headerID.getAttribute('id'))
console.log(headerID.getAttribute('class'))
header.removeAttribute('id')
header.removeAttribute('class') */

//  Manupulando conteudo
//  Alterando estilos
/* 
const element = document.querySelector('body')

element.style.backgroundColor = "#A1f4D0"
console.log(element.style.backgroundColor)
 */

//  Alterando estilos
// classList

/* const element = document.querySelector('body')

element.classList.add('active', 'green')
console.log(element.classList)
element.classList.remove('active')
element.classList.toggle('active')
 */

// Navegando pelos elementos
// parentNode parentElement

/* const body = document.querySelector('body')

console.log(body.parentNode)
 */

// Criando e adcicionando elementos

// createElement
/* const div = document.createElement('div')
div.innerText = "Olá Devs!" */

// append prepend
/* const body = document.querySelector('body') */

// Add antes
/* body.prepend(div) */

// add depois
/* body.append(div) */

// Adicionando elementos
/* const div = document.createElement('div')
div.innerText = "Olá Devs!"
 */
// insertBefore
/* const body = document.querySelector('body') */
/* 
const script = body.querySelector('script')

body.insertBefore(div, script) */

// Eventos
/* function print() {
  console.log('print')
}
 */

/* const input = document.querySelector('input')

input.onkeydown = function() {
  console.log('rode1')
} */

