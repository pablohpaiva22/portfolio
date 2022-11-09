const HamburguerButton = document.querySelector('.hamburguerButtonContainer')
const navList = document.querySelector('.navList')
const xButton = document.querySelector('.xButton')

export function hamburguerButtonOpen() {
  function handleClick() {
    navList.classList.add('active')
    xButton.classList.add('active')
  }

  HamburguerButton.addEventListener('click', handleClick)
}

export function hamburguerButtonClose() {
  function handleClick() {
    navList.classList.remove('active')
    xButton.classList.remove('active')
  }

  xButton.addEventListener('click', handleClick)
}
