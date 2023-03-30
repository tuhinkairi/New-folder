const extra_container = document.getElementById('extra_category')
const items_holder = document.getElementById('items-holder')

let items = document.getElementsByClassName('cate-list')

Array.from(items).forEach(e => {
    e.addEventListener("mouseover", () => {
        extra_container.classList.remove('hidden')
    })
})
items_holder.addEventListener('mouseleave',()=>{
    extra_container.classList.add('hidden')
})
extra_container.addEventListener('mouseleave',()=>{
    extra_container.classList.add('hidden')

})