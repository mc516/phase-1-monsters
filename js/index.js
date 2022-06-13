document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/monsters')
    .then(res => res.json())

    let createBtn = document.querySelector('button')
    createBtn.addEventListener('click', () => {
        console.log(createBtn)
    })
    
})