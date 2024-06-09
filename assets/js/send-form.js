const scriptURL = 'https://script.google.com/macros/s/AKfycbxuW8CftiLKk74spHaU_1eBMFg9yF6Uq_l0R5Qq2pCtFvCCaa5w-LTGD58trPKYWzTCkg/exec'
  const form = document.forms['contact-form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    document.getElementById('form-sending-message').style.display = 'block';
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        alert('Спасибо! Форма ваша заявка принята', response)
        form.reset()
        document.getElementById('form-sending-message').style.display = 'none';
        })
      .catch(error => alert('Ошибка! Пожалуйста, повторите попытку позже', error.message))
  })