document.addEventListener('DOMContentLoaded', function(e) {
  console.log('DOM fully loaded and parsed')

  const form = document.querySelector('.note-form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputTitle = document.getElementById('note-title').value

    console.log(inputTitle)
  })
})