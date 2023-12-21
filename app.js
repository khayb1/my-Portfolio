const toggleBtn = document.querySelector('.toggle');
const inputEl = document.querySelector(".input");

// dark mode animation 

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
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));