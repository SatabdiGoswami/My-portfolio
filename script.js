let c = 1;
setInterval(()=>{
    document.getElementById(`C1${c}`).style.display = 'flex';
    c++
    if(c=== 8){c = 1}
},600)



function OpenContacts(){
    document.getElementById('Contacts').style.display = 'grid';
}
function CloseContacts(){
    document.getElementById('Contacts').style.display = 'none';
}






const Ball = document.getElementById('ball');
window.addEventListener('load',()=>{
    Ball.style.top = (window.innerHeight / 2) + 'px';
})
let P = false;
Ball.addEventListener('mousedown',()=>{
    P = true;
    Ball.style.cursor = 'grabbing';
    Ball.focus()
})
document.addEventListener('mousemove',(e)=>{
    if(P){
        move(e.clientX,e.clientY);
    }
})
Ball.addEventListener('mouseup',()=>{
    P = false;
    Ball.style.cursor = 'grab';
    // Ball.style.left = '0';
    // Ball.style.transform = 'translate(0,-50%)';
})

function move(x,y){
    Ball.style.top = `${y}px`;
    Ball.style.left = `${x}px`;
    Ball.style.transform = 'translate(-50%,-50%)'
}

Ball.addEventListener('focus',(e)=>{
    P = true;
})
Ball.addEventListener('Blur',(e)=>{
    P = false;
})






window.addEventListener('scroll',(e)=>{
    if(document.documentElement.scrollTop > 10 || document.body.scrollTop > 10){
        document.getElementById('ScrollUpBtn').style.display = 'block';
    }else{document.getElementById('ScrollUpBtn').style.display = 'none';}
})

let a = 0;
function Menu(){
    a++
    if(a % 2 != 0){
        document.getElementById('Menu').style.display = 'block';
    }else{
        document.getElementById('Menu').style.display = 'none';
    }
}
