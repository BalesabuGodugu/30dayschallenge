const formElement = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const firstname = formElement['firstname'].value
  const lastname = formElement['lastname'].value
  const email = formElement['email'].value
  const password = formElement['password'].value
  console.log(firstname)
  if (firstname === '') {
    formElement['firstname'].parentElement.classList.add('error')
  } else {
    formElement['firstname'].parentElement.classList.remove('error')
  }
  if (lastname === '') {
    formElement['lastname'].parentElement.classList.add('error')
  } else {
    formElement['lastname'].parentElement.classList.remove('error')
  }
  if (email === '') {
    formElement['email'].parentElement.classList.add('error')
  } else {
    formElement['email'].parentElement.classList.remove('error')
  }
  if (password === '') {
    formElement['password'].parentElement.classList.add('error')
  } else {
    formElement['password'].parentElement.classList.remove('error')
  }
})
