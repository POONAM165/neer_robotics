// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to add animation when element is in viewport
  function animateOnScroll() {
    var contributors = document.querySelectorAll('.contributor');
    contributors.forEach(function(contributor) {
      if (isInViewport(contributor)) {
        contributor.classList.add('active');
      }
    });
  }
  
  // Event listener for scroll event
  window.addEventListener('scroll', animateOnScroll);
  // Initial animation check
  animateOnScroll();
  