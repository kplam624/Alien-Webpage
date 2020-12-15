// from data.js
var tableData = data;
console.log(tableData.length)

// First connect the app to the html file.
var tbody = d3.select("tbody");

// Create a loop to append a row to the table. (<tr>)
for(var i = 0; i < 10; i++) {
    var row = tbody.append("tr");
    // Filled each cell with text.
    for(var j = 0; j < 7; j++){
        var cell = row.append("td");
        cell.text("Filled");
    };
};

tableData.forEach(function(aliens){
    var row = tbody.append("tr");

    Object.entries(aliens).forEach(function([key,value]){
        console.log(key,value)
    })
})