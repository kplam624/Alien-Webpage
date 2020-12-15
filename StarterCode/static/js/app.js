// from data.js
var tableData = data;

// First connect the app to the html file.
var tbody = d3.select("tbody");

// Create a loop to append a row to the table. (<tr>)
for(var i = 0; i < 10; i++) {
    var row = tbody.append("tr");
}

