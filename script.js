
let likesEl = document.getElementById('likes-el')
let likesCount = 20


function addLike(){

    likesCount += 1
    likesEl.textContent = likesCount + " "

}