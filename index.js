const rangeButton = document.querySelector('.range')
const sectioncontainer = document.querySelector('.section-container')
const button = document.querySelector('.button') 
const percentage = document.querySelector('.percentage')
let info
let discount = false

const amountPagesAndPrices = [
    {pageView :'10.000', price : 8 }, {pageView :'50.000', price : 12 },
    {pageView :'100.000', price : 16 }, {pageView :'500.000', price : 24 },
    {pageView :'1000.000', price : 36 }
]

rangeButton.addEventListener('change', (e) => {
    info = amountPagesAndPrices[e.target.value]
    render()
})


button.addEventListener('click', ({target}) => {
    percentage.classList.toggle('hidden')
    console.log(discount = !discount)
    if(discount){
        target.classList.remove('bi-toggle-on')
        target.classList.add('bi-toggle-off')
    }else{
        target.classList.remove('bi-toggle-off')
        target.classList.add('bi-toggle-on')
    }
       
    render()
})


function render(){
    sectioncontainer.innerHTML = ` 
        <p>${parseInt(info.pageView)}k Pageviews</p>
        <p>$${discount? calcDiscount(info.price)+'.00': info.price+'.00'} /month</p> `
}

function calcDiscount(price) {
    let newAmount = (price*25)/100
    return newAmount
}

document.addEventListener('DOMContentLoaded', () => {
    info = amountPagesAndPrices[ Math.floor(amountPagesAndPrices.length/2)]
    rangeButton.value = Math.floor(amountPagesAndPrices.length/2)
    render()
})
