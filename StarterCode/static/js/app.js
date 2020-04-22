// from data.js
var tableData = data;

// D3 to select HTML nodes, for each one it adds a table row with the table data 
function appendTable(data) {
    d3.select("tbody").html("");
    data.forEach((selection) => {
        var tableRow = d3.select("tbody").append("tr");
        Object.values(selection).forEach((value) => {
            var tableData = tableRow.append("td");
            tableData.text(value);
        });
    })
}
// show table with all relevant data 
appendTable(tableData);

// on click event, selects the user-input "datetime" information and filters the table, displaying the filtered values
function clickEvent() {
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var filterDateTime = tableData;
    if (date) {
        filterDateTime = filterDateTime.filter((row) => row.datetime === date);
    }
    appendTable(filterDateTime);
}
// on click event (button) filters the data 
d3.selectAll("#filter-btn").on("click", clickEvent);
