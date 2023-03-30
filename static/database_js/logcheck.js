function check_user(){
    let mobile_number = document.getElementById('number_collect').value
    let url=`https://script.google.com/macros/s/AKfycbxMt_Kdlb27mqtUejOQX21Z2jODtU4oslvFfDXXGnbU0xEXSTEOaaxkv6uokUyiSlNB/exec?number=${mobile_number}`
    
    async function getUser(){
        let response = await fetch(url)
        response = await response.json()
        let results = response['user_data'][0]
    // console.log(results.number)
    console.log(mobile_number,results.number)
    await function work(){
        if(results.number==mobile_number){
            // allow to enter password
            document.getElementById('password_collect').classList.remove('hidden')
            document.getElementById('number_collect').classList.add('hidden')
            document.getElementById('while_number_input').classList.add('hidden')
            document.getElementById('while_password_input').classList.remove('hidden')
            console.log('d1')
        }
        else{
            // change the dom for the new user
            document.getElementById('login').classList.add('hidden')
            document.getElementById('sign_up').classList.remove('hidden')
            
            console.log('d2')
        }
        
    }
    } 
    work()
    getUser()
}
check_user()