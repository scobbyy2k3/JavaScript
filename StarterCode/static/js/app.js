

// // YOUR CODE HERE!

var tableData = data;

// Get a reference to the table body
var tbody = d3.select("#tbody");


var filterBtn = d3.select("#filter-btn");


var inputField = d3.select("#datetime");

var submit = d3.select("#filter-btn"); 

// Select the input element and get the raw HTML node.
var inputDate = d3.select("#datetime");


function loadTableData(dataRows) {
  // console.log('In Load Table Data');
  document.getElementById('table-content').innerHTML="";
  
  // tbody.html("");
  d3.select("tbody")
  
    .selectAll("tr")
  
    .data(dataRows)
  
    .enter()
  
    .append("tr")
  
    .html(function(d) {
  
      return `<td>${d.datetime}</td> <td>${d.city}</td> <td>${d.state}</td> <td>${d.country}</td>
  
              <td>${d.shape}</td> <td>${d.durationMinutes}</td> <td>${d.comments}</td>     `;
  
    });
  
   
  }

loadTableData(tableData);



submit.on("click", function() {

  //To prevent the page from refreshing
  d3.event.preventDefault();

  //  value property of the input element
  var inputValue = inputDate.property("value");
  console.log("checksubmit1")
  console.log(inputValue);
  console.log("checksubmit2")

  r
  if (inputValue) {
  var filterdata = tableData.filter(onerec => onerec.datetime === inputValue);}
  console.log('Filtering Data');
  console.log(filterdata);
 
  //  UFO Table with the filtered subset of UFO Sighting data
  
  tbody.html("");
  loadTableData(filterdata);
});

// loadTableData(tableData);