// from data.js
var tableData = data;
console.log(tableData.length)

// First connect the app to the html file.
var tbody = d3.select("tbody");

// Create a loop to append a row to the table. (<tr>)
tableData.forEach(function(aliens){
    var row = tbody.append("tr");

    // Created cells for the table
    Object.entries(aliens).forEach(function([key,value]){

        // Creating the cells and placing the values into the cell.
        var cell = row.append("td");
        cell.text(value);
    });
});

// Creating a filter for the search form.
var form = d3.select("form");
var button = d3.select("#filter-btn");
var filteredData = []
form.on("submit",runEnter);
// Filter for the data
// Function that will keep the form value saved.
function runEnter() {
    d3.event.preventDefault();

    // Takes the input of the form.
    var inputdate = d3.select("#datetime");
    var inputData = inputdate.property("value");
    
    // Check to see if the value is correct.
    console.log(inputData);

    // Filter for the data
    filteredData = tableData.filter(alien => alien.datetime === inputData);
    console.log(filteredData);
};

button.on("click",runEntered)
function runEntered() {
    // Create a conditional to show data if it exists otherwise will not do anything.
    if(filteredData.length > 0){

        // Removes the table rows in the graph.
        d3.selectAll("tr").remove();

        // Reads the filteredData array.
        filteredData.forEach(function(aliens){
            var row = tbody.append("tr");
        
            // Created cells for the table
            Object.entries(aliens).forEach(function([key,value]){
        
                // Creating the cells and placing the values into the cell.
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }
    else{
        console.log("Invalid Query.");
        tableData.forEach(function(aliens){
            var row = tbody.append("tr");
        
            // Created cells for the table
            Object.entries(aliens).forEach(function([key,value]){
        
                // Creating the cells and placing the values into the cell.
                var cell = row.append("td");
                cell.text(value);
            });
        });

    };
};

