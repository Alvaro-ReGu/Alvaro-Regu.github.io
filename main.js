const navBar = () => {
    const burg = document.querySelector('.burg');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelector('.menu a');
    const res_button = document.querySelector('.down_button');


    //toggle the burg button
    burg.addEventListener('click', function () {
        this.classList.toggle("is-active");
        nav.classList.toggle("is-active");
    });

    res_button.addEventListener('click', function (){
        this.classList.toggle("download-active");
    })

    //animate links
    //navLinks.forEach((link, index) => {
     //   if (link.style.animation){
      //      link.style.animation = '';
       // } else {
        //    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.25}s`;
        //}   
    //});
    //burger animation
    burg.classList.toggle('toggle');
}

navBar();