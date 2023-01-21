const faders=document.querySelectorAll(".fade-in")
console.log(faders)
let menu=document.querySelector('.header .menu ');

document.querySelector('#menu-btn').onclick = () =>{
    menu.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('active');
 }
 
 document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () =>{
       if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
    };
 });
 
 document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images =>{
    images.onclick = () =>{
       src = images.getAttribute('src');
       document.querySelector('.view-property .details .thumb .big-image img').src = src;
    }
 });
 
 document.querySelectorAll('.faq .box-container .box h3').forEach(headings =>{
    headings.onclick = () =>{
       headings.parentElement.classList.toggle('active');
    }
 });

const appearOptions={
   threshold:0.3,
};

const appearOnScroll=new IntersectionObserver
(function(entries,appearOnScroll) {
  entries.forEach(entry=>{
   if (!entry.isIntersecting) {
      return;
   }else{
     entry.target.classList.add('appear');
     appearOnScroll.unobserve(entry.target);
   }
  }) 
},
appearOptions);

faders.forEach(fader=>{
   appearOnScroll.observe(fader);
})

document.querySelectorAll(".carousel").forEach(carousel => {
   
   let activeSlide = 0

   const items = carousel.querySelectorAll (".carousel__item");
   const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel__button"></span>`;
   });
  
   carousel.insertAdjacentHTML("beforeend",`
      <div class="carousel__nav">
         ${buttonsHtml.join("")} 
      </div>
   `);
  
   const buttons = carousel.querySelectorAll(".carousel__button");
  

  buttons.forEach((button, i) =>{
   button.addEventListener("click", () => {
         activeSlide = i
         //un-select all the items
         items.forEach(item => item.classList.remove("carousel__item--selected"));
         buttons.forEach(button => button.classList.remove("carousel__button--selected"));

         items[i].classList.add("carousel__item--selected");
         button.classList.add("carousel__button--selected");
         });
      });
  

      items[activeSlide].classList.add("carousel__item--selected");
      buttons[activeSlide].classList.add("carousel__button--selected");

      setInterval (() => {
         
         items[activeSlide].classList.remove("carousel__item--selected");
         buttons[activeSlide].classList.remove("carousel__button--selected");

         if (activeSlide === items.length - 1) {
            activeSlide = 0
         } else {
            activeSlide++
         }
         
         items[activeSlide].classList.add("carousel__item--selected");
         buttons[activeSlide].classList.add("carousel__button--selected");
        }, 6000)
   //Select the first item on page load
  });
