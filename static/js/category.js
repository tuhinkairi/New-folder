const btn = document.getElementById('category-btn')
const datacontainer = document.getElementById('short-category')
let state = true
datacontainer.style.transition = "1s"
btn.addEventListener('click', ()=>{
    if(state){
        datacontainer.style.transform="translate(0vw)"
      
        state=false 
        
    }
    else{
        datacontainer.style.transform = "translateX(-100vw)"
        state = true
    }
})
    
datacontainer.addEventListener('mouseleave',()=>{
    if(!state){
            state=true
    datacontainer.style.transform = "translateX(-100vw)"

    }
})    
