// BACK TO TOP

function scrollToTop(){
    window.scrollTo(0,0);
}


var backTop = document.querySelector('.back-top');
// THANH TRƯỢT

var header = document.querySelector('.header');
var scrollLogo = document.querySelector('.scroll-logo');

var left = document.querySelector('.left-right');
var right = document.querySelector('.right-left');




document.addEventListener('DOMContentLoaded', ()=> {
   const valueScroll = document.querySelector('.scroll-top');
    document.addEventListener('scroll',() => {
    
        // thanh trượt
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const percentage = Math.floor(scrollTop / (scrollHeight - clientHeight) * 100);
        valueScroll.style.width = percentage +'%';
        console.log(scrollTop);
        
        
        // đổi màu background header
        if(percentage >= 1) {

            header.classList.add('scroll-header');
            scrollLogo.classList.add('scroll-logo-change');
            backTop.style.display='block';
            

        }
        else {
            header.classList.remove('scroll-header');
            scrollLogo.classList.remove('scroll-logo-change');
            backTop.style.display='none';

        }


        // animation slide

        if(2400<=scrollTop && scrollTop <= 3300 ){
            left.classList.add('start');
            right.classList.add('start');
        }
        else {
            left.classList.remove('start');
            right.classList.remove('start');
        }

       

    })
})


// CHUYỂN SLIDE











