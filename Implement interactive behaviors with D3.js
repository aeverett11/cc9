// Function to initialize the page and create data points
function initializePage() {
    // Sample data
    const data = [1, 2, 3, 4, 5];

    // Select the chart container
    const chart = d3.select('#chart');

    // Create div elements for each data point
    chart.selectAll('.data-point')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'data-point')
        // Add event listeners for mouseover and mouseout
        .on('mouseover', function() {
            d3.select(this)
                .style('background-color', 'orange');
        })
        .on('mouseout', function() {
            d3.select(this)
                .style('background-color', 'steelblue');
        });
}

// Ensure the DOM is fully loaded before initializing the page
document.addEventListener('DOMContentLoaded', initializePage);
