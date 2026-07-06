// ================================
// Sustainability ROI Website
// app.js
// ================================


// Welcome Button

function startProject(){

    alert("Welcome to Sustainability ROI Calculator!\n\nLet's start your ESG assessment.");

}


// ================================
// Sticky Navbar
// ================================

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background="#063a45";
        navbar.style.padding="10px 0";
        navbar.style.transition="0.3s";

    }

    else{

        navbar.style.background="#0f4c5c";
        navbar.style.padding="15px 0";

    }

});


// ================================
// Card Hover Animation
// ================================

const cards=document.querySelectorAll(
".kpi-card,.feature-card,.pillar-card,.testimonial"
);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// ================================
// Progress Bar Animation
// ================================

const progressBars=document.querySelectorAll(".progress-bar");

window.addEventListener("load",()=>{

progressBars.forEach(bar=>{

let width=bar.style.width;

bar.style.width="0";

setTimeout(()=>{

bar.style.width=width;

bar.style.transition="2s";

},300);

});

});


// ================================
// Simple Fade Animation
// ================================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

const elements=document.querySelectorAll(

".kpi-card,.feature-card,.pillar-card,.testimonial,.about-section"

);

elements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="0.8s";

observer.observe(el);

});


// ================================
// Footer Year
// ================================

const year=new Date().getFullYear();

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+year+" Sustainability ROI Calculator | Developed by Krishna";

}


// Why Cards Animation

const whyCards=document.querySelectorAll(".why-card");

whyCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});
