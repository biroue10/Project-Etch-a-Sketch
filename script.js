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
    element.addEventListener('mousemove', (element)=>{
        element.target.classList.add('background')
    })
})

const effacer = document.querySelectorAll('button')
for(const el of effacer){
    el.addEventListener('click', (element)=>{
        if(element.target.textContent==='Clear/Reset'){
            const couleur = document.querySelectorAll('.background')
            for(const el of couleur){
                el.classList.toggle('background')
            }
        }
    })
}

