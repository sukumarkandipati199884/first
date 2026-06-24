document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('enrollmentChart').getContext('2d');
    const enrollmentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Enrollments',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(255, 64, 129, 0.2)',
                borderColor: 'rgba(255, 64, 129, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});