const form = document.getElementById('form_send')
const url = 'https://script.google.com/macros/s/AKfycbyeRMhGTGhgwbOzdZinP78DEwwmDvH5064LJr5W3A2GXDQPcw0djLQ1GQ74f-bYB9pX/exec'

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let data = new FormData(form)
    async function send(){

        let response =  await fetch(url,{method:"POST",body:data})
        response = await response.text()
        console.log(response)

    }
    send()
})





