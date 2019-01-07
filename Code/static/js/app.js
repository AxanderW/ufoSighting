// Get references to the tbody element and datatable
var tableData = data;

var table = d3.select("table");

//var cityInput = d3.select("#city").property("value");
//var countryInput = d3.select("#country").property("value");
// Select the submit filter button
var searchFilter = d3.select("#filter-btn");
var resetTable = d3.select("#reset-btn");
/*********************************************
 * Render table
*/
function createTable(tableContent)
{
    var tbody = d3.select("tbody");
   d3.select("tbody").html("");
   for (var i=0; i < tableContent.length; i++){
       tr = tbody.append("tr");
       tr.append("td").text(tableContent[i].datetime);
       tr.append("td").text(tableContent[i].city);
       tr.append("td").text(tableContent[i].state.toUpperCase());
       tr.append("td").text(tableContent[i].country.toUpperCase());
       tr.append("td").text(tableContent[i].shape);
       tr.append("td").text(tableContent[i].durationMinutes);
       tr.append("td").text(tableContent[i].comments);
   }; // end for statement

}; // end CreateTable

// Display unfiltered table when pg loads for first time
createTable(tableData);
/*******************************************
 * Start event handler function
 * ****************************************
*/
// Add event listener for searchFilter, call the SearchButtonClick function
searchFilter.on("click", handleSearchButtonClick);
resetTable.on("click", handleResetButtonClick);

// define the handleSearchButtonClick function
function handleSearchButtonClick()
{
    //prevent the page from refreshing
    d3.event.preventDefault();
    var filterData = tableData;
    // filter dataTime input
    var dateInput = d3.select("#datetime").property("value");
    var cityInput =  d3.select("#city").property("value");
    var stateInput =  d3.select("#state").property("value");
    var countryInput =  d3.select("#country").property("value");
    var shapeInput =  d3.select("#shape").property("value")
    
    if (dateInput){
        filterData = tableData.filter(data => data.datetime === dateInput);

    };

    if (cityInput){
        filterData = tableData.filter(data => data.city === cityInput);

    };

    if (stateInput){
        filterData = tableData.filter(data => data.state === countryInput.toString().toLowerCase());

    };
    

    if (countryInput){
        filterData = tableData.filter(data => data.country === countryInput.toString().toLowerCase());

    };

    if (shapeInput){
        filterData = tableData.filter(data => data.shape === shapeInput.toString().toLowerCase());

    };
    
    
    
    // generate table with filtered data
    createTable(filterData);
}; // end handleSearchButtonClick

// define the handleResetButtonClick function
function handleResetButtonClick(){
    createTable(tableData);

}


