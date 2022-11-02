// console.log('hello world')

let message = document.querySelector('#message')



function addMovie (event) {
    event.preventDefault()
let inputField = document.querySelector('input')
let movie = document.createElement('li')
let movieTitle = document.createElement('span')
movieTitle.textContent = inputField.value
movieTitle.addEventListener('click', crossOffMoive)
movie.appendChild(movieTitle)
let deleteBtn = document.createElement('button')
deleteBtn.textContent = 'X'
deleteBtn.addEventListener('click', deleteMoive)
movie.appendChild(deleteBtn)
document.querySelector('ul').appendChild(movie)
inputField.value = ""
}
document.querySelector('form').addEventListener('submit', addMovie)

function deleteMoive (event) {
event.target.parentNode.remove()
message.textContent = `${event.target.parentNode.firstChild.textContent} Deleted`
revealMessage()
}

function crossOffMoive (event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} Watched`
    } else {
        message.textContent = `${event.target.textContent} added Back`

    }
revealMessage()
}

function revealMessage () {
 setTimeout(() => message.classList.add('hide'), 1000)
 
}