const btn = document.getElementById('category-btn')
const datacontainer = document.getElementById('short-category')
const header_tag = document.getElementsByTagName('body')[0]
const footer_tag = document.getElementsByTagName('footer')[0]
let state = true
datacontainer.style.transition = "1s"
btn.addEventListener('click', ()=>{
    if(state){
        datacontainer.style.transform="translate(0vw)"
        datacontainer.classList.remove('absolute')
        header_tag.classList.replace('min-h-screen','max-h-screen')
        footer_tag.classList.replace('top-full','bottom-0')
        state=false 
        
    }
    else{
        datacontainer.style.transform = "translateX(-100vw)"
        datacontainer.classList.add('absolute')
        
        header_tag.classList.replace('max-h-screen','min-h-screen')
        footer_tag.classList.replace('bottom-0','top-full')
        state = true
    }
})

datacontainer.addEventListener('mouseleave',()=>{
    if(!state){
    datacontainer.classList.add('absolute')
    state=true
    
    header_tag.classList.replace('max-h-screen','min-h-screen')
    footer_tag.classList.replace('bottom-0','top-full')
    datacontainer.style.transform = "translateX(-100vw)"
    }
})    
