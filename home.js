// Add this JavaScript code to your existing script file or a new one

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  document.getElementById(
    "pickupLocation"
  ).value = `(${latitude}, ${longitude})`;
}

document.addEventListener("DOMContentLoaded", function () {
  const sustainabilitySection = document.getElementById(
    "sustainability-metrics"
  );
  const pieChartContainer = document.getElementById("pieChartContainer");
  const barTableContainer = document.getElementById("barTableContainer");

  // Simulate loading delay
  setTimeout(() => {
    sustainabilitySection.classList.add("visible");
    pieChartContainer.classList.add("visible");
    barTableContainer.classList.add("visible");
    document.querySelector(".loading-overlay").style.display = "none";
  }, 2000);

  // Simulated data for pie chart
  const pieChartData = {
    labels: ["CO2 Emissions Reduced", "Remaining"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#52CC52", "#E0E0E0"],
        hoverBackgroundColor: ["#449944", "#B9B9B9"],
      },
    ],
  };

  // Create Pie Chart
  const pieChart = new Chart(
    document.getElementById("pieChart").getContext("2d"),
    {
      type: "doughnut",
      data: pieChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
      },
    }
  );
});
