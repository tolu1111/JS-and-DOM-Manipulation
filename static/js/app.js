// Populate the html table with the data information
var tableData = data;

var tbody = d3.select("tbody");

console.log(data);


data.forEach(function(ufoSightings) {
    console.log(data);
    var row = tbody.append("tr");

    Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value)

    });
});

//date/time search

// Filter code adapted from https://www.w3schools.com/howto/howto_js_filter_table.asp

function searchTable() { 
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datetime");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  