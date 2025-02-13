const ctx = document.getElementById('rankingChart').getContext('2d');
        const rankingChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    'Chulalongkorn University',
                    'Mahidol University',
                    'Kasetsart University',
                    'Thammasat University',
                    'Chiang Mai University',
                    'Prince of Songkla University',
                    'King Mongkut\'s University of Technology Thonburi',
                    'King Mongkut\'s Institute of Technology Ladkrabang',
                    'Khon Kaen University',
                    'Burapha University',
                    'University of Phayao',
                    'Silpakorn University',
                    'Naresuan University',
                    'Mae Fah Luang University',
                    'Rajamangala University of Technology',
                    'Walailak University',
                    'Sripatum University',
                    'Bangkok University',
                    'Rangsit University',
                    'Assumption University'
                ],
                datasets: [{
                    label: 'Scores',
                    data: [95, 92, 88, 85, 80, 78, 75, 72, 70, 68, 65, 63, 61, 60, 58, 55, 53, 50, 48, 45],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(199, 199, 199, 0.6)',
                        'rgba(83, 102, 255, 0.6)',
                        'rgba(173, 216, 230, 0.6)',
                        'rgba(240, 128, 128, 0.6)',
                        'rgba(123, 104, 238, 0.6)',
                        'rgba(50, 205, 50, 0.6)',
                        'rgba(255, 182, 193, 0.6)',
                        'rgba(127, 255, 212, 0.6)',
                        'rgba(245, 222, 179, 0.6)',
                        'rgba(64, 224, 208, 0.6)',
                        'rgba(30, 144, 255, 0.6)',
                        'rgba(221, 160, 221, 0.6)',
                        'rgba(244, 164, 96, 0.6)',
                        'rgba(139, 69, 19, 0.6)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(199, 199, 199, 1)',
                        'rgba(83, 102, 255, 1)',
                        'rgba(173, 216, 230, 1)',
                        'rgba(240, 128, 128, 1)',
                        'rgba(123, 104, 238, 1)',
                        'rgba(50, 205, 50, 1)',
                        'rgba(255, 182, 193, 1)',
                        'rgba(127, 255, 212, 1)',
                        'rgba(245, 222, 179, 1)',
                        'rgba(64, 224, 208, 1)',
                        'rgba(30, 144, 255, 1)',
                        'rgba(221, 160, 221, 1)',
                        'rgba(244, 164, 96, 1)',
                        'rgba(139, 69, 19, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'University Rankings in Thailand'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        async function performSearch() {
            const query = document.getElementById('searchInput').value;
            const response = await fetch(`/search?query=${encodeURIComponent(query)}`);
            const data = await response.json();
            document.getElementById('resultText').innerText = data.result;
            document.getElementById('resultPopup').style.display = 'block';}