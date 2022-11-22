const container = document.getElementById('slideContainer')
const stack = document.getElementById('stack')

function slide() {
  function slideStart() {
    if (stack.getBoundingClientRect().top < window.innerHeight * 0.8) {
      if (window.innerWidth > 500) {
        container.style.transform = `translateX(${(- container.scrollWidth) + (window.innerWidth)}px)`
        container.style.transition = '40s'
        
        setTimeout(() => {
          container.style.transform = `translateX(${0}px)`
          container.style.transition = '40s'
        }, 41000)
      }

      window.removeEventListener('scroll', slideStart)
    }
  }
  
  window.addEventListener('scroll', slideStart)
}

export default slide;