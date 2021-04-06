// from data.js
var tableData = data;

// YOUR CODE HERE!

var rowNames = ["datetime","city","state", "country", "shape", "durationMinutes", "comments"]

function createTable(tableData, date ) {
    var tableBody = document.getElementsByTagName('tbody')[0]
    tableBody.innerHTML = ''; 
    tableData.forEach(function(rowData) {
      
        var row = document.createElement('tr');
        
        if (date === "" || rowData["datetime"] === date) {
            rowNames.forEach(function(d){

                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(rowData[d]));
                row.appendChild(cell);
    
            })
      
          tableBody.appendChild(row);

        }

      });
 

  
  }

createTable(tableData, "")


const input = document.querySelector('input');

input.addEventListener('change', updateValue);

function updateValue(e) {
    console.log(e)
    console.log(e.target.value)
    createTable(tableData, e.target.value )
  }

