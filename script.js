document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
    item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
    });
    });
    });