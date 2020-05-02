/* validation of form*/

window.addEventListener('load', function() {
  const form = document.getElementById('form')
  const username = document.getElementById('username')
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const password2 = document.getElementById('password2')

  form.addEventListener('click', (e) => {
    e.preventDefault()
    checkInputs()
  })
})

function checkInputs() {
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const password2Value = password2.value.trim()
  if (usernameValue === '') {
    setError(username, 'user cannot be blank')
  } else {
    setSuccess(username)
  }
  if (passwordValue === '') {
    setError(password, 'password cannot be blank')
  } else {
    setSuccess(password)
  }
  if (emailValue === '') {
    setError(email, 'email cannot be blank')
  } else {
    setSuccess(email)
  }
  if (password2Value === '' || password2Value !== passwordValue) {
    setError(password2, 'password2 cannot be blank')
  } else {
    setSuccess(password2)
  }
}

function setError(input, message) {
  const formControl = input.parentElement
  const small = document.querySelector('small')
  small.innerText = message
  formControl.className = 'form-control error'
}

function setSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}
