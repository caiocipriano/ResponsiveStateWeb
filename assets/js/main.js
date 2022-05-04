function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY>=30)header.classList.add('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


