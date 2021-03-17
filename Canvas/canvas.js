let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

// circle

/*
for (let i = 0; i < 3; i++) {

    let x = Math.random() * window.innerWidth
    let y = Math.random() * window.innerHeight

    c.beginPath()
    c.arc(x,y,30,0,Math.PI*2,false)
    c.strokeStyle = 'orange'
    c.stroke()

}
*/


let x = Math.random() * innerWidth
let y = Math.random() * innerHeight
let dx = (Math.random() - 0.5) * 3
let dy = (Math.random() - 0.5) * 3
let radius = 60
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)

    c.beginPath()

    c.arc( x, y, radius, 0,Math.PI*2,false)
    c.strokeStyle = 'orange'
    c.fillStyle = 'orange'
    c.fill()
    c.fillStyle = 'white'
    c.font = '20px verdana'    
    c.fillText("Click Me!", x - 45, y + 8)

    c.stroke()

    if(x + radius > innerWidth || x - radius < 0 ){
        dx = -dx
    }

    if(y + radius > innerHeight || y - radius < 0 ){
        dy = -dy
    }


    x += dx
    y += dy
}

animate()