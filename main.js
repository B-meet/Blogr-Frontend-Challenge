// For navigation drop-down

let navDropdown = document.querySelector(".nav-left");

let ourLinks = document.querySelectorAll(".same-nav");

navDropdown.addEventListener("click", function(e){
    ourLinks.forEach(link => {
        if(e.target == link){
            link.classList.toggle("active"); //hover styling stays consistant after click 
            link.querySelector(".fas").classList.toggle("fa-chevron-up"); // arrow styles
            console.log(link.nextElementSibling.classList.toggle("visible")) // drop-down content
        }
    }); 
});

//toggle hamburger to close mark and opening and close the menu accordingly
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", (e) => {
    let attribute = hamburger.getAttribute("src");
    let navigationPanel = document.querySelector(".nav-wrap")

        if(attribute == "images/icon-hamburger.svg"){
            hamburger.setAttribute("src","images/icon-close.svg")
            navigationPanel.style.display = "grid"
        }else{
            hamburger.setAttribute("src", "images/icon-hamburger.svg")
            navigationPanel.style.display = "none";
        }
});
