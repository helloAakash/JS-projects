const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes )

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight/4*3
    console.log('this is triggerBottom',triggerBottom)

    boxes.forEach(box=>{
        const boxTop=box.getBoundingClientRect().top
        console.log('this is boxTop',boxTop)

        if(boxTop<triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}