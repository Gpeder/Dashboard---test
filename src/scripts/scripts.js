const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {

        data: [50, 70, 80, 65, 50, 75, 85, 77, 80, 70, 60, 70],
        backgroundColor: 'rgba(200, 200, 255, 0.3)',
        borderRadius: 10,
        barPercentage: 1,
        categoryPercentage: 1
      },
      {

        data: [40, 60, 65, 59, 42, 58, 63, 60, 65, 59, 42, 58],
        backgroundColor: '#5932EA',
        borderRadius: 10,
        barPercentage: 0.6,
        categoryPercentage: 1
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        ticks: {
          padding: 5,
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0
        },
        grid: {
          display: false
        } 
      }
    }
  }
});

const context = document.getElementById('c-myChart');

        const data = {
            labels: ['Man', 'Woman'],
            datasets: [{
                label: 'My First Dataset',
                data: [65, 35],
                backgroundColor: ['#16c098', '#5932EA'],
                hoverOffset: 4
            }]
        };

        const config = {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };

        const myChart = new Chart(context, config);