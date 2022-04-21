const panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeAllActiveClass(panels);
        panel.classList.add('active');
    })
})


function removeAllActiveClass(panels){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}
