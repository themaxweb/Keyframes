import { getRandomNum } from "../functions.js"

 let keyframesContainer = document.querySelector('.keyframes-container')
 let frameCounter = document.querySelector('.frame-counter')

    let  i = 0
    let start = Date.now()
    while(i < 100){
        let frame = document.createElement('div')
        frame.classList.add('frame')
        frame.id = i+1
        frame.style = `height:${getRandomNum(20,50)}px`
        keyframesContainer.appendChild(frame)
        i++
    }

    let frames = document.querySelectorAll('.frame')

    frameCounter.style.left = counterX(frames[0])
    frameCounter.style.top = counterY(frames[0])

    frames.forEach(function(frame){
        frame.addEventListener('click',function(event){
            frame.classList.add('inset')
            frameCounter.textContent = frame.id
            frameCounter.style.left = counterX(frame)
            frameCounter.style.top = counterY(frame)
        })
    })

function counterX(fr){
    return fr.offsetLeft - (frameCounter.clientWidth / 2) + 'px'
}

function counterY(fr){
    return fr.offsetTop - (frameCounter.clientHeight + 10) + 'px'
}

