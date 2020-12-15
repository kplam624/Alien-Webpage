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
form.on("submit",runEnter);

function runEnter() {
    // d3.event.preventDefault();
    var inputdate = d3.select("#datetime");
    var inputData = inputdate.property("value");
    console.log(inputData);
};