
let socket = io()

socket.on('connect',()=>{
    document.getElementById('socketId').innerText = socket.id
})

function colorTheBox(color){
    document.querySelector('.'+color).style.backgroundColor = color
    setTimeout(()=>{
        document.querySelector('.'+color).style.backgroundColor = null
    },5000)     
}

document.getElementById('colorApply').onclick=function(){
   const color = document.getElementById('selectColor').value
    colorTheBox(color)
}