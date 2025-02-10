/**
 * Project: Lab 3
 * Author: Vivek Panjabi
 * Description: Simplw website
 * Date Created: 10th feb 2025
 */
/* scripts/app.js */
document.addEventListener("DOMContentLoaded", function () {
    // Inject Home Page Text
    document.getElementById("homeText").textContent = "Explore our website to learn more about our offerings!";

    // Change Products link to Interests
    document.getElementById("productsLink").textContent = "Interests";

    // Add Human Resources link dynamically
    let hrNavItem = document.createElement("li");
    hrNavItem.className = "nav-item";
    let hrLink = document.createElement("a");
    hrLink.className = "nav-link";
    hrLink.href = "#";
    hrLink.innerHTML = '<i class="fas fa-users"></i> Human Resources';
    hrNavItem.appendChild(hrLink);
    document.querySelector(".navbar-nav").insertBefore(hrNavItem, document.querySelector(".nav-item:nth-child(4)"));

    // Add Footer Text with Current Year
    document.getElementById("footerText").textContent = `© ${new Date().getFullYear()} My Website. All rights reserved.`;
});