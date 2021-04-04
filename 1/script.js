const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveCLasses()
        panel.classList.add('active');
    } )
})

function removeActiveCLasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}