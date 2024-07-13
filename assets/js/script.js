let prevScroll = window.pageYOffset;

/**
 * Handles the visibility of the navigation header based on scroll direction.
 */
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const navHeader = document.getElementById("nav-header");

  if (prevScroll > currentScroll) {
    navHeader.style.top = "0";
  } else {
    navHeader.style.top = "-90px";
  }

  prevScroll = currentScroll;
});

/**
 * Adds a click event listener to each accordion header, toggling the visibility of the accordion body and updating the arrow icon.
 */
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const accordionBody = header.nextElementSibling;
    const isOpen = accordionBody.style.maxHeight;

    document.querySelectorAll(".accordion-body").forEach((body) => {
      if (body !== accordionBody) {
        body.style.maxHeight = null;
        body.classList.remove("fadeInUp");
        toggleCaret(body.previousElementSibling.querySelector(".arrow-view"), false);
      }
    });

    accordionBody.style.maxHeight = isOpen ? null : accordionBody.scrollHeight + "px";
    accordionBody.classList.toggle("fadeInUp", !isOpen);

    toggleCaret(header.querySelector(".arrow-view"), !isOpen);
  });
});

function toggleCaret(caret, isOpen) {
  caret.classList.toggle("fa-caret-up", isOpen);
  caret.classList.toggle("fa-caret-down", !isOpen);
}


document.getElementById("preferred-date").setAttribute("min", new Date().toISOString().split("T")[0]);