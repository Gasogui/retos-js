const body = document.body
const slides = document.querySelectorAll('.')
const leftBtn = document.getElementById('')
const rightBtn = document.getElementById('')

let activeSlide = 

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - ) {
    activeSlide = 
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < ) {
    activeSlide = slides.length - 
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[].style.backgroundImage
}

function setActiveSlide() {
  slides.(() => .classList.remove(''))

  [].classList.add('')
}