const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

//Eventos de los elementos arrastrables
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

//Eventos de los contenedores
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

//Funciones de los elementos arrastrables
function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className += ' fill'
}



//Funciones de los contenedores
function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}