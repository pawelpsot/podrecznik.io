document.addEventListener('DOMContentLoaded', function() { 
    function toggleSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.style.display = section.style.display === 'block' ? 'none' : 'block';
    }
});