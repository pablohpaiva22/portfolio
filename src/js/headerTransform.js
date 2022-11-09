const header = document.querySelector('.header')

function headerTransform() {
  function handleClick() {
    if (this.scrollY != 0) {
      header.classList.add('headerTransform')
    } else {
      header.classList.remove('headerTransform')
    }
  }

  window.addEventListener('scroll', handleClick)
  
}

export default headerTransform;