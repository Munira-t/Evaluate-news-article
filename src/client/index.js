/* import js files */
import isURL from './js/validateURL.js'
import handleSubmit from './js/submitHandler.js'

/* import scss files */
import './styles/style.scss'

/* import image file */
import '../../images/img1.svg'



/* Fires when the initial HTML document has been completely loaded and parsed. */
window.addEventListener('DOMContentLoaded', () => {
  /* Get the form element by its id and asign it to a constant called form. */
  const form = document.getElementById('url-input-form')

  /* Add event listener to 'form' when user click submit. */
  form.addEventListener('submit', (e) => {
    /* Prevent the default action. */
    e.preventDefault()

    /* Call handleSubmit() function. */
    handleSubmit()
  })
})

export {
  isURL,
  handleSubmit
}