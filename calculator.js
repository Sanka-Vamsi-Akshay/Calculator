var screen = document.querySelector(".screen")
var buttons = document.querySelectorAll("button")
var theme = document.querySelector("#theme")
var mode = document.querySelector('#mode')
var container = document.querySelector('#container')

theme.addEventListener('click', () => {
    if (mode.className==='dark'){
        mode.className='light'
        theme.innerHTML='<i class="ri-sun-fill"></i>'
        container.className='container'
    }
    else{
        mode.className='dark'
        theme.innerHTML='<i class="ri-moon-fill"></i>'
        container.className='dark-container'
    }
})

buttons.forEach((btn,idx) => {
    btn.addEventListener('click', () => {
        if(btn.innerHTML==='='){
            let result = eval(screen.innerHTML)
            screen.innerHTML=result
        }else if(btn.innerHTML==='AC'){
            screen.innerHTML='0'
        }else if(screen.innerHTML==='0'){
            screen.innerHTML=btn.innerHTML
        }else{
            screen.innerHTML+=btn.innerHTML
        }
    })
})