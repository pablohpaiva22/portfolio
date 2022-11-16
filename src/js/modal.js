const HamburguerButton = document.querySelector('.hamburguerButtonContainer')
const navList = document.querySelector('.navList')
const xButton = document.querySelector('.xButton')
const navListItem = document.querySelectorAll('.navList li')

export function modalOpen() {
  function handleClick() {
    navList.classList.add('active')
    xButton.classList.add('active')
  }

  HamburguerButton.addEventListener('click', handleClick)
}

export function modalClose() {
  function handleCloseButtonClick() {
    navList.classList.remove('active')
    xButton.classList.remove('active')
  }

  function handleNavListItemClick() {
    navList.classList.remove('active')
    xButton.classList.remove('active')
  }

  navListItem.forEach((item) => {
    item.addEventListener('click', handleNavListItemClick)
  })
  xButton.addEventListener('click', handleCloseButtonClick)
}
