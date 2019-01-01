// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
var table = d3.select("table");
//table.attr("class", "table table-striped");

// Console.log the UFO data from the data.js
console.log(data);

// Refractor to use Arrow functions
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key,value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });

});

// Filter code

var reports = data;

// Select the submit button

var submit = d3.select("#filter-btn");

// Listner event
submit.on("click", function(){
    
    //prevent the page from refreshing
    d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(reports);

  // Filter data

  var filterData = reports.filter(report => report.datetime === inputValue);

  console.log(filterData);

  // var filterValue = filterData.property("value");

  console.log(filterData);

 // d3.select("table").text(filterData);




});

// YOUR CODE HERE!
