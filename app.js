const Card1 = document.querySelector('.card')
 const Card2 = document.querySelector('.card2')
 const ratingNumbers = document.querySelectorAll('.Btn')
 const submitBtn =document.querySelector('#btn')
 let span = document.querySelector('.span')

 ratingNumbers.forEach(ratingNumber=>{
    
    ratingNumber.addEventListener('click',function(e){
        let ratings= e.target.textContent
        span.textContent=ratings
        ratingNumber.classList.remove('active')
        ratingNumber.classList.add('active')
    })
 })

submitBtn.addEventListener('click',function(){
    Card1.style.display='none'
    Card2.style.display='block'
})






















 