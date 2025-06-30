const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check for saved user preference or use system preference
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
    body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}else{body.classList.add('light')}
// Toggle dark/light mode
darkModeToggle.addEventListener("change", function () {
    if (this.checked) {
        body.classList.add("dark-mode");
        paragrapg.innerText='dark mode on'
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark-mode");
        paragrapg.innerText='light mode on'
        localStorage.setItem("theme", "light");
    }
});

// Listen for system preference changes
prefersDarkScheme.addEventListener("change", (e) => {
    if (e.matches) {
        body.classList.add("dark-mode");
        darkModeToggle.checked = true;
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark-mode");
        darkModeToggle.checked = false;
        localStorage.setItem("theme", "light");
    }
});


const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const paragrapg = document.getElementById('p');


searchBtn.addEventListener('click',function(){
    searchBtn.style.display='none';
    searchInput.style.display='block';
    searchInput.focus();
});
searchInput.addEventListener('focusout',function(){
    searchInput.style.display='none';
    searchBtn.style.display='block';
    searchInput.value = ''; 
});


const mobileNavbarIcon = document.getElementById('mobile-navbar-icon');
const navBarMeu = document.getElementById('navBarMeu');

mobileNavbarIcon.addEventListener('click',e=>{
    mobileNavbarIcon.classList.toggle('active');
    navBarMeu.classList.toggle('active');
})

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileNavbarIcon.classList.remove('active');
            navBarMeu.classList.remove('active');
        });
});



const h1 = document.getElementById('h1').addEventListener('click',()=>{
    window.location.reload();
});












