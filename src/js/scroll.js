const navList = document.querySelectorAll('.navList li a')

function scroll() {
  navList.forEach((a) => {
    a.addEventListener('click', function(e) {

      const sectionHeight = document.getElementById(e.target.className.replace('Link', ''))

      window.scrollTo({
        top: (sectionHeight.offsetTop - 100), behavior: 'smooth' 
      })
    })
  })
}

export default scroll;