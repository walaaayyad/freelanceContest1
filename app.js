const fixedNavbar = document.querySelector('.fixed-top');

window.onscroll = ()=> {
    if(window.scrollY >= 70) {
        fixedNavbar.classList.add('scroll');
    } else {
        fixedNavbar.classList.remove('scroll');
    }
}

//--- filter ---
const btns= document.querySelectorAll('.news-btn');
const news= document.querySelectorAll('.new');

btns.forEach(btn=> {
    btn.addEventListener('click', (e)=> {
        e.preventDefault();
        const filter = e.target.dataset.filter;
        console.log(filter);
        news.forEach( i => {
            if(filter == "service") {
                i.style.display = 'block';
            } else {
                i.style.display = 'none';
            }
        })
    })
})