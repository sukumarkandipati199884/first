document.addEventListener('DOMContentLoaded', () => {
    // Placeholder for chart initialization
    const salesChart = document.getElementById('sales-chart');
    const stockChart = document.getElementById('stock-chart');

    // Simulate chart rendering
    salesChart.innerHTML = '<p style="color: #ffffff; text-align: center; padding-top: 80px;">Sales Chart</p>';
    stockChart.innerHTML = '<p style="color: #ffffff; text-align: center; padding-top: 80px;">Stock Chart</p>';

    // Add smooth scroll for sidebar links
    document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});