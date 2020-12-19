// from data.js
var tableData = data;
console.log(tableData.length);

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
var reset = d3.select("#reset-btn");
var filteredData = [];

// When the user presses enter on the form
form.on("submit",runEnter);

// Filter for the data
// Function that will keep the form value saved.
// This is incase the user presses enter on the form. The webpage will not refresh.
function runEnter() {
    d3.event.preventDefault();

    // Takes the input of the form.
    var inputdate = d3.select("#datetime");
    var inputDate = inputdate.property("value");

    // The city
    var inputcity = d3.select("#city");
    var inputCity = inputcity.property("value").toLowerCase();

    // The state
    var inputstate = d3.select("#state");
    var inputState = inputstate.property("value").toLowerCase();

    // The country
    var inputcountry = d3.select("#country");
    var inputCountry = inputcountry.property("value").toLowerCase();

    // The shape
    var inputshape = d3.select("#shape");
    var inputShape = inputshape.property("value").toLowerCase();
    
    // Check to see if the value is correct.
    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);

    // Filter for the data
    // The filter will go through each form
    // If the form is null, it will skip that filter.
    if(!inputDate){
        var filteredDate = tableData;
    }
    else{
        var filteredDate = tableData.filter(alien => alien.datetime === inputDate);
    }
    
    if (!inputCity){
        var filteredCity = filteredDate;
    }
    else{
        var filteredCity = filteredDate.filter(alien => alien.city === inputCity);
    }

    if (!inputState){
        var filteredState = filteredCity;
    }
    else{
        var filteredState = filteredCity.filter(alien => alien.state === inputState);
    }

    if (!inputCountry){
        var filteredCountry = filteredState;
    }
    else{
        var filteredCountry = filteredState.filter(alien => alien.country === inputCountry);
    }

    if (!inputShape){
        var filteredShape = filteredCountry;
    }
    else{
        var filteredShape = filteredCountry.filter(alien => alien.shape === inputShape);
    }

    // Once the filter is done, it is ready to be shown.
    filteredData = filteredShape;
    console.log(filteredData);
};

// When the user inputs and selects outside the form.
form.on("change",runChange);

// Function that will keep the form value saved.
// The code in this block is the same as above.
function runChange() {

    // Takes the input of the form.
    var inputdate = d3.select("#datetime");
    var inputDate = inputdate.property("value");

    var inputcity = d3.select("#city");
    var inputCity = inputcity.property("value").toLowerCase();

    var inputstate = d3.select("#state");
    var inputState = inputstate.property("value").toLowerCase();

    var inputcountry = d3.select("#country");
    var inputCountry = inputcountry.property("value").toLowerCase();

    var inputshape = d3.select("#shape");
    var inputShape = inputshape.property("value").toLowerCase();
    
    // Check to see if the value is correct.
    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);

    // Filter for the data
    if(!inputDate){
        var filteredDate = tableData;
    }
    else{
        var filteredDate = tableData.filter(alien => alien.datetime === inputDate);
    }
    
    if (!inputCity){
        var filteredCity = filteredDate;
    }
    else{
        var filteredCity = filteredDate.filter(alien => alien.city === inputCity);
    }

    if (!inputState){
        var filteredState = filteredCity;
    }
    else{
        var filteredState = filteredCity.filter(alien => alien.state === inputState);
    }

    if (!inputCountry){
        var filteredCountry = filteredState;
    }
    else{
        var filteredCountry = filteredState.filter(alien => alien.country === inputCountry);
    }

    if (!inputShape){
        var filteredShape = filteredCountry;
    }
    else{
        var filteredShape = filteredCountry.filter(alien => alien.shape === inputShape);
    }

    filteredData = filteredShape;
    console.log(filteredData);
};

// Button when clicked will show the filtered data.
button.on("click",runEntered);
function runEntered() {

    // Create a conditional to show data if it exists otherwise will not do anything.
    if(filteredData.length > 0){
        
        // Removes the table rows in the graph.
        tbody.selectAll("tr").remove();

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
    // If the table length is 0 or less than zero. The error message appears.
    else{
        tbody.selectAll("tr").remove();
        // This will be presented in the console.
        console.log("Invalid Query.");
    };
};

// For a table reset
reset.on("click",runReset);

// function to run
function runReset() {
    // remove the table
    tbody.selectAll("tr").remove();

    // Adds the table to the page.
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