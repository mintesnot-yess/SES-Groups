
var currentIndex = 0;

let NavigationBar = document.querySelector(".nav");
let footer = document.querySelector("footer");

let currentDate = new Date().getFullYear();
let footerContent = `<div class="footer-container">
                <div class="footer-section">
                    <h3>About Us</h3>
                    <p>
                        We are a team of dedicated professionals committed to providing exceptional engineering services
                    </p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="service.html">Services</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-icons">
                        <a href="#" title="Facebook">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" title="Twitter">
                            <i class="fa-brands fa-x"></i>
                        </a>
                        <a href="#" title="Instagram">
                            <i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <p>&copy; ${currentDate} SES. All Rights Reserved.</p>`;


footer.innerHTML = footerContent;










function NavToggle() {
    let NavMenu = document.querySelector(".menu");
    let barMenuBTN = document.querySelector(".bars");
    if (NavMenu.style.display === "flex") {
        barMenuBTN.classList.remove("fa-times");
        barMenuBTN.classList.add("fa-bars");
        NavMenu.style.top = "0";
        NavMenu.style.opacity = "0";
        setTimeout(() => {
            NavMenu.style.display = "none";
        }, 300);
    } else {
        NavMenu.style.display = "flex";
        NavMenu.style.top = "58px";
        barMenuBTN.classList.add("fa-times");
        barMenuBTN.classList.remove("fa-bars");
        NavMenu.style.opacity = "1";
    }
}