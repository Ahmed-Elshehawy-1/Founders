let messageButton = document.querySelector(".message");
let UpButton = document.querySelector(".up");
let sections = document.querySelectorAll('section');
window.onscroll = function() {
    // Scroll-to-top button logic
    if (window.scrollY >= 500) {
        UpButton?.classList.add("appeared");
        messageButton?.classList.add("appeared");
    } else {
        UpButton?.classList.remove("appeared");
        messageButton?.classList.remove("appeared");
    }

    // Animation logic
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;
        let height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
};

// Scroll to top
UpButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Navbar
const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function() {
    links.classList.toggle("show_nav");
});

// Dropdown menu
const dropbtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

dropbtn.onclick = function(e) {
    console.log("...");
    dropdownContent.classList.toggle("block");
};

// Close dropdown when clicking anywhere else
document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("dropbtn")) {
        dropdownContent.classList.remove("block");
    }
});

// Message and up view
