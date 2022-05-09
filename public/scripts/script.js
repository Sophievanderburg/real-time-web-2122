let socket = io()

const nameSection = document.querySelector(".index")
const nameForm = document.querySelector("section > form")
let input = document.querySelector('#name')


const quizSection = document.querySelector(".quiz")
const questionForms = document.querySelectorAll(".form")

let goodAnswers
let amountGoodAnswers

const rankingSection = document.querySelector(".ranking")
const rankingList = document.querySelector(".ranking > ol")
const counter = document.querySelector(".ranking > p span")

let names = document.querySelector('header ul')

// Name form
nameForm.addEventListener('submit', event => {
  event.preventDefault()
  if (input.value) {
    socket.emit('name', input.value)
    input.value = ''
    nameSection.classList.add("onzichtbaar")
    quizSection.classList.remove("onzichtbaar")
  }
})

socket.on('name', name => {
  names.appendChild(Object.assign(document.createElement('li'), { textContent: name }))
  rankingList.insertAdjacentHTML('afterbegin', 
  `<li> 
      <p>${name}</p>
      <p><span></span>/10</p>
  </li>`)
})

socket.on('ranking', amount => {
  let result = document.querySelector(".ranking ol li p:last-of-type span")

  let rank = amount
  result.innerHTML= `${rank}`
})









function disableForm(){
  questionForms.forEach((form)=>{
    form.addEventListener('change', event => {
      form.style.setProperty('pointer-events', 'none')
    })
  })
}
disableForm()

// questionform
function countGoodAnswers(){
  goodAnswers = document.querySelectorAll('input[type="radio"].true:checked')
  amountGoodAnswers = goodAnswers.length
  counter.innerHTML = amountGoodAnswers
}

function toRanking (){
  let checkedInputs = document.querySelectorAll('input[type="radio"]:checked')
  let checkennn = checkedInputs.length
  if( checkennn > 9){
    socket.emit('ranking', amountGoodAnswers)
    quizSection.classList.add('onzichtbaar')
    rankingSection.classList.remove('onzichtbaar')
  }
}

/* ---------------------------------------------------------------------------------------------------- */
function ignoreSubmit (){
  questionForms.forEach((form)=>{
    form.addEventListener('submit', event => {
      event.preventDefault()
    })
    form.addEventListener('change', countGoodAnswers)
    form.addEventListener('change', toRanking)
  })
}
ignoreSubmit()

// randomize order of possible answers 
const options = document.querySelectorAll(".quiz ol li form > div")

function randomizeAnswers(){
  options.forEach((answers)=>{
    for (var i = answers.children.length; i >= 0; i--) {
      answers.appendChild(answers.children[Math.random() * i | 0]);
    }
  })
}
randomizeAnswers()
