let socket = io()

const radioButton = document.querySelectorAll('input["type=radio"]')
const forms = document.querySelectorAll('form')

function ignoreSubmit (){
  forms.forEach((form)=>{
    form.addEventListener('submit', event => {
      event.preventDefault()

      //radioButton has class 'true'
      if( ){
        //reken het antwoord goed
      } else{
        //reken het antwoord goed
      }


    })
  })
}
ignoreSubmit()