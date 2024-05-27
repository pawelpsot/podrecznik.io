document.addEventListener('DOMContentLoaded', function() { 
// Funkcja do filtrowania nawigacji
    function filterNavigation() {
        const query = document.getElementById('search').value.toLowerCase();
        const links = document.querySelectorAll('#navigation a');
        if (query.length >= 3) {
            links.forEach(link => {
                const text = link.textContent.toLowerCase();
                if (text.includes(query)) {
                    link.parentElement.style.display = 'list-item';
                    link.closest('ul').style.display = 'block';
                } else {
                    link.parentElement.style.display = 'none';
                }
            });
            document.querySelectorAll('#navigation h2').forEach(h2 => h2.style.display = 'block'); // Pokaż wszystkie sekcje nawigacji
        } else {
            links.forEach(link => link.parentElement.style.display = 'list-item'); // Pokaż wszystkie linki
            document.querySelectorAll('#navigation h2').forEach(h2 => h2.style.display = 'block'); // Pokaż wszystkie sekcje nawigacji
            document.querySelectorAll('#navigation ul').forEach(ul => ul.style.display = 'none'); // Ukryj wszystkie listy
        }
    }

    // Dodanie obsługi zdarzeń dla pola wyszukiwania
    document.getElementById('search').addEventListener('input', filterNavigation);
    document.getElementById('search').addEventListener('change', filterNavigation);
});