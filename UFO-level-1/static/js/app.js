// from data.js
var tableData = data;

// YOUR CODE HERE!

const cells = document.getElementsByTagName('tbody');

var rowNames = ["datetime","city","state", "country", "shape", "durationMinutes", "comments"]

function createTable(tableData) {
    var tableBody = document.getElementsByTagName('tbody')[0]
  
    tableData.forEach(function(rowData) {
        var row = document.createElement('tr');
    
          rowNames.forEach(function(d){
              var cell = document.createElement('td');
              cell.appendChild(document.createTextNode(rowData[d]));
              row.appendChild(cell);
  
          })
    
        tableBody.appendChild(row);
      });
  
  }


createTable(tableData)