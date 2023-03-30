// cahnging all typeing contexts color
let alldata = document.getElementsByClassName('material-symbols-outlined')
let listofproducts = []
Array.from(alldata).forEach(element => {
    element.addEventListener('click',()=>{
        if(!element.classList.contains('text-rose-500')){
            element.classList.add('text-rose-500')
        }
        else{
            element.classList.remove('text-rose-500')

        }
    })
});