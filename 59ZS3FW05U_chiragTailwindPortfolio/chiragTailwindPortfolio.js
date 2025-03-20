document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded Successfully!");

    // ====== Navbar Scroll Effect ======
    const navbar = document.querySelector("nav");
    if (navbar) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 50) {
                navbar.classList.add("bg-gray-900", "shadow-lg");
            } else {
                navbar.classList.remove("bg-gray-900", "shadow-lg");
            }
        });
    }

    // ====== Smooth Scroll for Links ======
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust based on navbar height
                    behavior: "smooth"
                });
            }
        });
    });

    // ====== Reveal Elements on Scroll (Simple Fade-in) ======
    const sections = document.querySelectorAll(".fade-in");
    if (sections.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100", "translate-y-0");
                }
            });
        }, {
            threshold: 0.2
        });

        sections.forEach(section => {
            section.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
            observer.observe(section);
        });
    }

    // ====== Footer Icon Hover Effect ======
    const socialIcons = document.querySelectorAll("footer a");
    socialIcons.forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.style.transform = "scale(1.2)";
            icon.style.transition = "transform 0.3s ease-in-out";
        });

        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1)";
        });
    });

    // ====== Form Submission & Validation ======
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validation checks
            if (!name || !email || !message) {
                showError("All fields are required.");
                return;
            }
            if (!isValidEmail(email)) {
                showError("Please enter a valid email address.");
                return;
            }

            // Simulating form submission (Replace with actual API call if needed)
            setTimeout(() => {
                showSuccess("Your message has been sent successfully!");
                form.reset(); // Clear form after submission
            }, 1000);
        });

        // Email validation function
        function isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }

        // Show success message
        function showSuccess(message) {
            successMessage.textContent = message;
            successMessage.classList.remove("hidden");
            errorMessage.classList.add("hidden");
        }

        // Show error message
        function showError(message) {
            errorMessage.textContent = message;
            errorMessage.classList.remove("hidden");
            successMessage.classList.add("hidden");
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIcon = document.getElementById("menuIcon");

    mobileMenuBtn.addEventListener("click", function() {
        mobileMenu.classList.toggle("hidden");

        // Toggle between bars and close icon
        if (mobileMenu.classList.contains("hidden")) {
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        } else {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-times");
        }
    });
});