const form = document.querySelector(".form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const error = document.getElementById("formError");
const success = document.getElementById('success')
const button = document.querySelector('.form button')

function formSubmit() {
  async function handleSubmit(e) {
    e.preventDefault();
    error.classList.remove("active");

    if (
      name.value.length === 0 ||
      email.value.length === 0 ||
      message.value.length === 0
    ) {
      error.classList.add("active");
      return false;
    }

    try {
      button.setAttribute('disabled', true)
      button.classList.remove('btn')
      button.innerText = 'Enviando...'
      const response = await fetch("http://ec2-18-231-170-180.sa-east-1.compute.amazonaws.com:3333/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error()
    } catch(err) {
      console.log('deu erro')
    } finally {
      success.classList.add('active')
      button.innerText = 'Enviado'
    }
  }

  form.addEventListener("submit", handleSubmit);
}

export default formSubmit;
