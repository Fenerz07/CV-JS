document.addEventListener("DOMContentLoaded", function() {
    var textElements = document.querySelectorAll('.headerlink');

    textElements.forEach(function(element) {
        element.addEventListener("mouseover", function() {
            element.classList.add('hover');
        });

        element.addEventListener("mouseout", function() {
            element.classList.remove('hover');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var smoothScrollLinks = document.querySelectorAll('.headerlink');

    smoothScrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href'); 
            var targetElement = document.querySelector(targetId); 

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function ScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}