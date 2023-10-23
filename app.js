let colors = ['red','green','voilet','purple','pink', 'orange','black','skyblue']
let spn = document.querySelector('span')
// console.log(rndm)


function bgHander(){
    let rndm = Math.floor(Math.random()*8)
    document.body.style.background = colors[rndm]
    spn.textContent = colors[rndm]
    // document.body.style.color = 'purple'
    document.body.style.color = 'white'
}