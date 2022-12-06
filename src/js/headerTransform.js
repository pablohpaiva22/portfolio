const header = document.querySelector('.header')

function headerTransform() {
  function handleScroll() {
    if (this.scrollY != 0) {
      header.classList.add('headerTransform')
    } else {
      header.classList.remove('headerTransform')
    }
  }

  window.addEventListener('scroll', handleScroll)
  
}

export default headerTransform;