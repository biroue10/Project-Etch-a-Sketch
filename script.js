const container = document.querySelector('.container')
for(let i=0;i<=15;i++){
    const div = document.createElement('div')
    div.classList.add('row')
    container.appendChild(div)
}
const row = document.querySelectorAll('.row')
row.forEach(function(element){
    for(let i=0;i<=15;i++){
        const div2 = document.createElement('div')
        div2.classList.add('item')
        element.appendChild(div2)
    }
})

const item = document.querySelectorAll('.item')
item.forEach(function(element){
    element.addEventListener('mouseover', (element)=>{
      element.target.classList.add('background')
    })
})


