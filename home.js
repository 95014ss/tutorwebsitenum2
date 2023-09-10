const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});


const animElements = document.querySelectorAll('.signupwords-writing');
const animElements2 = document.querySelectorAll('.writing1');
const animElements3 = document.querySelectorAll('.writing2');



animElements.forEach((el) => observer.observe(el));
animElements2.forEach((el) => observer.observe(el));
animElements3.forEach((el) => observer.observe(el));