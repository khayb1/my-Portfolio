const toggleBtn = document.querySelector('.toggle');
const inputEl = document.querySelector(".input");



 toggleBtn.addEventListener('click', () => {
   updateBody();
 

 });

        
    function updateBody() {
    if (inputEl.checked) {
        document.documentElement.classList.toggle('dark-theme');
    } else {
        document.documentElement.classList.toggle('white-theme');
    }
  }
 


// scroll animation
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for (var i =0; i,reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;
        
        if (revealtop <windowheight - revealpoint){
            reveals[i].classList.add('active');

        }
        else{
            reveals[i].classList.remove('active');
        }
    }

}