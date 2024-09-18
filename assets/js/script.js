// Select the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down 300px from the top
window.onscroll = function () {
     if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
          scrollToTopBtn.style.display = "block";
     } else {
          scrollToTopBtn.style.display = "none";
     }
};

// Smooth scroll to top when clicking the button
scrollToTopBtn.addEventListener("click", function () {
     window.scrollTo({
          top: 0,
          behavior: "smooth"
     });
});
