let socket = io()

const nameSection = document.querySelector(".index")
const quizSection = document.querySelector(".quiz")

const nameForm = document.querySelector("section > form")
let input = document.querySelector('#name')

const questionForms = document.querySelectorAll(".form")

let names = document.querySelector('header ul')


// Name form
nameForm.addEventListener('submit', event => {
  event.preventDefault()
  if (input.value) {
    socket.emit('message', input.value)
    input.value = ''
    nameSection.classList.add("onzichtbaar")
    quizSection.classList.remove("onzichtbaar")
  }
})

socket.on('message', name => {
  names.appendChild(Object.assign(document.createElement('li'), { textContent: name }))
  names.scrollTop = names.scrollHeight
})

// questionform
function ignoreSubmit (){
  questionForms.forEach((form)=>{
    form.addEventListener('submit', event => {
      event.preventDefault()
    })
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


