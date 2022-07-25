let mobileMenu = document.querySelector('.without-mobile-menu')
let dropDownLists = document.querySelectorAll('.dropdown-list')
const mobileBtn = document.getElementById('mobile-menu')
const mobileBtnExit = document.getElementById('mobile-menu-exit')
let arrowsDown = document.querySelectorAll('#arrow-down')
let arrowsUp = document.querySelectorAll('#arrow-up')
let dropDown = document.querySelectorAll('ul')
let body = document.querySelector('body')
let arrowDown,arrowUp
mobileNavigation()
featureSubList()
companySubList()
function mobileNavigation(){
    mobileBtn.addEventListener('click',()=>{
        mobileBtnExit.style.display = 'block' 
        mobileBtn.style.display= 'none'
        mobileMenu.style.display = 'block'
        body.style.background =  '#232222b8'
    })
    mobileBtnExit.addEventListener('click',()=>{
        mobileBtn.style.display= 'block'
        mobileBtnExit.style.display= 'none'
        mobileMenu.style.display = 'none'
        body.style.backgroundColor =  'white'

    })
}
function featureSubList(){
    arrowsDown[0].addEventListener('click',()=>{
        arrowsDown[0].style.display = 'none'
        arrowsUp[0].style.display = 'block'
        dropDownLists[0].style.display = 'block'
    })
    arrowsUp[0].addEventListener('click',()=>{
        arrowsDown[0].style.display = 'block'
        arrowsUp[0].style.display = 'none'
        dropDownLists[0].style.display = 'none'

    })
    
}
function companySubList(){
    arrowsDown[1].addEventListener('click',()=>{
        arrowsDown[1].style.display = 'none'
        arrowsUp[1].style.display = 'block'
        dropDownLists[1].style.display = 'block'

    })
    arrowsUp[1].addEventListener('click',()=>{
        arrowsDown[1].style.display = 'block'
        arrowsUp[1].style.display = 'none'
        dropDownLists[1].style.display = 'none'
    })
}

// arrowsDown.forEach((arrowDown)=>{
//     arrowDown.addEventListener('click',()=>{
//         arrowDown.style.display = 'none'
//         console.log('working')
//         mobileMenu.style.display = 'flex'
//         // dropDown.style.display = 'block'    
//     })
// })
// arrowsUp.forEach((arrowUp)=>{
//     arrowUp.addEventListener('click',()=>{
//         arrowUp.style.display = 'none'
//         arrowsDown[1].style.display = 'block'
//         // dropDown.style.display = 'block'    
//     })
// })
