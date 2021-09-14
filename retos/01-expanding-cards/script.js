
// ¿Cuál es la opción que sirve?

const panels = document.querySelectorAll('.panel')
//const panels = document.querySelector('.panel')
//const panels = document.getElementById('panel')
//const panels = document.getElementsByClassName('.panel')



// On click event for each section 
panels.forEach((panel) => {
    //console.log(panel)
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')

    })
}



