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
    
        // Print out the values of the datatable to check for the correct values
        console.log(key,value);

        // Creating the cells and placing the values into the cell.
        var cell = row.append("td");
        cell.text(value);
    });
});
