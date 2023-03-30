// items - container
const container = document.getElementById('product-control')

// btns
let add = document.getElementsByClassName('add_price')
let reduce = document.getElementsByClassName('min_price')
let del_items = document.getElementsByClassName('del-items')
// main pricce
let main = document.getElementById('main-price')

//item holder
let product = document.getElementsByClassName('products')
// input_tags

let ProductPrice = document.getElementsByClassName('product-price')
let ppp = document.getElementsByClassName('ppp')
let Quantity = document.getElementsByClassName('product-quantity')



// price adjust
Array.from(add).forEach((element, index) => {
    element.addEventListener('click', () => {
        let Quantity_data = parseInt(Quantity[index].value) + 1;
        ppp[index].value = parseFloat(ProductPrice[index].value) * Quantity_data
        Quantity[index].value = Quantity_data
        data = 0
        Array.from(ppp).forEach(element => {
            data = data + parseFloat(element.value)
        })
        main.value = parseFloat(data).toFixed(2)

    })

});
Array.from(reduce).forEach((element, index) => {
    element.addEventListener('click', () => {
        let Quantity_data = parseInt(Quantity[index].value) - 1;
        if (Quantity_data >= 0) {

            ppp[index].value = parseFloat(ProductPrice[index].value) * Quantity_data
            Quantity[index].value = Quantity_data
            data = 0
            Array.from(ppp).forEach(element => {
                data = data + parseFloat(element.value)

            })
            main.value = parseFloat(data).toFixed(2)
        }
    })

});


