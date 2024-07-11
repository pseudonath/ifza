/**
 * Adds a click event listener to each accordion header, toggling the visibility of the accordion body and updating the arrow icon.
 * @param {HTMLElement} header - The HTML element representing the accordion header.
 */
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const accordionBody = header.nextElementSibling;
    const isOpen = accordionBody.style.maxHeight;

    accordionBody.style.maxHeight = isOpen ? null : accordionBody.scrollHeight + "px";
    accordionBody.classList.toggle("fadeInUp", !isOpen);

    header.querySelector(".arrow-view").classList.toggle("fa-caret-up", !isOpen);
    header.querySelector(".arrow-view").classList.toggle("fa-caret-down", isOpen);
  });
});

document.getElementById("preferred-date").setAttribute("min", new Date().toISOString().split("T")[0]);