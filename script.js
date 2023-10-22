// change navbar styles on scroll 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 10)
})




// FAQS 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i')
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"; 
        } else {
            icon.className = "uil uil-plus";
        }
    })
})

// MENU BAR 

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu 

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

// CURRICULUM
function openCurri(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("curriculum");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


//FAQ
  function toggleAnswer(index) {
    var answer = document.getElementById('answer-' + index);
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}