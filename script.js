
/* ==========================================
   NOIRÉ EPOXY SOLUTIONS
   Website interactions
========================================== */

// MOBILE NAVIGATION
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// WHATSAPP QUOTATION
function requestWhatsAppQuote(details = {}) {
    const phoneNumber = "60123456789"; // Replace with your business WhatsApp number

    const service = details.service || "Not selected";
    const colour = details.colour || "Not selected";
    const bathrooms = details.bathrooms || "Not specified";
    const customerName = details.name || "Not provided";
    const location = details.location || "Not provided";

    const message = [
        "Hello NOIRÉ Epoxy Solutions!",
        "",
        "I would like to request a quotation.",
        "",
        `Name: ${customerName}`,
        `Location: ${location}`,
        `Service: ${service}`,
        `Flake Colour: ${colour}`,
        `Number of Bathrooms: ${bathrooms}`,
        "",
        "Please let me know the next steps. Thank you!"
    ].join("\n");

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
}

// CONNECT QUOTATION BUTTONS
document.querySelectorAll(".quote-trigger").forEach(button => {
    button.addEventListener("click", () => {
        requestWhatsAppQuote();
    });
});

// FOOTER YEAR
const yearElement = document.querySelector("[data-year]");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// EPOXY COLOUR SELECTOR
document.addEventListener("DOMContentLoaded", () => {
    const colourButtons = document.querySelectorAll(".colour-option");
    const colourPreview = document.getElementById("colourPreview");
    const previewName = document.getElementById("colourPreviewName");
    const selectedName = document.getElementById("selectedColourName");

    colourButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const colour = button.dataset.colour;
            const image = button.dataset.image;

            if (!colourPreview || !colour || !image) return;

            // Update the large preview image
            colourPreview.style.backgroundImage = `url("${image}")`;
            colourPreview.style.backgroundSize = "cover";
            colourPreview.style.backgroundPosition = "center";

            // Update the selected colour name
            if (previewName) previewName.textContent = colour;
            if (selectedName) selectedName.textContent = colour;

            // Highlight the selected button
            colourButtons.forEach((item) => {
                item.classList.remove("selected");
            });
            button.classList.add("selected");
        });
    });

    // Load the initially selected colour
    const initialButton = document.querySelector(".colour-option.selected");
    if (initialButton) initialButton.click();
});

document.querySelectorAll(".whatsapp-contact").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        const number = this.dataset.number;
        const colour =
            document.getElementById("selectedColourName")?.textContent.trim()
            || "Not selected";

        const message =
            `Hello NOIRÉ EPOXY SOLUTIONS, I would like to request a quotation.\n\n` +
            `Selected epoxy colour: ${colour}\n\n` +
            `I can send my bathroom measurements and site photos here.`;

        const whatsappURL =
            `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    });
});
