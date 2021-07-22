/* 
  ✽ Transformar notas escolares (SISTEMA DE NOTAS ESCOLARES) ✽

  Crie um algoritmo que transforme as notas do sistema numérico para o sistema de notas em caracteres tipo A B C

  * de 90 para cima - A
  * entre 80 - 89   - B
  * entre 70 - 79   - C
  * entre 60 - 69   - D
  * menor que 60    - E

 
  function getNote(note) {
    let noteA = note >= 90
    let noteB = note <= 89 && note >= 80
    let noteC = note <= 79 && note >= 70
    let noteD = note <= 69 && note >= 60
    let noteF = note < 60 && note >= 0
    
    let noteFinal;
    
    if(noteA){
      noteFinal = 'Nota A'
    } else if(noteB){
      noteFinal = 'Nota B'
    }else if(noteC){
      noteFinal = 'Nota C'
    }else if(noteD){
      noteFinal = 'Nota D'
    }else if(noteF){
      noteFinal = 'Nota F'
    }else {
      noteFinal = 'Nota Inválida!'
    }
    
    return noteFinal
  }
  
  console.log(getNote(90))
  console.log(getNote(-20))
  console.log(getNote(81))
  console.log(getNote(61))
  console.log(getNote(60))
  console.log(getNote(72))
  console.log(getNote(89))
  console.log(getNote(45))
  console.log(getNote(73))
 */

/*  
  ✽ Sistema de Gastos Familiar
  Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
      * receitas: []
      * despesas: []
  Agora, crie um função que irá calcular o total de receitas e despesas e irá monstrar uma mensagem se a família está com saldo positivo ou negativo, seguindo o valor do saldo.


let family = {
  recipes: [890.60, 3500.59, 800.00],
  expenses: [100.00, 4010.00, 600.00, 287.90, 60.00, 377.00]
}

function sum(array) {
  let total = 0;

  for (let value of array) {
    total += value
  }

  return total
}

function controlFamily() {
  const totalRecipes = sum(family.recipes)
  const totalExpenses = sum(family.expenses)

  const resultEnd = totalRecipes - totalExpenses
  const buyer = resultEnd >= 0

  let messege = "Negativo"


  if(buyer) {
    messege = "Positivo"
  }

  console.log(`O seu saldo é ${messege}, o valor atual é: R$${resultEnd.toFixed(2)}`)
}

controlFamily()
 */

/* 
  ✽ Celsius em fahrenheit ✽

  Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação em uma unidade para outra:

  C = (F - 32) * 5/9

  F = C * 9/5 + 32



function convertDegrees(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  if(!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado!')
  }

  let upDatedDegree = Number(degree.toUpperCase().replace("F", ""))
  let calcute = fahrenheit => (fahrenheit - 32) * 5/9
  let degreeSign = 'C'

  if(celsiusExists) {
    upDatedDegree = Number(degree.toUpperCase().replace("C", ""))
    calcute = celsius => celsius * 9/5 + 32
    degreeSign = 'F'
  }

  return calcute(upDatedDegree) + degreeSign
}

try {
  console.log(convertDegrees('50F'))
  console.log(convertDegrees('10C'))
  convertDegrees('50Z')
} catch (error) {
  console.log(error.message)
}
*/

/* 
  ✽ Buscando e contando dados em Array ✽

  Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios:

    ✾ Contar o número de categorias e o núremo de livros em cada categria;
    ✾ Contar o número de autores;
    ✾ Mostrar livros do autor Augusto Cury;
    ✾ Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor;
*/

const bookByCategory = [
  {
    category: "Riqueza",
    books:[
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, Pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books:[
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansidade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altemente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  }
]

//const categoryOne = bookByCategory[0].category
//const countBooksOne = bookByCategory[0].books.length
//const categorySecond = bookByCategory[0].category
//const countBooksSecond = bookByCategory[1].books.length
//const booksAugustoOne = bookByCategory[1].books[0].title
//const booksAugustoSecond = bookByCategory[1].books[1].title


//console.log(`A categoria ${categoryOne} tem:
//${countBooksOne} livros.`)
//console.log(`A categoria ${categorySecond} tem:
//${countBooksSecond} livros.`)
//console.log(`O autor Augusto Cury possui os //seguintes titulos: ${booksAugustoOne} e $//{booksAugustoSecond}.`)

const countCategory = bookByCategory.length;
console.log("Temos de categorias:", countCategory)

for (let category of bookByCategory) {
  console.log(`Total de livros da categoria: ${category.category} é`, category.books.length)
}

function countAuthors() {
  let authors = [];

  for (let category of bookByCategory) {
    for (let book of category.books) {
      if(authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }

  console.log("Total de autores:", authors.length)
}

countAuthors()

function bookOfAuthors(author) {
  let books = [];

  for (let category of bookByCategory) {
    for (let book of category.books) {
      if(book.author === author) {
        books.push(book.title)
      }
    }
  }

  console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

bookOfAuthors('Augusto Cury')