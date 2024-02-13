const leftArr = document.querySelector('.leftarr');
const rightArr = document.querySelector('.rightarr');
const sliderImg = document.querySelectorAll('.slider-items');
let totalPosition = sliderImg.length;
let currentPosition = 0;


leftArr.addEventListener('click',()=>
{
    prev();
})

rightArr.addEventListener('click',()=>
{
    next();
})

function next()
{
     if(currentPosition == totalPosition-1)
     {
        currentPosition = 0;
     }
     else
        currentPosition++;

    changeImg();
}

function prev()
{
     if(currentPosition == 0)
     {
        currentPosition = totalPosition-1;
     }
     else
        currentPosition--;
 
    changeImg();
}

function changeImg()
{
    sliderImg.forEach((img)=>
    {
        img.classList.remove('active');
        img.classList.add('hidden')
    })
    sliderImg[currentPosition].classList.add('active');
}

setInterval(()=>{
    if(currentPosition == totalPosition-1)
    {
        currentPosition = 0;
    }
    else
        currentPosition++;

        changeImg();
},8000)