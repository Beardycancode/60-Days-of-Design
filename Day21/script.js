
for(let i=1; i<=60; i++)
{
    let box=document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
}


// add random color

let randomcolorblock=document.querySelectorAll('.box');

function addcolor()
{
    randomcolorblock.forEach(e => {
        e.style.background=randomcolor();
    })
}
function randomcolor(){
    let chars="1234567890abcdef";
    let colorlength=6;
    let color="";

    for(let i=1;i<=colorlength;i++){
        let randomcolors=Math.floor(Math.random() * chars.length);
        color+=chars.substring(randomcolors,randomcolors+1);
    }
    return "#"+color;
}
addcolor();

let boxes=document.querySelectorAll('.box');
function scrollTrigger()
{
    boxes.forEach(boxxx => 
        {
            if(boxxx.offsetTop <window.scrollY)
            {
                boxxx.classList.add('active');
            }
            else
            {
                boxxx.classList.remove('active');
            }
        })
}
window.addEventListener('scroll',scrollTrigger);
