const product_div = document.getElementById('items_container')

let limit = 10

async function products(limit_data) {
    console.log(limit_data)
    let url = `https://script.google.com/macros/s/AKfycbxXkYktl5xZwbixGaAWvSJbc9zSkZaN6bwiJX9CVN5Joxcm7-AgMhibyF0X4vf-nBjz/exec?limit=${limit_data}`
    let re = await fetch(url)
    let response = await re.json()
    let output = response['product']

    output.map(i => {
        // populate inner html

        let container = `<div
        class="max-w-[50%] sm:max-w-[300px] sm:m-1 rounded-md border border-[rgb(0,0,0,.2)] sm:px-2 text-gray-700 bg-white" style="height: auto;">
        <div class="w-full flex items-center pt-4 px-2 justify-end space-x-1 -mb-10 relative z-10">
            <span class="cursor-pointer material-symbols-outlined">
                add_shopping_cart
            </span><span class="cursor-pointer material-symbols-outlined">
                favorite
            </span>
        </div>
        <img class="rounded-md sm:py-2" src="${i['image_url']}" alt="card1">
        <section class="text-data pb-2 sm:pb-5 px-2 sm:px-5 space-y-2">
            <h1 class="text-gray-500 font-semibold w-fit h-[55px] capitalize sm:h-fit">${i['product_title']}</h1>
            <span class="flex items-center">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                    <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                    </path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                    <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                    </path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                    <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                    </path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                    <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                    </path>
                </svg>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                    <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                    </path>
                </svg>
                <span class="text-gray-400 ml-3">4 Reviews</span>
            </span>


            <h1><span class="font-semibold "> &#x20B9;${i['price']}</span><span
                    class="text-gray-500 line-through " style="margin-left: 3px;">1200</span><span
                    class="px-2 text-rose-500 float-right font-bold">42% off</span></h1>
        </section>
    </div>`
        product_div.insertAdjacentHTML('beforeend', container)
    })

}
products(limit)
function showData() {
    setTimeout(() => {
        limit = limit + 10
        products(limit)
    },3000)
}
window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement
    if (clientHeight + scrollTop >= scrollHeight) {
        console.log('bottom')
        showData();
    }
})
